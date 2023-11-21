import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix Clone designed to mimic the UI of Netflix.",
};

/**
 * The RootLayout function is a TypeScript React component that renders the children inside an HTML
 * body element.
 * @param  - The `RootLayout` function is a React component that takes in a single parameter, an object
 * with a property `children` of type `React.ReactNode`. The `children` property represents the content
 * that will be rendered inside the `RootLayout` component.
 * @returns an HTML document with a body element that contains the children passed to the RootLayout
 * component. The body element has a className attribute that is set to the value of the
 * inter.className variable.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
