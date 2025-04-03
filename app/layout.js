import DesktopHeader from "@/components/layout/DesktopHeader";
import "./globals.css";
import MobileHeader from "@/components/layout/MobileHeader";
import MobileNav from "@/components/layout/MobileNav";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header>
          <DesktopHeader />
          <MobileHeader />
          <MobileNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
