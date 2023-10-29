import React, { useState } from "react";
import { Alert, Image, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, IconButton, Text } from "react-native-paper";
import rupiah from "../utils/rupiah";
import { Link } from "expo-router";
import { productType } from "../types";

const CardCart = ({ item }: { item: productType }) => {
  function deleteProduct() {
    Alert.alert("Produk dihapus");
  }
  const [qty, setQty] = useState(1);
  return (
    <Card mode="outlined">
      <Card.Content>
        <View style={{ flexDirection: "row", flex: 1, gap: 8 }}>
          <Image
            source={{ uri: item.thumb }}
            width={100}
            height={100}
            style={{ borderRadius: 5 }}
          />
          <View style={{ flex: 1, gap: 4 }}>
            <Link href={`/product/${item.slug}`} numberOfLines={2}>
              <Text variant="labelLarge">{item.name}</Text>
            </Link>
            <Text variant="bodySmall">Sisa {item.stock} Produk</Text>
            <View
              style={{
                marginTop: "auto",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text variant="titleMedium" style={{ marginRight: "auto" }}>
                {rupiah(item.price)}
              </Text>

              <IconButton
                icon={"minus"}
                size={16}
                mode="contained"
                style={{ borderRadius: 8, margin: 0 }}
                onPress={() => {
                  if (qty <= 1) return deleteProduct();
                  setQty(qty - 1);
                }}
                onLongPress={() => deleteProduct()}
                delayLongPress={1000}
              />
              <TextInput
                style={{
                  width: 38,
                  // backgroundColor: "lightgray",
                  paddingVertical: 2,
                  textAlign: "center",
                }}
                keyboardType="number-pad"
                value={String(qty)}
                onEndEditing={() => qty < 1 && deleteProduct()}
                onChangeText={(val) => {
                  const value: number = parseInt(val) | 0;
                  if (value < 1) setQty(0);
                  else if (value > item.stock) setQty(item.stock);
                  else setQty(value);
                  // setQty(parseInt(value));
                }}
              />
              <IconButton
                icon={"plus"}
                size={16}
                mode="contained"
                style={{ borderRadius: 8, margin: 0 }}
                onPress={() => qty < item.stock && setQty(qty + 1)}
              />
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default function CartsPage(): React.ReactNode {
  const carts = [
    {
      brand: "Infinix",
      category: "komputer",
      createdAt: "2023-08-20T06:17:10.725Z",
      description:
        "In The Box :Inbook X2 45W USB-C Power Adapter USB-C Charger Cable  Quick Start Guide  Warranty Card    Case : Aluminium Alloy    • Free :  Tas Infinix  Mouse Pad Infinix<h1>sjjss</h1>",
      details: [Array],
      id: "64e1afe701a3ab850cfa35cd",
      images: [Array],
      name: 'LAPTOP INFINIX INBOOK X2 - I3-1115G4 8G 256GB 14"FHD IPS sRGB 100% W11',
      price: 5649000,
      rating: 4.5,
      slug: "laptop-infinix-inbook-x2-i3-1115g4-8g-256gb-14-fhd-ips-srgb-100-w11",
      stock: 110,
      thumb:
        "https://res.cloudinary.com/dzekf3jey/image/upload/v1692512225/product/c0d71612-bcb3-4e40-9ea2-940d00cab6ca.webp",
      updatedAt: "2023-09-04T15:31:40.777Z",
    },
    {
      brand: "dfsfs",
      category: "alat tulis",
      createdAt: "2023-08-20T06:20:13.868Z",
      description: "",
      details: [Array],
      id: "64e1b09e01a3ab850cfa35d4",
      images: [Array],
      name: "Tas Murah Cocok Buat Sekolah/Kuliah",
      price: 45000,
      rating: 4.5,
      slug: "tas-murah-cocok-buat-sekolah-kuliah",
      stock: 10,
      thumb:
        "https://res.cloudinary.com/dzekf3jey/image/upload/v1692512412/product/6f0c6a8f-997c-47cf-a1c4-2c461c9c606d.jpg",
      updatedAt: "2023-09-05T15:34:34.501Z",
    },
    {
      brand: "Apple",
      category: "komputer",
      createdAt: "2023-09-05T15:45:13.360Z",
      description: "null",
      details: [Array],
      id: "64f74d0a172a754574ada38e",
      images: [Array],
      name: "MacBook Pro + Free Tas Original Garansi Resmi 3 Tahun, Rusak Ganti Yang Baru GRATISS",
      price: 9500000,
      rating: 4.5,
      slug: "macbook-pro-free-tas-original-garansi-resmi-3-tahun-rusak-ganti-yang-baru-gratiss",
      stock: 4,
      thumb:
        "https://res.cloudinary.com/dzekf3jey/image/upload/v1693928711/product/a58dbd05-fd77-49b6-9405-463c233511af.jpg",
      updatedAt: "2023-09-05T16:04:47.972Z",
    },
    {
      brand: "Tesla",
      category: "elektronik",
      createdAt: "2023-09-13T08:00:12.123Z",
      description: "null",
      details: [Array],
      id: "65016c0d1caa76e60cf386aa",
      images: [Array],
      name: "NICOLA TESLA Penemu Terhebat Sepanjang Sejarah Manusia",
      price: 100000,
      rating: 4.5,
      slug: "nicola-tesla-penemu-terhebat-sepanjang-sejarah-manusia",
      stock: 1,
      thumb:
        "https://res.cloudinary.com/dzekf3jey/image/upload/v1694592009/product/977b2a2a-0fd6-405b-b752-5b2daccb174f.jpg",
      updatedAt: "2023-09-13T08:00:12.123Z",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      {/* <Text variant="bodyLarge">Muhammad Irfan</Text>
      <Text variant="bodyMedium">Muhammad Irfan</Text>
      <Text variant="bodySmall">Muhammad Irfan</Text>

      <Text variant="displayLarge">Muhammad Irfan</Text>
      <Text variant="displayMedium">Muhammad Irfan</Text>
      <Text variant="displaySmall">Muhammad Irfan</Text>

      <Text variant="headlineLarge">Muhammad Irfan</Text>
      <Text variant="headlineMedium">Muhammad Irfan</Text>
      <Text variant="headlineSmall">Muhammad Irfan</Text>

      <Text variant="labelLarge">Muhammad Irfan</Text>
      <Text variant="labelMedium">Muhammad Irfan</Text>
      <Text variant="labelSmall">Muhammad Irfan</Text>

      <Text variant="titleLarge">Muhammad Irfan</Text>
      <Text variant="titleMedium">Muhammad Irfan</Text>
      <Text variant="titleSmall">Muhammad Irfan</Text> */}
      <ScrollView style={{ flex: 1 }}>
        <View style={{ margin: 12, gap: 12 }}>
          {carts.map((item) => (
            <CardCart key={item.slug} item={item} />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          padding: 12,
          margin: 12,
          backgroundColor: "rgb(230,230,230)",
          gap: 8,
          borderRadius: 12,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="bodyMedium">Total Barang</Text>
          <Text variant="bodyMedium">{rupiah(140000)}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="bodyMedium">Biaya Pengiriman</Text>
          <Text variant="bodyMedium">{rupiah(11000)}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="bodyMedium">Biaya Lainnya</Text>
          <Text variant="bodyMedium">{rupiah(1000)}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="titleMedium">Total Pembayaran</Text>
          <Text variant="titleMedium">{rupiah(152000)}</Text>
        </View>
        <Button
          mode="contained"
          style={{ borderRadius: 8, marginTop: 8 }}
          icon={"cash-multiple"}
          uppercase
        >
          Pilih Pembayaran
        </Button>
      </View>
    </View>
  );
}
