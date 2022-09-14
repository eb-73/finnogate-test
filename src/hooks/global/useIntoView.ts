import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IntoViewProps {
	fn(): any;
}

const useIntoView = ({ fn }: IntoViewProps) => {
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			fn();
		}
	}, [inView]);
	return {
		ref,
	};
};

export default useIntoView;
