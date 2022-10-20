import React from "react";
import {
  Box,
  NativeBaseProvider,
  Heading,
  VStack,
  HStack,
  Spacer,
  Input,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import TreesAll from "../Components/TreeCard";

export default function App() {
  const data = [
    {
      title: "Banyan Tree",
      description:
        "A banyan tree is important in the Hindu religion. It is profoundly worshipped and revered in India.",
      source:
        "https://i.pinimg.com/originals/37/66/e9/3766e91eda5ba4555ceac291c31e8887.jpg",
      price: 999,
      rating: 1,
      review: [
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
      ],
    },
    {
      title: "Neem Tree",
      description:
        "The leaves of the Neem tree have very good medical uses. It is also used to control pests and to prevent diseases. ",
      source:
        "https://images.freeimages.com/images/large-previews/6b8/neem-tree-1639620.jpg",
      price: 799,
      rating: 3.5,
      review: [
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
      ],
    },
    {
      title: "Mango Tree",
      description:
        "The bark of the mango tree is an astringent that is used in diphtheria and rheumatism. The gum is used to heal cracked feet and scabies	",
      source:
        "https://www.plantedshack.com/wp-content/uploads/2020/10/Do-Mango-Trees-Lose-Their-Leaves.jpg",
      // "https://www.gardeningknowhow.com/wp-content/uploads/2013/05/mango-tree.jpg",
      price: 899,
      rating: 2.5,
      review: [
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
      ],
    },
    {
      title: "Cocunut Tree",
      description:
        "The coconut tree is capable of fulfilling all primary needs of human beings, from food, clothing to shelter.",
      source:
        "https://www.panoramatreeservice.com/wp-content/uploads/2013/01/coconutpalm01.jpg",
      price: 199,
      rating: 5,
      review: [
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
        {
          name: "user 1",
          rating: 3,
          date: "12th Sept 2019",
          comment:
            "Hey my name is balveer and i can say that this app is awesome, this tree is awesome everything in teh world is awesome",
        },
      ],
    },
  ];
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} bg="white" px={5}>
        <HStack my={4} alignItems="center">
          <VStack space={1}>
            <Heading bold fontSize={25} lineHeight={25}>
              Find your
            </Heading>
            <Heading bold fontSize={25} lineHeight={25}>
              favourite trees
            </Heading>
          </VStack>
          <Spacer />
          <Box borderRadius={25} borderWidth={2} borderColor="#bfbfbf" p={2}>
            <MaterialCommunityIcons name="cart" size={20} color="black" />
          </Box>
        </HStack>
        <HStack
          mt={5}
          px={20}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            placeholder="Search your favourite tree"
            size="lg"
            w="140%"
            type="search"
            borderRightRadius={0}
          />
          <Pressable onPress={() => console.log("I'm Pressed")}>
            <Box
              borderWidth={1}
              borderColor="#DBDBDB"
              p={3}
              borderLeftWidth={0}
            >
              <EvilIcons name="search" size={25} color="black" />
            </Box>
          </Pressable>
        </HStack>
        <TreesAll />
      </Box>
    </NativeBaseProvider>
  );
}
