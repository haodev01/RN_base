import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

export const axiosClients = axios.create({
  baseURL: '',
  timeout: 1000,
});

axiosClients.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  },
);
axiosClients.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;
interface OptionsRequest<TDataRequest>
  extends RequireField<AxiosRequestConfig<TDataRequest>, 'url'> {
  method: Method;
}
export const request = async <
  TDataRequest = any,
  TDataResponse = any,
  TDataError = any,
>(
  options: OptionsRequest<TDataRequest>,
) => {
  const {params, data} = options;

  const onSuccess = (response: AxiosResponse<TDataResponse>) => {
    return {
      ...response.data,
    };
  };
  const onError = (error: AxiosError<TDataError>) => {
    return Promise.reject({
      ...error.response?.data,
      statusCode: error.response?.status,
    });
  };
  return axiosClients({...options, params, data})
    .then(onSuccess)
    .catch(onError);
};
