import clsx from "clsx";
import { SVGProps } from "react-html-props";
const BatteryIcon = ({ className, ...props }: SVGProps) => {
	return (
		<svg
			className={clsx("w-full h-full fill-current", className)}
			{...props}
			width="25"
			height="12"
			viewBox="0 0 25 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.35"
				d="M0.5 3.00004C0.5 1.80342 1.47005 0.833374 2.66667 0.833374H19.3333C20.53 0.833374 21.5 1.80342 21.5 3.00004V9.00004C21.5 10.1967 20.53 11.1667 19.3333 11.1667H2.66667C1.47005 11.1667 0.5 10.1967 0.5 9.00004V3.00004Z"
				stroke="black"
			/>
			<path
				opacity="0.4"
				d="M23 4.00006V8.00006C23.8047 7.66128 24.328 6.87319 24.328 6.00006C24.328 5.12693 23.8047 4.33884 23 4.00006Z"
				fill="black"
			/>
			<path
				d="M2 3.43337C2 2.82586 2.49249 2.33337 3.1 2.33337H18.9C19.5075 2.33337 20 2.82586 20 3.43337V8.56671C20 9.17422 19.5075 9.66671 18.9 9.66671H3.1C2.49249 9.66671 2 9.17422 2 8.56671V3.43337Z"
				fill="black"
			/>
		</svg>
	);
};

export default BatteryIcon;
