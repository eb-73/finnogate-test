import clsx from "clsx";
import { SVGProps } from "react-html-props";

interface SpinnerProps extends SVGProps {
	className?: string;
}

const Spinner = ({ className, ...props }: SpinnerProps) => {
	return (
		<svg
			className={clsx("spinner", className)}
			viewBox="0 0 50 50"
			{...props}
		>
			<circle
				className="path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="5"
			></circle>
		</svg>
	);
};

export default Spinner;
