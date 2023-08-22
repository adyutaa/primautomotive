"use client"
import React from 'react'
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
          <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Cari dan booking mobil idaman anda dengan Cepat dan Mudah!
                </h1>
                
                <p className='hero__subtitle'>
                    Kami menyediakan berbagai macam mobil yang anda butuhkan untuk keperluan anda
                    dengan alur sewa yang effortless dan mudah.
                </p>

                <CustomButton
                    title="Jelajahi Mobil"
                    containerStyles="bg-primary-blue text-white 
                    rounded-full mt-10 hover:bg-primary-blue-hover"
                    handleClick={ handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt="hero" fill className="object-contain" />
                </div>
                <div className='hero__image-overlay'/>
 
            </div>
        </div>
    )
}

export default Hero;