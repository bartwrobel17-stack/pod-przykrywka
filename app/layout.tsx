import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Pod przykrywką | Kuchnia roślinna we Wrocławiu", description: "Pod przykrywką. Roślinna kuchnia z charakterem przy Więziennej 18 we Wrocławiu.", metadataBase: new URL("https://pod-przykrywka.vercel.app"), openGraph: { title: "Pod przykrywką", description: "Kuchnia roślinna z charakterem we Wrocławiu", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pl"><body>{children}</body></html>; }