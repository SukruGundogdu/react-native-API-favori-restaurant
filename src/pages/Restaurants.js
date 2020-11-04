import axios from "axios";
import React, {useEffect} from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const Restaurants = (props) => {


    const fetchData = () => {
        axios.post(
            "https://rapidapi.p.rapidapi.com/search",
            {
                limit: '30', 
                language: 'en_US', 
                location_id: '297704', 
                currency: 'USD'
            },
            {
                headers: {
                    'content-type': 'application/json',  //json tipinde gonderdigim icin 
                    'x-rapidapi-key': '12319ef85amsh618e2d1c4cc54a1p109bd7jsn9a3247df045e',
                    'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com'
                }
            }
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(() =>  fetchData(), []);

    return (
        <SafeAreaView>
            <View>
                <Text>Restaurants</Text>
            </View>
        </SafeAreaView>
    )
}

export  {Restaurants};