import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {FlastListAnimated} from '~/components/base/FlastListAnimated/FlastListAnimated';

interface IProps
  extends NativeStackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = (props: IProps) => {
  const {} = props;
  return (
    <View style={{flex: 1, marginTop: 60}}>
      <ScrollView
        style={{
          height: Dimensions.get('screen').height - 400,
        }}>
        <View style={{height: 5000}} />
      </ScrollView>

      <FlastListAnimated />
    </View>
  );
};
