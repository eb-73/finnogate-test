import FormWrapper from "@/components/login-register/FormWrapper";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
		revalidate: 60,
	};
};

const Home = () => {
	return (
		<div className="absolute top-0 bottom-0 flex items-center justify-center w-full my-auto">
			<FormWrapper />
		</div>
	);
};

export default Home;
