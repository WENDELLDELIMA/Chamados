import { useState } from "react";
import { VStack , Heading, Icon, useTheme} from "native-base"
import {Envelope, Key} from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg'
import { useNavigation } from '@react-navigation/native';

import { Input } from "../components/Input"
import { Button } from "../components/Button"
export function Signin(){
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');

    
    const navigation = useNavigation();
    const {colors} = useTheme();
    function handleSignIn(){
        navigation.navigate('home')
    }
   
    return(
        <VStack flex={1} alignItems={'center'} bg={'gray.600'} px={8} pt={24}>
            <Logo width={350}  />
            <Heading color={"green.700"}  fontSize={32} bold mt={3} mb={4} >
                Seja Bem vindo!
            </Heading>
            <Heading color={"gray.100"} fontSize='md'  mb={8} >
                Acompanhe suas solicitações de serviço ou materiais!!
            </Heading>
            <Input placeholder="E-mail"
            mb={4}
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />} 
            onChangeText={setName}/>


            <Input mb={8} placeholder="Senha" 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />} 
            secureTextEntry onChangeText={setSenha}/>

            <Button title="Entrar" w={'full'} onPress={handleSignIn}/>
        </VStack>
    ) 
}