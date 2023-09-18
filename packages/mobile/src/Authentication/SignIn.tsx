import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '@monorepo/shared';

export const SignIn = () => {
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
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <View className="w-full">
        <View className="mx-5 items-center justify-center rounded-xl bg-gray-700 p-3">
          <Text className="text-lg font-bold text-gray-800 dark:text-white">
            Sign In
          </Text>
          <Input.Root className="mb-2 flex-col">
            <Input.Label>Email</Input.Label>
            <Input.Content
              className="w-10/12"
              placeholder="Digite aqui o seu email"
              onChangeText={e => (email.current = e)}
            />
          </Input.Root>

          <Input.Root className="mb-2 flex-col">
            <Input.Label>Palavra Passe</Input.Label>
            <Input.Content
              className="w-10/12"
              placeholder="Digite aqui a sua Palavra Passe"
              secureTextEntry
              onChangeText={e => (password.current = e)}
            />
          </Input.Root>

          <View className="flex-row">
            <Button.Root onPress={() => HandleSubmit()}>
              <Button.Submit>
                <Button.Text>Submit</Button.Text>
              </Button.Submit>
            </Button.Root>
            <Button.Root onPress={() => HandleClear()}>
              <Button.Cancel>
                <Button.Text>Clear</Button.Text>
              </Button.Cancel>
            </Button.Root>
          </View>
        </View>
      </View>
    </View>
  );
};
