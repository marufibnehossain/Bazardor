import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>

        <h1 className="mt-3 text-2xl font-bold text-heading">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-2 text-muted">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="btn-global mt-4"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;