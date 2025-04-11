import '@/styles/globals.css';

export const metadata = {
  title: 'NexNyx',
  description: 'Your elite AI universe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
