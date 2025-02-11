import "./globals.css";
import { JotaiProvider } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <JotaiProvider>
        <body className={``}>
            {children}
        </body>
      </JotaiProvider>
    </html>
  );
}
