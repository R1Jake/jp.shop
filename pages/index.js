import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="p-10 space-y-6">
        <h1 className="text-4xl font-bold text-primary">Welcome to JP Shop</h1>
        <div className="flex gap-6">
          <Link href="/category/clothing" className="bg-white/10 hover:bg-primary transition p-6 rounded-xl text-xl">Clothing</Link>
          <Link href="/category/headphones" className="bg-white/10 hover:bg-primary transition p-6 rounded-xl text-xl">Headphones</Link>
        </div>
      </main>
    </div>
  );
}