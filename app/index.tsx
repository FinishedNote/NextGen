import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-heading1">NextGen</Text>
      <Link href="/settings">Go to Settings</Link>
      <Link href="/modal">Open Modal</Link>
    </View>
  );
}
