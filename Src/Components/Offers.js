import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Image, Pressable, Text } from "react-native";
import styles from "../Styles/style";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
// import { primaryBlue } from "../Configs/colors";
// import { ImageBackground } from "react-native-web";
const data = [
  {
    background: "https://sonicaptures.com/wp-content/uploads/2022/08/b.jpeg",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
  {
    background: "https://sonicaptures.com/wp-content/uploads/2022/08/a.jpeg",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
  {
    background: "https://sonicaptures.com/wp-content/uploads/2022/08/c.jpeg",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
  {
    background: "https://sonicaptures.com/wp-content/uploads/2022/08/d.jpeg",
    description:
      "You are what you eat, so don’t be fast, cheap, easy, or fake.",
  },
];
function CarouselItem({ item, index }, parallaxProps) {
  return (
    //     <Pressable onPress={() => alert("Image description:" + item.description)}>

    <Pressable key={index} style={{ marginTop: 20 }}>
      <View style={[styles.item, { height: 200 }]}>
        <Image
          source={{ uri: item.background }}
          style={{ width: width, height: 200 }}
        ></Image>
        {/* <Text style={{ fontSize: 30 }} numberOfLines={2}>
          any text
        </Text> */}
      </View>
    </Pressable>
  );
}

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
      layout="default"
      //       hasParallaxImages="true"
    ></Carousel>
  );
}
