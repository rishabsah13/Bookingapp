import { Button, Pressable, Alert, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';

const HomeScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [selectedDates, setSelectedDates] = useState('')
    const [rooms, setRooms] = useState(1)
    const [adults, setAdults] = useState(2)
    const [children, setchildren] = useState(0)
    const [modalvisible, setmodalvisible] = useState(false)
    console.log(selectedDates)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Booking.com",
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
            headerRight: () => (
                <Ionicons name="notifications" size={24} color="white" style={{ marginRight: 14 }} />
            ),

        })
    }, [])

    const customButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{
                    container: { width: "90%", marginHorizontal: 35 },
                    text: { fontSize: 20, },
                }}
                primary
                title='Submit' />
        )
    }

    console.log(route.params)

    const searchPlaces = (place) => {
        if (!route.params || !selectedDates) {
            Alert.alert('Invalid details', 'Please enter all the details', [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        }
        if (route.params && selectedDates) {
            navigation.navigate("Places", {
                rooms: rooms,
                adults: adults,
                children: children,
                selectedDates: selectedDates,
                place: place

            })
        }

    }

    return (
        <>
            <View>
                <Header />
                <ScrollView>
                    <View style={{ margin: 20, borderWidth: 3, borderRadius: 7, borderColor: "yellow" }}>
                        <Pressable style={{
                            flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 10,
                            borderColor: "yellow", borderWidth: 2, paddingVertical: 15
                        }} onPress={() => navigation.navigate("Search")}
                        >
                            <MaterialIcons name="family-restroom" size={24} color="black" />
                            <TextInput placeholder={route?.params ? route.params.input : "Enter your destination"} placeholderTextColor="black" ></TextInput>
                        </Pressable>

                        <Pressable style={{
                            flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 10,
                            borderColor: "yellow", borderWidth: 2, paddingVertical: 15
                        }}>

                            <AntDesign name="calendar" size={24} color="black" />
                            <DatePicker
                                style={{ width: 350, height: 30, borderRadius: 0, borderWidth: 0, borderColor: "transparent" }}
                                customStyles={{
                                    placeholderText: { fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto" },
                                    headerStyle: {
                                        backgroundColor: "blue"
                                    },
                                    contentText: {
                                        fontSize: 15, flexDirection: "row", alignItems: "center", marginRight: "auto"
                                    },

                                }}
                                selectBgColor="#0047AB"
                                centerAlign // optional text will align center or not
                                allowFontScaling={false} // optional
                                placeholder={'Select your dates'}
                                mode={'range'}
                                onConfirm={(startdate, enddate) => setSelectedDates(startdate, enddate)}
                                customButton={(onConfirm) => customButton(onConfirm)}
                            />

                        </Pressable>
                        <Pressable style={{
                            flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 10,
                            borderColor: "yellow", borderWidth: 2, paddingVertical: 15
                        }}
                            onPress={() => setmodalvisible(!modalvisible)}>
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput placeholder={`${rooms}- room ${adults}-adults ${children} - children`} placeholderTextColor="red" />

                        </Pressable>
                        <Pressable
                            onPress={() => searchPlaces(route?.params.input)}
                            style={{
                                paddingHorizontal: 10,
                                borderColor: "yellow", borderWidth: 2, paddingVertical: 15, backgroundColor: "blue"
                            }}>
                            <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500", color: "white" }} >Search</Text>
                        </Pressable>

                    </View>
                    <Text style={{ marginHorizontal: 22, fontSize: 18, fontWeight: "600" }}>Travel more spend less</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Pressable style={{ width: 200, height: 150, marginTop: 12, backgroundColor: "blue", borderRadius: 12, marginLeft: 10, padding: 20 }}>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginVertical: 8 }}>Genius</Text>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", }}>Complete 5 stays to unlock level 2</Text>
                        </Pressable>

                        <Pressable style={{ width: 200, height: 150, marginTop: 12, backgroundColor: "white", borderRadius: 12, marginLeft: 10, padding: 20 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 8 }}>10% Discount</Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", }}>Enjoy 10% Discount</Text>
                        </Pressable>

                        <Pressable style={{ width: 200, height: 150, marginTop: 12, backgroundColor: "blue", borderRadius: 12, marginLeft: 10, padding: 20 }}>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginVertical: 8 }}>Genius</Text>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", }}>Genius level 1 in our loyalty program</Text>
                        </Pressable>
                    </ScrollView>
                </ScrollView>
                <Pressable
                    style={{
                        marginTop: 40,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={{ width: 200, height: 50, resizeMode: "cover" }}
                        source={{
                            uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
                        }}
                    />
                </Pressable>
            </View>
            <BottomModal swipeThreshold={200}
                onBackdropPress={() => setmodalvisible(!modalvisible)}
                swipeDirection={['up', 'down']}
                footer={<ModalFooter>
                    <ModalButton text="Apply" style={{ marginBottom: 20, color: "white", backgroundColor: "blue" }}
                        onPress={() => setmodalvisible(!modalvisible)}

                    />

                </ModalFooter>

                }
                modalTitle={<ModalTitle title='Select rooms and guests' />}
                modalAnimation={new SlideAnimation({
                    slideFrom: "bottom"
                })}
                onHardwareBackPress={() => setmodalvisible(!modalvisible)}
                visible={modalvisible}
                onTouchOutside={() => setmodalvisible(!modalvisible)}
            >
                <ModalContent style={{ width: "100%", height: 150 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Rooms</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable style={{
                                height: 25,
                                width: 25,
                                borderColor: "gray",
                                backgroundColor: "gray",
                                borderRadius: 13
                            }}
                                onPress={() => setRooms(Math.max(1, rooms - 1))}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 8
                                }}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 16,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>
                                    {rooms}
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                height: 26,
                                width: 26,
                                borderColor: "gray",
                                backgroundColor: "gray",
                                borderRadius: 13
                            }}
                                onPress={() => setRooms((c) => c + 1)}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 6,

                                }}>+</Text>
                            </Pressable>



                        </Pressable>

                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Adults</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable
                                onPress={() => setAdults(Math.max(1, adults - 1))}

                                style={{
                                    height: 25,
                                    width: 25,
                                    borderColor: "gray",
                                    backgroundColor: "gray",
                                    borderRadius: 13
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 8
                                }}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 16,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>
                                    {adults}
                                </Text>
                            </Pressable>
                            <Pressable style={{
                                height: 26,
                                width: 26,
                                borderColor: "gray",
                                backgroundColor: "gray",
                                borderRadius: 13
                            }}
                                onPress={() => setAdults((c) => c + 1)}
                            >
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 6,

                                }}>+</Text>
                            </Pressable>



                        </Pressable>

                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold" }}>children</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable
                                onPress={() => setchildren(Math.max(0, children - 1))}
                                style={{
                                    height: 25,
                                    width: 25,
                                    borderColor: "gray",
                                    backgroundColor: "gray",
                                    borderRadius: 13
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 8
                                }}>-</Text>
                            </Pressable>

                            <Pressable>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 16,
                                    fontWeight: "600",
                                    paddingHorizontal: 6
                                }}>
                                    {children}
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => setchildren((c) => c + 1)}
                                style={{
                                    height: 26,
                                    width: 26,
                                    borderColor: "gray",
                                    backgroundColor: "gray",
                                    borderRadius: 13
                                }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "500",
                                    paddingHorizontal: 6,

                                }}>+</Text>
                            </Pressable>
                        </Pressable>

                    </View>
                </ModalContent>
            </BottomModal>
        </>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})