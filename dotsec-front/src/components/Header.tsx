import Link from "next/link";

export default function Header() {
    return (
      <header className="py-16">
        <h1 className="text-center text-4xl font-bold">
            Security Calculator
        </h1>

        <nav className="mt-10">
            <ul className="flex justify-center gap-10 text-xl">
                <li>
                    <Link href="/des" className="nav-link">DES</Link>
                </li>
                <li>
                    <Link href="/aes" className="nav-link">AES</Link>
                </li>
                <li>
                    <Link href="/mac" className="nav-link">MAC</Link>
                </li>
            </ul>
        </nav>
      </header>  
    );
}