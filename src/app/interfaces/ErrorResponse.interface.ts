export interface ErrorResponse {
	error: Error
}

export interface Error {
	code: number;
	isError: boolean;
	message: string;
	block: boolean;
}