import { IProduct } from "@/types/product.type";

const getData = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

const getCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/categories`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

const getProducts = async (): Promise<IProduct[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/products`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

const getProductByCategory = async (category: string): Promise<IProduct[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/products?category=${category}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export { getData, getCategories, getProducts, getProductByCategory };