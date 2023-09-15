import {View} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {ViewProps} from 'react-native';
import clsx from 'clsx';

type RootProps = StyledProps<ViewProps>;

export function InputRoot(props: RootProps) {
  return (
    <StyledComponent
      component={View}
      {...props}
      className={clsx([
        props.className
          ? props.className
          : 'mx-3 my-1 w-full flex-row justify-evenly',
      ])}>
      {props.children}
    </StyledComponent>
  );
}
