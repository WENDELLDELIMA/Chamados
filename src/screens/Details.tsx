import React from 'react';
import { Text, VStack } from 'native-base';
import { Header } from '../components/Header';
import { useRoute } from '@react-navigation/native';

type routeParams = {
  orderId:string,
}

export function Details() {

  const route = useRoute();
  const {orderId} = route.params as routeParams;
  return (
    <VStack flex={1} bg={'gray.700'}>
        <Header title='Solicitacao' />
    <Text color={'white'}>{orderId}</Text>
    </VStack>
  );
}