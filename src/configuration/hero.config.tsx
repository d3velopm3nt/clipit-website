import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const heroConfig = {
    title:  (
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Don't get  {' '}<span className='text-primary'>Stuck</span>{' '} on the road 🖐
      </h1>
    ),
    description: (
        <p className="mt-5 max-w-prose sm:text-lg">
        Use this text to describe your service or product that you want the user to pay attention to. This does not have to be alot of words just powerful enough to go with your Hero text.
        </p>
    ),
    callToAction:  (
        <Link href="/" target="_blank" className="flex flex-row m-5  btn btn-primary">
        Get Started
        <ArrowRight className="ml-2 h-4 w-5"/>
      </Link>
    )
};