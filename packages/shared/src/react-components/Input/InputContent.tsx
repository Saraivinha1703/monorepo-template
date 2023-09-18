import {TextInput} from '../../lib/nativewind';
import {TextInputProps} from 'react-native';
import {StyledComponent, StyledProps} from 'nativewind';
import clsx from 'clsx';

type InputContentProps = StyledProps<TextInputProps>;

export function InputContent(props: InputContentProps) {
  return (
    <StyledComponent
      component={TextInput}
      {...props}
      placeholder={props.placeholder}
      className={clsx(
        props.className,
        'border-testGreen-500 dark:border-testGold-500 placeholder-testGreen-800 dark:placeholder-testGold-700 m-1 h-11 w-1/2 rounded-lg border-2 p-1 text-gray-800 dark:text-white',
      )}
    />
  );
}
