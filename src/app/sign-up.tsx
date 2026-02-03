import { Link, router, useLocalSearchParams } from "expo-router"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Signup() {
  const { name } = useLocalSearchParams()
  function handleBack() {
    if (!router.canGoBack()) {
      Alert.alert("Erro", "Não é possível voltar")
    }
    router.back()
  }
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text style={styles.title}>Conta</Text>
      <Link href={'./'}>
        Voltar
      </Link>

      <TouchableOpacity style={styles.button} onPress={handleBack} >
        <Text style={styles.label}>
          Voltar sem Tag link
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
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 10
  }
})