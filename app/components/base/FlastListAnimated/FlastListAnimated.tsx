import React, {useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useGetPost} from '~/hooks';
import {PostItem} from '~/components';

const ITEM_SIZE = 100;
export const FlastListAnimated = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const {data: posts, handleEndReached, isLoading} = useGetPost();

  return (
    <Animated.FlatList
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      data={posts}
      keyExtractor={() => Math.random().toString()}
      renderItem={({index, item}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const opacityInputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 0.5),
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
            ]}>
            <PostItem item={item} />
          </Animated.View>
        );
      }}
      refreshing={isLoading}
      onRefresh={async () => {
        await handleEndReached();
      }}
    />
  );
};
const styles = StyleSheet.create({
  wrap: {
    marginTop: 80,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
