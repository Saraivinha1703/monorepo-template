import {View} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {ViewProps} from 'react-native';
import clsx from 'clsx';

type InputAlertProps = StyledProps<ViewProps>;

export function InputAlert(props: InputAlertProps) {
  return (
    <StyledComponent
      component={View}
      {...props}
      className={clsx(props.className, 'h-3 w-3 bg-red-500')}
    />
  );
}
