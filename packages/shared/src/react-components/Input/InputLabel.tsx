import clsx from 'clsx';
import {Text} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {TextProps} from 'react-native';
type InputLabelProps = StyledProps<TextProps>;

export function InputLabel(props: InputLabelProps) {
  return (
    <StyledComponent
      component={Text}
      className={clsx(props.className, 'text-testGreen-500 ml-3 text-lg')}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
