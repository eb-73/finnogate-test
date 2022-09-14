declare global {
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
}
export default global;
