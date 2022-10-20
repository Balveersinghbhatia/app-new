import {Center, Text} from "native-base";
import React from "react";

const ReviewMessage = ({bg, color, reviewText, size}) => {
    return (
        <Center bg={bg} p={4} rounded={5} >
            <Text color={color} fontSize={size} >{reviewText}</Text>
        </Center>
    );
}

export default ReviewMessage;
