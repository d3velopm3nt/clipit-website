import MaxWidthWrapper from '@/components/layout/max-width-wrapper'
import { heroConfig } from '@/configuration/hero.config'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroPage1 = () => {
  return (
    <>
    <div className="background">
   <div></div>
   <div></div>
   <div></div>
    </div>
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        {heroConfig.title}
        {heroConfig.description}
        {heroConfig.callToAction}
    </MaxWidthWrapper>
    </>
  )
}

export default HeroPage1