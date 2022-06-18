/**
 * @name ApiResponseType
 * @description General Response Type
 */
export interface ApiResponseType<T> {
  message?: string;
  status?: number;
  data: T;
  loading?: boolean;
  error?: boolean;
}
