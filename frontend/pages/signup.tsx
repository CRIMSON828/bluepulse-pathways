import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/assess');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
