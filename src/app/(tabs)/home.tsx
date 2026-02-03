import { Redirect, useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Home() {
  const { authenticated } = useLocalSearchParams()
  if (!authenticated) {
    return <Redirect href={{ pathname: "./" }} />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home - Autenticado: {authenticated}</Text>
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