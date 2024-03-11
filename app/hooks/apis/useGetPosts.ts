import {useEffect, useState} from 'react';
import {axiosClients} from '~/apis';

interface IPost {
  id: number;
  title: string;
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
      .then(response => {
        const {products: data} = response.data as IResponse;
        setPosts(data);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return {
    isLoading,
    setIsloading,
    data: posts,
    refetch: handleGetPost,
  };
};
