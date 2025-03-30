import DesktopHeader from "@/components/layout/DesktopHeader";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header>
          <DesktopHeader />
        </header>
        {children}
      </body>
    </html>
  );
}
