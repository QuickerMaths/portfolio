import type { Metadata } from "next";
import "../css/globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider"
import Transitions, { Animate } from "@/components/animate-wrapper";

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
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            >
               <Transitions className="h-full flex flex-col ">
                <Navigation />
                <Animate className="flex-1">
                  {children}
                </Animate>
              </Transitions>
          </ThemeProvider>
      </body>
    </html>
  );
}
