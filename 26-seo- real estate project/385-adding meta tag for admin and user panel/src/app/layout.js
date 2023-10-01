import { yekan } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
