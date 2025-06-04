import { useRouter } from 'next/router';
import Header from '../../components/Header';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-primary">Product #{id}</h1>
        <p className="mt-2 text-gray-400">This is a placeholder for the product details.</p>
        <button className="mt-4 bg-primary px-4 py-2 rounded hover:bg-purple-800 transition">Add to Cart</button>
      </main>
    </div>
  );
}