import { IProduct } from "@/types/product.type";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

export const unitLabels = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

export const trendStyles = {
    up: "text-danger",
    down: "text-success",
    flat: "text-muted",
  };

export const trendIcon = {
    up: "▲",
    down: "▼",
    flat: "—",
  };

const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <div className="rounded-2xl border border-stroke bg-surface p-4">
      <div className="flex items-center gap-6">
        <div className="flex p-3 items-center justify-center rounded-2xl bg-background text-2xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-base font-semibold text-heading">
            {product.nameBn}
          </h3>

          <p className="mt-1 text-xs leading-tight text-text">
            {unitLabels[product.unit]}
          </p>
        </div>
      </div>

      <div className="mt-7 flex items-end justify-between">
        <div>
          <p className="text-xs text-text">
            আজকের দাম
          </p>

          <p className="mt-1 text-xl font-bold leading-none text-heading">
            {product.today}{" "}
            <span className="text-sm font-medium">টাকা</span>
          </p>
        </div>

        <span
          className={`rounded-full bg-background px-2 py-1.5 text-xs font-semibold ${trendStyles[product.change.dir]}`}
        >
          {trendIcon[product.change.dir]} {product.change.pct}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;