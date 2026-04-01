import "./globals.css";

export const metadata = {
  title: "Ravikiran Kotgyale | Senior Full Stack Engineer",
  description:
    "Portfolio showcasing system design, scalable applications, and real-world impact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}