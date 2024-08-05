import { Tabs } from "expo-router"
import React from "react"
import { Icon } from "react-native-elements"

export default () => {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name === "home") {
                        iconName = "home";
                    } else if (route.name === "search") {
                        iconName = "search";
                    } else if (route.name === "upload") {
                        iconName = "cloud-upload";
                    } else if (route.name === "reels") {
                        iconName = "image"; 
                    } else if (route.name === "profile") {
                        iconName = "person"; 
                    }

                    return <Icon name={iconName} size={24} color={color} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
            })}
        >
            <Tabs.Screen name="home" options={{ headerShown: false }} />
            <Tabs.Screen name="search" options={{ headerShown: false }} />
            <Tabs.Screen name="upload" options={{ headerShown: false }} />
            <Tabs.Screen name="reels" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />
        </Tabs>
    )
}