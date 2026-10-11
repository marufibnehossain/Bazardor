import { IProduct } from '@/types/product.type';
import { getProducts } from '@/services/data';
import Link from 'next/link';
import { unitLabels } from '@/components/Home/ProductCard';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}


const ProductPage = async ({ params }: ProductPageProps) => {
    const { slug } = await params;
    const productData = await getProducts();
    const product = productData.find((product: IProduct) => product.slug === slug);
    return (
        <div className="min-h-screen w-full px-[5vw]">
            <div className='max-w-7xl mx-auto w-full py-8'>
                <div className='flex items-center gap-2 text-sm mb-8'>
                    <Link href="/">হোম</Link> &gt; <Link href={`/categories/${product?.category}`}>{product?.categoryNameBn}</Link> &gt; <p>{product?.nameBn}</p>
                </div>
                {product ? (
                    <div className='flex flex-col gap-8'>
                        <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex max-[400px]:flex-col justify-between max-[400px]:justify-center sm:items-center gap-4">
                            <div className="flex sm:items-center justify-start items-start gap-4">
                                <div className="flex sm:px-5 sm:py-5.5 px-3 py-3.5 items-center justify-center sm:rounded-2xl rounded-lg bg-background sm:text-4xl text-3xl">
                                    {product.image}
                                </div>
                        
                                <div>
                                    <h3 className="sm:text-3xl text-xl font-bold text-heading">
                                    {product.nameBn}
                                    </h3>
                                    <p className="mt-1 sm:text-sm text-xs text-text">
                                    {unitLabels[product.unit]} · {product.categoryNameBn}
                                    </p>
                                    <p className="mt-1 sm:text-sm text-xs text-heading">
                                    গতকালের তুলনায় আজ দাম <span className="text-semibold">{product.yesterday < product.today ? "বেড়েছে" : "কমেছে"}</span> · {new Intl.NumberFormat("bn-BD").format(Math.abs(product.today - product.yesterday))} টাকা
                                    </p>
                                </div>
                            </div>
                            <div className="bg-background border border-[#E1E8E1] rounded-2xl sm:px-5 sm:py-4 p-2.5 text-center">
                                <p className="mt-1 sm:text-sm text-xs text-text">আজকের দাম</p>
                                <h2 className="sm:text-3xl text-2xl font-bold text-heading">
                                    {new Intl.NumberFormat("bn-BD").format(product.today)}
                                </h2>
                                <p className="mt-1 sm:text-sm text-xs text-text">টাকা / {unitLabels[product.unit]}</p>
                                <span
                                    className={`${product.change.dir === "up" ? "text-danger"
                                        : product.change.dir === "down" ? "text-success" : "text-muted"} font-semibold text-sm`}
                                    >
                                    {product.change.dir === "up"
                                        ? "▲"
                                        : product.change.dir === "down"
                                        ? "▼"
                                        : "—"}{" "}
                                    {new Intl.NumberFormat("bn-BD").format(Math.abs(product.change.pct))}
                                    %
                                </span>
                            </div>
                        </div>

                        <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex flex-col gap-3">
                            <h2 className='text-lg font-semibold'>দামের সারসংক্ষেপ</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
                                <div className="border border-[#E1E8E1] rounded-2xl sm:px-6 sm:py-4.5 p-2.5">
                                    <p className="mt-1 text-xs text-text">সর্বনিম্ন দাম</p>
                                    <h2 className="sm:text-2xl text-xl font-bold text-success">
                                        {new Intl.NumberFormat("bn-BD").format(Math.min(...product.markets.map((price) => price.min)))}
                                        <span className="sm:text-sm text-xs"> টাকা</span>
                                    </h2>
                                    <p className="mt-1 text-xs text-text">সবচেয়ে কম দামের বাজার</p>
                                </div>
                                <div className="border border-[#E1E8E1] rounded-2xl sm:px-6 sm:py-4.5 p-2.5">
                                    <p className="mt-1 text-xs text-text">সর্বাধিক দাম</p>
                                    <h2 className="sm:text-2xl text-xl font-bold text-danger">
                                        {new Intl.NumberFormat("bn-BD").format(Math.max(...product.markets.map((price) => price.max)))}
                                        <span className="sm:text-sm text-xs"> টাকা</span>
                                    </h2>
                                    <p className="mt-1 text-xs text-text">সবচেয়ে বেশি দামের বাজার</p>
                                </div>
                                <div className="border border-[#E1E8E1] rounded-2xl sm:px-6 sm:py-4.5 p-2.5">
                                    <p className="mt-1 text-xs text-text">গড় দাম</p>
                                    <h2 className="sm:text-2xl text-xl font-bold text-success">
                                        {new Intl.NumberFormat("bn-BD").format(Math.round(product.markets.reduce((acc, price) => acc + (price.min + price.max) / 2, 0) / product.markets.length))}
                                        <span className="sm:text-sm text-xs"> টাকা</span>
                                    </h2>
                                    <p className="mt-1 text-xs text-text">প্রতি কেজি-এর হিসাবে</p>
                                </div>
                            </div>
                            <h2 className='text-lg font-semibold mt-3'>বাজারভিত্তিক আজকের দাম</h2>
                            <div className="overflow-x-auto border border-[#E1E8E1] rounded-2xl">
                                <table className="w-full text-sm text-left text-heading">
                                    <thead>
                                        <tr>
                                            <th className='py-3 px-4 font-bold opacity-60'>বাজার</th>
                                            <th className='py-3 px-4 font-bold opacity-60'>বিভাগ</th>
                                            <th className='py-3 px-4 font-bold opacity-60'>সর্বনিম্ন</th>
                                            <th className='py-3 px-4 font-bold opacity-60'>সর্বাধিক</th>
                                            <th className='py-3 px-4 font-bold opacity-60'>গড়</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.markets.map((market, index) => (
                                            <tr key={index} className={`${index % 2 === 0 ? 'bg-background' : ''} border-t border-stroke`}>
                                                <td className='py-3 px-4 font-medium'>{market.market}</td>
                                                <td className='py-3 px-4'>{market.division}</td>
                                                <td className='py-3 px-4'>{new Intl.NumberFormat("bn-BD").format(market.min)} টাকা</td>
                                                <td className='py-3 px-4'>{new Intl.NumberFormat("bn-BD").format(market.max)} টাকা</td>
                                                <td className='py-3 px-4 font-bold'>{new Intl.NumberFormat("bn-BD").format((market.min + market.max) / 2)} টাকা</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Product not found</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;