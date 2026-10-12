"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
    slug: string;
    icon: string;
    name: string;
}

const ActiveLink = ({ slug, icon, name }: ActiveLinkProps) => {
    const pathname = usePathname();
    const active = pathname === `/category/${slug}`;
    return (
        <Link
            href={`/category/${slug}`}
            className={`btn-global shadow-none! max-sm:py-2! max-sm:px-3! ${
                active
                ? "bg-primary! text-white!"
                : "bg-transparent! text-heading! hover:bg-primary! hover:text-white!"
            }`}
            >
            <span className="mr-2">{icon}</span>{name}
        </Link>
    );
};

export default ActiveLink;