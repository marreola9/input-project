import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>
      <Text>Select an Option for a Car</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mustang" value="must" />
        <Picker.Item label="Corvette" value="corv" />
        <Picker.Item label="Camaro" value="cam" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
}
