import React from "react";
import * as Screens from "../screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
<<<<<<< HEAD

const BackArrowNavigator = ({page, navigation}) => (
  <IconButton
    icon="arrow-left"
    onPress={() => navigation.navigate(page)}
    iconColor="#fff"
  />
);
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> 3b1c7a62 (Add Map screen)

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  const BackArrowNavigator = (page) => (
    <IconButton
      icon="arrow-left"
      onPress={() => navigation.navigate(page)}
      iconColor="#fff"
    />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Screens.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="hometab"
        component={Screens.HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Screens.SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Screens.ProfileScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="pushup"
        component={Screens.PushUpScreen}
        options={({ navigation }) => ({ 
          title: "",
          headerShown: true,
          headerLeft: () => <BackArrowNavigator page={"profile"} navigation={navigation}/>,
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="situp"
        component={Screens.SitUpScreen}
        options={({ navigation }) => ({ 
          title: "",
          headerShown: true,
          headerLeft: () => <BackArrowNavigator page={"profile"} navigation={navigation}/>,
          headerTransparent: true,
        })}
      />
      <Stack.Screen
        name="run"
        component={Screens.RunScreen}
        options={({ navigation }) => ({ 
          title: "",
          headerShown: true,
          headerLeft: () => <BackArrowNavigator page={"profile"} navigation={navigation}/>,
          headerTransparent: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
