import "./globals.css";

export const metadata = {
    title: "NextJS",
    description: "NextJS App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
