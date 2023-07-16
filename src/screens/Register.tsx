import React from 'react';
import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg={'gray.600'}>
        <Header title='Nova Solicitacao' />
        <Input 
        placeholder='Numero de Patrimonio'
        mt={4}
        />

        <Input

        placeholder='descricao do problema'
        mt={5}
        flex={1}
        multiline
        textAlignVertical={'top'}
        />

        <Button title='CADASTRAR'
        mt={5}
        />
    </VStack>
  );
}