import Link from 'next/link';
export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl">
        <Link href="/">Thistle Signal</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/opportunities">Opportunities</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link href="/register-a-charity">Register a Charity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
