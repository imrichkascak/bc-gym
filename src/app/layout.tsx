import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-bc-display",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-bc-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bc-gym.vercel.app"),
  title: {
    default: "BC GYM | Samoobslužná posilovna Bohumín",
    template: "%s | BC GYM",
  },
  description:
    "BC GYM je nová samoobslužná posilovna v Bohumíně. Trénuj podle sebe – rezervace online, vstup kódem, moderní vybavení a soukromí bez front.",
  applicationName: "BC GYM",
  keywords: [
    "BC GYM",
    "posilovna Bohumín",
    "samoobslužná posilovna",
    "fitness Bohumín",
    "gym Bohumín",
  ],
  authors: [{ name: "BC GYM" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://bc-gym.vercel.app",
    siteName: "BC GYM",
    title: "BC GYM | Samoobslužná posilovna Bohumín",
    description:
      "Tvůj čas. Tvůj prostor. Tvoje síla. Nová samoobslužná posilovna v Bohumíně.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BC GYM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BC GYM | Samoobslužná posilovna Bohumín",
    description:
      "Nová samoobslužná posilovna v Bohumíně. Rezervuj online, vstupuj kódem.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
