import clsx from 'clsx';
import {Text} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {TextProps} from 'react-native';
type InputLabelProps = StyledProps<TextProps>;

export function InputLabel(props: InputLabelProps) {
  return (
    <StyledComponent
      component={Text}
      className={clsx(
        props.className,
        'text-md ml-2 text-gray-800 dark:text-white',
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
