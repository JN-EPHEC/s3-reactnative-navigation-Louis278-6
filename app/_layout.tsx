// app/_layout.tsx
import "react-native-reanimated";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack /* initialRouteName marche en natif; sur web vois la note plus bas */>
      <Stack.Screen
        name="screens/PostListScreen"
        options={{ title: "The Blog" }}
      />
      <Stack.Screen
        name="screens/PostDetailScreen"
        options={{ title: "Post Detail" }}
      />
    </Stack>
  );
}



