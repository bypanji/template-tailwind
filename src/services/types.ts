export interface ApiResponse<T> {
    content: T,
    success: boolean,
    status: number
}