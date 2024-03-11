import {Text, TouchableOpacity} from 'react-native';

interface IProps {
  title: string;
}

export const AppButton = (props: IProps) => {
  const {title} = props;
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
