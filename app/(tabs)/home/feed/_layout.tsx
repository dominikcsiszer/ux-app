import { Stack } from "expo-router"
import React from "react"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Feed Page" }} />
        </Stack>
    )
}

export default StackLayout