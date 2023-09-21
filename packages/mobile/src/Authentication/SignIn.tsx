import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '@monorepo/shared';
import {useColorScheme} from 'nativewind';
import {
  testGreen,
  testGold,
  torchRed,
  testGray,
  testLightGray,
} from '../../../assets/tailwindCustomThemesColors';
import LinearGradient from 'react-native-linear-gradient';
import {StyledComponent} from 'nativewind';
export const SignIn = () => {
  const email = useRef('');
  const password = useRef('');
  const {colorScheme} = useColorScheme();
  const isLightMode = colorScheme === 'light';
  function HandleSubmit() {
    console.log('email: ', email.current);
    console.log('password: ', password.current);
  }

  function HandleClear() {
    console.log('clear');
  }

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <View className="w-full ">
        <StyledComponent
          colors={
            isLightMode
              ? [testLightGray[50], testLightGray[200], '#fff']
              : [testGray[600], testGray[800], testGray[950]]
          }
          start={{x: 0, y: 1}}
          end={{x: 0, y: 1}}
          useAngle
          angleCenter={{x: 0, y: 0.5}}
          angle={35}
          component={LinearGradient}
          className="mx-5 items-center justify-center rounded-xl p-3 shadow-xl shadow-black">
          <Text className="text-lg font-bold text-gray-800 dark:text-white">
            Sign In
          </Text>
          <View className="w-full items-center">
            <Input.Root className="mb-2 w-3/4 flex-col items-start">
              <Input.Label>Email</Input.Label>
              <Input.Content
                className="w-full"
                placeholderTextColor={
                  isLightMode ? testGreen[600] : testGold[600]
                }
                placeholder="Digite aqui o seu email"
                onChangeText={e => (email.current = e)}
              />
            </Input.Root>

            <Input.Root className="mb-2 w-3/4 flex-col">
              <Input.Label>Palavra Passe</Input.Label>
              <Input.Content
                className="w-full"
                placeholder="Digite aqui a sua Palavra Passe"
                placeholderTextColor={
                  isLightMode ? testGreen[600] : testGold[600]
                }
                secureTextEntry
                onChangeText={e => (password.current = e)}
              />
            </Input.Root>
          </View>

          <View className="w-3/4 flex-row justify-evenly">
            <Button.Root onPress={() => HandleSubmit()}>
              <Button.Submit
                className="shadow-lg shadow-green-500 dark:shadow-yellow-500"
                colors={
                  isLightMode
                    ? [testGreen[200], testGreen[500]]
                    : [testGold[300], testGold[600]]
                }
                start={{x: 0, y: 1.5}}
                end={{x: 1, y: 0}}>
                <Button.Text>Submit</Button.Text>
              </Button.Submit>
            </Button.Root>
            <Button.Root onPress={() => HandleClear()}>
              <Button.Cancel
                className="shadow-lg shadow-red-500"
                colors={
                  isLightMode
                    ? [torchRed[200], torchRed[500]]
                    : [torchRed[400], torchRed[600]]
                }
                start={{x: 0, y: 1.5}}
                end={{x: 1, y: 0}}>
                <Button.Text>Clear</Button.Text>
              </Button.Cancel>
            </Button.Root>
          </View>
        </StyledComponent>
      </View>
    </View>
  );
};
