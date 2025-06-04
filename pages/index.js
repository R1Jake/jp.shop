import Link from 'next/link';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../firebase';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push('/login'); // redirect if not logged in
      } else {
        setUser(u);
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    // Can add a loading state here while checking auth
    return <p className="text-center mt-20 text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />

      <main className="p-10 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-primary">Welcome to JP Shop</h1>

          {/* Show user name and logout button */}
          <div className="flex items-center gap-4">
            <p>Hello, {user.displayName}</p>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded"
            >
              Logout 🔐
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <Link href="/category/clothing">
            <a className="bg-white/10 hover:bg-primary transition p-6 rounded-xl text-xl">
              Clothing
            </a>
          </Link>
          <Link href="/category/headphones">
            <a className="bg-white/10 hover:bg-primary transition p-6 rounded-xl text-xl">
              Headphones
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
