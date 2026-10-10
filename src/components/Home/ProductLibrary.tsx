import React from 'react';
import ProductCard from './ProductCard';
import { IProduct } from '@/types/product.type';

// const productData = await getProducts(); 

// const risingProducts = productData.filter((product: IProduct) => product.change.dir === "up").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);

interface ProductLibraryProps {
  icon?: string;
  title: string;
  products: IProduct[];
}

const ProductLibrary = ({ products, icon, title }: ProductLibraryProps) => {
    return (
        <div className='lg:pt-25 sm:pt-20 pt-15'>
            <h2 className='sm:text-xl text-lg font-bold'><span className={`${icon === '▲' ? 'text-danger' : 'text-success'} text-base`}>{icon}</span> {title}</h2>

            <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-3'>
                {products.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductLibrary;