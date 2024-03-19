import {QueryKey, useQuery} from '@tanstack/react-query';
import {request} from '~/apis';
import {Methos} from '~/interfaces';

type BaseResponse<T> = {
  products: T;
};
type Configs = {
  configs?: any;
  initQueryParams?: Record<string, unknown>;
};
type QueryProducts = Record<string, unknown>;
type Product = {
  id: number;
  title: string;
};

export async function getProducts(
  params: QueryProducts,
): Promise<BaseResponse<Product[]>> {
  return request({
    url: 'https://dummyjson.com/products',
    method: Methos.GET,
    params: {...params},
  });
}
export const useGetProducs = ({configs, initQueryParams}: Configs) => {
  const queryKey: QueryKey = ['products', initQueryParams];

  const {data, refetch} = useQuery({
    queryKey,
    queryFn: () => getProducts({...initQueryParams}),
    ...configs,
    staleTime: 1000,
  });

  return {
    data,
    refetch,
  };
};
