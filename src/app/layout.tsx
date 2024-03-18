import type { Metadata } from "next";
import "../css/globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationContextProvider } from "@/context/navigation.context";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "QuickerMaths portfolio",
  description: "QuickerMaths web development portfolio",
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
