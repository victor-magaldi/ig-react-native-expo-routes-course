import { Link } from "expo-router"
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