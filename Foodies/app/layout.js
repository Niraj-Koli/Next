import "./globals.css";

import Header from "@/components/Header/Header";

export const metadata = {
    title: "Meal Sharing",
    description: "Share your favorite meals with the world.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
