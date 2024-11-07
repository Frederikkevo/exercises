// app/layout.js (if using Next.js 13 and the App Router)
import './globals.css';

export const metadata = {
  title: 'My Accordion App',
  description: 'A simple FAQ accordion app built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
