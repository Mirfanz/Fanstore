import { Tabs, router } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import React, { useState } from "react";
import { Button, Icon, IconButton } from "react-native-paper";
import { View, TextInput } from "react-native";

function searchHeaderLeft() {
  const [search, setSearch] = useState("");
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // backgroundColor: "red",
        gap: 8,
      }}
    >
      <TextInput
        keyboardType="web-search"
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Mau Belanja Apa Hari Ini?"
        style={{
          paddingVertical: 7,
          paddingHorizontal: 12,
          backgroundColor: "rgb(235,235,235)",
          fontSize: 16,
          borderRadius: 8,
          flexGrow: 1,
          width: 0,
        }}
      />
      <IconButton
        icon={"camera"}
        mode="contained"
        onPress={() => {}}
        style={{ borderRadius: 8, marginHorizontal: 0 }}
      />
      <IconButton
        icon={"cart"}
        mode="contained"
        onPress={() => router.push("/carts")}
        style={{ borderRadius: 8, marginHorizontal: 0 }}
      />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: { marginBottom: -5 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Fan Store",
          tabBarLabel: "Beranda",

          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              source={`shopping${!focused ? "-outline" : ""}`}
              color={color}
              size={26}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 16, gap: 4 }}>
              <Button icon={"magnify"} mode="contained-tonal">
                Search
              </Button>
              <IconButton
                icon={"cart"}
                size={24}
                // mode="contained"
                onPress={() => router.push("/carts")}
                style={{ margin: 0 }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Pencarian",
          tabBarIcon: ({ color, focused, size }) => (
            <Icon source="magnify" color={color} size={26} />
          ),
          headerLeftContainerStyle: {
            flexGrow: 1,
            paddingHorizontal: 12,
          },
          headerTitleContainerStyle: { display: "none" },
          headerRightContainerStyle: { display: "none" },
          headerLeft: searchHeaderLeft,
          headerLeftLabelVisible: false,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transaksi",
          headerTitle: "Riwayat Transaksi",
          tabBarIcon: ({ color, focused }) => (
            <Icon source={"history"} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Akun",
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              source={`account-circle${!focused ? "-outline" : ""}`}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs>
  );
}
