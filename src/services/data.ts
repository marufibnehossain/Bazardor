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

export default getData; 
export { getCategories };