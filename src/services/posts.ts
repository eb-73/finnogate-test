import { setQuery } from "@/healpers/setQuery";
import axios from "@/services/utils/axios";

export async function getPosts(query: QueryParams = {}) {
	const queryParams = setQuery(query);
	const response = await axios.request<PostsResponse>({
		method: "get",
		url: queryParams,
	});
	return response.data;
}
