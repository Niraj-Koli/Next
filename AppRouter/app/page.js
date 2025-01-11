import Link from "next/link";

import Header from "@/components/Header";

export default function Home() {
    console.log("Server Component");
    return (
        <main>
            <Header />
            <p>
                <Link href="/about">About</Link>
            </p>
        </main>
    );
}
