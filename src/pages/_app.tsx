import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import '@/assets/css/globals.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getDirection } from '@/lib/constants';
import 'react-form-wizard-component/dist/style.css';
import LoadingBar from 'react-top-loading-bar';
import Modal from "@/components/ui/modal";
import InvoiceModal from "@/components/modal/invoice-modal";


// const PrivateRoute = dynamic(() => import('@/layouts/_private-route'), {
//   ssr: false,
// });

// validateEnvironmentVariables();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const { locale } = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const [progress, setProgress] = useState<any>(0)

  const getLayout = Component.getLayout ?? ((page) => page);
  const dir = getDirection(locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  useEffect(() => {
    const duration = 60
    const interval = 1000
    const steps = duration * 1000 / interval
    let currentStep = 0
    const incrementprogress = () => {
      if (currentStep < steps)
      {
        currentStep += 1
        const newProgress = (currentStep / steps) * 100
        setProgress(newProgress)
      }
    }

    const progressInterval = setInterval(incrementprogress, interval)

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  const authenticationRequired = Component.authorization ?? false;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <ThemeProvider
          attribute="class" defaultTheme="light" enableSystem
        > */}

        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >

          <>
            {getLayout(<Component {...pageProps} />)}
            <Toaster containerClassName="!top-16 sm:!top-3.5 !bottom-16 sm:!bottom-3.5" />
          </>
        </AnimatePresence>

        {/* </ThemeProvider> */}
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default appWithTranslation(CustomApp);
