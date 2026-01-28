import { Link, router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>
      <Link href={'./'}>
        Voltar
      </Link>

      <TouchableOpacity style={styles.button} onPress={() => { router.back() }} >
        <Text style={styles.label}>
          Navegar sem tag Link
        </Text>
      </TouchableOpacity>
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
    borderRadius: 10
  }
})