```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // Access router.query
  console.log(router.query);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Go back home</button>
    </div>
  );
}
```