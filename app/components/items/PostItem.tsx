import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPost} from '~/hooks';

interface IProps {
  item: IPost;
}
export const PostItem = (props: IProps) => {
  const {item} = props;

  return (
    <View style={styles.item}>
      <View>
        <Image source={{uri: item?.thumbnail}} style={styles.image} />
      </View>
      <View style={styles.flex}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text numberOfLines={2} style={styles.flex}>
          {item?.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {display: 'flex', flexDirection: 'row', gap: 8},
  image: {width: 70, height: 70, borderRadius: 9999},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 6},
  flex: {
    flex: 1,
  },
});
