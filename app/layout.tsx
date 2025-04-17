import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Codante Vagas",
  description: "O melhor lugar para encontrar vagas de emprego para devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
