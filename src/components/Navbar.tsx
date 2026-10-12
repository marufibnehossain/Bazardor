import React from 'react';
import { getCategories } from '@/services/data';
import { ICategory } from '@/types/category.type';
import { Link } from '@heroui/react/link';
import { BsCart4 } from 'react-icons/bs';
import BanglaDate from './small-components/BanglaDate';
import Ticker from './small-components/Ticker';
import ActiveLink from './small-components/ActiveLink';
import AccountMenu from './small-components/AccountMenu';

const categoryData = await getCategories();

const Navbar = () => {
    return (
        <header className='w-full bg-surface'>
            <nav className='w-full'>
                <div className='w-full px-[5vw] border-b border-background'>
                    <div className='max-w-7xl mx-auto flex items-center  justify-between py-3'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2.5 bg-primary rounded-lg'><BsCart4 className='text-white' /></div>
                            <div>
                                <Link href='/' className='sm:text-xl text-lg font-bold hover:no-underline'>বাজার দর</Link>
                                <BanglaDate className="sm:text-xs text-[10px] text-heading" />
                            </div>
                        </div>
                        <AccountMenu />
                    </div>
                </div>
                <div className='w-full px-[5vw] border-b border-background'>
                    <ul className="max-w-7xl mx-auto flex items-center justify-start sm:gap-4 gap-2 sm:py-3 py-1 overflow-x-auto scrollbar-hide!">
                        {categoryData.map((category: ICategory) => (
                            <li key={category.id}>
                                <ActiveLink
                                    slug={category.slug}
                                    icon={category.icon}
                                    name={category.nameBn}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Ticker />
            </nav>
        </header>
    );
};

export default Navbar;