import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, IconButton, Text, VStack, useTheme, FlatList, Center} from 'native-base';
import Logo from '../assets/logo_secondary.svg';
import {SignOut} from 'phosphor-react-native';

import {ChatTeardropText} from 'phosphor-react-native'

import { Filter } from '../components/Filter';

import { Button } from '../components/Button';
import { Order, orderProps } from '../components/Order';
export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');

    const [orders, setOrders] = useState<orderProps[]>([{
        id: '123',
        patrimony:'TROCA DE COMPUTADOR',
        when:'18/07/2023',
        status: 'closed'

       },
       {
        id: '1223233',
        patrimony:'REPARO NA REDE',
        when:'18/07/2023',
        status: 'closed'

       },
       {
        id: '343434',
        patrimony:'MELHORIA DO WI-FI',
        when:'18/07/2023',
        status: 'closed'

       },
       {
        id: '234234',
        patrimony:'NOVO NOTEBOOK',
        when:'18/07/2023',
        status: 'open'

       },
       {
        id: '454545',
        patrimony:'COMPRA DE MONITOR',
        when:'18/07/2023',
        status: 'open'

       },
       {
        id: '4545454',
        patrimony:'INSTALACAO DO OFFICE',
        when:'18/07/2023',
        status: 'open'

       },
       {
        id: '12234223',
        patrimony:'ACESSO AO POWER BI',
        when:'18/07/2023',
        status: 'open'

       },
       {
        id: '123',
        patrimony:'NOVO CADASTRO MANUTENCAO',
        when:'18/07/2023',
        status: 'open'

       },
        
]);
    const ordens = orders.filter(item => item.status === statusSelected);
    const {colors} = useTheme();
    const navigation = useNavigation();
    function handleNewOrder(){
        navigation.navigate('new')

    }
    function handleLogin(){
        navigation.navigate('login')

    }

    function handleOpenDetails(orderId:string){
        navigation.navigate('details', {orderId})
    }
  return (
    <VStack flex={1} pb={7} bg={'gray.700'}>
        <HStack
            w={'full'}
            justifyContent='space-between'
            alignItems={'center'}
            bg={'gray.600'}
            pt={12}
            pb={8}
            px={6}
            mt={6}
        >
            
            
          <Heading color={'white'} fontWeight={'bold'}>GUAPI-DESK</Heading>
            <IconButton 
                icon={<SignOut  size={26} color={colors.gray[300]} />}
            onPress={handleLogin}/>

        </HStack>
        <VStack flex={1} px={6}>

        <HStack w={'full'} mt={8} mb={4} justifyContent={'space-between'} alignItems={'center'}>

                <Heading color={'gray.100'}>Meus Chamados</Heading>
            <Text color={'gray.200'}>

                {ordens.length}
            </Text>

        </HStack>
        <HStack space={3} mb={8}>
            <Filter title={'Em Andamento'} type={'open'} onPress={()=> setStatusSelected('open')}
            isActive={statusSelected === 'open'}/>
            <Filter title={'Finalizado'} type={'closed'} onPress={()=> setStatusSelected('closed')} isActive={statusSelected === 'closed'}/>
        </HStack>

        <FlatList 
            data={ordens}
            keyExtractor={item => item.id}
            renderItem={({item})=> <Order data={item} onPress={()=> handleOpenDetails(item.id)} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}

            ListEmptyComponent={()=>(
                <Center>
                    <ChatTeardropText color={colors.gray[300]} size={40}/>
                    <Text color={'gray.300'} fontSize={'xl'} mt={6} textAlign={'center'}>

                        Você ainda não possui {'\n'} Solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                    </Text>
                </Center>
            )}


        />

        <Button title='Nova Solicitação' onPress={handleNewOrder}/>
        </VStack>

       
    </VStack>
  );
}