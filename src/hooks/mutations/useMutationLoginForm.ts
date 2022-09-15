import { login } from "@/services/form";
import axios from "@/services/utils/axios";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const useMutationLoginForm = () => {
	return useMutation(async (data: LoginFormInput) => await login(data), {
		onSuccess: function (dataResponse) {
			if (dataResponse.token) {
				toast.success("login_successfully");
				localStorage.setItem("token", dataResponse.token as string);
				axios.defaults.headers.common.Authorization = `Bearer ${dataResponse.token}`;
			}
			if (dataResponse.error) {
				toast.error(dataResponse.error);
			}
		},
		onError: function (errorr, _, context) {
			const er = (errorr as AxiosError)?.response?.data;
			toast.error((er as Partial<LoginResponse>)?.error as string);
		},
	});
};

export default useMutationLoginForm;
