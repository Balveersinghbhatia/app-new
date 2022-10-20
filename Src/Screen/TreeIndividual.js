import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  Text,
  ScrollView,
  HStack,
  Heading,
  Image,
  Box,
  NativeBaseProvider,
  Spacer,
} from "native-base";
import NumericInput from "react-native-numeric-input";
import Rating from "../Components/Rating";
import Btn from "../Components/Btn";
import Review from "../Components/Review";
const height = Dimensions.get("screen").height;

export default function TreeIndividual({ route }) {
  const [value, setValue] = useState(0);
  const {
    title: treeName,
    price,
    review,
    rating,
    description,
  } = route.params.item;
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} bg="white">
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/cropedTree.png")}
            alt="Apple Tree"
            w="full"
            height={height / 2.5}
            resizeMode="contain"
          />
          {
            //resizeMode="contain"
          }
          <Heading bold fontSize={20} mb={2} lineHeight={22}>
            {treeName}
          </Heading>
          <Rating value={rating} size={15} />
          <HStack space={2} alignItems="center" my={5}>
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={25}
              minValue={1}
              borderColor="#E1F0D7"
              rounded
              textColor="black"
              iconStyle={{ color: "white" }}
              rightButtonBackgroundColor="#48B600"
              leftButtonBackgroundColor="#48B600"
              onChange={setValue}
            />
            <Spacer />
            <Heading bold color="black" fontSize={20}>
              {price}Rs
            </Heading>
          </HStack>
          <Text lineHeight={24} fontSize={15}>
            {description}
          </Text>
          <Btn bg="#48B600" color="white" mt={10}>
            ADD TO CART
          </Btn>

          <Review data={review} />
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
