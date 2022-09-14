import HomeIcon from "@/components/icons/HomeIcon";
import PostIcon from "@/components/icons/PostIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";
import clsx from "clsx";
import Link from "next/link";
import { ButtonProps } from "react-html-props";

const selectIcon = (value: string) => {
	switch (value) {
		case "home":
			return <HomeIcon className="w-6" />;
		case "search":
			return <SearchIcon className="w-6" />;
		case "posts":
			return <PostIcon className="w-6" />;
		case "profile":
			return <UserIcon className="w-6" />;
		default:
	}
};

interface NavbarItemProps extends ButtonProps {
	iconKey: string;
	title: string;
	active: boolean;
	url: string;
}

const NavbarItem = ({
	iconKey,
	title,
	active,
	url,
	...props
}: NavbarItemProps) => {
	return (
		<Link href={url}>
			<button
				{...props}
				className={clsx(
					"group relative self-center justify-self-center !w-[87px] h-8 flex justify-center  p-1 transition-all duration-150  ",
					active
						? "bg-blue-light rounded-[200px] gap-1 text-blue-main "
						: "text-secondary-main hover:text-blue-main "
				)}
			>
				<div
					className={clsx(
						"transition-all duration-300 ",
						active ? "translate-x-0" : "translate-x-4"
					)}
				>
					{selectIcon(iconKey)}
				</div>
				<h3
					className={clsx(
						"text-xs font-bold transition-all duration-500 h-full flex items-center",
						active ? "opacity-100 " : "opacity-0 "
					)}
				>
					{title}
				</h3>
			</button>
		</Link>
	);
};

export default NavbarItem;
