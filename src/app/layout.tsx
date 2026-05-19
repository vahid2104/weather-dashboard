

import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Weather Dashboard",
  description: "A simple weather dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
