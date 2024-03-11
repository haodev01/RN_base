import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGetPost, useRefetchOnFocus} from '~/hooks';

interface IProps
  extends NativeStackScreenProps<RootStackParamList, 'HomeScreen'> {}
export const HomeScreen = (props: IProps) => {
  const {navigation} = props;
  const {data, refetch} = useGetPost();

  useRefetchOnFocus(refetch);

  return (
    <View style={styles.wrap}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen', {})}>
        <Text>Login</Text>
      </TouchableOpacity>
      {data?.map(item => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 200,
  },
});
