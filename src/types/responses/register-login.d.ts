declare global {
	interface RegisterResponse {
		id?: string;
		token?: string;
		error?: string;
	}
	interface LoginResponse {
		token?: string;
		error?: string;
	}
}

export default global;
