import BaseInput from "@/components/common/BaseInput";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";

const LoginForm = () => {
	return (
		<form className="w-2/6 ">
			<BaseInput
				label="نام کاربری"
				startIcon={<UserIcon className="w-5" />}
				placeholder="ایمیل خود را وارد کنید"
			/>
			<BaseInput
				label="کلمه عبور"
				startIcon={<LockClosedIcon className="w-5" />}
				placeholder="کلمه عبور خود را وارد کنید"
			/>
			<a className="text-xs font-bold underline">
				رمز عبور خود را فراموش کرده اید
			</a>
		</form>
	);
};

export default LoginForm;
