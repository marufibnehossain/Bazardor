import { getProducts } from '@/services/data';
import { IProduct } from '@/types/product.type';
import React from 'react';
import { unitLabels } from '../Home/ProductCard';

const Ticker = async () => {
    const products: IProduct[] = await getProducts();
    const items = products.slice(0, 10);

    return (
        <div className="flex overflow-x-hidden whitespace-nowrap scrollbar-hide">
            <div className="flex w-max animate-price-ticker">
            { items.map((product: IProduct) => (
                <div
                    key={product.id}
                    className="flex items-center gap-2 border-r border-stroke px-4 py-2 text-sm"
                >
                    <span>{product.image}</span>

        <h2 className="text-heading font-medium">
          {product.nameBn}
        </h2>

        <span className="text-heading">
          {new Intl.NumberFormat("bn-BD").format(product.today)} টাকা/
          {unitLabels[product.unit].replace("প্রতি ", "")}
        </span>

        <span
          className={
            product.change.dir === "up"
              ? "text-danger"
              : product.change.dir === "down"
                ? "text-success"
                : "text-muted"
          }
        >
          {product.change.dir === "up"
            ? "▲"
            : product.change.dir === "down"
              ? "▼"
              : "—"}{" "}
          {new Intl.NumberFormat("bn-BD").format(product.change.pct)}
          %
        </span>
      </div>
            ))}</div>
        </div>
    );
};

export default Ticker;