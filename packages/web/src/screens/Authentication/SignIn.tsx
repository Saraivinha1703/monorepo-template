import {useRef} from 'react';
import {Button, Input} from '@monorepo/shared';
import {useColorScheme} from 'nativewind';
import {
  testGreen,
  testGold,
  testGray,
  torchRed,
  testLightGray,
} from '../../../../assets/tailwindCustomThemesColors';
import LinearGradient from 'react-native-linear-gradient';
import {StyledComponent} from 'nativewind';

export function SignIn() {
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
    <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
      <StyledComponent
        className="flex w-[55%] flex-col items-center justify-center rounded-lg p-3 shadow-xl shadow-gray-900/30"
        component={LinearGradient}
        colors={
          isLightMode
            ? [testLightGray[50], testLightGray[200], '#fff']
            : [testGray[600], testGray[800], testGray[950]]
        }
        start={{x: 0, y: 1}}
        end={{x: 0, y: 1}}
        useAngle
        angleCenter={{x: 0, y: 0.5}}
        angle={30}>
        <p className="my-2 text-lg font-bold text-gray-800 dark:text-white">
          Sign In
        </p>
        <div className="my-4 flex w-full flex-col items-center">
          <Input.Root className="mb-3 flex w-3/4 flex-row items-center justify-start">
            <Input.Label className="mr-5 text-lg text-gray-800 dark:text-white">
              Email:
            </Input.Label>
            <Input.Content
              className="w-full transition-shadow hover:shadow-md hover:shadow-black/20"
              placeholder="Digite aqui o seu email"
              onChangeText={e => (email.current = e)}
            />
          </Input.Root>
          <Input.Root className="mb-3 flex w-3/4 flex-row items-center justify-start">
            <Input.Label className="mr-5 text-lg text-gray-800 dark:text-white">
              Palavra Passe:
            </Input.Label>
            <Input.Content
              className="w-full transition-shadow hover:shadow-md hover:shadow-black/20"
              placeholder="Digite aqui a sua Palavra Passe"
              onChangeText={e => (password.current = e)}
              secureTextEntry
            />
          </Input.Root>
        </div>
        <div className="mb-2 flex w-1/2 flex-row justify-evenly">
          <Button.Root onPress={() => HandleSubmit()}>
            <Button.Submit
              className="rounded-xl px-6 py-2 shadow-lg shadow-green-500/50 transition-shadow delay-75 ease-in-out hover:shadow-lg hover:shadow-green-500"
              colors={
                isLightMode
                  ? [testGreen[200], testGreen[500]]
                  : [testGold[300], testGold[600]]
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Button.Text className="font-semibold text-gray-800 dark:text-white">
                Submit
              </Button.Text>
            </Button.Submit>
          </Button.Root>

          <Button.Root onPress={() => HandleClear()}>
            <Button.Cancel
              className="rounded-xl px-6 py-2 shadow-lg shadow-red-500/50 transition-shadow delay-75 ease-in-out hover:shadow-lg hover:shadow-red-500"
              colors={
                isLightMode
                  ? [torchRed[200], torchRed[500]]
                  : [torchRed[500], torchRed[700]]
              }
              start={{x: 0, y: 1.5}}
              end={{x: 1, y: 0}}
              useAngle
              angleCenter={{x: 0, y: 0.5}}
              angle={30}>
              <Button.Text className="font-bold text-gray-800  dark:text-white">
                Clear
              </Button.Text>
            </Button.Cancel>
          </Button.Root>
        </div>
      </StyledComponent>
    </div>
  );
}
