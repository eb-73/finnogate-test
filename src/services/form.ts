import { getRoute } from "@/helpers/getRoute";
import route from "@/helpers/routes/api-routes";
import client from "@/services/utils/client";

export async function login(data: LoginFormInput) {
	const url = getRoute({ route: route.form.login.url });
	return await client<LoginFormInput, LoginResponse>({
		data,
		url,
		method: "POST",
	});
}

export async function register(data: LoginFormInput) {
	const url = getRoute({ route: route.form.register.url });
	return await client<LoginFormInput, LoginResponse>({
		data,
		url,
		method: "POST",
	});
}
