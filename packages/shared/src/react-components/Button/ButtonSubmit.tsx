import React from 'react';
import {StyledComponent, StyledProps} from 'nativewind';
import clsx from 'clsx';
import {LinearGradient} from '../../lib/nativewind';
import {LinearGradientProps} from 'react-native-linear-gradient';
type ButtonViewProps = StyledProps<LinearGradientProps>;

export function ButtonSubmit(props: ButtonViewProps) {
  return (
    <StyledComponent
      component={LinearGradient}
      className={clsx(
        props.className,
        'rounded-xl px-6 py-2 shadow-lg shadow-green-300/50 dark:shadow-yellow-500/50',
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
