import axios from "axios";
import { useEffect, useState } from "react";
import { View, ScrollView, FlatList, Pressable, Alert } from "react-native";
import {
  ActivityIndicator,
  Text,
  Button,
  Card,
  IconButton,
  Snackbar,
} from "react-native-paper";
import Colors from "../../constants/Colors";
import CardProduct from "../../components/CardProduct";
import { productType } from "../../types";

export default function CartsScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [activeCtg, setActiveCtg] = useState(0);

  const [resultFor, setResultFor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [limit, setLimit] = useState(0);

  const categories = [
    {
      label: "Semua",
      id: 0,
    },
    {
      label: "Laptop",
      id: 1,
    },
    {
      label: "Aksesoris",
      id: 2,
    },
    {
      label: "Hanphone",
      id: 3,
    },
    {
      label: "Stiker",
      id: 4,
    },
    {
      label: "Voucher",
      id: 5,
    },
    {
      label: "Makanan",
      id: 6,
    },
    {
      label: "Pakaian",
      id: 7,
    },
    {
      label: "Gadget",
      id: 8,
    },
    {
      label: "Kelistrikan",
      id: 9,
    },
  ];

  function getProducts(page?: number, key?: string) {
    setLoading(true);
    axios
      .get(
        `https://raihan-cell.vercel.app/api/product?limit=4&page=${page ?? 1}`,
        {
          timeout: 5000,
        }
      )
      .then(
        (resp: {
          data: {
            data: [];
            search: string;
            lastPage: boolean;
            page: number;
            limit: number;
          };
        }) => {
          console.log(resp.data);
          setIsLastPage(resp.data.lastPage);
          setCurrentPage(resp.data.page);
          setLimit(resp.data.limit);
          setResultFor(resp.data.search);

          if (resp.data.page <= 1) setProducts([...resp.data.data]);
          else setProducts([...products, ...resp.data.data]);
        }
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView>
      <FlatList
        horizontal
        style={{
          paddingHorizontal: 8,
          marginTop: 8,
        }}
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id + item.label}
        renderItem={({ item }) => (
          <Button
            style={{ marginRight: 8, borderRadius: 8 }}
            onPress={() => setActiveCtg(item.id)}
            mode={item.id == activeCtg ? "contained" : "contained-tonal"}
          >
            {item.label}
          </Button>
        )}
      />
      {resultFor && (
        <Text
          variant="bodyMedium"
          style={{
            marginHorizontal: 16,
            marginTop: 16,
          }}
        >
          Hasil Untuk :<Text style={{ fontWeight: "bold" }}>"{resultFor}"</Text>
        </Text>
      )}
      <View
        style={{
          margin: 12,
          rowGap: 8,
          flexWrap: "wrap",
          // backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {products?.map((item: productType, index: number) => (
          <CardProduct
            // mode="outlined"
            style={{
              width: "49%",
            }}
            key={index + item.slug}
            item={item}
          />
        ))}
      </View>
      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} />
          <Text style={{ marginTop: 16 }}>Tunggu Sebentar...</Text>
        </View>
      )}
      {!isLastPage && !loading && (
        <Button
          icon={"chevron-double-down"}
          mode="outlined"
          style={{
            marginTop: 8,
            marginBottom: 24,
            marginLeft: "auto",
            marginRight: "auto",
            borderTopEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
          onPress={() => {
            getProducts(currentPage + 1);
          }}
        >
          Show More...
        </Button>
      )}
    </ScrollView>
  );
}
