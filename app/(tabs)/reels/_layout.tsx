import { Stack } from "expo-router"
import React from "react"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Reels" }} />
        </Stack>
    )
}

export default StackLayout