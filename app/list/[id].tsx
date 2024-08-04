import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const ProfileDetails = () => {
    const { id } = useLocalSearchParams();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Stack.Screen options={{title: 'Profile Details'}} />
            <Text>Profile Details: {id}</Text>
        </View>
    );
}

export default ProfileDetails;