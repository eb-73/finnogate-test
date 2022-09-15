import { setQuery } from "@/helpers/setQuery";

export const getRoute = ({ route, query }: GetRouteProps) => {
	let url;
	if (query) {
		const queries = setQuery(query);
		url = route + queries;
	}
	url = route;

	return url;
};
