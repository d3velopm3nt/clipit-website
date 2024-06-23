import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/layout/header";
import { appConfig } from "@/configuration/app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
    <html lang="en" data-theme={appConfig.primaryTheme } suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
