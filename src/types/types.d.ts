declare global {
	interface LoginFormInput {
		email: string;
		password: string;
	}
	interface QueryParams {
		ids?: number[];
		page?: number;
		limit?: number;
		sort?: string;
		order?: "asc" | "desc" | string;
		q?: string;
		category?: string;
		[key: string]: any;
	}
	interface GetRouteProps {
		query?: QueryParams;
		route: string;
	}
}
export default global;
