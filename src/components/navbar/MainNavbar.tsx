import NavbarItem from "@/components/navbar/NavbarItem";
import useNavigationItem from "@/hooks/global/useNavigationItem";
import { useRouter } from "next/router";

const MainNavbar = () => {
	const { pathname } = useRouter();
	const navigationItems = useNavigationItem();
	// const [activeIndex, setActiveIndex] = useState(0);
	// const setActiveHandler = (index: number) => {
	// 	setActiveIndex(index);
	// };
	return (
		<div className="w-full p-1 grid grid-cols-4 gap-1 h-[56px] absolute bottom-0 left-0 bg-[#FFFFFF] ">
			{navigationItems.map((item, i) => (
				<NavbarItem
					key={i}
					// onClick={setActiveHandler.bind(null, i)}
					iconKey={item.key}
					title={item.title}
					url={item.url}
					active={pathname === item.url}
				/>
			))}
		</div>
	);
};

export default MainNavbar;
