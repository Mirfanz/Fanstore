import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import {
  AnimatedFAB,
  Badge,
  Button,
  Card,
  FAB,
  Icon,
  IconButton,
  Portal,
  Searchbar,
  TextInput,
  Text,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import Colors from "../../constants/Colors";
import CardProduct from "../../components/CardProduct";
import Swiper from "react-native-swiper";
import { productType } from "../../types";

export default function TabOneScreen() {
  const [search, setSearch]: [
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
  ] = useState("");

  const [intervaled, setIntervaled] = useState(false);
  const { slug: local } = useLocalSearchParams();
  const { slug: global } = useGlobalSearchParams();

  const [isExtended, setIsExtended] = useState(false);

  const categories = [
    {
      id: 1,
      label: "Komputer",
      icon: "remote-desktop",
    },
    {
      id: 2,
      label: "Aksesoris",
      icon: "headphones",
    },
    {
      id: 3,
      label: "Hanphone",
      icon: "cellphone",
    },
    {
      id: 4,
      label: "Stiker",
      icon: "animation-play",
    },
    {
      id: 5,
      label: "Voucher",
      icon: "signal-variant",
    },
    {
      id: 6,
      label: "Makanan",
      icon: "food",
    },
    {
      id: 7,
      label: "Pakaian",
      icon: "tshirt-crew",
    },
    {
      id: 8,
      label: "Gadget",
      icon: "gamepad",
    },
    {
      id: 9,
      label: "Kelistrikan",
      icon: "lightning-bolt",
    },
  ];
  const promo = [
    {
      uri: "https://raihan-cell.vercel.app/logo.jpeg",
      id: 1,
    },
    {
      id: 2,
      uri: "https://raihan-cell.vercel.app/logo.jpeg",
    },
    {
      id: 3,
      uri: "https://raihan-cell.vercel.app/logo.jpeg",
    },
    {
      id: 4,
      uri: "https://raihan-cell.vercel.app/logo.jpeg",
    },
  ];

  const popular = [
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

  useEffect(() => {
    let x = false;
    setInterval(() => {
      x = !x;
      setIsExtended(x);
    }, 5000);
  }, []);

  return (
    // <SafeAreaView>
    <View>
      <AnimatedFAB
        extended={isExtended}
        icon={"whatsapp"}
        style={{ zIndex: 1010, position: "absolute", bottom: 16, right: 16 }}
        label="Whatsapp"
        onPress={() =>
          router.push(
            "https://api.whatsapp.com/send?phone=6282323864176&text=Woi Irfan jamet ;[]"
          )
        }
      />
      <ScrollView>
        <View style={{ margin: 12 }}>
          <Swiper
            autoplay
            paginationStyle={{ bottom: 12 }}
            autoplayTimeout={10}
            autoplayDirection
            horizontal
            containerStyle={{ height: 175 }}
          >
            <View
              key={"Sdk"}
              style={{
                flex: 1,
                // marginHorizontal: 8,
                backgroundColor: "lightgray",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Content Promo</Text>
            </View>
            <View
              key={"ldsbdk"}
              style={{
                flex: 1,
                // marginHorizontal: 8,
                backgroundColor: "lightgray",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Content Promo</Text>
            </View>
            <View
              key={"SDds"}
              style={{
                flex: 1,
                // marginHorizontal: 8,
                backgroundColor: "lightgray",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Content Promo</Text>
            </View>
            <View
              key={"Sd"}
              style={{
                flex: 1,
                // marginHorizontal: 8,
                backgroundColor: "lightgray",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text variant="displayMedium">Content Promo</Text>
            </View>
          </Swiper>
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <Text variant="titleMedium" style={{ marginVertical: 12 }}>
            Kategori {local} -- {global}
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: 4,
                  width: 75,
                  aspectRatio: 1 / 1,
                  backgroundColor: "lightgray",
                  borderRadius: 8,
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                <Icon
                  size={28}
                  color={Colors.light.primary}
                  source={item.icon}
                />
                <Text variant="bodySmall">{item.label}</Text>
              </View>
            )}
          />
        </View>

        <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium" style={{ marginVertical: 12 }}>
              Produk Terlaris
            </Text>
            <Button mode="text" onPress={() => router.push("/search")}>
              Lihat Lainnya
            </Button>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            // bounces
            // alwaysBounceHorizontal
            keyExtractor={(item) => item.slug}
            data={popular}
            style={{
              overflow: "visible",
            }}
            renderItem={({ item }: { item: productType }) => (
              <CardProduct
                mode="outlined"
                style={{
                  width: 210,

                  marginRight: 12,
                  overflow: "visible",
                  // backgroundColor: "green",
                }}
                item={item}
              />
            )}
          />
        </View>
        <View style={{ padding: 12, paddingBottom: 100, marginTop: 16 }}>
          <Card
            mode="elevated"
            theme={{ colors: { primary: "red" } }}
            focusable
          >
            <Card.Title
              title={"Selamat Datang di RaihanCell"}
              titleStyle={{ fontWeight: "bold", fontSize: 16, marginBottom: 0 }}
            />
            <Card.Content>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas dolore enim doloremque obcaecati necessitatibus
                nesciunt voluptates unde facere. Velit doloribus similique
                inventore architecto pariatur eligendi repellendus, ullam error
                voluptates quos.
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button>Tidak</Button>
              <Button mode="contained">Ho'oh Tenan</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </View>

    // </SafeAreaView>
  );
}
