import { inter } from "@/app/fonts";
import ModalProvider from "@/app/ui/modal-provider";
import { cn } from "@/lib/utils";
import { satoshi } from "@/styles/fonts";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <Toaster closeButton />
      <ModalProvider>
        <main className={cn(satoshi.variable, inter.variable)}>
          <Component {...pageProps} />
        </main>
      </ModalProvider>
    </SessionProvider>
  );
};

export default MyApp;
