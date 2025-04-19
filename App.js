import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  //useState to manage the date and time
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  //make a function that when the datapicker is changed, it will detect if the platform is IOS
  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setTime(selectedDate);
    }
  };

  //same thing for date
  //make a function that when the datapicker is changed, it will detect if the platform is IOS
  const onChangeDate = (event, selectedDate) => {
    setShowDate(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Time" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}

      <Text>Selected Date: {date.toDateString()}</Text>

      <Button title="Pick Date" onPress={() => setShowDate(true)} />
      {showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}
