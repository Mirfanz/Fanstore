import { Alert, View } from "react-native";
import { Button, Card, IconButton, Text } from "react-native-paper";
import Colors from "../constants/Colors";
import * as React from "react";
import { router } from "expo-router";
import rupiah from "../utils/rupiah";
import { ViewStyle } from "react-native";
import { productType } from "../types";

const CardProduct = ({
  item,
  style,
  mode,
}: {
  item: productType;
  style?: ViewStyle;
  mode?: "outlined" | "elevated" | "contained";
}) => {
  return (
    <Card
      mode={mode ?? "elevated"}
      style={[
        {
          margin: 0,
          padding: 0,
        },
        style,
      ]}
      onPress={() => {
        router.push(`/product/${item.slug}`);
      }}
    >
      <Card.Cover
        style={{
          width: "100%",
          aspectRatio: 1 / 1,
          height: "auto",
          objectFit: "cover",
        }}
        source={{ uri: item.thumb }}
      />
      <Card.Title
        titleStyle={{
          marginLeft: -6,
        }}
        titleVariant="labelLarge"
        title={item.name}
        titleNumberOfLines={2}
      />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: -8,
            marginBottom: -8,
            marginTop: -4,
            marginLeft: -4,
          }}
        >
          <Text
            numberOfLines={4}
            style={{
              textAlign: "justify",
              fontSize: 18,
              fontWeight: "700",
              color: Colors.light.primary,
            }}
          >
            {rupiah(item.price)}
          </Text>
          <IconButton
            mode="outlined"
            icon={"cart-plus"}
            size={16}
            style={{ borderRadius: 8 }}
            onPress={() => {
              // console.log("oke");
            }}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default CardProduct;
