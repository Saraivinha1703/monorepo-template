import React from 'react';
import {Pressable} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {PressableProps} from 'react-native';
import clsx from 'clsx';

type ButtonPressableProps = StyledProps<PressableProps>;

export function ButtonRoot(props: ButtonPressableProps) {
  return (
    <StyledComponent
      component={Pressable}
      className={clsx(props.className, 'm-2')}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
