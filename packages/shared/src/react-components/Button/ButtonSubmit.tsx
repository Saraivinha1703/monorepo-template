import React from 'react';
import {View} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {ViewProps} from 'react-native';
import clsx from 'clsx';

type ButtonViewProps = StyledProps<ViewProps>;

export function ButtonSubmit(props: ButtonViewProps) {
  return (
    <StyledComponent
      component={View}
      className={clsx(
        props.className,
        'bg-testGreen-500 dark:bg-testGold-500 dark:border-b-testGold-800 border-b-testGreen-800 h-9 items-center justify-center rounded-xl border-b-4 px-6',
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
