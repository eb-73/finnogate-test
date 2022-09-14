import LoginForm from "@/components/login-register/LoginForm";
import SideImage from "@/components/login-register/SideImage";

const WrapperBox = () => {
	return (
		<div className="flex w-full overflow-hidden rounded-2xl">
			<SideImage />
			<LoginForm />
		</div>
	);
};

export default WrapperBox;
