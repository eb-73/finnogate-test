import { loginUrl } from "@/helpers/env-variables";
import _axios from "axios";

const axios = _axios.create({
	baseURL: loginUrl,
});
export default axios;
