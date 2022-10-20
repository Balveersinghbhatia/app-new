import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import styles from "../Styles/style";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { primaryBlue } from "../../Configs/colors";
const data = [
  {
    author: "Author 1",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
  {
    author: "Author 2",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
  {
    author: "Author 3",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
];
const CarouselItem = ({ item }) => {
  return (
    <View
      style={{
        borderLeftWidth: 7,
        borderLeftColor: "#4c9e2f",
        padding: 10,
        marginVertical: 20,
        marginBottom: 100,
      }}
    >
      <Text style={{ fontSize: 18 }}>"{item.description}"</Text>
      <Text style={{ fontSize: 18, alignSelf: "flex-end", marginTop: 5 }}>
        - {item.author}
      </Text>
    </View>
  );
};

const { width } = Dimensions.get("window");
console.log(width);
let itemWidth = width - width / 10;
export default function CustomSlider() {
  return (
    <Carousel
      data={data}
      renderItem={CarouselItem}
      sliderWidth={width}
      itemWidth={itemWidth}
    ></Carousel>
  );
}
