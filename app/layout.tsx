import type { Metadata } from "next";
import "./styles.css";


export const metadata: Metadata = {
  title: "Drag and Drop App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
