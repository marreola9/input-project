import React, { useState } from "react";
import { View } from "react-native";
import CustomSwitch from "./Switch";
import styles from "./styles";
import { Switch } from "react-native-web";

export default function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        label="Disable Next Switch"
        value={first}
        disabled={second}
        onValueChange={setFirst}
      />
      <Switch
        label="Disable Previous Switch"
        value={second}
        disabled={first}
        onValueChange={setSecond}
      />
    </View>
  );
}
