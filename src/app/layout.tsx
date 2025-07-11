import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Elana - Personalized Genetics-Based Nutrition",
  description:
    "Get personalized dietary recommendations based on your DNA. Upload your genetic data and receive AI-powered nutrition advice tailored to your unique genetic profile.",
  keywords: [
    "genetics",
    "nutrition",
    "DNA",
    "personalized diet",
    "health",
    "wellness",
    "SNP",
    "dietary recommendations",
  ],
  authors: [{ name: "Elana Genetics Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Elana - Personalized Genetics-Based Nutrition",
    description:
      "Transform your health with personalized nutrition based on your DNA",
    type: "website",
    siteName: "Elana Genetics",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
