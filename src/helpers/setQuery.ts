export function setQuery(query: QueryParams = {}) {
	if (Object.keys(query).length !== 0) {
		const result = "?" + new URLSearchParams(query).toString();
		return result;
	}
}
