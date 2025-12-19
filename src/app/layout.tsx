import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Colorado Films",
    description: "Exploring Colorado's Entertainment Industry",
    icons: {
        icon: [
            {
                url: '/colorado-flag.png',
                type: 'image/png',
            }
        ],
        shortcut: '/colorado-flag.png',
        apple: '/colorado-flag.png',
    },
    openGraph: {
        title: 'Colorado Films',
        description: "Exploring Colorado's Entertainment Industry",
        url: 'https://coloradofilms.com',
        siteName: 'Colorado Films',
        images: [
            {
                url: '/colorado-flag.png',
                width: 512,
                height: 512,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Colorado Films',
        description: "Exploring Colorado's Entertainment Industry",
        images: ['/colorado-flag.png'],
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
