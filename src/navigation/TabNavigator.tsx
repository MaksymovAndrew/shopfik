import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeIcon from '../assets/icons/home.svg';
import CategoryIcon from '../assets/icons/category.svg';
import CartIcon from '../assets/icons/cart.svg';
import ProfileIcon from '../assets/icons/profile.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#667eea',
                tabBarInactiveTintColor: '#999',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon
                            width={size}
                            height={size}
                            fill={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color, size }) => (
                        <CategoryIcon
                            width={size}
                            height={size}
                            fill={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => (
                        <CartIcon
                            width={size}
                            height={size}
                            fill={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcon
                            width={size}
                            height={size}
                            fill={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
