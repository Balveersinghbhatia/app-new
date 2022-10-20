import { Flex, Image, Pressable, ScrollView, Text, View } from "native-base";
import React from "react";
import trees from "./Tree-Info";
import Rating from "./Rating";

function TreesAll() {
  return (
    <ScrollView flex={1} mt={5} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={5}
        mb={24}
      >
        {trees.map((tree) => (
          <Pressable
            key={tree.id}
            w="47%"
            bg="white"
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            paddingY={4}
            h={200}
            mt={50}
          >
            <View alignItems="center" top={-45}>
              <Image
                source={{ uri: tree.source }}
                // source={tree.source}
                alt={tree.title}
                w="150"
                h={150}
                resizeMode="contain"
              />
            </View>
            <View px={2}>
              <Text fontSize={18} fontWeight="bold">
                {tree.title}
              </Text>
              <Text fontSize={14} color="#808080">
                <Rating value={tree.rating} />{" "}
              </Text>
            </View>
            <View px={2} flexDirection="row" justifyContent="space-between">
              <Text fontSize={18} fontWeight="bold">
                ₹{tree.price}
              </Text>
            </View>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default TreesAll;
