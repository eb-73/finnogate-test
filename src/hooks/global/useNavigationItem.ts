import { useMemo } from "react";

const useNavigationItem = () => {
	const navigationItems = useMemo(
		() => [
			{ key: "home", title: "Home", url: "/" },
			{ key: "search", title: "Search", url: "/search" },
			{ key: "posts", title: "Posts", url: "/posts" },
			{ key: "profile", title: "Profile", url: "/profile" },
		],
		[]
	);
	return navigationItems;
};

export default useNavigationItem;
