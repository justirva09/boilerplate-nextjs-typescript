import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// import "../styles/global.css";

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

const AppWrapper = (props: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.pageProps.dehydratedState}>
        <App {...props} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default AppWrapper;
