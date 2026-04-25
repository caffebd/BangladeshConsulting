import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bengal Consulting",
  description: "Expert Bangladesh bureaucracy services for locals and expats worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
