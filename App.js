import React, { useState } from "react";
import { View, Text } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";

function MyDropdown() {
  //created three values for open, value, and items that are used to manage the state of the dropdown
  //open is used to control the visibility of the dropdown
  //value is used to store the selected value from the dropdown
  //items is used to store the list of items to be displayed in the dropdown
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Item 1", value: "item1" },

    { label: "Item 2", value: "item2" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text>{value}</Text>
    </View>
  );
}

export default MyDropdown;
