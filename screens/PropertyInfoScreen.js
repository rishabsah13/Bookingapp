import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { pixelNormalize } from '../components/Normalise'
import { MaterialIcons } from '@expo/vector-icons';
import Amenities from '../components/Amenities';

const PropertyInfoScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `${route.params.name}`,
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

    const difference = route.params.oldPrice - route.params.newPrice
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <Pressable
                        style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
                    >
                        {route.params.photos.slice(0, 5).map((photo) => (
                            <View style={{ margin: 6 }}>
                                <Image
                                    style={{
                                        width: 120,
                                        height: pixelNormalize(80),
                                        borderRadius: pixelNormalize(4),
                                    }}
                                    source={{ uri: photo.image }}
                                />
                            </View>
                        ))}
                        <Pressable
                            style={{ alignItems: "center", justifyContent: "center" }}
                        >
                            <Text style={{ textAlign: "center", marginLeft: 20 }}>
                                Show More
                            </Text>
                        </Pressable>
                    </Pressable>

                    <View style={{ marginHorizontal: 12, marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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
                        <View style={{
                            backgroundColor: "#17B169",
                            paddingHorizontal: 8,
                            paddingVertical: 5,
                            borderRadius: 6
                        }}>
                            <Text style={{ color: "white", fontSize: 13 }}>
                                Travel sustainable
                            </Text>
                        </View>
                    </View>
                    <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 15 }}></Text>

                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "500", marginHorizontal: 12 }}>Price for 1 Night and {route.params.adults} adults</Text>
                    <View style={{ marginTop: 4, flexDirection: "row", alignItems: "center", gap: 8, marginHorizontal: 14, marginTop: 20 }}>
                        <Text style={{ color: "red", fontSize: 22, textDecorationLine: "line-through" }}>{route.params.oldPrice * route.params.adults}</Text>
                        <Text style={{ color: "black", fontSize: 22, }}> Rs. {route.params.newPrice * route.params.adults}</Text>
                    </View>
                    <View style={{ marginHorizontal: 12, marginTop: 8, backgroundColor: "green", paddingHorizontal: 10, paddingVertical: 10, width: 80, borderRadius: 4 }}>
                        <Text style={{ textAlign: "center", color: "white" }}>{offerPrice.toFixed(0)}% OFF</Text>
                    </View>
                    <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 15 }}></Text>
                    <View style={{ margin: 12, flexDirection: "row", alignItems: "center", gap: 60 }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Check In</Text>
                            <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.selectedDates.startDate}</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Check Out</Text>
                            <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.selectedDates.endDate}</Text>

                        </View>
                    </View>
                    <View style={{ margin: 12, }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>Rooms & Guests</Text>
                        <Text style={{ fontSize: 16, color: "#007FFF", fontWeight: "bold" }}>{route.params.rooms} rooms {route.params.adults} adults{" "} {route.params.children} children </Text>
                    </View>
                    <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 15 }}></Text>
                    <Amenities />
                    <Text style={{ borderColor: "#E0E0E0", borderWidth: 3, height: 1, marginTop: 55 }}></Text>
                    {/*<Pressable
                    style={{
                        backgroundColor: "#007FFF",

                        paddingVertical: 22,
                        marginHorizontal: 25,

                        width: "85%",
                        marginBottom: 25

                    }}>
                    <Text style={{ textAlign: "center", color: "white" }}>Select Availability</Text>
                </Pressable>*/}


                </ScrollView>

            </SafeAreaView>
            <Pressable
                onPress={() => navigation.navigate("Rooms", {
                    rooms: route.params.availableRooms,
                    oldPrice: route.params.oldPrice,
                    newPrice: route.params.newPrice,
                    name: route.params.name,
                    children: route.params.children,
                    adults: route.params.adults,
                    rating: route.params.rating,
                    startDate: route.params.selectedDates.startDate,
                    endDate: route.params.selectedDates.endDate
                })}
                style={{
                    backgroundColor: "#6CB4EE",
                    position: "absolute",
                    bottom: 20,
                    padding: 15,
                    width: "95%",
                    marginHorizontal: 10,
                }}
            >
                <Text style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 17 }}>
                    Select Availabilty
                </Text>
            </Pressable>
        </>
    )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})