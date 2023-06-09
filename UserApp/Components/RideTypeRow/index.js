import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const RideTypeRow = (props) => {
  const { type } = props;

  //   Function to get custom picture based on ride option
  const getImage = () => {
    if (type.type === "LadyRide") {
      return require("../../assets/images/LadyRide.jpeg");
    }
    if (type.type === "GentlemanRide") {
      return require("../../assets/images/GentlemanRide.jpeg");
    }
    return require("../../assets/images/RideXL.jpeg");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image style={styles.image} source={getImage()} />

        {/* Ride information */}
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type} <Ionicons name="person" size={16} color="black" />4
          </Text>
          <Text style={styles.time}>10:45AM arrival time</Text>
        </View>

        {/* Display ride price */}
        <View style={styles.rightContainer}>
          <Ionicons name="pricetag" size={12} color={"#42d742"} />
          <Text style={styles.price}>est. R{type.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RideTypeRow;
