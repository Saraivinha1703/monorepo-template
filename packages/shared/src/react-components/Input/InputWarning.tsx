import {View} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {ViewProps} from 'react-native';
import clsx from 'clsx';
type InputWarningProps = StyledProps<ViewProps>;

export function InputWarning(props: InputWarningProps) {
  return (
    <StyledComponent
      component={View}
      {...props}
      className={clsx(props.className, 'h-3 w-3 bg-yellow-500')}
    />
  );
}
