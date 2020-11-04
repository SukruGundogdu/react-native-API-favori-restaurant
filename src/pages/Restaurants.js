import axios from "axios";
import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

const Restaurants = (props) => {
    const [list, setList] = useState([]);

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
        .then(response => setList(response.data.result.data))
        .catch(error => console.log(error))
    }

    useEffect(() =>  fetchData(), []);

    const renderList = ({item}) => null

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:25, textAlign:"center", fontWeight:"bold"}} >Restaurants</Text>
                <FlatList
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    )
}

export  {Restaurants};