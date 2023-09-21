import React from 'react';
import {StyledComponent, StyledProps} from 'nativewind';
import clsx from 'clsx';
import {LinearGradient} from '../../lib/nativewind';
import {LinearGradientProps} from 'react-native-linear-gradient';
type ButtonViewProps = StyledProps<LinearGradientProps>;

export function ButtonCancel(props: ButtonViewProps) {
  return (
    <StyledComponent
      component={LinearGradient}
      className={clsx(
        'rounded-xl px-6 py-2 shadow-lg shadow-red-500/50',
        props.className,
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
