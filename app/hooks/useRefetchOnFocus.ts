import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

export const useRefetchOnFocus = (refetch: () => void) => {
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );
  /* Maybe subscribe to App state here too */
};
