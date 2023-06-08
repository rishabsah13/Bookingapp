import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Amenities = () => {

    const services = [
        {
            id: "0",
            name: "room service",
        },
        {
            id: "2",
            name: "free wifi",
        },
        {
            id: "3",
            name: "Family rooms",
        },
        {
            id: "4",
            name: "Free Parking",
        },
        {
            id: "5",
            name: "swimming pool",
        },
        {
            id: "6",
            name: "Restaurant",
        },
        {
            id: "7",
            name: "Fitness center",
        },
    ];


    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>Most Popular Amenities</Text>
            <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                {services.map((item, index) => (
                    <View key={index} style={{ margin: 7, backgroundColor: "#007FFF", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 24 }}>
                        <Text style={{ textAlign: "center", color: "white" }}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Amenities

const styles = StyleSheet.create({})