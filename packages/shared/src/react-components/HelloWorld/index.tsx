import {StyledProps, StyledComponent} from 'nativewind';
import {Text} from '../../lib/nativewind';
import {TextProps} from 'react-native';
import {clsx} from 'clsx';
type HelloWorldProps = StyledProps<TextProps>;

export const HelloWorld = (props: HelloWorldProps) => {
  return (
    <StyledComponent
      component={Text}
      className={clsx(props.className, 'text-white')}
      {...props}
    />
  );
};
