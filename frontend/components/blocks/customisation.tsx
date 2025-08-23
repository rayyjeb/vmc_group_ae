import React from 'react'
import Highlight from '../ui/highlights'
import Image from 'next/image'

const CustomisationSection = () => {
  return (
    <div className='mt-24'>
      <div className='container mx-auto lg:pt-24'>
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          {/* Text content on the left */}
          <div className='flex-1 flex flex-col gap-4'>
            <Highlight text="CUSTOM BRANDING" />
            <p className="text-4xl md:text-5xl text-custom-text-100  tracking-tighter text-left">
              Customised Packaging Solutions
            </p>
            <p className="text-base text-custom-text-100/80 mt-4 leading-relaxed text-muted-foreground text-left">
              We offer fully customized packaging solutions to suit your specific requirements. From unique designs to tailored sizes, we ensure that your products are packaged perfectly, reflecting your brand identity and meeting your exact needs.
            </p>
          </div>

          {/* Image on the right */}
          <div className='w-full lg:flex-1 flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-sm lg:max-w-xl h-64 md:h-80 lg:h-96'>
              <Image
                src="/custom-pack.png"
                alt="Custom packaging solutions"
                fill
                className='object-cover rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomisationSection