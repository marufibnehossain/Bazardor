import React from 'react';
import ProductCard from './ProductCard';
import { IProduct } from '@/types/product.type';

// const productData = await getProducts(); 

// const risingProducts = productData.filter((product: IProduct) => product.change.dir === "up").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);

interface ProductLibraryProps {
  icon?: string;
  title?: string;
  desc?: string;
  products: IProduct[];
  id?: string
}

const ProductLibrary = ({ products, icon, title, desc, id }: ProductLibraryProps) => {
    return (
        <div id={id} className='pt-10'>
            <h2 className='sm:text-xl text-lg font-bold'><span className={`${icon === '▲' ? 'text-danger' : 'text-success'} text-base`}>{icon}</span> {title}</h2>
            <p className='text-sm mt-3 mb-1'>{desc}</p>

            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-3'>
                {products.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductLibrary;