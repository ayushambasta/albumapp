import React from 'react'
import { View, Text, Image } from 'react-native'
import { windowHeight, windowWidth } from '../constants/Screens';

export default function Display({ route, navigation }) {
    const { imageProps } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={{uri: imageProps.url}}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                resizeMode="cover"
            />
        </View>
    )
}
