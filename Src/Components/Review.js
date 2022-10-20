import { Box, Heading, HStack, Spacer, Text, VStack } from "native-base";
import React from "react";
import Rating from "./Rating";
import ReviewMessage from "./ReviewMessage";

const Review = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <Box>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* NO Reviews */}
      {/* <ReviewMessage
          color="#48B600"
          bg="#E1F0D7"
          reviewText={"NO REVIEW"}
        /> */}
      {/* Reviews */}
      {data.map((item, key) => {
        return (
          <>
            <Box p={3} bg="#EEFAE6" rounded={5} my={3} key={key}>
              <HStack space={2} alignItems="center">
                <Heading fontSize={15} color="black">
                  {item.name}
                </Heading>
                <Spacer />
                <VStack>
                  <Rating value={item.rating} size={10} />
                  <Text mb={2} fontSize={10}>
                    {item.date}
                  </Text>
                </VStack>
              </HStack>
              <ReviewMessage
                color="black"
                bg="white"
                size={13}
                reviewText={item.comment}
              />
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default Review;
