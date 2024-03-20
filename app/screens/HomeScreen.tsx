import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  NativeModules,
  ScrollView,
  View,
  RefreshControl,
} from 'react-native';
import {FlastListAnimated} from '~/components/base/FlastListAnimated/FlastListAnimated';
const {StatusBarManager} = NativeModules;
interface IProps
  extends NativeStackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = (props: IProps) => {
  const {} = props;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
      }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Cập nhập"
          />
        }>
        <View style={{height: 500}} />
      </ScrollView>
      <FlastListAnimated />
    </SafeAreaView>
  );
};
