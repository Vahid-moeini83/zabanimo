import "./globals.css";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import MobileNav from "@/components/layout/MobileNav";
import FeaturesList from "@/components/ui/FeaturesList";

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
