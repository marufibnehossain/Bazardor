import { getProductByCategory } from '@/services/data';
import ProductLibrary from '@/components/Home/ProductLibrary';
import { notFound } from 'next/navigation';
import SortProducts from '@/components/small-components/SortProducts';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    sort?: string;
  }>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
    const { slug } = await params;
    const { sort } = await searchParams;
    const productData = await getProductByCategory(slug);

    if (productData.length === 0) {
        notFound();
    }

    const sortedProducts = [...productData];

    if (sort === "asc") {
        sortedProducts.sort((a, b) => a.today - b.today);
    }

    if (sort === "desc") {
        sortedProducts.sort((a, b) => b.today - a.today);
    }

    return (
        <div className="w-full px-[5vw]">
            <div className='max-w-7xl mx-auto w-full py-8'>
                <div className='flex flex-col'>
                    <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex max-[400px]:flex-col justify-between max-[400px]:justify-center sm:items-center gap-4">
                        <div className="flex sm:items-center justify-start items-start gap-4">
                            <div className="flex sm:px-5 sm:py-5.5 px-3 py-3.5 items-center justify-center sm:rounded-2xl rounded-lg bg-background sm:text-4xl text-3xl">
                                {productData[0].categoryIcon}
                            </div>
                    
                            <div>
                                <h3 className="sm:text-3xl text-xl font-bold text-heading">
                                {productData[0].categoryNameBn}
                                </h3>
                                <p className="mt-1 sm:text-sm text-xs text-text">
                                {new Intl.NumberFormat("bn-BD").format(productData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-[#E1E8E1] rounded-[24px] p-5 w-full flex justify-end gap-3 mt-8">
                        <SortProducts />
                    </div>
                    <ProductLibrary products={sortedProducts} desc={`মোট ${new Intl.NumberFormat("bn-BD").format(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে`} />
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;