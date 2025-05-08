import React, { useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function DetailsScreen() {
    const [stars, setStars] = useState([false, false, false, false, false]);

    const toggleStar = (index: number) => {
      // Toggle only the clicked star
      const updatedStars = [...stars];
      updatedStars[index] = !updatedStars[index];
      setStars(updatedStars);
    };
        
  return (
    <View style={styles.container} className="margin-16 bg-black">
      <Text>Yay! We value all feedback, please rate your experience below</Text>
      <View style={styles.stars}>
      {stars.map((isActive, index) => (
        <Pressable key={index} onPress={() => toggleStar(index)}>
          <Ionicons
            name="star"
            size={30}
            color={isActive ? 'orange' : 'white'}
          />
        </Pressable>
      ))}
      </View>
      <Text>Thank you for helping us improve our service</Text>
      <Text>
        <Text>Supa</Text>
        <Text>Menu</Text>
      </Text>
      <Link href="/">Go back to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
