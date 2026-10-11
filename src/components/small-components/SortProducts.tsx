"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SortProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get("sort") || "default"}
      onChange={(e) => handleSort(e.target.value)}
      className="rounded-xl border border-stroke bg-surface px-4 py-2 text-sm text-heading"
    >
      <option value="default">ডিফল্ট</option>
      <option value="asc">দাম: কম থেকে বেশি</option>
      <option value="desc">দাম: বেশি থেকে কম</option>
    </select>
  );
};

export default SortProducts;