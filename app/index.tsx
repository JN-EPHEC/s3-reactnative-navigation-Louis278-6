// app/index.tsx
import { Redirect } from "expo-router";

export default function Index() {
  // Redirige automatiquement vers la liste des posts
  return <Redirect href="/screens/PostListScreen" />;
}
