import axios from "axios";
import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Card,
  DataTable,
  Divider,
  Icon,
  IconButton,
  Text,
} from "react-native-paper";
import Swiper from "react-native-swiper";
import Colors from "../../constants/Colors";
import rupiah from "../../utils/rupiah";
import { productType } from "../../types";

export default function DetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: "string" }>();
  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState<productType | undefined>();

  function getDetail(slug: string) {
    // setProduct({
    //   brand: "Infinix",
    //   category: "komputer",
    //   createdAt: "2023-08-20T06:17:10.725Z",
    //   description:
    //     "In The Box : Inbook X2 45W USB-C Power Adapter USB-C Charger Cable Quick Start Guide Warranty Card Case : Aluminium Alloy • Free : Tas Infinix Mouse Pad Infinix <h1>sjjss</h1>",
    //   //   details: [[Object], [Object], [Object], [Object], [Object], [Object]],
    //   id: "64e1afe701a3ab850cfa35cd",
    //   images: [
    //     "https://res.cloudinary.com/dzekf3jey/image/upload/v1692512225/product/c0d71612-bcb3-4e40-9ea2-940d00cab6ca.webp",
    //     "https://res.cloudinary.com/dzekf3jey/image/upload/v1692512226/product/8b24bf40-568e-448c-a350-4a99a30d0d89.png",
    //   ],
    //   name: 'LAPTOP INFINIX INBOOK X2 - I3-1115G4 8G 256GB 14"FHD IPS sRGB 100% W11',
    //   price: 5649000,
    //   rating: 4.5,
    //   slug: "laptop-infinix-inbook-x2-i3-1115g4-8g-256gb-14-fhd-ips-srgb-100-w11",
    //   stock: 110,
    //   thumb:
    //     "https://res.cloudinary.com/dzekf3jey/image/upload/v1692512225/product/c0d71612-bcb3-4e40-9ea2-940d00cab6ca.webp",
    //   updatedAt: "2023-09-04T15:31:40.777Z",
    // });
    // setLoading(false);
    axios
      .get("https://raihan-cell.vercel.app/api/product/" + slug)
      .then((resp: { data: { data: productType } }) => {
        console.log(resp.data.data.updatedAt);
        resp.data.data.updatedAt = new Date(resp.data.data.updatedAt);
        resp.data.data.createdAt = new Date(resp.data.data.createdAt);
        setProduct(resp.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getDetail(slug);
  }, []);

  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Swiper
          showsButtons
          loop={false}
          containerStyle={{
            aspectRatio: 1 / 1,
            overflow: "visible",
          }}
          contentContainerStyle={{
            overflow: "visible",
          }}
          nextButton={
            <Icon
              source={"chevron-double-right"}
              color="darkorange"
              size={38}
            />
          }
          prevButton={
            <Icon source={"chevron-double-left"} color="darkorange" size={38} />
          }
          horizontal
          activeDotColor="orange"
          paginationStyle={{
            bottom: 12,
          }}
        >
          {product?.images.map((uri) => (
            <Image
              key={uri}
              source={{ uri }}
              style={{
                flex: 1,
                aspectRatio: 1 / 1,
                objectFit: "cover",
                // borderRadius: 20,
              }}
            />
          ))}
        </Swiper>
        <View style={styles.container}>
          <Text
            variant="titleMedium"
            style={{ marginTop: 12, marginBottom: 8 }}
          >
            {product?.name}
          </Text>
          <Text variant="bodySmall">{product?.updatedAt.toString()}</Text>
          <Divider style={{ marginVertical: 12 }} />
        </View>

        <DataTable style={{}}>
          <DataTable.Row>
            <DataTable.Cell>Kategori</DataTable.Cell>
            <DataTable.Cell>{product?.category ?? "-"} </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Stock Tersisa</DataTable.Cell>
            <DataTable.Cell>{product?.stock} Barang</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Brand</DataTable.Cell>
            <DataTable.Cell>{product?.brand ?? "-"}</DataTable.Cell>
          </DataTable.Row>
          {product?.details?.map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.key}</DataTable.Cell>
              <DataTable.Cell>{item.value}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row>
            <DataTable.Cell>Tanggal Diupload</DataTable.Cell>
            <DataTable.Cell>
              {product?.createdAt.toLocaleString()}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Terakhir Diupdate</DataTable.Cell>
            <DataTable.Cell>
              {product?.updatedAt.toLocaleString()}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <View
          style={{
            margin: 16,
            padding: 12,
            borderRadius: 16,
            backgroundColor: "rgb(235,235,235)",
          }}
        >
          <Text variant="labelLarge" style={{ marginBottom: 6 }}>
            Deskripsi Produk
          </Text>
          <Text style={{}} variant="bodyMedium">
            {product?.description ?? "-"}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          //   backgroundColor: "lightgray",
          paddingHorizontal: 16,
          paddingVertical: 10,
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View style={{ marginEnd: "auto" }}>
          <Text
            variant="bodySmall"
            style={{
              textDecorationLine: "line-through",
              margin: 0,
              padding: 0,
            }}
          >
            Rp 5.800.000
          </Text>
          <Text
            variant="titleMedium"
            style={{
              color: "indigo",
              margin: 0,
              padding: 0,
            }}
          >
            {rupiah(product?.price)}
          </Text>
        </View>
        <IconButton
          icon={"whatsapp"}
          mode="contained-tonal"
          iconColor="green"
          style={{ borderRadius: 8, margin: 0 }}
        />
        <Button
          icon={"cart-plus"}
          style={{ borderRadius: 8 }}
          mode="contained"
          onPress={() => {}}
        >
          Add To Cart
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
