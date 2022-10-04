import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
