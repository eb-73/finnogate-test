import "@/styles/css/tailwind.css";
import "@/styles/scss/main.scss";
import type { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<QueryClientProvider client={queryClient}>
			{getLayout(<Component {...pageProps} />)}
			<ReactQueryDevtools />
			<Toaster />
		</QueryClientProvider>
	);
}
export default appWithTranslation(MyApp, nextI18nConfig);
