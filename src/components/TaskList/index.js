import { useState, React } from 'react';
import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"

export default function TaskList({data, handleDelete}){
    return(
        <Animatable.View style={styles.container} animation="bounceIn" useNativeDriver>
            <TouchableOpacity onPress={() => handleDelete(data)}>
                <Ionicons neme="md-checkmark-circle" size={30} color="#121212"/>
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>    
            </View>           
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        }
    },
    task: {
        color: "#121212",
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 20,
    }
})