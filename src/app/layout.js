import '../styles/globals.css';

export const metadata = {
  title: 'Lucent Lab',
  description: 'Next.js with Tailwind CSS project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 