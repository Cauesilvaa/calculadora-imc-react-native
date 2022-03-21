import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Form(){
    return (
        <View>

            <View>
                <Text>Altura</Text>
                <TextInput placeholder="EX: 1.74" KeyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput placeholder="EX: 75.151" KeyboardType="numeric"/>

                <Button title='Calcular'/>

                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>

        </View>
    );
}