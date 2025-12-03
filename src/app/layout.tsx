import "./globals.css";

export const metadata = {
  title: "Bill Eletrônicos",
  description: "Loja virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
