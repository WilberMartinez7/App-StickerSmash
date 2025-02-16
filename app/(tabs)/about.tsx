//componentes a impotar
import { Text, View, StyleSheet } from "react-native";

//Cuerpo de trabajo
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Acerca De</Text>
    </View>
  );
}

//mis estilos de mi cuerpo de trabajo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff',
  },

});
 