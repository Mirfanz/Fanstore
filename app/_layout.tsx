import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Share, useColorScheme } from "react-native";
import {
  IconButton,
  PaperProvider,
  DefaultTheme as paperDefaultTheme,
} from "react-native-paper";
import Colors from "../constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const paperTheme = {
  ...paperDefaultTheme, // or MD3DarkTheme
  colors: {
    ...paperDefaultTheme.colors,
    ...Colors.light,
  },
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // const global = URLSearchParams();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="product/[slug]"
            options={{
              presentation: "modal",
              headerTitleAlign: "center",
              headerTitle: "Detail Produk",
              animation: "slide_from_bottom",
              headerRight: () => (
                <IconButton
                  icon={"share-variant-outline"}
                  // mode="contained-tonal"
                  // iconColor="green"
                  onPress={() => {
                    Share.share(
                      {
                        message: "https://raihan-cell.vercel.app/product",
                        title: "ini title",
                        url: "https://raihan-cell.vercel.app/product",
                      },
                      {
                        dialogTitle: "Ini Adalah Title",
                        subject: "subject ni bos",
                        anchor: 2,
                      }
                    );
                  }}
                  style={{ borderRadius: 8, margin: 0 }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="carts"
            options={{
              // presentation: "modal",
              headerTitle: "Keranjang",
            }}
          />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  );
}
