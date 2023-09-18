import React from 'react';
import {TouchableOpacity} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {TouchableOpacityProps} from 'react-native';
import clsx from 'clsx';

type ButtonTouchableOpacityProps = StyledProps<TouchableOpacityProps>;

export function ButtonRoot(props: ButtonTouchableOpacityProps) {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className={clsx(props.className, 'm-2')}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
