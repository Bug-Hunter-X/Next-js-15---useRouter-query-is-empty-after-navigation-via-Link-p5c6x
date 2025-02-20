```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // Use useEffect to access router.query after the component mounts
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Go back home</button>
    </div>
  );
}
```
The issue was that `router.query` was accessed before Next.js has had a chance to fully populate it after the route change. By using `useEffect` with `router.query` as a dependency, we are ensuring that the console log only happens after the component has fully mounted and the router data is available.