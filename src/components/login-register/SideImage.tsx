import Image from "next/image";
import React from "react";

const SideImage = () => {
	return (
		<div className="relative w-4/6 h-40 h-full md:block">
			<Image
				className="relative max-w-full max-h-full"
				src="/media/images/login-area-side-vector.png"
				layout="fill"
				objectFit="cover"
				priority={true}
				quality={100}
			/>
		</div>
	);
};

export default SideImage;
