import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Bella création imagination | Décoration d'intérieur",
  description:
    "Décoration d'intérieur, agencement, conseil couleur et apprentissage des acquis divers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
