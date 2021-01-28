import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../style/styles.js';

export default function Detail() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Detail Screen</Text>
            <Button title="Go to Bottom Tabs" onPress={() => {

            }} />
            <Button title="Go to Top Tabs" onPress={() => {

            }} />
        </View>
    )
}
