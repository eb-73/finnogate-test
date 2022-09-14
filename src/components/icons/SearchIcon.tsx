import clsx from "clsx";
import { SVGProps } from "react-html-props";
const SearchIcon = ({ className, ...props }: SVGProps) => {
	return (
		<svg
			className={clsx("w-full h-full fill-current", className)}
			{...props}
			width="23"
			height="22"
			viewBox="0 0 23 22"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.7715 16.1465C5.9115 16.1465 2.7715 13.0065 2.7715 9.1465C2.7715 5.2865 5.9115 2.1465 9.7715 2.1465C13.6315 2.1465 16.7715 5.2865 16.7715 9.1465C16.7715 13.0065 13.6315 16.1465 9.7715 16.1465ZM22.4785 20.4395L16.7965 14.7575C18.0295 13.2175 18.7715 11.2685 18.7715 9.1465C18.7715 4.1845 14.7335 0.1465 9.7715 0.1465C4.8095 0.1465 0.7715 4.1845 0.7715 9.1465C0.7715 14.1085 4.8095 18.1465 9.7715 18.1465C11.8935 18.1465 13.8425 17.4045 15.3825 16.1715L21.0645 21.8535L22.4785 20.4395Z"
			/>
		</svg>
	);
};

export default SearchIcon;
