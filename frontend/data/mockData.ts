import { Category, Product } from "@/types/products";

// Categories
export const categories: Category[] = [
  {
    id: "power-tools",
    name: "Power Tools",
    description:
      "Professional-grade power tools for construction, woodworking, and heavy-duty tasks.",
    image: "/images/category-power-tools.jpg",
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    description:
      "High-quality hand tools for precision work, including hammers, screwdrivers, pliers, and more.",
    image: "/images/category-hand-tools.jpg",
  },
  {
    id: "safety-equipment",
    name: "Safety Equipment",
    description:
      "Essential safety gear for workplace protection, including gloves, helmets, goggles, and more.",
    image: "/images/category-safety.jpg",
  },
  {
    id: "rigging-equipment",
    name: "Rigging Equipment",
    description:
      "Professional rigging tools and equipment for lifting, securing, and moving heavy loads safely.",
    image: "/images/category-rigging.jpg",
  },
  {
    id: "testing-equipment",
    name: "Testing Equipment",
    description:
      "Specialized tools and instruments for testing and calibration in various industries.",
    image: "/images/category-testing.jpg",
  },
  {
    id: "welding-products",
    name: "Welding Products",
    description:
      "Complete range of welding tools and products for high-quality welding and fabrication.",
    image: "/images/category-welding.jpg",
  },
  {
    id: "measuring-tools",
    name: "Precision Tools",
    description:
      "Precision measuring instruments for accurate work, including calipers, micrometers, and rulers.",
    image: "/images/category-measuring.jpg",
  },
  {
    id: "abrasives",
    name: "Abrasives",
    description:
      "High-quality abrasives for cutting, grinding, and polishing tasks across industries.",
    image: "/images/category-abrasives.jpg",
  },
  {
    id: "adhesives",
    name: "Adhesives",
    description:
      "Strong and reliable adhesives for bonding materials in construction, manufacturing, and repairs.",
    image: "/images/category-adhesives.jpg",
  },
  {
    id: "industrial-supplies",
    name: "Industrial Supplies",
    description:
      "Wide range of industrial supplies for manufacturing, construction, and other sectors.",
    image: "/images/category-industrial.jpg",
  },
  {
    id: "pipes",
    name: "Pipes & Fittings",
    description:
      "Durable pipes, fittings, and connectors for plumbing, gas, and industrial applications.",
    image: "/images/category-pipes.jpg",
  },
  {
    id: "accessories",
    name: "Power Tools Accessories",
    description:
      "A variety of accessories for power tools, including blades, drill bits, and batteries.",
    image: "/images/category-accessories.jpg",
  },
];

