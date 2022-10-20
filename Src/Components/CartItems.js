import { Text, View } from "native-base";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import data from "../Components/Tree-Info";
import { StyleSheet, Image } from "react-native";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Btn from "../Components/Btn";

let totalPrice = 0;

function CartItems() {
  const CartCard = ({ tree }) => {
    const [value, setValue] = useState(1);
    totalPrice += tree.price;
    return (
      <View style={style.cartCard}>
        <Image
          source={tree.image}
          alt={tree.name}
          style={{ height: 80, width: 80 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text bold fontSize={16}>
            {tree.name}
          </Text>
          <Rating value={tree.rating} size={13} />

          <Text bold fontSize={17}>
            ₹{tree.price}{" "}
          </Text>
        </View>
        <View alignItems="center">
          {/* <Text bold fontSize={18} >1</Text> */}
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={10}
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
        </View>
      </View>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
      data={data}
      renderItem={({ item }) => <CartCard tree={item} />}
      ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
      ListFooterComponent={() => (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text bold fontSize={18}>
              Total Price
            </Text>
            <Text bold fontSize={18}>
              ₹{totalPrice}
            </Text>
          </View>
          <Btn bg={"#48B600"} color={"white"}>
            CHECKOUT
          </Btn>
        </View>
      )}
    />
  );
}

const style = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CartItems;
