import clsx from "clsx";
import { SVGProps } from "react-html-props";
const PostIcon = ({ className, ...props }: SVGProps) => {
	return (
		<svg
			className={clsx("w-full h-full fill-current", className)}
			{...props}
			width="25"
			height="24"
			viewBox="0 0 25 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10.381 13.648L8.854 11.196L6.375 15.173H18.375L13.903 8L10.381 13.648Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.375 3H18.789H21.375C22.4796 3 23.375 3.89543 23.375 5V19C23.375 20.103 22.478 21 21.375 21H3.375C2.272 21 1.375 20.103 1.375 19V5C1.375 3.898 2.272 3 3.375 3ZM3.375 5V19H21.376L21.375 9V5H17.375H3.375Z"
			/>
		</svg>
	);
};

export default PostIcon;
