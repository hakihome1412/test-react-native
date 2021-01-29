import React, { useEffect, useState } from "react";
import { Button, Text, View, Linking } from "react-native";
import { styles } from "../style/styles.js";
import {
  useRoute,
  useNavigation,
  useFocusEffect,
  useNavigationState,
  useIsFocused,
} from "@react-navigation/native";

export default function Feed() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState((state) => state);
  const focus = useIsFocused();

  console.log(`Screen index : ${state.index}`);
  console.log(focus);

  useFocusEffect(
    React.useCallback(() => {
      console.log("On Focus");
      return () => console.log("Out Focus");
    })
  );

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Feed</Text>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Text style={styles.title}>Data Back : </Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate("Detail", {
            screenName: "My Detail Screen - Huy",
          });
        }}
      />
      <Button title="Test Linking" onPress={() => {
          Linking.openURL('kpis://detail')
      }} />
    </View>
  );
}
