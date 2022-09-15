import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";

interface FormHeaderProps {
	login: boolean;
}

const FormHeader = ({ login }: FormHeaderProps) => {
	const { t: tf } = useTranslation("common", { keyPrefix: "form" });
	return (
		<div className="flex items-center justify-start gap-4 mb-8">
			<div className="relative w-10 h-10 border-l-2">
				<Image
					className="relative max-w-full max-h-full"
					src="/logo.png"
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div>
				<h2 className="text-xl font-bold">
					{login ? tf("login_title") : tf("register_title")}
				</h2>
				<h3 className="text-gray-500">{tf("sub_title")}</h3>
			</div>
		</div>
	);
};

export default FormHeader;
