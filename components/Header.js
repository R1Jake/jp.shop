import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
      <Link href="/" className="text-2xl font-bold text-primary">JP</Link>
      <Link href="/cart" className="text-white text-lg hover:text-primary transition">🛒 Cart</Link>
    </header>
  );
}