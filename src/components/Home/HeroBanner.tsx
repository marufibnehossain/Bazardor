import React from 'react';
import Image from 'next/image';
import BanglaDate from '../small-components/BanglaDate';

const HeroBanner = () => {
    return (
        <div className="bg-surface border border-[#E1E8E1] rounded-[24px] px-4 py-3">
            <div className="w-full flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-5">
                <Image
                width={334}
                height={334}
                alt="Tailwind CSS hero component"
                src='/bazar-hero.png'
                className="max-w-100 rounded-lg max-sm:w-full max-sm:h-auto"
                />
                <div className="text-center sm:text-left w-full sm:w-1/2 flex flex-col items-start max-sm:items-center gap-5">
                    <span className='text-sm py-1 px-3 bg-[#E2F1E7] rounded-full font-bold text-primary'><BanglaDate className='text-sm font-bold text-primary' /></span>
                    <h1 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
                    <p className="max-sm:text-xs text-heading opacity-70">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>
                    <a href='#all-products' className="btn-global mt-2">সব পণ্য দেখুন</a>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;