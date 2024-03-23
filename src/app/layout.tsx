import type { Metadata } from "next";
import '../../node_modules/devicon/devicon.min.css'
import "../css/globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationContextProvider } from "@/context/navigation.context";
import { Toaster } from "@/components/ui/toaster"
import { Bebas_Neue, Montserrat } from '@next/font/google'
import { Providers } from "./providers";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin-ext'],
  variable: '--font-montserrat',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin-ext'],
  variable: '--font-bebas-neue',
});


export const metadata: Metadata = {
  title: {
    default: "Mateusz Szalowicz | Web developer",
    template: "%s | szalowicz.dev",
  },
  description: "Hi, I'm Mateusz, a web developer passionate about creating amazing websites and web applications.",
  openGraph: {
    title: "szalowicz.dev",
    description: "Hi, I'm Mateusz, a web developer passionate about creating amazing websites and web applications.",
    url: "https://szalowicz.dev",
    siteName: "szalowicz.dev",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full ${montserrat.variable} font-sans ${bebasNeue.variable}`}>
        <Providers>
          <Navigation />
          {children}
          <Toaster />
        </Providers>                
      </body>
    </html>
  );
}
