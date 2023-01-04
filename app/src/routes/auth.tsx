import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProtectedRoute from "../hocs/protectedRoute";

import Dashboard from "../screens/dashboard";

export default function AuthRoute(){
    const Auth = createNativeStackNavigator();
    return(
        <Auth.Navigator>
          <Auth.Screen
            name="Dashboard"
            options={{
                headerShown: false,
            }}>
            {() =>
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
            }
          </Auth.Screen>
        </Auth.Navigator>
    )
}