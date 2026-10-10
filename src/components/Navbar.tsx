import React from 'react';
import { getCategories } from '@/services/data';
import { ICategory } from '@/types/category.type';
import { Link } from '@heroui/react/link';
import { BsCart4 } from 'react-icons/bs';
import BanglaDate from './small-components/BanglaDate';

const categoryData = await getCategories();

const Navbar = () => {
    return (
        <header className='sticky top-0 z-10 w-full bg-surface'>
            <nav className='w-full'>
                <div className='w-full px-[5vw] border-b border-background'>
                    <div className='max-w-7xl mx-auto flex items-center  justify-between py-3'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2.5 bg-primary rounded-lg'><BsCart4 className='text-white' /></div>
                            <div>
                                <Link href='/' className='text-xl font-bold'>বাজার দর</Link>
                                <BanglaDate className="text-xs text-heading" />
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-surface rounded-2xl z-1 mt-3 w-52 px-5 py-4 border border-stroke flex flex-col gap-3">
                                <li>
                                <a className="flex flex-col gap-0.5 items-start">
                                    <h2 className='text-sm font-bold text-heading'>Rezwan Ahmed</h2>
                                    <span className="text-xs text-heading opacity-70">rezwanahmed@gmail.com</span>
                                </a>
                                </li>
                                <li><Link href="/profile">👤 আমার প্রোফাইল</Link></li>
                                <li className='text-danger'><Link href="/logout">↩ সাইন আউট</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full px-[5vw] border-b border-background'>
                    <ul className="max-w-7xl mx-auto flex items-center justify-start gap-4 py-3 overflow-x-auto">
                        {categoryData.map((category: ICategory) => (
                            <li key={category.id}>
                                <Link href={`/${category.slug}`}>{category.icon} {category.nameBn}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;