import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Assess() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return <p style={{ padding: '2rem' }}>Checking authentication...</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Career Transition Assessment
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        Welcome, {user.email}! Start answering a few key questions to guide your path.
      </p>
      <ul>
        <li>✔️ Your experience level</li>
        <li>✔️ Your comfort with digital tools</li>
        <li>✔️ Your customer service strengths</li>
        <li>✔️ Your learning preferences</li>
      </ul>
    </div>
  );
}
