import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <title>Allma Coding | Lagoinha Uberaba</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
