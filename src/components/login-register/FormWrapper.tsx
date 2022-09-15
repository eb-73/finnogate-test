import LoginForm from "@/components/login-register/LoginForm";
import SideImage from "@/components/login-register/SideImage";

const FormWrapper = () => {
	return (
		<div className="flex overflow-hidden rounded-2xl w-[90%] ">
			<SideImage />
			<LoginForm />
		</div>
	);
};

export default FormWrapper;
