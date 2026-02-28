import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import BackToTopBtn from '@/components/core/back-to-top-btn'
import { SmoothScroll } from '@/components/core/scroll-smooth';

export const metadata: Metadata = {
  metadataBase: new URL("https://fadimoussa.com"),
  title: {
    default: "Fadi Moussa | Web Developer & Designer",
    template: "%s | Web Developer & Designer Fadi Moussa"
  },
  description: "Professional portfolio of Web Developer and Designer Fadi Moussa, specializing in high-performance web development, custom UI/UX design, and interactive motion systems. Delivering scalable digital solutions with a focus on modern technologies and user experience.",
  keywords: [
    "Web Developer", 
    "Web Designer", 
    "Next.js Developer", 
    "React Developer",
    "Frontend Developer",
    "UI Designer",
    "UX Designer", 
    "Portfolio Fadi Moussa",
    "SEO Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Fadi Moussa" }],
  creator: "Fadi Moussa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fadimoussa.com",
    title: "Fadi Moussa | Web Developer & Designer",
    description: "Crafting high-performance digital experiences with a focus on clean code and intuitive design.",
    siteName: "Fadi Moussa Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fadi Moussa Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadi Moussa | Web Developer & Designer",
    description: "Web Development & Design with passion",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  }
};

const authorFont = localFont({
  src: [
    {
      path: '../../public/fonts/Author-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Author-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Author-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Author-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-author',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fadi Moussa",
    "url": "https://fadimoussa.com",
    "jobTitle": "Web Developer & Designer",
    "description": "Professional Web Developer and Designer specializing in high-performance digital experiences.",
    "sameAs": [
      "https://github.com/FadiProjects",
    ],
    "knowsAbout": ["Web Development", "UI/UX Design", "Next.js", "React", "SEO", "WCAG", "TailwindCSS", "CMS", "Figma", "Frameworks", "HTML", "CSS", "SCSS", "Javascript", "Wordpress"]
  };
  return (
    <html lang="en" className={`dark ${authorFont.variable}`}>
      <body className="antialiased font-author">
          <SmoothScroll>
            <Navigation />
            {children}
            <Footer />
            <BackToTopBtn />
          </SmoothScroll>
      </body>
    </html>
  );
}
