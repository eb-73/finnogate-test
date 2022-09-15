import axios from "@/services/utils/axios";
import { AxiosRequestConfig } from "axios";

const client = async <D, F>({ url, data }: AxiosRequestConfig<D>) => {
	const response = await axios.request<F>({
		method: "POST",
		url,
		data,
	});
	return response.data;
};

export default client;
