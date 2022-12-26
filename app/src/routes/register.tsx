import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";



export default function RegisterRoute(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
                headerShown: false,
            }}
          />
        </Stack.Navigator>
    )
}