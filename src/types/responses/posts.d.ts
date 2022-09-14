declare global {
	interface PostsResponse {
		data: DataResponse;
		success: boolean;
	}

	interface DataResponse {
		data: SinglePost[];
		limit: number;
		page: number;
		total: number;
		totalPages: number;
		offset: number;
		hasNextPage: boolean;
		hasPrevPage: boolean;
	}

	interface SinglePost {
		id: number;
		title: string;
		description: string;
		image: string;
	}
}

export default global;
