import "./globals.css";
import '@mantine/core/styles.css';
import '@gfazioli/mantine-marquee/styles.css';
import '@gfazioli/mantine-marquee/styles.layer.css';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ClientProviders from "./ClientProvider";


export const metadata = {
  title: "Kreatr Studio",
  description: "This is a studio for designing premium products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <ClientProviders>
        <main>{children} </main>
          </ClientProviders> 
        <Footer/>
      </body>
    </html>
  );
}
