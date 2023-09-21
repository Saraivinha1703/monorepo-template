import React from 'react';
import {Text} from '../../lib/nativewind';
import {StyledComponent, StyledProps} from 'nativewind';
import {TextProps} from 'react-native';
import clsx from 'clsx';

type ButtonTextProps = StyledProps<TextProps>;

export function ButtonText(props: ButtonTextProps) {
  return (
    <StyledComponent
      component={Text}
      className={clsx(
        props.className,
        'font-bold text-gray-800 dark:text-white',
      )}
      {...props}>
      {props.children}
    </StyledComponent>
  );
}
