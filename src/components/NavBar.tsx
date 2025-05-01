import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-black px-6 py-4 my-6 flex justify-between items-center bg-white text-black">
      <Link href="/" className="text-xl font-bold tracking-tight">
        KNN Tool
      </Link>

      <div className="flex gap-6 text-sm font-medium uppercase tracking-wide">
        <Link href="/knn" className="hover:underline">Try Knn</Link>
        <Link href="#" className="hover:underline">Upload CSV</Link>
        <Link href="#" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
