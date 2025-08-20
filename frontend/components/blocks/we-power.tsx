import React from 'react'
import Highlight from '../ui/highlights'

const WePower = () => {
    return (
        <div className='mx-auto container mt-24 px-4'>
            <div className='flex md:flex-row flex-col md:items-center md:justify-between'>
                <div className='flex flex-col md:w-1/2 gap-4'>
                    <Highlight text='WHAT WE POWER' className='text-custom-text-100 ' />
                    <p className='text-4xl md:text-5xl tracking-tight text-custom-text-100'> Empowering Progress <br /> Across the UAE and Beyond</p>
                </div>
                <div className='md:w-1/2'>
                    <p className="text-base text-custom-text-200 mt-4 leading-relaxed w-full text-muted-foreground text-left">
                    VMC Group maintains the highest standards in food safety and quality control, ensuring every product meets international standards.
                    </p>
                </div>
            </div>
            <video className='rounded-3xl mt-16 w-full' src={"/shake.mp4"} autoPlay muted loop />

        </div>
    )
}

export default WePower