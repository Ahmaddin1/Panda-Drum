import "./globals.css";
import localFont from "next/font/local";

const generalSans = localFont({
  src: "../../GeneralSans-Semibold.woff2",
  variable: "--font-general-sans",
  weight: "600",
});

const switzer = localFont({
  src: "../../Switzer-Regular.woff2",
  variable: "--font-switzer",
  weight: "400",
});

export const metadata = {
  title: "Panda Drum — Mini, Plus & Pro | Compare Tongue Drums",
  description:
    "Compare the Panda Drum Mini, Plus, and Pro tongue drums — size, tone count, best-for age range, and warranty side by side. Find the right drum for you.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${switzer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
