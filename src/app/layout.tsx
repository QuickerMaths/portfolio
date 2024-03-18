import type { Metadata } from "next";
import "../css/globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationContextProvider } from "@/context/navigation.context";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: "Mateusz Szalowicz | Fullstack developer",
    template: "%s | szalowicz.dev",
  },
  description: "Hi I'm Mateusz. Fullstack Typescript developer.",
  openGraph: {
    title: "szalowicz.dev",
    description:
      "Hi I'm Mateusz. Fullstack Typescript developer.",
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
      <body className="w-full">
        <NavigationContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
                <Navigation />
                {children}
                <Toaster />                
          </ThemeProvider>
        </NavigationContextProvider>
      </body>
    </html>
  );
}
