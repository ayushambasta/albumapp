import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Album({ item, ...props }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.thumbnailUrl }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                resizeMode="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})
