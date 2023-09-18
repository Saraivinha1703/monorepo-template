import React from 'react';
import {View} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {ViewProps} from 'react-native';
import clsx from 'clsx';

type ButtonViewProps = StyledProps<ViewProps>;

export function ButtonCancel(props: ButtonViewProps) {
  return (
    <StyledComponent
      component={View}
      className={clsx(
        props.className,
        'dark:bg-torchRed-600 dark:border-b-torchRed-800 h-9 items-center justify-center rounded-xl border-b-4 border-b-red-800 bg-red-500 px-6',
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
