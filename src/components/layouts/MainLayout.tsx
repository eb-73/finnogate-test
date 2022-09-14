import MainHeader from "@/components/header/MainHeader";
import MainNavbar from "@/components/navbar/MainNavbar";
import { ReactElement, ReactNode } from "react";

interface LayoutProps {
	children?: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<div className="relative mx-auto w-[375px] h-[813px] overflow-hidden">
			<MainHeader />
			<main className="container h-[713px] overflow-x-hidden overflow-y-auto custom-scroll">
				{children}
			</main>
			<MainNavbar />
		</div>
	);
};

export const getLayout = function (page: ReactElement) {
	return <MainLayout>{page}</MainLayout>;
};

export default MainLayout;
