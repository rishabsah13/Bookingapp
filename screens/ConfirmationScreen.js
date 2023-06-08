import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../SavedReducer';

const ConfirmationScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Confirmation",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerStyle: {
                backgroundColor: "blue",
                height: 120,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },


        })
    }, [])
    const dispatch = useDispatch()
    const confirmBooking = () => {
        dispatch(savedPlaces(route.params))
        navigation.replace("Main")
    }
    return (
        <View>
            <Pressable>
                <View style={{ marginHorizontal: 12, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{route.params.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 8 }}>
                        <MaterialIcons name="stars" size={24} color="green" />
                        <Text>{route.params.rating}</Text>
                        <View style={{
                            backgroundColor: "#6CB4EE",
                            padding: 5,
                            borderRadius: 5,
                            width: 100,
                            paddingVertical: 3
                        }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>Genius level</Text>
                        </View>

                    </View>
                </View>

                <View style={{ margin: 12, flexDirection: "row", alignItems: "center", gap: 60 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Check In</Text>
                        <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.startDate}</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Check Out</Text>
                        <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.endDate}</Text>

                    </View>
                </View>
                <View style={{ margin: 12, }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Rooms & Guests</Text>
                    <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.rooms} rooms {route.params.adults} adults{" "} {route.params.children} children </Text>
                </View>

                <Pressable onPress={confirmBooking}
                    style={{ backgroundColor: "blue", padding: 5, width: 120, marginHorizontal: 12, marginBottom: 20, borderRadius: 5 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "bold" }}>Book Now</Text>
                </Pressable>
            </Pressable>

        </View>
    )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})