import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { useSelector } from "react-redux";

const Favorites = (props) => {
    const favList = useSelector(state => state.favoriteList);
    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1}} >
            <Text style={{fontSize:25, textAlign:"center", fontWeight:"bold"}} >Favori Restoranlar</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={favList}
                    renderItem={({item}) => <Text style={{backgroundColor:'#a7b6bd', margin:10, padding: 10, borderRadius:10}}><Icon name={"heart"} size={20} color={"yellow"} /> {item.name}</Text>}
                    ListEmptyComponent={() => <Text>Notig Favorite</Text>}
                />
            </View>
        </SafeAreaView>
    );
}

export { Favorites }; 