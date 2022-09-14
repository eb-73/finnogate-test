import { getPosts } from "@/services/posts";
import { useInfiniteQuery } from "react-query";

interface PostsQuery {
	initialData?: DataResponse;
	query?: QueryParams;
}

const useInfinitePostsQuery = ({ initialData, query }: PostsQuery) => {
	return useInfiniteQuery<DataResponse>(
		["posts"],
		async ({ pageParam = 1 }) => {
			const data = await getPosts({ page: pageParam, ...query });
			return data.data;
		},
		{
			getPreviousPageParam: (firstPage) =>
				firstPage.hasPrevPage ? firstPage.page - 1 : undefined,
			getNextPageParam: (lastPage) =>
				lastPage.hasNextPage ? lastPage.page + 1 : undefined,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		}
	);
};

export default useInfinitePostsQuery;
