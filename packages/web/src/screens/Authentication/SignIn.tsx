import {useRef} from 'react';
import {Button, Input} from '@monorepo/shared';

export function SignIn() {
  const email = useRef('');
  const password = useRef('');

  function HandleSubmit() {
    console.log('email: ', email.current);
    console.log('password: ', password.current);
  }

  function HandleClear() {
    console.log('clear');
  }

  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex w-9/12 flex-col items-center justify-center rounded-lg bg-gray-200 p-3 dark:bg-gray-700">
        <p className="my-2 text-lg font-bold text-gray-800 dark:text-white">
          Sign In
        </p>
        <div className="my-4 w-full">
          <Input.Root className="mb-3 flex flex-row items-center justify-start">
            <Input.Label className="mr-5 text-gray-800 dark:text-white">
              Email:
            </Input.Label>
            <Input.Content
              className="w-1/2"
              placeholder="Digite aqui o seu email"
              onChangeText={e => (email.current = e)}
            />
          </Input.Root>
          <Input.Root className="mb-3 flex flex-row items-center justify-start">
            <Input.Label className="mr-5 text-gray-800 dark:text-white">
              Palavra Passe:
            </Input.Label>
            <Input.Content
              className="w-1/2"
              placeholder="Digite aqui a sua Palavra Passe"
              onChangeText={e => (password.current = e)}
              secureTextEntry
            />
          </Input.Root>
        </div>
        <div className="flex flex-row">
          <Button.Root onPress={() => HandleSubmit()}>
            <Button.Submit>
              <Button.Text className="font-bold text-gray-800 dark:text-white">
                Submit
              </Button.Text>
            </Button.Submit>
          </Button.Root>

          <Button.Root onPress={() => HandleClear()}>
            <Button.Cancel>
              <Button.Text className="font-bold text-gray-800 dark:text-white">
                Clear
              </Button.Text>
            </Button.Cancel>
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
