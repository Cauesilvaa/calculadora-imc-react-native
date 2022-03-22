import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
      width: "100%",
      height: "100%",
      bottom: 0, // Para ir até o maximo no canto inferior - ir tudo para baixo
      backgroundColor: "#ffffff",
      alignItems: "center",
      borderTopLeftRadius: 30, // Para arredordar as bordas
      borderTopRightRadius: 30, // Para arredordar as bordas
      marginTop: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator:{
        borderRadius: 50, // Para arredondar a borda
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },

    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
     
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }
  });

  export default styles;