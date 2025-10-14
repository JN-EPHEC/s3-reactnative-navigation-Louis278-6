import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PostDetailScreen() {
  const { title, content } = useLocalSearchParams<{
    postId?: string; title?: string; content?: string;
  }>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { fontSize: 24, fontWeight: "800" }]}>
          {title}
        </Text>
        <Text style={styles.body}>{content}</Text>
      </ScrollView>
      {/* Le bouton Back est automatique via le Stack d'expo-router */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16 },
  title: { marginBottom: 12 },
  body: { fontSize: 16, lineHeight: 24 },
});


