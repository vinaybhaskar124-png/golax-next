import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { defaultMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable} overflow-x-clip`}>
      <body className="min-h-screen antialiased overflow-x-clip w-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
