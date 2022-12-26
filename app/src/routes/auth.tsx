import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/dashboard";

export default function AuthRoute(){
    const Auth = createNativeStackNavigator();
    return(
        <Auth.Navigator>
          <Auth.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                headerShown: false,
            }}
          />
        </Auth.Navigator>
    )
}