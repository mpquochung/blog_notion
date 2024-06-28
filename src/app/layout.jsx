import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import Header from '@/components/header/header';
import Provider from '@/components/provider';
import ScrollUpButton from '@/components/scroll-up-button';
import '@/styles/globals.css';
import '@/styles/paginate.css';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: {
    default: "Qhun'",
    template: "%s | Qhun'",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ko">
      <body className="text-primary bg-primary relative mx-auto flex w-full max-w-screen-xl flex-col px-[10vw] md:px-[5vw]">
        <Provider className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
        <div className="fixed bottom-12 right-10">
          <ScrollUpButton />
        </div>
      </body>
    </html>
  );
}
