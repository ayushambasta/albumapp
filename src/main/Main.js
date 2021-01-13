import React, { Component, lazy, Suspense } from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../constants/Screens';

const Albums = lazy(() => import('../screens/Album'));

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "albumData": []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch("http://jsonplaceholder.typicode.com/photos").then(response => response.json())
            .then(data => this.setState({ albumData: data }));
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar hidden />
                <FlatList
                    style={{ flex: 1 }}
                    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, marginTop: 5 }}
                    data={this.state.albumData}
                    keyExtractor={item => item.id.toString() + "_" + item.albumId.toString()}
                    horizontal={false}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.photoContainer}
                            onPress={() => this.props.navigation.navigate('Display', { imageProps: item })}>
                            <Suspense fallback={<View style={{
                                width: '100%',
                                height: '100%',
                                color: '#000'
                            }}>
                                <Text>Loading...</Text>
                            </View>}>
                                <Albums item={item} />
                            </Suspense>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    photoContainer: {
        width: windowWidth / 2,
        height: 168,
    }
});
