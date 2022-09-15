import Image from "next/image";
import React from "react";

const SideImage = () => {
	return (
		<div className="relative hidden w-4/6 md:block">
			<Image
				className="relative max-w-full max-h-full"
				src="/media/images/Fingerprint-pana.png"
				layout="fill"
				objectFit="cover"
				priority={true}
				quality={100}
			/>
		</div>
	);
};

export default SideImage;
