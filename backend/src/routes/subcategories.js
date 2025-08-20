const express = require('express');
const { body, validationResult } = require('express-validator');
const Subcategory = require('../models/Subcategory');
const { auth, adminOnly } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// @route   GET /api/subcategories
// @desc    Get all subcategories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const subcategories = await Subcategory.find()
      .populate('categoryId', 'name');

    res.json({
      success: true,
      data: { subcategories }
    });
  } catch (error) {
    console.error('Get subcategories error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while fetching subcategories' 
    });
  }
});

// @route   GET /api/subcategories/:id
// @desc    Get single subcategory
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id)
      .populate('categoryId', 'name description image');

    if (!subcategory) {
      return res.status(404).json({ 
        success: false,
        message: 'Subcategory not found' 
      });
    }

    res.json({
      success: true,
      data: { subcategory }
    });
  } catch (error) {
    console.error('Get subcategory error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while fetching subcategory' 
    });
  }
});

// @route   POST /api/subcategories
// @desc    Create new subcategory
// @access  Private (Admin only)
router.post('/', auth, adminOnly, upload.single('image'), [
  body('name').trim().isLength({ min: 1, max: 50 }),
  body('description').trim().isLength({ min: 1, max: 500 }),
  body('categoryId').isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Subcategory image is required' 
      });
    }

    const subcategoryData = {
      ...req.body,
      image: `/uploads/${req.file.filename}`
    };

    const subcategory = new Subcategory(subcategoryData);
    await subcategory.save();

    const populatedSubcategory = await Subcategory.findById(subcategory._id)
      .populate('categoryId', 'name');

    res.status(201).json({
      success: true,
      message: 'Subcategory created successfully',
      data: { subcategory: populatedSubcategory }
    });
  } catch (error) {
    console.error('Create subcategory error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while creating subcategory' 
    });
  }
});

// @route   PUT /api/subcategories/:id
// @desc    Update subcategory
// @access  Private (Admin only)
router.put('/:id', auth, adminOnly, upload.single('image'), [
  body('name').optional().trim().isLength({ min: 1, max: 50 }),
  body('description').optional().trim().isLength({ min: 1, max: 500 }),
  body('categoryId').optional().isMongoId()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ 
        success: false,
        message: 'Subcategory not found' 
      });
    }

    const updateData = { ...req.body };
    
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedSubcategory = await Subcategory.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('categoryId', 'name');

    res.json({
      success: true,
      message: 'Subcategory updated successfully',
      data: { subcategory: updatedSubcategory }
    });
  } catch (error) {
    console.error('Update subcategory error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while updating subcategory' 
    });
  }
});

// @route   DELETE /api/subcategories/:id
// @desc    Delete subcategory
// @access  Private (Admin only)
router.delete('/:id', auth, adminOnly, async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    
    if (!subcategory) {
      return res.status(404).json({ 
        success: false,
        message: 'Subcategory not found' 
      });
    }

    // Check if subcategory has products
    const Product = require('../models/Product');
    const productsCount = await Product.countDocuments({ subcategory: req.params.id });

    if (productsCount > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete subcategory with existing products'
      });
    }

    await Subcategory.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Subcategory deleted successfully'
    });
  } catch (error) {
    console.error('Delete subcategory error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error while deleting subcategory' 
    });
  }
});

module.exports = router;