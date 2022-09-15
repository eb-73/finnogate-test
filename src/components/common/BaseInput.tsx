import { InputPropsWithoutRef as HTMLInputProps } from "react-html-props";
import { ForwardedRef, forwardRef, ReactNode } from "react";
import clsx from "clsx";
export type BaseInputProps = HTMLInputProps & {
	label?: string;
	placeholder?: string;
	className?: string;
	error?: string;
	startIcon?: ReactNode;
};

const BaseInput = forwardRef(
	(
		{
			label,
			placeholder,
			className,
			error,
			type = "text",
			startIcon,

			...rest
		}: BaseInputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div className={clsx("flex flex-col w-full gap-1", className)}>
				<label htmlFor="" className="font-bold">
					{label}
				</label>
				<div className="flex items-center h-12 gap-2 px-2 overflow-hidden text-gray-500 bg-white border-2 rounded-lg">
					{startIcon && <div>{startIcon}</div>}
					<input
						type={type}
						placeholder={placeholder}
						className={clsx(
							"flex-grow h-full bg-white focus:outline-none"
						)}
						ref={ref}
						{...rest}
					/>
				</div>

				<span className="text-sm text-red-500">{error}</span>
			</div>
		);
	}
);

export default BaseInput;
