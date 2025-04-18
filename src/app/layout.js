import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="light">
      <body>
        {children}
      </body>
    </html>
  );
}
