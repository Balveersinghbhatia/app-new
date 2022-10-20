import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable } from "react-native";
import styles from "../Styles/style";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";

import { useNavigation } from "@react-navigation/native";
const data = [
  {
    title: "Birthday",
    source:
      "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png",
  },
  {
    title: "Aniversary",
    source:
      "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png",
  },
  {
    title: "Demise",
    source:
      "https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png",
  },
  {
    title: "some event",
    source:
      "https://static.vecteezy.com/system/resources/previews/000/420/898/original/placeholder-icon-vector-illustration.jpg",
  },
];

// This function represents whole slider
const { width } = Dimensions.get("window");
export default function CustomSlider() {
  const settings = {
    sliderWidth: width,
    sliderHeight: 100,
    itemWidth: 150,
    data: data,
    renderItem: function CarouselItem({ item, index }, parallaxProps) {
      return (
        <Pressable
          key={index}
          style={{ marginVertical: 20, width: 150 }}
          onPress={() => {
            handlePress(item);
          }}
        >
          <View
            style={{
              //       width: "50%",
              height: 200,
              borderRadius: 20,
              borderWidth: 1,
            }}
          >
            <ParallaxImage
              /* the source of the image */
              source={{ uri: item.source }}
              containerStyle={styles.imageContainer}
              style={styles.image}
              showSpinner={true}
              spinnerColor="green"
              /* pass in the necessary props */
              {...parallaxProps}
            />
            <View style={{ borderTopWidth: 1 }}>
              <Text
                style={{
                  //   marginBottom: 3,
                  fontSize: 20,
                  paddingTop: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </Pressable>
      );
    },
    //     hasParallaxImages: true,
    layout: "default",
  };

  const navigation = useNavigation();
  const handlePress = (item) => {
    // console.log(navigation);
    navigation.navigate("treeIndividual", {
      item,
    });
  };
  return (
    // <View style={styles.container}>
    <>
      <Carousel {...settings} />
    </>
    // </View>
  );
}
