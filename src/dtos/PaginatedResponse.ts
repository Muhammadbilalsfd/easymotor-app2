export type Paginated<T> = {
	totalPages: number;
	totalItems?: number;
	page?: number;
	size?: number;
	content: T[];
};
