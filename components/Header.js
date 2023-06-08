import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={{
            backgroundColor: "blue", height: 65, flexDirection: "row", alignItems: "center", justifyContent: "space-around",

        }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center", borderColor: "white", borderWidth: 2, padding: 10, borderRadius: 22 }}>
                <Ionicons name="bed-sharp" size={24} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 16 }}>Stays</Text>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center", borderColor: "white", }}>
                <MaterialIcons name="flight" size={24} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 16 }}>Flights</Text>
            </Pressable>

            <Pressable style={{ flexDirection: "row", alignItems: "center", borderColor: "white", }}>
                <FontAwesome name="taxi" size={24} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 16 }}>Car Rentals</Text>
            </Pressable>
            <Pressable style={{ flexDirection: "row", alignItems: "center", borderColor: "white", }}>
                <MaterialIcons name="local-taxi" size={24} color="white" />
                <Text style={{ marginLeft: 8, fontWeight: "bold", color: "white", fontSize: 16 }}>Taxi</Text>
            </Pressable>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})