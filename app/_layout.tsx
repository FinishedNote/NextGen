import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView className="flex-1 bg-white">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "NextGen",
              headerTitleAlign: "center",
              headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
            }}
          />
          <Stack.Screen name="settings" options={{ headerTitle: "Settings" }} />
        </Stack>
      </SafeAreaView>
    </>
  );
}
