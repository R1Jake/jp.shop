import { useRouter } from 'next/router';
import Header from '../../components/Header';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-primary capitalize">{category}</h1>
        <p className="text-gray-400 mt-4">You can add products for this category in your dev panel.</p>
      </main>
    </div>
  );
}