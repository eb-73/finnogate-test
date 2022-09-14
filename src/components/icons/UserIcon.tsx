import clsx from "clsx";
import { SVGProps } from "react-html-props";
const UserIcon = ({ className, ...props }: SVGProps) => {
	return (
		<svg
			width="25"
			className={clsx("w-full h-full fill-current", className)}
			{...props}
			height="24"
			viewBox="0 0 25 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_3_33087)">
				<path d="M12.125 6.2998C9.925 6.2998 8.125 8.0998 8.125 10.2998C8.125 12.4998 9.925 14.2998 12.125 14.2998C14.325 14.2998 16.125 12.4998 16.125 10.2998C16.125 8.0998 14.325 6.2998 12.125 6.2998ZM12.125 12.2998C11.025 12.2998 10.125 11.3998 10.125 10.2998C10.125 9.1998 11.025 8.2998 12.125 8.2998C13.225 8.2998 14.125 9.1998 14.125 10.2998C14.125 11.3998 13.225 12.2998 12.125 12.2998Z" />
				<path d="M12.125 0C5.525 0 0.125 5.4 0.125 12C0.125 18.6 5.525 24 12.125 24C18.725 24 24.125 18.6 24.125 12C24.125 5.4 18.725 0 12.125 0ZM12.125 22C9.925 22 8.025 21.3 6.325 20.2C7.025 18.5 9.225 17.4 12.125 17.4C15.025 17.4 17.225 18.5 17.925 20.2C16.225 21.3 14.325 22 12.125 22ZM19.425 18.8C18.225 16.7 15.525 15.3 12.125 15.3C8.625 15.3 5.925 16.7 4.825 18.8C3.125 17 2.125 14.6 2.125 12C2.125 6.5 6.625 2 12.125 2C17.625 2 22.125 6.5 22.125 12C22.125 14.6 21.125 17 19.425 18.8Z" />
			</g>
			<defs>
				<clipPath id="clip0_3_33087">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0.125)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default UserIcon;
