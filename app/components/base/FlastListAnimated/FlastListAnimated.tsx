import React from 'react';
import {Animated, StyleSheet} from 'react-native';

const DATA = [...Array(30).keys()].map((_, i) => ({
  key: i,
  image: '',
  name: '',
  jobTitle: '',
  email: '',
}));
const ITEM_SIZE = 85;
export const FlastListAnimated = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      data={DATA}
      keyExtractor={() => Math.random().toString()}
      renderItem={({index}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const opacityInputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 0.6),
        ];
        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1, 1, 1, 0],
        });
        return (
          <Animated.View
            style={[
              styles.item,
              {
                transform: [{scale}],
                opacity,
              },
            ]}
          />
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  wrap: {
    marginTop: 80,
  },
  item: {
    height: 70,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
