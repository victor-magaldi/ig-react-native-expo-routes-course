import { Link, router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Signup() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>
      <Link href={'./sign-up'} asChild>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.label}>
            sign-up
          </Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.button} onPress={() => { router.navigate('./sign-up') }} >
        <Text style={styles.label}>
          Navegar com Navigate
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => { router.replace('./sign-up') }} >
        <Text style={styles.label}>
          Navegar com replace
        </Text>
      </TouchableOpacity>

      <Link style={styles.link} href={{ pathname: "./sign-up", params: { name: "Victor" } }}>
        Enviar Parâmetro
      </Link>

      <Link style={styles.link} href={{ pathname: "./product/99" }}>
        Abrir Produto
      </Link>

      <Link style={styles.link} href={{ pathname: "./home", params: { authenticated: "true" } }}>
        Ir para Home Autenticado
      </Link>
      <Link style={styles.link} href={{ pathname: "./home", params: {} }}>
        Ir para Home Não Autenticado
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  label: { fontSize: 16, fontWeight: "bold", color: "#FFF" },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 5
  },
  link: {
    backgroundColor: "#000",
    color: "#FFF",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 5
  }
})