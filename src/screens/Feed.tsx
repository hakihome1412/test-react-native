import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../style/styles.js';

export default function Feed() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button title="Go to Detail" onPress={()=>{
                
            }}/>
        </View>
    )
}
