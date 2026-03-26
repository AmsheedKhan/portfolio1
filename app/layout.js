import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Amsheed\'s Portfolio",
  icons:{
icon: "/logo.png"
  },
  description: "AI Engineer specializing in LLMs, RAG systems, deep learning, and intelligent automation. Building scalable AI solutions for real-world applications.",
  keywords: "AI Engineer, Machine Learning, Deep Learning, NLP, LLM, RAG, LangChain, FastAPI, Python, Artificial Intelligence, AI Developer",
  author: "Amsheed Nazeer",
  robots: "index, follow",
  openGraph: {
    title: "Amsheed Nazeer | AI Engineer",
    description: "AI Engineer specializing in LLMs and RAG systems.",
    url: "https://your-portfolio.com",
    siteName: "Amsheed Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader />
          <Header />

          {children}

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md text-black rounded-3xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)]",
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
