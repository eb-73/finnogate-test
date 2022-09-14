import clsx from "clsx";
import { SVGProps } from "react-html-props";
const HomeIcon = ({ className, ...props }: SVGProps) => {
	return (
		<svg
			className={clsx("w-full h-full fill-current", className)}
			{...props}
			width="21"
			height="18"
			viewBox="0 0 21 18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.0629 0.329565C10.5114 -0.109774 11.2386 -0.109774 11.6871 0.329565L20.875 9.32955L19.2508 10.9205L10.875 2.71605L2.49921 10.9205L0.875 9.32955L10.0629 0.329565Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.10564 15.7501V10.1251L3.98535 11.2501V16.875C3.98535 17.4964 4.45999 18 5.04549 18H16.7071C17.2926 18 17.7672 17.4964 17.7672 16.875V11.2501L15.6469 10.1251V15.7501H6.10564Z"
			/>
		</svg>
	);
};

export default HomeIcon;
