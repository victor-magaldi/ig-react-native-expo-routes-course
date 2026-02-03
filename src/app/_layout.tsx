import { Slot } from "expo-router"
import { View } from "react-native"

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <View style={{ backgroundColor: "#d5d5d5", height: 50, width: "100%" }}></View>
    </View>
  )
}