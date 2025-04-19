import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  // useState to manage the date and time
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // make a function that when the datapicker is changed, it will detect if the platfom is IOS
  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setTime(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Time" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
