import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../style/styles.js";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title="Go to Bottom Tabs"
        onPress={() => {
          navigation.navigate("BottomTabs", { name: "param1" });
        }}
      />
      <Button
        title="Go to Top Tabs"
        onPress={() => {
          navigation.navigate("TopTabs", { name: "param2" });
        }}
      />
      <Button
        title="Pass Data Back"
        onPress={() => {
          navigation.navigate("Feed", { dataBack: "This is data back" });
        }}
      />
    </View>
  );
}
