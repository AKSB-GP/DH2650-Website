import { Pirata_One, Fredoka, Rubik } from "next/font/google";
import "./globals.css";

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ["latin"],
  weight: "400",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Wrecked",
  description: "The website for Wrecked, a game designed during the DH2650 game design course at KTH.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.variable} ${fredoka.variable} ${rubik.variable} font-fredoka antialiased`}
      >
        {children}
      </body>
    </html>
  );
}