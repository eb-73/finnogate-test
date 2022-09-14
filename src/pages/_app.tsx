import "@/styles/css/tailwind.css";
import "@/styles/scss/main.scss";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<QueryClientProvider client={queryClient}>
			{getLayout(<Component {...pageProps} />)}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
