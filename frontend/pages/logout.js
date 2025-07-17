import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await signOut(auth);
      router.push('/login');
    };
    doLogout();
  }, [router]);

  return <p style={{ padding: '2rem' }}>Logging you out...</p>;
}
