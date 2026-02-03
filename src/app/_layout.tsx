// import { Slot } from "expo-router"
import { Stack } from "expo-router"

export default function Layout() {
  return (
    // <View style={{ flex: 1 }}>
    //   <Slot />
    //   <View style={{ backgroundColor: "#d5d5d5", height: 50, width: "100%" }}></View>
    // </View>
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: 'Sign In' }} />
      <Stack.Screen name="sign-up" options={{ title: 'Cadastrar' }} />
    </Stack>
  )
}