// Sample products
export const products: Product[] = [
  // Power Tools - Cordless
  {
    id: "drill-premium-1",
    name: "Stanley 18V NI-CAD Compact Hammer Drill",
    description: `
      Two speed settings, variable speed and reverse switch.
      Keyless chuck for quick and easy bit change.
      Ergonomic handle and rubber over-mould to provide maximum end-user comfort.
      Kit box for safe storage of power tool and all accessories.
      22-position adjustable torque control for consistent screwdriving into a variety of materials with different screw sizes.
      Hammer action for drilling into brick and masonry.
      Slide pack battery allows for superior insertion and removal.
    `,
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-STDC18HBK_H1.jpg",
    rating: 4.8,
    stock: 35,
    featured: true,
  },

  {
    id: "drill-heavy-duty",
    name: "Stanley 18V LI-ION Hammer Drill",
    description: `
      Li-Ion battery holds charge when not in use, so less need for recharging.
      Hammer action for drilling into brick and masonry.
      22-position adjustable torque control for consistent screwdriving into a variety of materials with different screw sizes.
      LED light for improved visibility.
      Kit box for safe storage of power tool and all accessories.
      Belt clip provides ultimate mobility.
      Ergonomic handle and rubber over-mould to provide maximum end-user comfort.
      Keyless chuck for quick and easy bit change.
      Two-speed settings, variable speed, and reverse switch.
      Battery gauge indicates remaining power for better work planning.
    `,
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-STDC18LHBK_Hero.jpg",
    rating: 4.7,
    stock: 28,
  },
  {
    id: "drill-compact",
    name: "Ingersoll Rand QX Series Cordless Precision Screwdriver",
    description: `Transducerized Control - provides precision and traceability
Multi-function display and keypad offer quick setup and visual feedback
Program your tool using the keypad, USB port, or wirelessly with the ICS Software
Onboard control boards eliminates need and cost of external controller
Optional wireless communication delivers process control and data archiving
Adjustable speeds up to 1500 RPM
`,
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/IRC%202.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill-bosch",
    name: "Bosch 3/8 In. 18 V Compact™ Cordless Drill/Driver - Tool Only",
    description: `The new Bosch DDB180 Compact™ 18 V cordless drill/driver is extremely compact and lightweight with professional grade performance. The slim diameter soft grip handle adds comfort for less user fatigue. Bare tool, battery and charger sold separately.


`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/DDB180_hero_15Ah.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill-angle-bosch",
    name: "Bosch 12V Max 3/8 In. Angle Drill",
    description: `The Bosch PS11 angle drill offers better balance and control and is perfect for working in tight spaces. It is compact and lightweight with a soft grip body optimized for a secure grip.


`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/PS11B_Hero.png",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "drill-brute-bosch",
    name: "Bosch 1/2 In. 36 V Lithium-Ion Brute Tough™ Drill/Driver",
    description: `36 V Lithium-Ion Brute tough drill driver features unibody powertrain, keeps gears in alignment for the most durable drive train on the market. Metal reinforced collar provides enhanced durability when dropped on the chuck. Durashield housing is constructed to withstand real world conditions. Easily accessible brushes for quick maintenance with minimal down time. Ratcheting single sleeve 1/2 In. chuck with carbide tipped jaws have stronger bit retention. Lithium-Ion battery technology.


`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/CD.png",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "drill-makita-18v",
    name: "Makita DDF451 - LXT Cordless Driver Drill (18V Li-Ion)",
    description: `	
High operation efficiency with high torque.
Robust body construction with aluminium gear housing.
Original 4-pole motor for power, light-weight and compact size.
Best fit ergonomic grip shape.
Anti-slip rubberized side grip.
Twin LED job light with afterglow function.
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/DDF451.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "dewalt-14.4V-18v",
    name: "DeWalt 14.4V XR Li-ion Brushless Compact Hammer Drill Driver",
    description: `14.4V XR Li-Ion compact hammer drill driver featuring 2.0Ah XR Li-Ion battery technology
Brushless Motor Technology for excellent efficiency
Ultra compact, lightweight design allows use in confined spaces
`,
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/1898309_DCD737D234SMALL.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "bosch-gsr",
    name: "Bosch GSR Mx2Drive Professional",
    description: `Lockable 1/4" universal bit holder locks all conventional drill bits and screwdriver bits
Multi charger: charges both 3.6 volt and 10.8 volt batteries within one hour
Unique Bosch Premium lithium-ion technology for longer lifetime and unbeatable battery runtime
Bosch Electronic Cell Protection (ECP): protects the battery against overload, overheating and deep discharge
Motor brake for precise work when driving rows of screws
Integrated LED light for illuminating the work area, even in dark places
No memory effect: the battery can be charged regardless of the charging state at any time, without damaging the cells
`,
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/cordless-screwdriver-gsr-mx2drive-101560.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "ingersol-rand",
    name: "Ingersoll Rand QX Series Cordless Angle Wrench",
    description: `Introducing the newest member of Ingersoll Rand';s innovative QX Series: the QX Series Angle Wrench—a tool that can help lower production costs, eliminate rework and take total control of your line. Every feature of the QX Angle Wrench is designed to quickly, efficiently and intelligently deliver results.
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/IR%2012.png",
    rating: 4.5,
    stock: 42,
  },

  // METAL WORKING TOOLS

  {
    id: "StanleyGrinder",
    name: "Stanley 710W 115MM Small Angle Grinder",
    description: `Powerful motor for carrying out a large variety of cutting and grinding tasks
Compact housing shape design allows comfortable gripping resulting in superior ergonomics
Long endurance by high quality commutator and durable carbon brush
Spindle lock for quick and easy change of accessories
Spiral bevel gears provide less vibration, lower noise level and longer life span
Burst proof guard ensures maximum user safety
On/Off slide switch for one hand control and user safety
Optimized air vents for best cooling
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/STGS7115_H1.jpg",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "SM115AGRINDER",
    name: "Stanley 900W 115 MM Small Angle Grinder",
    description: `Powerful motor for carrying out a large variety of cutting and grinding tasks
Compact housing shape design allows comfortable gripping resulting in superior ergonomics
Long endurance by high quality commutator and durable carbon brush
Spindle lock for quick and easy change of accessories
Spiral bevel gears provide less vibration, lower noise level and longer life span
Burst proof guard ensures maximum user safety
On/Off slide switch for one hand control and user safety
Optimized air vents for best cooling
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/STGS9115_H2.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "S200WLGA",
    name: "Stanley 2000W 230MM Large Angle Grinder",
    description: `Spindle lock for quick and easy change of accessories
Powerful motor designed for professional applications
Two step safety switch prevents accidental starts
Multi-angle rotation gear box allows for ideal balance in surface and edge grinding applications
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/STGL2223_H2.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "S20S0WLGA",
    name: "Stanley 2200W 230MM Large Angle Grinder",
    description: `Spindle lock for quick and easy change of accessories
Powerful motor designed for professional applications
Two step safety switch prevents accidental starts
Multi-angle rotation gear box allows for ideal balance in surface and edge grinding applications
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/STGL2223_H2.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "SDW00WLGA",
    name: "DeWalt 1400W - 150mm Small Angle Grinder",
    description: `Dust ejection system removes majority of debris from the air which passes over the motor, preventing abrasion and tracking
Anti lock flange prevents flanges from permanently locking up and locking the disc on
Abrasion protected motor for increased durability
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/532806_D28141_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "S97D00WLGA",
    name: "DeWalt 900W - 115MM Paddle Switch Small Angle Grinder",
    description: `A non locking paddle switch ensures the grinder switches off automatically when the unit is released
Independant box and spring brush holder design increases brush life
Small girth allows user to maintain a comfortable grip, resulting in superior ergonomics
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/1923922_DWE4120.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DW100MMPDLE",
    name: "DeWalt 100mm, 800W, Paddle switch, Angle Grinder",
    description: `Small girth allows comfortable gripping resulting in superior ergonomics
The low profile gear case allows access in confined areas
Abrasion protected motor for increased durability
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/1940211_DWE4002_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DW450W",
    name: "DeWalt 450 W 6 mm Slide Switch Die Grinder",
    description: `Long nose with rubber grip improves access,comfort and control
Anti-Lock collect ensures that all attachment are easily removeable once the nut is loosened
Powerful 450 W motor allows maximum performance in demanding application
`,
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/prod1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "GRINDSALT2",
    name: "DeWalt 125mm Grinder",
    description: `Large diameter high power motor for superior performance
High temperature resin coated field for increased durability
Special air channels designed into field case to optimise motor cooling
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/1932573_DW831.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "MakitaGA4034",
    name: `Makita GA4034 - 100mm (4") Angle Grinder`,
    description: `	
Easy to operate paddle switch by the hand gripping motor housing.
Small circumference barrel grip and ergonomically designed side grip angle for easy handling.
Labyrinth construction protects all ball bearings from dust and debris.
High quality motor with excellent heat-resistance.
Small gear housing provides easy handling and high maneuverability.
Motor field coated with protective powder varnish to protect from dust.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/GA4034.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "MKTA906",
    name: `Makita 906 - 6mm (1/4") Die Grinder`,
    description: `	
Lightweight for controlled Grinding operations.
Ideal for light, precision grinding.
Palm-sized grinder for multi-applications.
High speed (25,000rpm) for maximum production.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/906.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "MakitaGD0600",
    name: `Makita GD0600 - 6mm (1/4") Die Grinder`,
    description: `	
Small-circumference housing for easy handling.
Anti-slip rubber cover for easy handling.
Round-shaped collet nut reduces the possibility of damages/ scratches to work piece.
Vent slots designed to direct the exhaust air stream towards the opposite side of the operator.
High heat resistance. 
Operate paddle type switch.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/GD0600.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "MakitaGD0800C",
    name: `Makita GD0800C - 8mm Die Grinder`,
    description: `	
High speed for mounted points - Max wheel point 25mm
High-speed die grinder with max. 8mm collet capacity.
Ergonomically designed slim body for grinding in tight spots.
Makita's exclusive Super Joint System helps prevent kickback.
Internal labyrinth construction seals motor and bearings from contamination.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/GD0800C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "MKTAGD0810C",
    name: `Makita GD0810C - 8mm Die Grinder`,
    description: `	
High speed for mounted points - Max wheel point 25mm
High-speed die grinder with max. 8mm collet capacity.
Ergonomically designed slim body for grinding in tight spots.
Makita's exclusive Super Joint System helps prevent kickback.
Internal labyrinth construction seals motor and bearings from contamination.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/GD0810C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "BoschGWS",
    name: `Bosch GWS 750-115 Professional`,
    description: `New motor platform – high power and high torque
Ergonomic design: Round handle sits perfectly in the hand
Optimised air guidance to protect against increasing tool temperatures
Dust-protected air inlet and cotton thread head
Speed preselection
`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/angle-grinder-gws-750-115-112026.png",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "BoschGWS8",
    name: `Bosch GWS 8-115 Z Professional`,
    description: `Good handling thanks to slim housing
Vibration Control auxiliary handle ensures your joints are protected during working
Gear head can be rotated in 90° steps
Handle can be used on right or left
`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/angle-grinder-gws-8-115-z-24858.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "BoschGWS2200",
    name: `Bosch GWS 2200-180 HV Professional`,
    description: `Power: Robust 2200W motor for powerful grinding and cutting application
Robustness: Full metal flange for more durability
Comfort and Safety:Presence of a 3rd hole on the gear housing for optimal handlingDeadman switch for user safety
`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/angle-grinder-gws-2200-180-hv-105934.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "BoschGWS22026",
    name: `Bosch GWS 26-230 JH Professional`,
    description: `Triple-control safety switch
Bosch SDS quick-locking nut available as an accessory
Individual bar code for easy tool identification

`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com//images/products/angle-grinder-gws-26-230-jh-30074.png",
    rating: 4.5,
    stock: 42,
  },

  // ROTARY HAMMERS
  {
    id: "DeWalts40mm",
    name: `DeWalt 40mm SDS-Max Combination Hammer`,
    description: `Ideal for drilling anchor fixing and through holes in concrete and masonry from 12 to 40 mm in diameter. Core drilling up to 90 mm
Chain drive improves durability and increases efficiency together with an oil filled gearbox to ensure total component lubrication and superior heat dissipation
Ergonomic, compact and slim line design maximises control and offers easy access to confined spaces

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1268371_D25501K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "SDSDeWalt",
    name: `DeWalt 52 mm SDS-Max Combination Hammer`,
    description: `Ideal for drilling anchor fixing and through holes in concrete and masonry from 12 to 52 mm in diameter. Core drilling up to 150 mm
Active vibration control system incorporating a counterbalance mass and floating handle delivers extremely low vibration
An anti rotation system detects a loss of tool control, and reacts by instantly cutting the power

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2093004_D25763K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DeWaltHeav32mmy",
    name: `DeWalt 32mm Heavy Duty SDS-Plus Combination Hammer`,
    description: `An anti rotation system detects a loss of tool control, and reacts by instantly cutting the power
Active vibration control system incorporating a floating rear handle to reduce vibration
Quick change 3 jawed chuck provides speed, precision and flexibility when drilling in wood, ceramic and steel

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2004389_D25415K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DeWalt48mmSDS",
    name: `DeWalt 48mm SDS-Max Combination Hammer`,
    description: `Ideal for drilling anchor fixing and through holes in concrete and masonry from 12 to 48 mm in diameter. Core drilling up to 125 mm
Active vibration control system incorporating a counterbalance mass and floating handle delivers extremely low vibration
2 stage clutch system that allows the user to change the clutch level from low to high torque, to optimise the tool for specific drilling applications`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2004392_D25722K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "L-Shape",
    name: `DeWalt 26mm L-Shape SDS-Plus Combination Hammer Low Vibration`,
    description: `Ideal for drilling holes and fixing anchors into concrete and masonry from 4 to 26 mm in diameter
Active Vibration Control system with floating handle delivers extremely low vibration and more comfort
Rotation-stop for light chiselling applications in soft masonry and occasionally concrete and impact-stop for drilling in wood, steel and screwdriving applications`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1175067_D25323.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DeWaltL-Shape",
    name: `DeWalt 20mm L-shape SDS-Plus Rotary Hammer`,
    description: `Active vibration control with floating back handle delivers extremely low vibration and more comfort
Ideal for drill anchor and fixing holes into concrete and masonry from 4-20mm in diameter
Optimised power to weight ratio good power in light weight package`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2004387_D25052K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "DeWaltL-28mm-SDS-Plus",
    name: `DeWalt 28mm SDS Plus Rotary Hammer with Quick Change Chuck`,
    description: `Ideal for drilling anchor and fixing holes into concrete and masonry from 4 to 28 mm in diameter
Rotation-stop for light chiselling applications in brick, soft masonry and occasionally concrete
Quick Change Removable Chuck for drilling in wood, steel, ceramic and screwdriving applications`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2351829_D25144K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "Makita-HR2010",
    name: `Makita HR2010 - 20mm (3/4") SDS-PLUS Rotary Hammer`,
    description: `	
Compact, yet tough and durable.
Easy bit change with one-touch slide chuck.
Torque limiting clutch disengages if bit jams.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HR2010.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "Makita-HR2600",
    name: `Makita HR2600 - 26mm (1") - SDS-PLUS Rotary Hammer`,
    description: `	
Easy-to-grip handle ergonomically designed to give maximum power thrust.
Less bit wobbling
One-Touch Sliding Chuck enables easy bit changes.
Operation mode change lever positioned on the bottom of gear housing to reduced possibility of breakage.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HR2600.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "Makita-HR3200C",
    name: `Makita HR3200C - 32mm (1-1/4") - SDS-PLUS Rotary Hammer`,
    description: `	Simple Single-Lever Control to change the tool's operation mode.
One-Touch sliding chuck for easy bit changes.
Increased Repairability - with simplified wiring and bit holding mechanism.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HR3200C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "Makita-HR4001C",
    name: `Makita HR4001C - 40mm (1-9/16") - SDS-MAX Rotary Hammer`,
    description: `	
Most powerful and efficient in the class future style hammer from Makita.
Achieves most efficient hammer with satisfying powerful performance.
Selectable-switch feature gives the choice of trigger switch for drilling and lock-on slide switch for demolition for long hours.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HR3200C.jpg",
    rating: 4.5,
    stock: 42,
  },

  // drills

  {
    id: "drill1",
    name: `DeWalt 4000rpm Rotary drill`,
    description: `	
Ideal for high speed drilling of small, precise holes in metal or wood
High overload capacity motor prevents failure in heavy duty applications
10 mm keyless chuck for quick and easy bit change with one hand to aid productivity`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1910508_DW217.jpg",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "drill2",
    name: `DeWalt 2500rpm Rotary drill`,
    description: `	
Ideal for drilling applications in wood, aluminium, soft steel and alloys
High overload capacity motor prevents failure in heavy duty applications
10 mm keyless chuck with innovative spindle lock system for quick and easy bit change with one hand to aid productivity`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-432849_369903_DW221_1.jpg",
    rating: 4.5,
    stock: 42,
  },

  {
    id: "drill3",
    name: `DeWalt 770W - 2 Speed Rotary Drill with Clutch`,
    description: `Ideal for use in heavy steel fabrication
Two speed gearbox for increased torque
Improved drilling performance due to new motor wind`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-551056_D21441KS_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill4",
    name: `DeWalt 10mm Rotary Drill with Keyless Chuck`,
    description: `Rubber grip gives maximum comfort to the user while drilling
Ideal for use in a woodworking or light metal fabrication workshop to drill small holes into wood or sheet metal
All metal 10 mm keyless chuck for quick and easy bit change`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-834169_DWD112S_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill5",
    name: `DeWalt 10mm 0-2800rpm Rotary drill with keyless chuck`,
    description: `Keyless ratcheting chuck for quick and easy bit change
Compact design enables comfortable one handed use and allows access to tight spaces
Low weight ensures the drill is easy to use and it reduces user fatigue`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1185335_DWD014S.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill6",
    name: `Makita 10mm (3/8")  Drill`,
    description: `Very popular drill for one-hand operation.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6010B.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill7",
    name: `Makita 6413 - 10mm (3/8") - Drill`,
    description: `	
Compact and lightweight, yet with enough power.
Ergonomically designed handle with rubberized grip provides more control and comfort.
Chuck capacity: 1.5-10mm (1/16"-3/8").
In-line design brings drilling pressure in line with center of drill bit axis.
All ball bearing construction ensures high durability.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6413.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill8",
    name: `Makita DP4700 - 13mm (1/2")`,
    description: `	
	
Heavy-duty performance drill for professionals.
Variable speed (0-550 rpm) for versatility.
Weighs only 2.2 kg for easy handling.
Rugged industrial chuck.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-DP4700.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill9",
    name: `Makita 6300-4 - 13mm (1/2") - 4-Speed Drill`,
    description: `	
4-speed (500 / 600 / 1,100 / 1,300 rpm) for drilling in a variety of materials.
Rear D-handle and side grip for controlled drilling.
Slide switches for easy and smooth speed change operation.
Heavy-duty industrial chuck.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6300-4.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill10",
    name: `Makita DA3010 - 10mm (3/8") Angle Drill`,
    description: `	
Compact and light body weighs only 1.6kg (3.5 lbs).
Only 66mm (2-5/8") in head height.
With keyed chuck.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-DA3010.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill11",
    name: `Makita NHP1300S -13mm (1/2") Impact Drill`,
    description: `	
A best seller worldwide due to amazing reliability.
Upgraded, 13mm version of NHP1030.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-NHP1300S.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill12",
    name: `Makita HP1630K - 16mm (5/8") - Impact Drill`,
    description: `	
High power 710W motor.
Ergonomically designed handle with rubberized soft grip.
Sturdy cylinder-shaped motor housing.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HP1630K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "drill13",
    name: `Bosch GBM 1000 Professional`,
    description: `	
Easy slide switch for forward/reverse rotation
Variable speed switch for sensitive drilling

`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-rotary-drill-gbm-1000-60092.png",
    rating: 4.5,
    stock: 42,
  },

  // SAWS

  {
    id: "saw1",
    name: `Bosch Top - Handle Jig Saw JS260`,
    description: `	The Bosch JS260 Top-Handle Jig Saw provides a sturdy footplate for accuracy in the cut, as well as a 6.0-amp motor and variable-speed control. The sturdy motor produces up to 3,100 strokes per minute, with a 3/4 In. stroke length. The variable-speed dial controls the maximum speed, while the accelerator trigger regulates the operating speed. This jig saw is engineered with a low-vibration plunging design for cutting accuracy and smooth operation. It has a large heavy-gauge steel footplate. The JS260's multidirectional blade clamp delivers the superior grip of T-shank blades (but it does not accept U-shank blades). The toolless T-shank blade-change system makes blade insertion and removal quick. The tool has an always-on dust blower for max cut-line visibility and an ambidextrous lock-on button.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-JS260_Hero.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw2",
    name: `DeWalt Variable Speed Pendulum Jigsaw`,
    description: `	Powerful 701 Watt motor with variable speed delivers fast cutting action up to 3100 strokes per minute
Quick and easy patented keyless blade change system accepts T- shank blades
Patented anti-vibration counterbalance mechanism and rubber grip provide smooth operation
4-position pendulum action controls the aggressiveness or smoothness of cuts`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-422999_DW331K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw3",
    name: `DeWalt 65mm Depth Of Cut Compact Circular Saw`,
    description: `Compact, Lightweight, Easy to use circular saw with 65mm depth of cut
High power 1350W motor gives increased cutting performance
Cutaway inner guard gives improved line of sight to cutting line
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1687072_DWE560_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw4",
    name: `DeWalt 1200W Heavy Duty Reciprocating Saw`,
    description: `1200 Watt motor delivers increased power for heavy duty applications
0 - 2,600 SPM and 28 mm stroke length for fast and efficient cutting
Keyless adjustable shoe easily adjusts the depth of cut and extends the blade life`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-532848_DW310K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw5",
    name: `Makita 5007N - 185mm (7-1/4") Circular Saw`,
    description: `	
Designed for all-round easier operation.
Powerful 1,800W motor for heavy duty applications.
Large wrap-around aluminum base and superb cross cut or rip sawing actions.
Rubberized soft grip provides more comfort and control.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-5007N.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw6",
    name: `Makita 5800NB - 180mm (7-1/8") Circular Saw`,
    description: `	
	
One of our best-selling portable circular saws.
Double insulation structure.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-5800NB.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw7",
    name: `Makita 5806B -185mm (7-1/4") Circular Saw`,
    description: `
Sawdust and chips hardly ever come near operator.
Powerful 1,050Wmotor for smooth operation even in heavy duty cutting.
Well balanced body and ergonomically designed handle for comfortable operation.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-5806B.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw8",
    name: `Makita 4300BV - Jig Saw`,
    description: `	
Long-run best seller, this tool puts performance first.
Bevel cuts up to 45 degrees right or left.
Full 26mm (1") stroke length.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-4300BA.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw9",
    name: `Makita 4329 - Jig Saw`,
    description: `	
	
Light duty model with continuous input 450W.
3 orbital settings and straight cutting.
Ergonomically designed handle with rubberized grip provides more control and comfort.
Dust Cover prevents scattering of tips.
Quiet and less vibration.
Aluminum die-cast base.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-4329.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw10",
    name: `Makita 4326 - Jig Saw`,
    description: `	
Light duty model with continuous input 450W.
Ergonomically designed handle with rubberized grip provides more control and comfort.
Thick blade (1.7mm thickness) can also be used.
Dust Cover prevents scattering of tips.
Bevel cut 0 to 45 degrees left or right.
Quiet and less vibration.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-4326.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw11",
    name: `Makita JR1000FT - Recipro Saw / Inline Jig Saw

`,
    description: `	Small and lightweight body.
All B type jigsaw blades can fit in this saw.
Accessories for sanding and filing are also available.
Tool-less blade change system.
Variable speed for precise cutting in a wide variety of materials.
With LED job light.

`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-JR1000FT.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw12",
    name: `Makita JR3050T - Recipro Saw`,
    description: `Well built and well balanced Mid-class.
High cutting efficiency by powerful motor.
Dust proof design 1 : Air from inside prevent the dust collected around slider.
Dust proof design 2 : Ring, and rubber seal protect gear housing against dust.
Tool-less blade change system.
Push the red button to adjust shoe positions.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-JR3050T.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "saw13",
    name: `Makita JR3060 T - Recipro Saw, Orbital`,
    description: `	
Robust body with power for heavy-duty operation.
Orbital action : Selectable from 3 degrees for faster cutting in thick materials.
Powerful motor for tough jobs.
All the other features same as JR3050T.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-JR3060T.jpg",
    rating: 4.5,
    stock: 42,
  },

  // IMPACT WRENCHES

  {
    id: "impact1",
    name: `Ingersoll Rand 2015 MAX 3/8" Right Angle Impact Wrench`,
    description: `From the company that invented the Impactool in 1934, comes a revolutionary impact wrench that is unlike any other on the market today. The Hammerhead Right Angle Impactool offers the power of an impact with the reach of an air ratchet, and it's going to change the way you work. The combination of MAX power, MAX control, and MAX access now allows you to use an Ingersoll Rand Impactool for virtually any application. Say goodbye to awkward extensions and swivel sockets, and watch your productivity soar as you conquer tasks in minutes that once took you hours.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-IR%202015%201.png",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact2",
    name: `Makita 1/2" (12.7mm) - Impact Wrench`,
    description: `	
Versatile impact wrench for fastening nuts, bolts, and even lag screws.
2 speed selection with variable speed in both ranges.
Light weight design for comfort and control.
Rugged housing with rubber bumper for long tool life.
Optional bit adapter for driving wood bits.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6904VH.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact3",
    name: `Makita 1/2" (12.7mm) - Impact Wrench`,
    description: `
Versatile impact wrench for fastening nuts, bolts, and even lag screws.
2 speed selection with variable speed in both ranges.
Light weight design for comfort and control.
Rugged housing with rubber bumper for long tool life.
Optional bit adapter for driving wood bits.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com//images/products/6953.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact4",
    name: `Makita 3/4" (19mm) - Impact Wrench`,
    description: `	
Powerful torque of 588N.m(6,000kgf.cm) for super-duty applications.
Rocker type reversing switch for easy one handed forward or reverse operation.
Slide handle adjusts 360degrees for operation convenience at any angle.
Externally accessible carbon brushes for easy maintenance
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6906.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact6",
    name: `Makita 1" (25.4mm) - Impact Wrench`,
    description: `Robust high torque Impact Wrench for heavy-duty application.
Incredibly high torque 1,000N.m
Rocker switch provides easy reversing.
Rubber bumper for tool body protection.
Features hanging hook for comfortable operation.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-TW1000.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact7",
    name: `Ingersoll Rand 231 Series 1/2" Impact Wrench`,
    description: `The classic 231C is the most popular tool in its class. Introduced over 25 years ago and continuously refined, it offers the sheer power and performance features to tackle the toughest jobs with ease - as well as proven durability and economy.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/4-3-2-IR.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "impact8",
    name: `Ingersoll Rand 1700 Series 3/4" Impact Wrench`,
    description: `Heavy Duty`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-IR%202.png",
    rating: 4.5,
    stock: 42,
  },

  // FASTENING TOOLS
  {
    id: "fast1",
    name: `Makita FS2500 - Screwdriver`,
    description: `Best possible tool body for screwdriving.
Easy connect bit allows for quick bit change without using pliers.
One touch locator, Durable belt clip.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-FS2500.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "fast2",
    name: `Makita FS2700 - Screwdriver`,
    description: `6 Stage torque adjustment for a wide range of applications.
Best possible tool body for screwdriving.
Easy to bring pressure in line with center of driving bit axis.
Bit holder is provided.
LED job light convenient for operation in dark job sites.
Durable belt clip.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-FS2700.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "fast3",
    name: `Makita 6821 - Drywall Screwdriver`,
    description: `Powerful Makita motor for high speed performance.
In-line design handle for maximum power thrust.
Low noise level.
Adjustable depth locator for consistent screw depth.
Large variable speed trigger.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-6821.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "fast4",
    name: `Makita FS4300 - Drywall Screwdriver`,
    description: `Silent clutch for quiet operation
Best possible tool body for screwdriving.
Easy to bring pressure in line with center of driving bit axis.
Bit holder and locator holder are provided.
One touch locator, Durable belt clip.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-FS2400.jpg",
    rating: 4.5,
    stock: 42,
  },

  // WOOD WORKING TOOLS
  {
    id: "wood1",
    name: `DeWalt ½" Sheet Electronic Orbital Sander`,
    description: `Variable speed control 12,000-22,000 orbits per minute
High performance motor with aluminium bearing seats for continuous use and a long life
Small orbit size for a smooth finish
`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-537565_388387_D26420_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "wood2",
    name: `DeWalt 1/3" Sheet Orbital Sander`,
    description: `High performance motor with aluminium bearing seats for continuous use and a long life
Small orbit size for a smooth finish
Efficient dust collection using integrated dustbag or external dust extractor for a better sanding performance and sheet life
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-398657_D26422_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "wood3",
    name: `DeWalt 2.5mm Planer`,
    description: `Low weight and perfect balance make this planer ideal for single handed use in awkward applications
Front handle depth control in clearly marked 0.1mm steps for accurate setting with a positive stop position
A large planer blade drum rotating at high speed provides an excellent finish
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1815343_DW680.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "wood4",
    name: `DeWalt 550W Portable planer`,
    description: `Light weight and perfect balance make this planer ideal for single handed use in awkward applications
296mm machined aluminium shoe offers finer finish and less vibration
Tall profile and large size depth adjustment knob offers easier and more precise depth adjustment 0.1mm per graduation

`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-1893604_1926985_D26676a.jpg",
    rating: 4.5,
    stock: 42,
  },

  // DEMOLITION TOOLS

  {
    id: "demo1",
    name: `DeWalt 4Kg Chipper`,
    description: `Active vibration control with floating back handle delivers extremely low vibration and more comfort
Rotation-stop for light chiselling applications, render and tile removal
Optimised power to weight ratio good power in light weight package
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2004385_D25430K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo2",
    name: `DeWalt SDS-Max Dedicated Chipping Hammer`,
    description: `Ideal for light demolition, surface preparation or chiseling grooves and channel openings in brick, masonry and light concrete
Active vibration control system incorporating a floating rear handle to reduce vibration
Electronic variable speed and impact energy control
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1330526_D25831K_1.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo3",
    name: `DeWalt 5 Kilo SDS-Max Dedicated Chipping Hammer`,
    description: `Ideal for light demolition, surface preparation or chiseling grooves and channel openings in brick, masonry and light concrete
Oil filled gearbox ensures total component lubrication and superior heat dissipation
Excellent power to weight ratio: 8 Joules of impact energy delivered by a 5.8 kg hammer.`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-1847823_D25820K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo4",
    name: `DeWalt 7 Kilo SDS-Max Dedicated Demolition Hammer`,
    description: `Ideal for demolition and surface preparation in brick, masonry and concrete
Active vibration control system incorporating a counterbalance mass and floating handle delivers extremely low vibration
Electronic variable impact energy/speed for total control`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-2004394_D25871K.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo5",
    name: `DeWalt 28mm HEX Demolition Breaker`,
    description: `Highest productivity due to an optimum balance of power, impact energy and vibration
Lowest vibration in the 16kg class ensures the highest trigger time
50% longer service intervals than the nearest competitor for lower running costs and less down time`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-1442282_D25960-Main.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo6",
    name: `Makita HM1101C - SDS-MAX Demolition Hammer`,
    description: `High durability and excellent demolition performance.
One touch sliding chuck for easy bit installation and removal.
LED lamp indicates when to replace carbon brush.
LED lamp is provided as a pilot lamp.
`,
    
    category: "power-tools",
    image: "https://www.alalamain.com/images/products/2-HM1101C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo7",
    name: `Makita HM1203C - SDS-MAX Demolition Hammer`,
    description: ` 	
High durability and excellent demolition performance.
One touch sliding chuck for easy bit installation and removal.
Electronic speed control for maximum performance.
Bit can be set at 12 positions for convenience.
LED lamp indicates when to replace carbon brush.

`,
    
    category: "power-tools",
    image:
      "https://www.alalamain.com/images/products/2-1442282_D25960-Main.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo8",
    name: `Makita HM1213C- SDS-MAX Demolition Hammer`,
    description: ` 	
AVT (Anti-Vibration Technology) ensures extra-low vibration performance.
Suppression of motor speed during no-load reduces vibration of tool body.
One touch sliding chuck for easy bit installation and removal.
Electronic speed control for maximum performance.
Bit can be set at 12 positions for convenience.
LED lamp indicates when to replace carbon brush.
`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HM1213C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo9",
    name: `Makita HM1201 - 21mm Hex Shank Demolition Hammer`,
    description: ` 	
Powerful impact from durable aluminum body.
Anti-vibration spring on rear handle for reduced operator fatigue.
Factory grease packed for reduced maintenance.
Automatic brush cut-out when periodic service is due.

`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HM1201.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo10",
    name: `Makita HM0810T - 17mm Hex Shank Chipping Hammer`,
    description: ` 	
Perfect combination of power, durability and compact design.
Compact and lightweight for maximum control.
Soft rubber grip side handle and anti-vibration spring on rear handle for reduced operator fatigue.
Easy to grip round shape barrel protected by rubber cover.
One touch sliding chuck for easy bit installation and removal.
`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HM0810T.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo11",
    name: `Makita HM0871C - SDS-MAX Chipping Hammer`,
    description: ` 	
AVT (Anti-Vibration Technology) ensures extra-low vibration performance.
Soft no load function ensures low vibration performance.
High durability and excellent demolition performance.
One touch sliding chuck for easy bit installation and removal.
LED lamp indicates when to replace carbon brush.
LED lamp is provided as a pilot lamp.
`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HM0871C.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo12",
    name: `Makita HK1810 - Power Scarper (Makita Small Shank)`,
    description: ` 	
Quick in removing tiles / concrete scales / weld spatter / old mortar.
Barrel sheathed in rubber heat isolator.
Factory grease packed for reduced maintenance.
With variable speed feature.
`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HK1810.jpg",
    rating: 4.5,
    stock: 42,
  },
  {
    id: "demo13",
    name: `Makita HM1802 - 28.6mm Hex Shank Electric Breaker`,
    description: ` 	
Highest-in-class demolition power.
Vibration absorbing housing helps to reduce vibration.
Soft start for suppressing start-up reaction.
Soft grip provides more control and less hand fatigue.
Higher durability obtained by strengthening switch.
Newly developed dust extraction attachment is available.

`,
    
    category: "power-tools",
    
    image: "https://www.alalamain.com/images/products/2-HM1802.jpg",
    rating: 4.5,
    stock: 42,
  },

  // Hand Tools - Hammers
  {
    id: "wrench-1",
    name: "Combination Spanner (Metric) ",
    description:
      "Combination spanners have two heads: one with an open-ended profile and the other with a ring profile.",
    
    category: "hand-tools",
    
    image: "https://www.alalamain.com/images/products/2-S0424.jpg",
    rating: 4.9,
    stock: 50,
    featured: true,
  },
  {
    id: "wrench-2",
    name: "Combination Spanner (Imperial)",
    description:
      "Combination spanners have two heads: one with an open-ended profile and the other with a ring profile.",
    
    category: "hand-tools",
    
    image: "https://www.alalamain.com/images/products/2-S0424.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-3",
    name: "Double Open End Spanner (Metric and Imperial)",
    description:
      "Open-ended spanners are versatile, single-piece tools that are widely used across every industry.",
    
    category: "hand-tools",
    
    image: "https://www.alalamain.com/images/products/2-double%20open.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-4",
    name: "Double Ring Spanner (Metric and Imperial)",
    description:
      "A ring spanner is a simple, double-headed, single-piece spanner with a profile set in a looped head.",
    
    category: "hand-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-Double-Offset-Ring-Wrenchdouble-Ring-Spanner.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-5",
    name: "Single Open End Wrench (Metric and Imperial)",
    description:
      "A ring spanner is a simple, single-headed, single-piece spanner.",
    
    category: "hand-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-single-open-end-spanner-500x500.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-6",
    name: "Single End Ring Spanner (Metric and Imperial)",
    description: "A ring spanner is a simple, single-end ring spanner.",
    
    category: "hand-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-single-ended-ring-spanner-din-3111-500x500.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-7",
    name: "RIDGID 86902 Adjustable Wrench 6-Inch",
    description: `High-grade alloy steel.
Nickel based plating with brushed finish to reduce rust and corrosion.
Forged and heat-treated for durability.
Jaw scales in SAE and metric for quick adjustment.`,
    
    category: "hand-tools",
    
    image: "https://www.alalamain.com/images/products/2-RGD_86902.jpg",
    rating: 4.9,
    stock: 50,
  },
  {
    id: "wrench-8",
    name: "Impact Socket",
    description: `Impact sockets are designed for high-torque applications. They are used with powered impact wrenches or drivers to remove seized nuts and bolts from vehicles.`,
    
    category: "hand-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-heavy-duty-socket-250x250.jpg",
    rating: 4.9,
    stock: 50,
  },

  // HeadProtection

  {
    id: "head1",
    name: "MSA V-Gard® Protective Cap",
    description: `The MSA V-Gard Helmet, with its distinctive trademark “V” design, is a world recognized brand known for comfort, quality, and durability. MSA has sold well over 100 million V-Gard Helmets since its introduction – so many in fact, that the iconic “V” design has been a mainstay for many years on even the toughest worksites. When you want the best comfort, quality and durability worn by millions across the globe, you need to buy the original MSA V-Gard Helmet, settle for nothing less.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-hea.png",
    rating: 4.8,
    stock: 45,
    featured: true,
  },
  {
    id: "head2",
    name: "MSA V-Gard® Protective Hat",
    description: `The MSA V-Gard Helmet, with its distinctive trademark “V” design, is a world recognized brand known for comfort, quality, and durability. MSA has sold well over 100 million V-Gard Helmets since its introduction – so many in fact, that the iconic “V” design has been a mainstay for many years on even the toughest worksites. When you want the best comfort, quality and durability worn by millions across the globe, you need to buy the original MSA V-Gard Helmet, settle for nothing less.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-head.png",
    rating: 4.8,
    stock: 45,
  },

  // FACE AND EYE PROTECTION

  {
    id: "face11",
    name: `Fibre-Metal® F4400 High Performance Protective Cap Faceshield `,
    description: `Attach to E-2Q or P-2Q series hard hats and 6000 blades for slotted caps
Quick-Lok 4001 mounting cups
`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-img_fib-f4400_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face1",
    name: "Fibre-Metal® F4500 High Performance Protective Cap Faceshield ",
    description: `Attach to E-2Q or P-2Q series hard hats and 6000 blades for slotted caps
Quick-Lok 4001 mounting cups`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/4-3-2-img_fib-f4400_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face2",
    name: "Fibre-Metal® F5500 High Performance Protective Cap Faceshield  ",
    description: `Adjustable 5000 speedy mounting loop
Attach to caps`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/8-7-6-5-4-3-2-img_fib-f4400_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face3",
    name: "Fibre-Metal® F6400 High Performance Protective Cap Faceshield ",
    description: `Attaches to slotted caps
Quick-Lok Cups & Slotted Cap Blades`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/10-9-8-7-6-5-4-3-2-img_fib-f4400_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face4",
    name: "Fibre-Metal® F6500 High Performance Protective Cap Faceshield ",
    description: `Attaches to slotted caps
Quick-Lok Cups & Slotted Cap Blades`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/12-11-10-9-8-7-6-5-4-3-2-img_fib-f4400_1.jpg",
    rating: 4.8,
    stock: 45,
  },

  {
    id: "face9",
    name: `Fibre-Metal® F300 High Performance Faceshield w/3" Crown Ratch`,
    description: `Exceptionally lightweight and comfortable
Fits easily over today's spectacles with space for air circulation to prevent fogging
(Faceshield Not Included)`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-img_fib-f300_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face8",
    name: "Fibre-Metal® F400 High Performance Faceshield w/4",
    description: `Deeper crown protector extends protection without increasing weight
Fits easily over required spectacles or respirators
Uses 3-C Headgear or three protective cap mounting mechanisms
(Faceshield Not Included)`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-img_fib-f400_1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face10",
    name: `Fibre-Metal® F500 High Performance Faceshield w/7"`,
    description: `Broader, deeper crown protector and wide wraparound window provides an extra margin of protection when harsh working conditions require it
Uses 3-C Headgear or three protective cap mounting mechanisms
(Faceshield Not Included)`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-img_fib-f500_1.jpg",
    rating: 4.8,
    stock: 45,
  },

  {
    id: "face5",
    name: "Uvex I-Works Safety Spectacle",
    description: `The uvex i-works encapsulates the best of uvex eyewear: the sporty design, panoramic lens and low weight make it extremely comfortable and together with the unrivalled permanent uvex lens coating technology (uvex supravision excellence), provides the highest level of optical clarity remaining fog free even after repeated cleaning. High-tech soft grip side arm materials further enhance comfort levels delivering a stable, non-slip fit.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/5041_en_gb1.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face6",
    name: "Uvex i-3 Safety Spectacle",
    description: `Uvex understands that each safety spectacle wearer is unique and this is central to our design philosophy of developing products which adapt to individual needs. The safety spectacle uvex i-3 with its innovative features, is the perfect example of a spectacle that combines functionality and comfort with a high level of protection. The safety spectacle uvex i-3 is setting new benchmarks for fit and wearer comfort.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-412_en_gb.png",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "face7",
    name: "MSA Clearvue® 200 Safety Goggles",
    description: `The Clearvue® goggles are designed for use in all types of industrial and commercial settings and help provide protection against impact hazards such as flying debris, and splash.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-mdsdd.png",
    rating: 4.8,
    stock: 45,
  },

  {
    id: "face12",
    name: `Honeywell Uvex A700 Series`,
    description: `Economical and stylish eye protection with sport temples for a fashionable yet comfortable fit. Sporty- wrap-around design. 
`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-SP_Eye_A700-a.jpg",
    rating: 4.8,
    stock: 45,
  },

  // HAND PROTECTION

  {
    id: "handPro1",
    name: "Honeywell PERFECT FIT - Spectra® Fiber",
    description:
      "Spectra® Fiber is lightweight, low-linting, and does not easily absorb liquids. The seamless knit Spectra® Fiber features makes these gloves an excellent choice for food processing applications. These gloves are sold by the each, and are often worn as added protection on the knife-hand and a metal mesh glove on the off-hand.",
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-PFG_PF10-GY-M.jpg",
    rating: 4.8,
    stock: 45,
    featured: true,
  },
  {
    id: "handPro2",
    name: "Honeywell Grip N® Kevlar® - Hot Mill - 52/7457",
    description: `Seamless knit, glove-within-a-glove design, Kevlar® and cotton outer shell and cotton/poly inner shell allows for thermal protection up to 400° F. The Nitrile "N" coating on both sides of glove for added grip on wet or dry objects.
`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-North_52_7457.jpg",
    rating: 4.8,
    stock: 45,
  },

  // SAFETY SHOES

  {
    id: "shoes1",
    name: "Vaultex RDY / S3",
    description: `Protective Footwear
Water Resistant Upper - Yes
Breathable Genuine Leather - Yes
Toe - Yes
Steel Plate - Yes
Oil and Acid Resistant - Yes
Energy Absorbing Heels - Yes
Padded Insole With Black Mesh Lining - Yes
With reflective protection for the back side.
Colour: Black
SIZES: 38 - 46
WARRANTY: 6 Months Warranty Against Manufacturing Defects.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-RDY.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "shoes2",
    name: "Vaultex LEO / SBP",
    description: `Protective Footwear
Breathable Genuine Leather With Cool Comfort Technique
Toe 
Mid Plate 
Oil-Resistant 
Energy Absorbing Heels 
Padded Insole With Orange Cambrelle Lining 
Colour: Black
SIZES: 38 - 46
WARRANTY: 6 Months Warranty Against Manufacturing Defects.

`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-LEO-SBP1.jpg",
    rating: 4.8,
    stock: 45,
  },
  // fall protection

  {
    id: "fall1",
    name: "MSA Workman® Harness Kits",
    description: `Your basic fall protection needs for construction and general maintenance are now available in one, easy to order kit. All fall protection kits include the MSA Workman Light Harness, lanyard and anchorage connector in an easy to stow bag.
`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/msa1.png",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "fall2",
    name: "MSA Gravity® Harnesses",
    description: `Gravity series harnesses meet the needs of workers in specialty environments of specific work applications such as high heat, welding, corrosion, rescue, rigging and suspension. The  Gravity® Coated Harness uses a special urethane web coating to resist stains and wear and tear that are common when working in dirty environments.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/4-3-2-msa.png",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "fall3",
    name: "Miller Roof Strider Systems",
    description: `Two systems (RoofStrider Kit and RoofStrider II Kit) available for roof mounting options`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-Miller_RoofStrider_RM50P-50FT-a.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "fall4",
    name: "Miller Revolution Harnesses",
    description: `The Revolution Harness reinvents harness safety and functionality with features developed to meet key, user needs. Exceeding worker expectations in comfort, fit, ease-of-use, style, durability, compliance, flexibility and convenience, the Revolution provides over 11 key product features from 7 new, unique components.`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/2-RDT-QC-a.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "fall5",
    name: "Miller SafEscape ELITE Rescue/Descent Device",
    description: `A proper safety at height program includes the necessary steps for safe and quick rescue in an emergency. The new Miller SafEscape™ ELITE RDD is the next generation global solution for rescue/descent that meets all applicable safety standards throughout the world, lowers cost of ownership, enhances safety and is easy to use.

`,
    
    category: "safety-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-Miller_SafEscape_ELITE_App_01-a.jpg",
    rating: 4.8,
    stock: 45,
  },

  // STENCIL

  {
    id: "stencil1",
    name: `C.H. Hanson Stencil Kit, A-Z, 0-9, $, & and Punctuation, 2", Brass`,
    description: `92 Pieces - All Letters, Numbers, Other 1-Beginner, 1-Plain Ender, 3-Spacers, 1-Period Ender, 1-Comma, 1-Dash, 2-Periods, 2-Ampersands, 1-Apostrophe
`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/Stencil.jpg",
    rating: 4.8,
    stock: 45,
  },
  {
    id: "stencil2",
    name: `C.H. Hanson Stencil Kit, A-Z, 0-9, $, & and Punctuation, 1", Brass`,
    description: `Includes 92 Pieces - All Letters, Numbers, Other 1-Beginner, 1-Plain Ender, 3-Spacers, 1-Period Ender, 1-Comma, 1-Dash, 2-Periods, 2-Ampersands, 1-Apostrophe`,
    
    category: "safety-equipment",
    
    image: "https://www.alalamain.com/images/products/Stencil.jpg",
    rating: 4.8,
    stock: 45,
  },

  // Rigging Equipment - Slings
  {
    id: "wire-rope",
    name: "6 Strand Wire Ropes",
    description: `A standard 6x36 construction is very robust but has limited resistance to rotation and may cause complications because of twisting and eventual kinking of the wire rope.

The 6 Strand Wire Ropes category includes standard 6 strand, round strand ropes with 25 through 61 wires per strand.

The 6 Strand Wire Ropes are important for their fatigue resistance; this fatigue resistance is made possible by the greater number of small wires per strand.

As the rope size increases, a large number of wires can be used to achieve required fatigue resistance, and still those wires will be large enough to offer adequate resistance to abrasion.`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-6x36.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "block1",
    name: "Crosby 418 / 419 / 404 Snatch Blocks",
    description: `Forged alloy heat treated hooks. 
•     Forged steel swivel tees, yokes and shackles. 
•     Hook and shackle assemblies on 4-1/2” through 14”sizes can be interchanged. 
•     Can be furnished with bronze bushings or roller bearings. 
•     Opening feature permits insertion of rope while block is suspended from gin-pole. 
•     3” thru 18” 418 and 419 blocks have exclusive bolt retaining spring to assure     no lost bolts. 
•     Can be furnished with S-4320 hook latch. 
•     Pressure lube fittings. 
•     3” - 10” feature dual rated wireline sheaves.
•     Fatigue rated.
•     4-1/2” and larger are RFID EQUIPPED.`,
    
    category: "rigging-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-404%20Snatch%20Blocks.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "block2",
    name: "Crosby 408 / 409 Snatch Blocks",
    description: `Light champion snatch block as a double sheave block. 
•     Drop forged swivel hook or swivel shackle. 
•     Can be furnished with bronze bushings or roller bearings. 
•     Opening feature permits easy insertion of wire rope in both sheaves with removal of one bolt. 
•     Can be furnished with hook latch. 
•     Pressure lube fittings. 
•     4 1/2” - 10” models furnished with dual rated wireline sheaves.
•     Fatigue Rated.
•     All sizes are RFID EQUIPPED.`,
    
    category: "rigging-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-408_409%20Snatch%20Blocks.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "block3",
    name: "Crosby 416 / 417 / 402 Alloy Snatch Blocks",
    description: `All Alloy Snatch Blocks
•     Entire block made from heat treated alloy steel. Use of heat treated alloy gives block only 60% of 
the weight of blocks of comparable capacities. 
•     Available with a bronze bushed or roller bearing sheaves. 
•     Easy opening feature of “Champion” blocks retained. 
•     Hook and shackle assemblies can be interchanged. 
•     Pressure lube fittings. 
•     Can be furnished with hook latch. 
•     Blocks furnished with dual rated wireline sheaves.
•     Fatigue Rated.
•     Meets or exceeds all requirements of ASME B30.26 including identification, ductility, design factor, proof load and temperature requirements. Importantly, these blocks meet other critical performance requirements including fatigue life, impact properties and material traceability, not addressed by ASME B30.26.
•     All sizes are RFID EQUIPPED.`,
    
    category: "rigging-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-402%20Alloy%20Snatch%20Blocks.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles1",
    name: "Toyo Screw Pin Shackels",
    description: ``,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-sp.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles2",
    name: "Toyo Safety Pin Shackles",
    description: ``,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-Unknown.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles3",
    name: "Crosby 213 Round Pin Carbon Anchor Shackles",
    description: `Crosby 213 Round Pin Carbon Anchor Shackles`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-01_crosby213.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles4",
    name: `Crosby 209 Screw Pin Carbon Chain Shackles`,
    description: `Crosby 209 Screw Pin Carbon Chain Shackles`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-03_crosby209.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles5",
    name: `Crosby 210 Screw Pin Carbon Chain Shackles`,
    description: `Crosby 210 Screw Pin Carbon Chain Shackles`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-04_crosby210.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles6",
    name: `Crosby 209A Screw Pin Alloy Anchor Shackles`,
    description: `Crosby 209A Screw Pin Alloy Anchor Shackles`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-05_crosby209A.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles7",
    name: `CROSBY 215 ROUND PIN CARBON CHAIN SHACKLES`,
    description: `CROSBY 215 ROUND PIN CARBON CHAIN SHACKLES

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-02_crosby215.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles8",
    name: `CROSBY S2169 SCREW PIN WIDE BODY SHACKLES`,
    description: `CROSBY S2169 SCREW PIN WIDE BODY SHACKLES

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-06_crosbyS2169.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles9",
    name: `CROSBY 2130 BOLT-TYPE CARBON ANCHOR SHACKLES`,
    description: `CROSBY 2130 BOLT-TYPE CARBON ANCHOR SHACKLES

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-07_crosby2130.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles10",
    name: `CROSBY 2150 BOLT-TYPE CARBON ANCHOR SHACKLES`,
    description: `CROSBY 2150 BOLT-TYPE CARBON ANCHOR SHACKLES

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-08_crosby2150.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles11",
    name: `Crosby G-2130A Bolt Type Shackles`,
    description: `Crosby G-2130A Bolt Type Shackles

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-09_crosbyG2130A.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "shackles12",
    name: `D17 ANCHOR SHACKLE WITH OVAL PIN`,
    description: `D17 ANCHOR SHACKLE WITH OVAL PIN

`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-32_D17.jpg",
    rating: 4.7,
    stock: 22,
  },

  // CLAMP METERS
  {
    id: "clamp01",
    name: `Extech EX650: 600A True RMS AC Clamp Meter + NCV`,
    description: `The EX650 is a 600A True RMS AC Clamp meter. This clamp meter also measures AC/DC voltage, resistance, capacitance, continuity/diode test and has an NCV detector. The EX650 has a 1.18" jaw size which accommodates conductors up to 350 MCM. This meter also features a 6000 count backlit LCD display, data hold, min/max, relative function, auto power off and a convenient LED worklight. Complete with test leads and 3 AAA batteries.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EX650-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "clamp02",
    name: `Fluke 323 : True-RMS Clamp Meter`,
    description: `True-rms measurements and optimized ergonomics make the 320 Series Clamp Meters the best general troubleshooting tools for commercial and residential electricians. The Fluke 323 model is ideally suited for current measurements up to 400 A in tight cable compartments.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-FL323-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "clamp03",
    name: `Fluke 374: True-rms AC/DC Clamp Meter`,
    description: `The Fluke 374 True-rms Clamp Meter can read up to 600 V and 600 A in both ac and dc modes. Additionally, the 374 is compatible with the new iFlex flexible current probe (sold separately), which increases the measurement range to 2500 A ac and provides increased display flexibility, and improved wire access.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-FL374-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "clamp04",
    name: `Extech MA200: 400A AC Clamp Meter`,
    description: `2000 count LCD display
High accuracy for Current measurements
0.9" (23mm) jaw size accommodates conductors up to 300MCM
Continuity beeper and Diode test
Data Hold, Max Hold
Overload protection for all ranges
Overrange and low battery indicators
Autoranging with Auto Power Off
Complete with test leads, case and two AAA batteries`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EXMA200-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "clamp05",
    name: `Extech MA 430T 400A True RMS AC Clamp Meter + NCV`,
    description: `True RMS for better accuracy when measuring distorted waveforms
Functions include: AC Current, AC/DC Voltage, Resistance, Diode and Continuity
Built-in non-contact Voltage detector with LED alert
1.2" (30mm) jaw size for conductors up to 350MCM
Backlit LCD display
Data Hold, Auto Power Off and Low Battery indication
Complete with test leads, 9V battery, and soft carrying case`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EXMA430T-2T.jpg",
    rating: 4.7,
    stock: 22,
  },

  {
    id: "multi01",
    name: `Extech EX411: 8 Function True RMS Professional MultiMeter`,
    description: `The EX411 offers multiple functions so you can carry one meter into the field instead of several. The manual-ranging EX411 measures AC/DC voltage, AC/DC current, resistance, diode, and continuity, all with +/-0.5 percent basic accuracy. The unit has low current capability, measuring down to 0.1uA, and features input fuse protection and mis-connection warnings. A Type K thermometer is built in for surface or air temperature measurements. Comes with CAT III test leads, stand, hanging strap, holster with built-in test lead storage, Type K bead wire temperature probe, and battery.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EX411-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "multi02",
    name: `Fluke 114: Digital Multimeter`,
    description: `The Fluke 114 displays true-rms voltage and current readings with 6000 count resolution, and tests frequency, continuity and resistance. A large white LED backlight aids work in poorly lit areas. Its easy-open battery access door makes battery changes easy.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-FL114-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "thermo01",
    name: `Fluke 568: Infrared and Contact Thermometer`,
    description: `Two-in-one IR and contact thermometer with an innovative dot matrix display.With a simple, 3-button on-screen menu interface (in 6 languages) the Fluke 568 digital laser thermometer make even complex measurements easy. Quickly navigate advanced features to adjust emissivity, start data logging, or turn on and off alarms - with just a few pushes of a button.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-gdg.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "moisture01",
    name: `Extech MO25: Moisture Pen`,
    description: `Ideal for building restoration applications such as detecting water leakages inside walls, ceilings, and floors
Use on wall board, sheet rock, cardboard, plaster, concrete, mortar, paper, fabric, and more
Five dual color LEDs indicate 10 moisture levels:
Green LEDs 5%, 7%, 9%, 11%, 12%
Red LEDs 14%, 16%, 20%, 30%, 40%
Easy-to-use one button operation
Data Hold and Auto power off
Battery level check on power-up
Complete with protective cap, built-in pocket clip, and one AAA battery`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EXMO25-2T.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "gas01",
    name: `BW GasAlertMax XT II Multi Gas Detector`,
    description: `GasAlertMax XT II is the smart, simple, economical way to compliance. Workers feel safe and incidents are minimized so everyone will be able to do more. That means savings realized from business continuity and productivity.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/bw1.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "gas02",
    name: `BW Technologies BWC2-H BW Clip Single Gas H2S Monitor`,
    description: `The BW Clip is a single gas detector for H2S, CO, O2, and SO2 that is safe for use in hazardous environments. It runs continuously — no need for sensor replacement, battery replacement or battery charging. It operates up to three years maintenance-free, with great reliability and no downtime.`,
    
    category: "testing-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-180-BW-Clip-Single-Gas-Detector.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "gas03",
    name: `Extech CO10: Carbon Monoxide (CO) Meter`,
    description: `Checking co levels is as easy as pushing just The audible button on the model C010, which measures up to 1,000 ppm. An audible indicator increases in tone starting at 35 ppm. The higher the concentration of co, the faster the alarm will sound. Above 200 ppm, the alarm will sound continuous. A backlight on the display can be used for low light areas. Additional features include max hold, data hold, and auto-power-off. The meter comes complete with a 9-volt battery, protective holster, and case.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-CO10.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "gas04",
    name: `Extech EZ40: EzFlex™ Combustible Gas Detector`,
    description: `The Extech EZ40 EzFlex Combustible Gas Detector has a 16-inch gooseneck for easy access into hard to reach locations. The detector has a high sensitivity and a one hand operation with thumb controlled sensitivity adjustments to eliminate the background gas levels. It has a visible and audible alarm at 10% (LEL) lower explosive limited for methane. This gas detector will help you locate the smallest leaks. Complete with 3 C batteries.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-EZ40.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "rcd01",
    name: `Kyoritsu KEW 5410`,
    description: `• Measurement of RCD trip time
    Conducting testing of rated residual non-operating currents at
    × 1/2 Range, measuring RCD trip time at × 1 and × 5 Ranges. 
    • Measurement of trip out current
    Measuring trip out current by varying current automatically. 
    • Remote Test
    Enabling a user to hold the Test Leads with his both hands
    by locking the Test Button. Measurement will automatically
    start when the main voltage is detected. 
    • Voltage Measurement
    Carrying out a constant measurement of voltage in the
    stand-by mode at each Range. 
    • Auto-detection of Contact voltage
    Detecting the voltage to earth of Earth electrodes or
    Protective conductors during RCD test - when applying
    test currents - at measurement using EARTH in order to
    prevent electrical shocks caused by the damaged earth.
    Measurement will be ceased at AC50V or more. 
    • Dust- and Water-proof
    Dust- and Water-proof construction
    (designed to IEC 60529 IP54). 
    • Backlight
    Facilitating working at dimly illuminated locations.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-5410.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "rcd02",
    name: `Kyoritsu 5406A`,
    description: ` Custom microprocessor controlled for highest accuracy and reliability.
• 3 LEDs for checking correct wiring status.
• 0 and 180 degree phase angle switch permits quick tests and consistent readings.
• Digital read-out of tripping time.
• Constant current source circuitry ensures that a fluctuating mains voltage does not affect the accuracy of readings.
• Large custom digital display readout.
• Visual indication of reversed phase and neutral wiring at socket.
• Designed to IP54 Rating.
• Complies with IEC 61557
• Test of a large kind of RCD's: Standard, Selective, AC and A (DC sensitive breakers)`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-5406a_600dpi.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "anem01",
    name: `Extech AN10: Pocket Anemometer`,
    description: `The AN10 is a convenient pocket-sized Anemometer that is easy to use and easy to stow. Keep one handy for whenever you need to take a quick air velocity measurement from 80 to 3936ft/min (0.8 to 72km/h). Large, backlit LCD display and Double-molded side grip. Complete with 9V battery. CE certified.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-An10.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "anem02",
    name: `Extech 45158: Mini Thermo-Anemometer with Humidity`,
    description: `The 45158 is a waterproof pocket sized Thermo-Anemometer for Air Velocity, Temperature and Wind-chill measurements. Simultaneously display Air Velocity and Temperature or Wind-chill on the LCD screen. Selectable averaging function of 5, 10, or 13 second intervals. Fold up protective housing extends to 9 in. (229mm) for a better reach. Tripod mountable. Features Data Hold with Auto power off functions. Complete with battery and 43 in. lanyard.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/45118.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "anem03",
    name: `Kestrel 1000: Pocket Wind Meter`,
    description: `Here's the one that started it all! We developed the Kestrel 1000 Pocket Wind Meter in 1995 when NK’s co-founder, Richard Kellerman, needed a reliable wind meter for flying his glider. Over 15 years later, it looks a little slicker, and it still gives you the reliable, accurate wind measurements that you need. `,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-10000.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "anem04",
    name: `Kestrel 2000: Pocket Wind Meter`,
    description: `For those of you who like to know just how cold and windy it really is, the Kestrel 2000 Pocket Wind Meter is your reality check. Whether contemplating which wet suit the cold water warrants, or checking to see how low the wind chill can go in the blind, the Kestrel 2000 is the easy-to-use tool you need. `,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-2000.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "anem05",
    name: `Kestrel 3000: Pocket Wind Meter`,
    description: `Kestrel was the first to provide accurate relative humidity measurements from a hand-held weather meter, and the Kestrel 3000 features two patents on its humidity measuring sensors. A testament to the 3000’s accuracy: it’s become practically required equipment for wildland firefighters —users whose lives literally depend on the accurate weather data their Kestrel 3000 provides.`,
    
    category: "testing-equipment",
    
    image: "https://www.alalamain.com/images/products/2-3000.png",
    rating: 4.7,
    stock: 22,
  },

  // welding products
  {
    id: "arc01",
    name: `Arcair Gouging Electrodes Pointed Copperclad DC, 1/2 x 14-Inch`,
    description: `High grade, all purpose Copperclad pointed gouging electrode
Current type is direct current and the operating polarity is direct current electrode positive with reverse polarity
Amperage capacity is 800 to 1000 amps
Controlled copper coating improves electrical conductivity (for more efficient, cooler operation)`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-1:2.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "arc02",
    name: `Arcair Gouging Electrodes Pointed Copperclad DC, 1/8 x 12-Inch`,
    description: `Current Type is direct current
Operating polarity is direct current electrode positive with reverse polarity (DCEP)
Electrode size is 1/8 by 12 inches
Amperage capacity is 60-90 amps`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-1:8.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "arc03",
    name: `Arcair Gouging Electrodes Pointed Copperclad DC, 3/16 x 12-Inch`,
    description: `A high grade, all purpose Copperclad pointed gouging electrode
Controlled copper coating improves electrical conductivity (for more efficient, cooler operation)
Applications for these gouging electrodes are fabrication, maintenance, farms, and repair shops
Current type is direct current and the operating polarity is direct current electrode positive with reverse polarity
Amperage capacity is 200 to 250 amps`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/3-2-V485005-en_WW-MainView-01.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "arc04",
    name: `Arcair Gouging Electrodes Pointed Copperclad DC, 5/32 x 16-Inch`,
    description: `Applications include light-duty maintenance, farms and repair shops
Current type is direct current (DC)
Operating polarity is direct current electrode positive (DCEP) with reverse polarity
Electrode size pointed is 5/32 by 12 inches
Amperage capacity is 90-150 amps
`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-5:32.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "arc05",
    name: `Arcair 3/8X14 inch DCCC`,
    description: `Applications include fabrication, maintenance, repair shops and shipyards
Current type is direct current (DC)
Operating polarity direct current electrode positive (DCEP) with reverse polarity
`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-3:8.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "arc06",
    name: `Arcair 1/4 X 12 inch DCCC Pointed`,
    description: `Package of 50
Current type is direct current (DC)
1/4 inch by 12 inch electrode
Reverse polarity of Direct current electrode polarity
Applications for these electrodes includes light-duty maintenance, farms and repair shops

`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-1:4.jpg",
    rating: 4.7,
    stock: 22,
  },

  // MIG WELDING

  {
    id: "ming01",
    name: `Tweco Spray Master 250 Air Cooled MIG Gun`,
    description: `250 AMP 60% Duty cycle MIG gun available with Tweco, Miller, Lincoln and Euro style rear connector suitable for GMAW, FCAW, and aliminum GMAW applications

`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/2-V430060-en_WW-MainView-01.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming02",
    name: `Tweco Spray Master 350 Air Cooled Mig Gun`,
    description: `350 AMP 60% Duty cycle MIG gun available with Tweco, Miller, Lincoln and Euro-style rear connector suitable for GMAW, FCAW, and aluminium GMAW applications`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/2-V430061-en_WW-MainView-01.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming03",
    name: `Tweco Classic 1 Air Cooled Mig Gun`,
    description: `180 AMP 60% Duty cycle MIG gun available with Tweco/Miller/Lincoln/Euro-Kwik Style rear connectors. Suitable for light duty fabrication`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/2-V430040-en_WW-MainView-01.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming04",
    name: `Tweco Classic 3 Air Cooled MiG Gun`,
    description: `300 AMP 60 Duty cycle MIG gun available with Tweco/Miller/Lincoln/Euro-Kwik Style rear connectors. Suitable for medium/heavy duty fabrication`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/2-V430042-en_WW-MainView-01.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming05",
    name: `Miller M-100 GUN 10FT .030-.035`,
    description: `M-100 GUN 10FT .030-.035`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-M-100%20Gun.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming06",
    name: `Miller Mig Gun, 150 Amp`,
    description: `Mig Gun, 150 Amp`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-M-150%20Gun.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming07",
    name: `Weldcraft™ Torch Body, W-280 Super Cool™`,
    description: `Formerly known as the WP-280SC, the W-280 Super Cool™ is a reliable water-cooled torch designed for demanding, high-amperage applications.`,
    
    category: "welding-products",
    
    image:
      "https://www.alalamain.com/images/products/2-W-280%20Super%20Cool%20Torch.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming08",
    name: `Weldcraft™ W-500, Rubber, 25 ft., Torch Package`,
    description: `Formerly known as the WP-280SC, the W-280 Super Cool™ is a reliable water-cooled torch designed for demanding, high-amperage applications.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-W-500.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming09",
    name: `Weldcraft™ W-225 Pencil, Vinyl, 25 ft., Torch Package`,
    description: `Formerly known as the WP-280SC, the W-280 Super Cool™ is a reliable water-cooled torch designed for demanding, high-amperage applications.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-W-225%20Pencil.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming10",
    name: `Tweco 1-MPC Cable Connector`,
    description: `For use with 4, 2, 1 welding cables providing a positive cam action which optimizes interface between connector halves. The connectors are equipped with heat and oil resistant covers. The MPC connectors are furnished with zinc plated cover and ball-point cable screws.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-1MpC.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming11",
    name: `Tweco 1-MPC Cable Connector`,
    description: `For use with 4, 2, 1 welding cables providing a positive cam action which optimizes interface between connector halves. The connectors are equipped with heat and oil resistant covers. The MPC connectors are furnished with zinc plated cover and ball-point cable screws.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-1MpC.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming12",
    name: `Tweco 2-MPC Cable Connector`,
    description: `For use with 1/0, 2/0, 3/0 welding cables providing a positive cam action which optimizes interface between connector halves. The connectors are equipped with heat and oil resistant covers. The MPC connectors are furnished with zinc plated cover and ball-point cable screws.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-2.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming13",
    name: `Tweco 4-MPC Cable Connector`,
    description: `For use with 3/0 & 4/0 welding cables providing a positive cam action which optimizes interface between connector halves. The connectors are equipped with heat and oil resistant covers. The MPC connectors are furnished with zinc plated cover and ball-point cable screws.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-4.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming14",
    name: `Flange Wizard #WW - 16`,
    description: `The Small Wizard Pipe Wraps are 30”L x 2-5/8” W for pipes 1” to 6” in diameter.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-smallwrap.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming15",
    name: `Flange Wizard #WW- 17`,
    description: `The Medium Wizard Pipe Wraps are 60”L x 3-7/8”W for pipes 2” to 16” in diameter.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-mediumwraps.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming16",
    name: `Flange Wizard #WW - 17A`,
    description: `The Large Wizard Pipe Wraps are 120”L x 5-1/4”W for pipes 6” to 30” in diameter.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-largewrap.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming17",
    name: `Flange Wizard #WW - 19`,
    description: `The Extra-Large Wizard Pipe Wraps are 180”L x 7”W for pipes 12” to 48” in diameter.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-extra-largewrap.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "ming18",
    name: `KEEN KT-15 Portable Rod Oven (Dual Voltage 120v/240v)`,
    description: `These lightweight portable ovens are designed to protect electrodes during transfer from the holding oven to the job. They are light and easy to carry. The square shape gives these ovens greater stability vertically or horizontally. The KT-15 and KT-50 portable models are equipped with an "on" indicating light. All parts are warranted for one year.`,
    
    category: "welding-products",
    
    image: "https://www.alalamain.com/images/products/2-k15-2.jpg",
    rating: 4.7,
    stock: 22,
  },

  // ABRASIVES
  {
    id: "bond01",
    name: `PFERD Stationary Cut-Off Wheels`,
    description: `For the many different cutting tasks in industry and crafts, PFERD offers stationary cut-off wheels in two product lines with diverse special features in its new Tool Manual.`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-SCHRUPP_A_30_N_SG_INOX.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond02",
    name: `Makita Cutting Wheels (D-series) Depressed Center`,
    description: `A30S : For Metal C30S : For Masonry, Stone`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-cutting_wheel_d-series.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond03",
    name: `Makita Cutting Wheels (A-/B-series) Depressed Center`,
    description: `For fast, clean cuts, notching and slotting A30 : For Metal, C30 : For Masonry, Stone`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-cutting_wheel_A_B-series.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond04",
    name: `Makita Metal Cutting Wheel (B-series) Depressed Center`,
    description: `A36T- for Metal`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-B-21200.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond05",
    name: `Makita Thin Cutting Wheels (B-series) Flat Center`,
    description: `• Fast Cutting.
• No Burn Mark and Bur.
• Can Cut Steel, Stainless Steel, Aluminium & Copper.`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-thin_wheel_b_series.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond06",
    name: `Makita Thin Cutting Wheels (D-series) Flat Center`,
    description: `
• Higher cutting speeds, up to 2-3 times faster.
• Reduced wastage of work materials.
• No discolouration (rust) around stainless steel cutting edge.`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-thin_wheel_d_series.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond07",
    name: `Makita Grinding Wheels (B-series) Depressed center`,
    description: `A36P : For Metal * NEW`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-GRINDING_WHEEL_D_SERIES.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond08",
    name: `Makita Grinding Wheels (D-series) Depressed center`,
    description: `A24R : For Metal`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/4-3-2-GRINDING_WHEEL_D_SERIES.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond09",
    name: `Makita Grinding Wheels (A-series) Depressed center`,
    description: `For metal polishing and general flat grinding
A36P - for metal
WA36N - for stainless steel`,
    
    category: "abrasives",
    
    image:
      "https://www.alalamain.com/images/products/2-GRINDING_WHEEL_A_SERIES.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "bond10",
    name: `Makita Flexible Grinding Wheel (B-series)`,
    description: `Ideal for cordless tools (can be used with Ac grinders as well)
Low vibration
Less tapping
Needless to use backup pad`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-flexible_wheel.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated01",
    name: `Makita Zirconia Aluminium Flap Disc`,
    description: `For sanding and grinding metals and stainless steel. Sands flat, contoured or curved surfaces like a sanding disc.
Grain: Zircon
Application: Stainless Steelcon

`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com//images/products/TL14122-40.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated02",
    name: `Makita Silicon Carbide Flap Disc`,
    description: `Effective for sanding brick, stone & concrete.
Application: Silicon Carbide
Grain: Stone
`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-D_28042_10.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated03",
    name: `Makita Aluminium Oxide Flap Disc`,
    description: `For sanding metal, plastic, wood & steel.
Appliaction: Aluminium Oxide
Grain: Steel
`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-D-27040_2.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated04",
    name: `ATI Premium Flap Disc`,
    description: `Alumina, Zirconia & Ceramic T27 Flap discs. Strong, high quality and optimum performance for Carbon Steel, Alloy Steel , Cast Iron and Stainless Steel.
`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-ati%20fp.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated05",
    name: `ATI Swords Flap Disc`,
    description: `Alumina, Zirconia & Ceramic T27 Flap discs. Strong, high quality and optimum performance for Carbon Steel, Alloy Steel , Cast Iron and Stainless Steel.`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-at%202.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "coated06",
    name: `Cumi Flex Zirconia Flap Disc`,
    description: `Zirconia Type 27 & Type 29 flap disc for heavy weld removal and blending of all type of metal fabrication. Special formulation for Stainless Steel Sheet Metal application - results in cool cutting action - no discolouration.`,
    
    category: "abrasives",
    
    image: "https://www.alalamain.com/images/products/2-image-211.jpg",
    rating: 4.7,
    stock: 22,
  },

  // contact adhesives
  {
    id: "contactad01",
    name: `Loctite® Super Glue`,
    description: `Loctite® Super Glue is a fast bonding, super strength, instant adhesive with specially engineered formulas and applicators to bond virtually any material. Loctite Super Glue is ideal for small bonds that are subject to daily use and occasional harsh conditions.`,
    
    category: "adhesives",
    
    image:
      "https://www.alalamain.com/images/products/2-super-glue-family-3.png",
    rating: 4.7,
    stock: 22,
  },
  // epoxies
  {
    id: "epoxy01",
    name: `Loctite® Epoxy Clear™ Multi-Purpose`,
    description: `Loctite Epoxy Clear Multi-Purpose is a two-part adhesive consisting of an epoxy resin and a hardener. When mixed in equal volumes, the resin and hardener react to produce a tough, rigid, high strength bond in 5 minutes for most projects. Available in a convenient dual syringe which delivers equal parts of both components every time. Epoxy Clear Multi-Purpose can be used as an adhesive for a wide range of materials or as a versatile filler for gap filling, surface repairs and laminating. It does not shrink and is resistant to water and most common solvents. Product dries clear making it perfect for transparent repairs or jobs that require invisible seams. It can be tinted with earth pigments, cement or sand for color matching and can be sanded and drilled.`,
    
    category: "adhesives",
    
    image: "https://www.alalamain.com/images/products/2-epxy_clr.png",
    rating: 4.7,
    stock: 22,
  },
  // sealants
  {
    id: "sealants01",
    name: `Loctite® Clear Silicone Waterproof Sealant`,
    description: `Loctite Clear Silicone is a multipurpose adhesive and sealant which creates a waterproof, protective seal that is ideal for metal, glass, rubber, tile and porcelain. It is designed to be used indoors and outdoors to repair everything from electrical connections to seams on boots to stop leaks in wet weather. Loctite Clear Silicone can be used to bond or repair saltwater or freshwater aquariums.`,
    
    category: "adhesives",
    
    image: "https://www.alalamain.com/images/products/2-cntct_silicone.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "sealants02",
    name: `Loctite® 100% Silicone`,
    description: `Loctite Polyseamseal 100% Silicone Sealant is a 100% silicone formulation that creates a tough, watertight, mildew resistant seal. It makes fast work of sealing your kitchen and bath and has a fast-dry system that withstands water contact 2 hours after application. Polyseamseal 100% Silicone withstands temperature extremes of -65°F to 300°F making it ideal for Heating and Cooling (HVAC) applications and is highly resistant to ultraviolet light and other environmental elements. It forms a weatherproof bond to materials like glass, ceramics, aluminum, primed steel, and some plastics.`,
    
    category: "adhesives",
    
    image: "https://www.alalamain.com/images/products/2-pss_seal_silicone.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "sealants03",
    name: `GI200 Silicone Sealant Clear`,
    description: `Fast curing silicone sealant with excelent adhesion to glass, glazed surface, metal, most plastic, and coated surfaces.
It has superior physical properties designed to give outstanding adhesion performance.
Color: Clear, White, Brown
̉`,
    
    category: "adhesives",
    
    image: "https://www.alalamain.com/images/products/2-GI200%20silicone.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "sealants04",
    name: `G7200 Silicone Sealant White`,
    description: `G72OO silicone sealant is a one-component acetoxy silicone material that provides excellent bonding, weather ability and elasticity for general purpose sealing and bonding.
Color: White ,Brown, Graỷ`,
    
    category: "adhesives",
    
    image: "https://www.alalamain.com/images/products/2-G7200%20silicone.jpg",
    rating: 4.7,
    stock: 22,
  },

  {
    id: "accessories-pipe01",
    name: `Tangit PVC-U/PVC-C/ABS cleaner`,
    description: `For PVC-U, PVC-C, ABS
1 litre tin`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/2-web381x381.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe02",
    name: `Tangit DTX Special Solvent Cement`,
    description: `Special solvent cement for critical media 
For PVC-U, PVC-C
Max. PN10/d140
Use cleaner for PVC-U/C, ABS
Tin -  0.500 kg
`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com//images/products/dtx.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe03",
    name: `Tangit Solvent Cement for PVC-U`,
    description: `Tin  - 0.250, 0.500 and 1.000 kg (Net)
0.125 kg tube`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/2-pvc%20u.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe04",
    name: `Tangit ABS Solvent Cement`,
    description: `TIn - 0.65 kgs`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/2-abs.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe05",
    name: `Tangit PVC-C Solvent Cement`,
    description: `0,65 kg can (net)`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/4-3-2-web381x381.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe06",
    name: `Tangit Express Solvent Cement for PVC-U`,
    description: `Fast curing solvent cement (15Min./bar @ 20°C)
Ideal for repair work
For solvent cementing of joints up to d110
Tin à 0.500 kg`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/6-5-4-3-2-web381x381.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "accessories-pipe07",
    name: `Tangit PVC-U Pipe Adhesive`,
    description: `Fast curing solvent cement (15Min./bar @ 20°C)
Ideal for repair work
For solvent cementing of joints up to d110
Tin à 0.500 kg`,
    
    category: "pipes",
    
    image:
      "https://www.alalamain.com/images/products/2-128-thickbox_default.jpg",
    rating: 4.7,
    stock: 22,
  },
  // pipes clamps
  {
    id: "clamp-pipes-01",
    name: `Pipe Rubber Clamp`,
    description: `Fast curing solvent cement (15Min./bar @ 20°C)
Ideal for repair work
For solvent cementing of joints up to d110
Tin à 0.500 kg`,
    
    category: "pipes",
    
    image: "https://www.alalamain.com/images/products/2-rubber_clamp.jpg",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "drilling-01",
    name: `Makita Wood Drill Bits`,
    description: `Standard 3 Point Wood Bit :

• These bits are excellent when applied to hard or soft wood. 
• They have a polished steel body with a centering point.

Auger Bit :

• The auger bit range features traditional 250mm or 450mm lengths 
• The bits come in sizes from 6mm to 30mm and are self feeding with a high cutting rate.

Spade (Flat) Bit :

• Contractor quality flat bits, suitable for hard, soft woods and on site use
• Diameters 6 - 36mm. Hex shank for high torque application.

`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/3-2-wood_bit.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "drilling-02",
    name: `Makita Glass and Tiles Drill Bits`,
    description: `Glass and Tiles Drill Bits (¼" Hex Shank)`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/2-glass_bit.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "drilling-03",
    name: `Makita Metal Drill Bits`,
    description: `HSS-G Metal Drill Bits :
• Ground point drill bits suitable for ferrous and non-ferrous metals, offering good drilling speeds and extended working life. 
• Available in 1.5mm - 13mm in multipacks. 
• Multipack Ground Point HSS drills
1.5mm - 8mm 10pc pack 
8.25mm - 13mm 5pc pack`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/D-29941.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "drilling-04",
    name: `MMakita Co-Metal Drill Bits`,
    description: `HSS Co-Metal Drill Bits : HSS drill bits with 5% cobalt content and high temperature brazing for easy drilling of high alloy or high tensile steels. Body ground for further accuracy and to reduce resistance. Use on mild, stainless and high alloy steels and difficult to machine materials, welded seams and car body work. Ideal for stainless steel and aluminium.`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/3-2-HSS_Drill_Bits.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "grinder-01",
    name: `Makita Bench Grinder Wheel`,
    description: `
A: To grind mild steel, carbon steel, etc.
GB: To grind hardened steel.	 
 `,
    
    category: "accessories",
    
    image:
      "https://www.alalamain.com//images/products/Bench_grinding_wheel.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "grinder-02",
    name: `Makita Straight Cup Wheel for Stone Grinder`,
    description: `
Dia. x Thickness x Hole dia.
125 x 70 x 22 mm`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/2-Straight_cup_wheel.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "brushes-01",
    name: `Makita Wire Cup Brush (Crimped cup)`,
    description: `• Ideal for flat surfaces, edges, light rust removal.
• 100mm
• 115mm, 125mm, 150mm, 180mm
• 180mm, 230mm`,
    
    category: "accessories",
    
    image: "https://www.alalamain.com/images/products/2-wire_brush_crimped.gif",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "brushes-02",
    name: `Makita Wire Brush Twisted (Knot Cup)`,
    description: `• Can be used for heavy duty cleaning of large metal surfaces, rust and paint removal, Removal of weld scale and corrosion, surface preparation for painting and welding, Auto body finish and repair.
For Model: M10: 100mm 
M14: 115mm or higher`,
    
    category: "accessories",
    
    image:
      "https://www.alalamain.com/images/products/2-D-24153-KNOTTED-WIRE-CUP-BRUSH-60mm-M14-Makita.jpg",
    rating: 4.7,
    stock: 22,
  },

  // WIRE ROPE GRIPS

  {
    id: "wireropgrip1",
    name: `Toyo Wire Rope Grips`,
    description: `Toyo Wire Rope Grips`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-wireropegrips.png",
    rating: 4.7,
    stock: 22,
  },

  // HOISTS

  {
    id: "hoists1",
    name: `Toyo Manual Chain Hoist`,
    description: `• Capacity ranges from 0.5T to 50T.
• Automatic double pawl braking system.
• Double cover protection.
• Light weight robust construction.
• Low effort to lift maximum load.
• Extra thick asbestos free friction discs.
• Fully forged hooks are fitted with safety latches as standard.
• Galvanized Zinc plated hand chain as standard.
• Sealed bearing.
• The hoist is fitted with high grade 80 alloy load chain.
• Complies with EC Council Directive 2006/42/EC, ASME B30.
• Low effort to lift maximum load.`,
    
    category: "rigging-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-manual-chain-hoist-model-df.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "hoists2",
    name: `Toyo Manual Lever Hoist`,
    description: `• TOYOLIFT lever hoist is universal, manual hoist for tensioning and lashing in any direction.
• The ratchet lever hoist features compact design and robust, deep drawn, stamped steel construction.
• High quality materials ensure light weight without infringing reliability.
• Asbestos free brake, holding load at any desired height.
• Top & Bottom hooks are fitted with safety latches as standard.
• The load chain can be pulled freely and easily through the hoist in both directions to attach the load or to tension the chain.
• Short hand lever with rubber grip.
• Hand lever operates with little effort due to optimal gear ratio.
• Drop forged steel suspension & load hooks are heat treated.
• The hoist is fitted with high grade 80 alloy load chain.
• Complies with EC Council Directive 2006/42/EC, ASME B30.`,
    
    category: "rigging-equipment",
    
    image:
      "https://www.alalamain.com/images/products/2-manual-lever-hoist-model-df.png",
    rating: 4.7,
    stock: 22,
  },

  // BUCKLES

  {
    id: "buckles1",
    name: `Toyo Turn Buckles`,
    description: `• Proof Load is 2 times of working load limit and minimum breaking load 5 times of working load limit.
• All TOYOLIFT turn buckles are drop forged, heat treated and hot dipped galvanised.
• Lock nuts are supplied as standard on both ends of terminal.
• Jaw terminals are supplied with bolt & nut with cotter pin.
• Turn buckles are recommended for straight or in-line pulls only.
• Body with ‘TL’ marking and test certificate will be supplied.`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-turnbuckle2s.jpg",
    rating: 4.7,
    stock: 22,
  },
  // clamps

  {
    id: "clamps1",
    name: `Horizontal Pipe Lifting Clamp`,
    description: `• For horizontal lifting and transportation of steel and concrete pipes.
• Compact shape and relatively low own weight with a high lifting capacity.
• The surface is equipped with Teflon.
• The TOYOLIFT clamp will be supplied per pair only.
• Teflon cover is easy to change.`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-pipeliftingclamp.png",
    rating: 4.7,
    stock: 22,
  },
  {
    id: "clamps2",
    name: `Horizontal Plate Lifting Clamp`,
    description: `• For horizontal lifting and transportation of steel.
• The compact shape and relative light low own weight with a high lifting capacity.
• The TOYOLIFT lifting clamps must always be used in pairs (or multiples thereof).
• Lifting capacity and jaw opening are clearly engraved in the body.
• The FHS-X has an enlarged jaw opening.`,
    
    category: "rigging-equipment",
    
    image: "https://www.alalamain.com/images/products/2-plateliftingclamp1.png",
    rating: 4.7,
    stock: 22,
  },

  // Measuring Tools - Tape Measures

  {
    id: "measuring1",
    name: "Mitutoyo Digimatic Micrometer 0-25mm",
    description: `A basic, cost-effective Mitutoyo digital micrometer. The highly stable frame incorporates a heat shield to preserve accuracy over extended measuring sessions. A ratchet stop guarantees repeatable measurement.

Simply measures 0 through 25mm with resolution to 0.001mm.
Provided only with an origin-set button for easy origin setting.
A ratchet stop or friction thimble for a constant measuring force.
Measurement readout with large characters on the LCD screen.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-293-831-30.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring2",
    name: "Mitutoyo Micrometer 0-25mm",
    description: `A Mitutoyo basic, cost effective, non-digital micrometer with a ratchet stop to guarantee repeatable measurement.
Hammertone-green, baked-enamel finished frame. 
Ratchet Stop or Friction Thimble for excellent repeatability.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-103-137_2.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring3",
    name: `Mitutoyo ABSOLUTE Digimatic Depth Gauge 0-300mm / 0-12"`,
    description: `A Mitutoyo digital depth gauge with a 3.93" base. Hardened stainless steel construction. ABSOLUTE System scale for error free, high-speed measurement. SPC data output.
The ABSOLUTE Digimatic Depth Gauge keeps track of the origin point (once set) for the entire life of the battery.
Base and measuring faces are harderned and micro-lapped.
Optional wider extension bases are available.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-571-213-10.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring4",
    name: `Mitutoyo Standard Dial Indicator 10mm (1mm)`,
    description: `Geared for general measurement applications, this multi-revolution dial indicator allows measurement in either direction with its dual-reading scale.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-2046S-01.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring6",
    name: `Mitutoyo Compact Dial Indicator 5mm (1mm)`,
    description: `Geared for general measurement applications, this multi-revolution dial indicator allows measurement in either direction with its dual-reading scale.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-1410s.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring5",
    name: `Mitutoyo ABSOLUTE Digimatic Indicator ID-C 25mm / 1"`,
    description: `Similar to the Series 2 type dial indicator, this digital indicator includes the ABSOLUTE system scale for error free and high-speed measurements. Also has SPC data output.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-543-471b_2.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring7",
    name: `Mitutoyo Long Stroke Dial Indicator 30mm (1mm)`,
    description: `Geared for general measurement applications, this shockproof, multi-revolution dial indicator allows measurement in either direction with its dual-reading scale. It aids smooth and precise operation by providing the lowest friction possible`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-zoom_2330S-10.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring8",
    name: `Mitutoyo ABSOLUTE Digimatic Slim Body Economy Indicator ID-S 12.7mm / .5`,
    description: `This digital indicator offers a long battery life making it economical and ideal for applications where access is restricted such as those seen in measuring jigs.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-543-782_large.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "measuring9",
    name: `Mitutoyo Extra Long Stroke Large Diameter Dial Indicator 80mm (1mm)`,
    description: `A Mitutoyo shockproof, multi-revolution dial indicator suited to general measurement applications in a vertical orientation. The jewelled movement provides lowest friction and stiction for smooth and precise operation.
Dial gauges with a large-diameter dial face to ease reading.
All types come with limit pins and a bezel clamp as standard.
Use in a vertical position only.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-3060s-19.jpg",
    rating: 4.8,
    stock: 60,
  },

  // CALIPERS

  {
    id: "calipers1",
    name: `Mitutoyo High Accuracy Vernier Caliper 0-150mm / 0-6"`,
    description: `A Mitutoyo dual-scale vernier caliper equipped with standard outside and inside jaws. Hardened stainless steel construction with easy-to-read, satin-chromed scales.
Plain and basic design.
Can measure outside and inside diameter (OD and ID), depth, and steps.
The small vernier face angle (14°) provides easy reading.
Clamping screw on slider.
`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-530-312.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "calipers2",
    name: `Mitutoyo High Accuracy Vernier Caliper 0-200mm / 0-8"`,
    description: `A Mitutoyo dual-scale, high accuracy/resolution vernier caliper equipped with standard outside and inside jaws. Hardened stainless steel construction with easy-to-read, satin-chromed scales.
Plain and basic design.
Can measure outside and inside diameter (OD and ID), depth, and steps.
The small vernier face angle (14°) provides easy reading.
Clamping screw on slider.
`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-530-118.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "calipers3",
    name: `Mitutoyo High Accuracy Vernier Caliper 0-300mm / 0-12"`,
    description: `A Mitutoyo dual-scale, high accuracy/resolution vernier caliper equipped with standard outside and inside jaws. Hardened stainless steel construction with easy-to-read, satin-chromed scales.
Plain and basic design.
Can measure outside and inside diameter (OD and ID), depth, and steps.
The small vernier face angle (14°) provides easy reading.
Clamping screw on slider.
`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-530-119.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "calipers4",
    name: `Mitutoyo ABSOLUTE AOS Digimatic Caliper 0-150mm / 0-6"`,
    description: `A Mitutoyo digital caliper equipped with standard outside and inside jaws. Hardened stainless steel construction and equipped with the latest electromagnetic ABSOLUTE AOS System scale for error free, high-speed measurement.
`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-500-196-30.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "calipers5",
    name: `Mitutoyo ABSOLUTE AOS Digimatic Caliper 0-200mm / 0-8"`,
    description: `A Mitutoyo digital caliper equipped with standard outside and inside jaws. Hardened stainless steel construction and equipped with the latest electromagnetic ABSOLUTE AOS System scale for error free, high-speed measurement.
`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-500-197-30.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "calipers6",
    name: `Mitutoyo ABSOLUTE Digimatic Coolant Proof Caliper 0-300mm / 0-12"`,
    description: `A Mitutoyo waterproof digital caliper suitable for use in the presence of coolant or cutting oil. Hardened stainless steel construction and equipped with standard outside and inside jaws. ABSOLUTE System scale for error free, high-speed measurement. SPC data output.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-500-764-10.jpg",
    rating: 4.8,
    stock: 60,
  },

  // granite surface plate
  {
    id: "granite1",
    name: `Granite Surface Plate 450 x 450 x 75mm Grade 1`,
    description: `A Mitutoyo surface plate made from fine-grained black granite. This material has many advantages compared to cast iron in this application, such as being non-magnetic, rustless, twice as hard, non-burr-forming and not prone to stickiness.`,
    
    category: "measuring-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-granite-plate_no_stand_13.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "granite2",
    name: `Granite Surface Plate 600 x 600 x 75mm Grade 1`,
    description: `A Mitutoyo surface plate made from fine-grained black granite. This material has many advantages compared to cast iron in this application, such as being non-magnetic, rustless, twice as hard, non-burr-forming and not prone to stickiness.`,
    
    category: "measuring-tools",
    
    image:
      "https://www.alalamain.com/images/products/2-granite-plate_no_stand_11.jpg",
    rating: 4.8,
    stock: 60,
  },

  // thickness gauge

  {
    id: "thickness-gauge1",
    name: `Mitutoyo ABSOLUTE Digimatic Thickness Gauge 0-12mm / 0-.47"`,
    description: `A Mitutoyo high-resolution digital-indicator based instrument designed for quick and efficient measurement of small dimensions. Ideally suited for precise measurement of the thickness of paper, film, wire, sheet metal and similar materials. The convenient grip handle, thumb trigger and spring-loaded plunger make the instrument easy to use.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-547-400s.jpg",
    rating: 4.8,
    stock: 60,
  },

  // MAGNETIC STANDS

  {
    id: "magnetic-stands01",
    name: `Mitutoyo Magnetic Stand`,
    description: `A magnetic Mitutoyo stand that uses a switchable permanent magnet for convenient mounting onto flat iron or steel surfaces. The arm can be mechanically locked in any position using the knob on the upright. Useful for holding dial indicators or dial test indicators during alignment operations.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-7010sn.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "magnetic-stands02",
    name: `Mitutoyo Magnetic Stand`,
    description: `A magnetic Mitutoyo stand that uses a switchable permanent magnet for convenient mounting onto flat iron or steel surfaces. The arm can be mechanically locked in any position using the knob on the upright. Useful for holding dial indicators or dial test indicators during alignment operations.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com//images/products/7011sn.jpg",
    rating: 4.8,
    stock: 60,
  },

  // DIAL BORE GAUGE

  {
    id: "bore01",
    name: `Mitutoyo Dial Bore Gauge 6-10mm`,
    description: `A Mitutoyo dial bore gauge designed exclusively for small-hole ID measurement using interchangeable anvils. High-accuracy measurement is aided by a grip that reduces heat transfer from the operator’s hand.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-511-211.jpg",
    rating: 4.8,
    stock: 60,
  },

  {
    id: "bore-02",
    name: `Mitutoyo Dial Bore Gauge 10-18.5mm`,
    description: `A Mitutoyo dial bore gauge designed exclusively for small-hole ID measurement using interchangeable anvils. High-accuracy measurement is aided by a grip that reduces heat transfer from the operator’s hand.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-511-204.jpg",
    rating: 4.8,
    stock: 60,
  },

  // Telescopic gauge
  {
    id: "tele-01",
    name: `Mitutoyo Telescoping Gauge Set 8-150mm (Set of 6)`,
    description: `A set of six Mitutoyo transfer gauges that enables the diameter of holes, bores or grooves to be measured with outside micrometers or calipers. In operation the spring loaded plunger of a gauge is allowed to expand within the feature to be measured and then locked in place using the knurled rotary control on the end of the handle. In practice some manipulation is necessary to ensure that the minimum size has been captured, after which the gauge is carefully withdrawn so that the dimension across the contact surfaces can be measured.`,
    
    category: "measuring-tools",
    
    image: "https://www.alalamain.com/images/products/2-155-905.jpg",
    rating: 4.8,
    stock: 60,
  },

  // Industrial Supplies
  {
    id: "indus-01",
    name: `Markal Valve Action® Paint Marker`,
    description: `Valve Action is a fast-drying liquid paint marker that provides long-lasting, wear- and weather-resistant marks that are safe for almost any surface. As the most versatile liquid paint marker in the world, the xylene-free paint reduces user health risks and is available in 18 bold and fluorescent colours for accurate mark identification.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/valveaction_app.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-02",
    name: `Markal PRO-LINE HP Low Corrosion Marker`,
    description: `PRO-LINE HP is a liquid paint marker developed for superior marking performance on oily and greasy surfaces and to contain low levels of chlorides, halogens, low melting point metals, and sulfur. Available in five colours, the low corrosion paint formula is safe for use on stainless steel, alloys and other superalloy metals and will not contribute to unwanted corrosion, degradation, or pitting from use.
Available Colours: Red, Yellow, Black, Silver and White`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-prolinehp_app.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-03",
    name: `Nissen Low Chloride Feltip Paint Marker`,
    description: `All of our Low Chloride Feltip Paint Markers meet or exceed the requirements of the United States Energy Research and Development Administration’s RDT Standard F-7-3T. An independent laboratory’s Certification of Analysis is traceable to the marker and is available for all of our Low Chloride Markers. All markers intended for use on Stainless Steel must have only trace amounts of halogens, sulfur, and low-melting metals to prevent cracking or weakening of the metal.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-04",
    name: `Nissen Solid Barrel Metal Markers 1/8″`,
    description: `The Nissen Solid Barrel Metal Marker uses an unbreakable aluminum barrel, stainless steel point and unique pump mechanism to dispense high quality, permanent paint. The marker is convenient to carry in your pocket.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen%202.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-05",
    name: `Nissen Jumbo Feltip Paint Marker (5/16″)`,
    description: `The Jumbo Nissen Feltip Paint Marker dispenses a fast-drying, high-gloss enamel paint for permanent marking, lettering, coding and numbering of both interior and exterior surfaces. The markers are easy-to-use and convenient to carry in your pocket.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen%203.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-06",
    name: `Nissen Water Removable Feltip Paint Marker 1/8 In.`,
    description: `The Nissen Water Removable Feltip Paint Marker produces permanent paint marks which can be removed from non-porous surfaces with plain water.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen%204.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-07",
    name: `Nissen Low Chloride Metal Marker 1/8″`,
    description: `The Nissen Low Chloride Metal Marker was specifically designed to safely mark metals which are attacked by halogens and low melting metallics. It will not impart contaminants that could cause cracking or weakening of the metal, especially with heat applications such as welding or cutting. `,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen%205.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "indus-08",
    name: `Nissen Marker - A Solid Paint Marker`,
    description: `The smooth marking Solid Paint Marker uses specially formulated paint for long-lasting marks on metal, wood, plastic, glass, and many other surfaces.  The durable plastic barrel protects the marker from breaking and the bright, easy-to-see marks won't chip, peel, fade, or rub-off.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/2-nissen%206.jpg",
    rating: 4.8,
    stock: 60,
  },
  // TEMPERATURE INDICATORS
  {
    id: "temp-ind01",
    name: `Tempilstik®`,
    description: `Providing accuracy, confidence and compliance for over 80 years, Tempilstik is the original temperature-indicating stick with the best combination of precision and convenience for surface temperature measurement. Specially engineered for accurate temperature indication in pre-heating, interpass and post-weld heat treating applications, Tempilstik is the industry's leading choice for use in the most critical jobs.`,
    
    category: "industrial-supplies",
    
    image:
      "https://www.alalamain.com/images/products/2-product-main-tempilstik4.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "temp-ind02",
    name: `Tempstik® Test Kit`,
    description: `Tailor-made for welding inspectors, instructors and supervisors, Tempstik Test Kit is an essential, one-stop tool that provides you with all the information needed for determining the proper temperatures for welding, heat treating, soldering, brazing and other operations involved in the fabrication of most metals.`,
    
    category: "industrial-supplies",
    
    image:
      "https://www.alalamain.com/images/products/2-product-main-tempilstik-kit.jpg",
    rating: 4.8,
    stock: 60,
  },
  {
    id: "temp-ind03",
    name: `Tempilaq® Indicating Liquids`,
    description: `Tempilaq® Indicating coating is an efficient, convenient and affordable method to verify the achievement of a specific temperature on a wide range of surfaces under dynamic conditions. Easily painted on any surface, Tempilaq® leaves an irreversible mark that is optimal for heat-treating, preventive maintenance and any other temperature sensitive applications.`,
    
    category: "industrial-supplies",
    
    image:
      "https://www.alalamain.com/images/products/2-product-main-tempilaq.jpg",
    rating: 4.8,
    stock: 60,
  },
  // SPECIALITY COATINGS
  {
    id: "coatingsS",
    name: `Tempil Bloxide® Weldable Primer`,
    description: `Bloxide is a versatile weldable primer with a unique aluminium-based formula that eliminates cleaning or removal before welding, thus saving time and labour costs. Enhanced by corrosion preventative features, Bloxide can be applied to a wide range of metals for extended periods of storage, assisting in producing X-Ray quality welds.`,
    
    category: "industrial-supplies",
    
    image: "https://www.alalamain.com/images/products/product-main-bloxide.jpg",
    rating: 4.8,
    stock: 60,
  },
];

// Mock data service functions
export const getCategories = () => {
  return Promise.resolve(categories);
};

export const getSubcategories = (categoryId?: string) => {
  // Subcategories not implemented
  return Promise.resolve([]);
};

export const getProducts = (categoryId?: string, subcategoryId?: string) => {
  let filteredProducts = [...products];

  if (categoryId) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categoryId
    );
  }

  // Subcategory filtering removed - not implemented
  return Promise.resolve(filteredProducts);
};

export const getFeaturedProducts = () => {
  return Promise.resolve(products.filter((product) => product.featured));
};

export const getProductById = (id: string) => {
  const product = products.find((product) => product.id === id);
  return Promise.resolve(product);
};

export const getCategoryById = (id: string) => {
  const category = categories.find((category) => category.id === id);
  return Promise.resolve(category);
};

export const getSubcategoryById = (id: string) => {
  // Subcategories not implemented
  return Promise.resolve(null);
};
