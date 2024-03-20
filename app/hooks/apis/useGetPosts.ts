import {useEffect, useState} from 'react';
import {axiosClients} from '~/apis';
import {AxiosResponse} from 'axios';

export interface IPost {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
}
interface IResponse {
  limit: number;
  products: IPost[];
}
export const useGetPost = () => {
  const [isLoading, setIsloading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const handleGetPost = () => {
    setIsloading(true);
    axiosClients
      .get('https://dummyjson.com/products')
      .then((response: AxiosResponse<IResponse>) => {
        const {products: data} = response.data;
        setPosts(data);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    handleGetPost();
  }, []);
  const handleEndReached = () => {
    handleGetPost();
  };

  return {
    isLoading,
    setIsloading,
    data: posts,
    handleEndReached,
  };
};
