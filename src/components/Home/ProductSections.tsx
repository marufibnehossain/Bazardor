import React from 'react';
import ProductLibrary from './ProductLibrary';
import { IProduct } from '@/types/product.type';
import { getProducts } from '@/services/data';

const ProductSections = async () => {
    const products = await getProducts();

    const risingProducts = products.filter((product: IProduct) => product.change.dir === "up").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);

    const fallingProducts = products.filter((product: IProduct) => product.change.dir === "down").sort((a: IProduct, b: IProduct) => b.change.pct - a.change.pct).slice(0, 6);
    
    return (
        <div>
            <ProductLibrary products={risingProducts} icon='▲' title='আজ দাম বেড়েছে' />
            <ProductLibrary products={fallingProducts} icon='▼' title='আজ দাম কমেছে' />
            <ProductLibrary id='all-products' products={products} title='সব পণ্য' desc={`মোট ${new Intl.NumberFormat("bn-BD").format(products.length)}টি পণ্য দেখানো হচ্ছে`} />
        </div>
    );
};

export default ProductSections;