import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Pressable, Keyboard} from 'react-native';
import { Vibration } from 'react-native-web';
import ResultImc from './resultImc';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular") 
    const [errorMessage, setErrorMessage] = useState(null)

    // Calculando o imc
    function imcCalculator(){ 
        let heightFormat = height.replace(",", ".") // subistituindo caso o user colocar ',' tranforma em '.'
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2)) //'toFixed(2)' - para retornar apenas 2 casas decimais
    }

    // Validando o imc
    function validationImc(){

        // Se altura e peso for diferente de nulo: calcula imc dps setta altura e peso como nula novamnete dps seta MessageImc e TextButton
        if(weight != null && height !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return 
        }

        // Senão não faz o calculo de imc e setta as mensagens
        setImc(null)
        setTextButton("Calcular")
        verificationImc()
        setMessageImc("preencha o peso e altura")        
    }

    // Verifica se o Imc está nullo
    function verificationImc(){
        if (imc == null){
            Vibration.vibrate() // Para vibrar o celular
            setErrorMessage("Campo obrigatório *")
        }
    }

    // 'onChangeText' - conforme vai alterando esse texto vai alterando o valor da variavel passada nele
    // 'Pressable' - torna oq esta dentro do pressable clicavel, captura/entende um clique nessa area
    // 'Keyboard.dismiss' - para fechar o teclado
    return (
        <Pressable style={styles.formContext} onPress={Keyboard.dismiss}>

            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} placeholder="EX: 1.74" keyboardType='numeric' onChangeText={setHeight} value={height}/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} placeholder="EX: 80.5" keyboardType='numeric' onChangeText={setWeight} value={weight}/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                {/* <Button title={textButton} onPress={()=> validationImc()}/> */}
                <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>

        </Pressable>
    );
}