import { mainUrl } from "@/healpers/env-variables";
import _axios from "axios";

const axios = _axios.create({
	baseURL: mainUrl,
});
export default axios;
