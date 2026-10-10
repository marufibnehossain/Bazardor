import React, { Suspense } from 'react';
import ProductLibrary from './ProductLibrary';
import { IProduct } from '@/types/product.type';
import { getProducts } from '@/services/data';

const ProductSections = async () => {
    const products = await getProducts();

    const risingProducts = products.filter((product: IProduct) => product.change.dir === "up").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);

    const fallingProducts = products.filter((product: IProduct) => product.change.dir === "down").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);
    
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductLibrary products={risingProducts} icon='▲' title='আজ দাম বেড়েছে' />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductLibrary products={fallingProducts} icon='▼' title='আজ দাম কমেছে' />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductLibrary products={products} title='সব পণ্য' />
            </Suspense>
        </div>
    );
};

export default ProductSections;