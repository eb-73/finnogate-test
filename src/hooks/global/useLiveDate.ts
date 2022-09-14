import { useEffect, useState } from "react";

const useLiveDate = () => {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date());
		}, 60 * 1000);
		return () => {
			clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
		};
	}, []);
	return { hours: date.getHours(), minutes: date.getMinutes() };
};

export default useLiveDate;
