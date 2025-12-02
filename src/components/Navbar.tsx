import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-stone-900 text-amber-50 shadow-md">
      <div className="text-2xl font-bold tracking-wider">
        ☕ KopiSenja
      </div>
      <div className="space-x-6 font-medium">
        <Link href="/" className="hover:text-amber-400 transition">Home</Link>
        <Link href="#menu" className="hover:text-amber-400 transition">Menu</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}