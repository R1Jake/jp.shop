import Header from '../components/Header';

export default function Cart() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold text-primary">Cart</h1>
        <p className="mt-4 text-gray-400">Cart functionality coming soon with login & Stripe checkout.</p>
      </main>
    </div>
  );
}