import Link from "next/link";

import NavLink from "./Navlink";

export default function Header() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/parallel">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
