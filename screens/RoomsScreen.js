import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import Amenities from '../components/Amenities';
const RoomsScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Available Rooms",
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
    const [selected, setSelected] = useState([])
    return (
        <>
            <ScrollView>
                {route.params.rooms.map((item, index) => (
                    <Pressable key={index} style={{ margin: 10, backgroundColor: "white", padding: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#6CB4EE", fontSize: 17, fontWeight: "700" }}>{item.name}</Text>
                            <AntDesign name="infocirlceo" size={24} color="#6CB4EE" />
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 17 }}>Pay at the property</Text>
                        <Text style={{ marginTop: 5, fontSize: 17, color: "green" }}>Free Cancellation Available</Text>
                        <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={{ fontSize: 18, color: "red", textDecorationLine: "line-through" }}>{route.params.oldPrice}</Text>
                            <Text style={{ fontSize: 18, color: "black" }}>{route.params.newPrice}</Text>
                        </View>
                        <Amenities />
                        {selected.includes(item.name) ? (
                            <Pressable
                                style={{
                                    borderColor: "#318CE7",
                                    backgroundColor: "#F0F8FF",
                                    borderWidth: 2,
                                    width: "100%",
                                    padding: 10,
                                    borderRadius: 5,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "center",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        color: "#318CE7",
                                        fontWeight: "bold",
                                        fontSize: 16,
                                    }}
                                >
                                    SELECTED
                                </Text>
                                <Entypo
                                    onPress={() => setSelected([])}
                                    name="circle-with-cross"
                                    size={24}
                                    color="red"
                                />
                            </Pressable>
                        ) : (
                            <Pressable onPress={() => setSelected(item.name)}
                                style={{ borderWidth: 2, borderColor: "#6CB4EE", borderRadius: 5, padding: 10 }}>
                                <Text style={{ color: "#6CB4EE", fontWeight: "700", fontSize: 16, textAlign: "center" }}>SELECT</Text>
                            </Pressable>
                        )}

                    </Pressable>
                ))}
            </ScrollView>

            {selected.length > 0 ? (
                <Pressable onPress={() => navigation.navigate("User", {
                    oldPrice: route.params.oldPrice,
                    newPrice: route.params.newPrice,
                    name: route.params.name,
                    children: route.params.children,
                    adults: route.params.adults,
                    rating: route.params.rating,
                    startDate: route.params.startDate,
                    endDate: route.params.endDate,
                })}
                    style={{ backgroundColor: "#6CB4EE", padding: 8, marginBottom: 30, borderRadius: 5, marginHorizontal: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>Reserve</Text>
                </Pressable>
            ) : (
                null
            )}

        </>
    )
}

export default RoomsScreen

const styles = StyleSheet.create({})