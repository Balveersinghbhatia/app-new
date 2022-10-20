import { Box, Text, Center, NativeBaseProvider, View } from "native-base";
import React, { useState } from "react";
import CartItems from "../Components/CartItems";
import EmptyCart from "../Components/EmptyCart";
let totalPrice = 0;

function CartScreen() {
  const [empty, setEmpty] = useState(false);

  return (
    <NativeBaseProvider>
      <Box flex={1} px={0} safeAreaTop bg="#EEFAE6">
        <View w="full" py={3} paddingLeft={5}>
          <Text color="black" bold fontSize={25} textAlign="left">
            Cart
          </Text>
        </View>

        {empty === true ? <EmptyCart /> : <CartItems />}
      </Box>
    </NativeBaseProvider>
  );
}

export default CartScreen;
