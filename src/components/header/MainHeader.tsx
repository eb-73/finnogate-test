import BatteryIcon from "@/components/icons/BatteryIcon";
import MobileSignalIcon from "@/components/icons/MobileSignalIcon";
import NotchIcon from "@/components/icons/NotchIcon";
import WifiIcon from "@/components/icons/WifiIcon";
import useLiveDate from "@/hooks/global/useLiveDate";

const MainHeader = () => {
	const { hours, minutes } = useLiveDate();
	return (
		<div className="container grid grid-cols-12 gap-2 h-11 bg-[#FFFFFF] ">
			<div className="col-span-2 justify-self-end self-center ">
				<h1 className="font-bold text-md ">{`${hours}:${minutes}`}</h1>
			</div>
			<div className="w-[219px] col-span-8 justify-self-center self-start">
				<NotchIcon className="w-full" />
			</div>
			<div className="flex items-end  gap-1 col-span-2 justify-self-start self-center">
				<MobileSignalIcon className="w-[18px]" />
				<WifiIcon className="w-[18px]" />
				<BatteryIcon className="w-[18px]" />
			</div>
		</div>
	);
};

export default MainHeader;
