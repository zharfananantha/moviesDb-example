
import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';

import axios from 'axios';
import { useStateValue } from '../../State';
import MainModal from '../Modal/MainModal';
import LoadingModal from '../Modal/LoadingModal';
import { CardViewWithImage } from 'react-native-simple-card-view';
import { init } from '../../Database/DBInit';

export default ({navigation}) => {
    const [{ film }, dispatch] = useStateValue();
    const [isLoading, setIsloading] = useState(false);
    const [filmData, setFilmData] = useState([]);
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'e5f892c6dd56df804defc05de00d8c26';

    useEffect(() => {
        init()
        setIsloading(true);
        axios
            .get(BASE_URL + 'popular?api_key=' + API_KEY + '&language=en-US&page=1')
            .then(response => {
                setFilmData(response.data.results);
                setIsloading(false);
            })
            .catch(err => {
                console.log(err);
                setIsloading(false);
            });
    }, [dispatch]);

    function checkFilmData() {
        if (filmData.length > 0) {
            return (
                <FlatList
                    data={filmData}
                    renderItem={({ item }) =>
                        <CardViewWithImage
                            width={360}
                            source={{ uri: 'https://image.tmdb.org/t/p/original'+item.poster_path }}
                            content={item.overview}
                            title={item.original_title}
                            imageWidth={'100%'}
                            imageHeight={180}
                            roundedImage={false}
                            onPress={() => navigation.navigate(
                                'Detail', {
                                    item: item,
                                    from: 'Home'
                                })}
                        />
                    }
                />
            );
        } else
            return null;

    }
    return (
        <View>
            <MainModal visible={isLoading} animation={'fade'}>
                <LoadingModal />
            </MainModal>
            {console.log('AYO FILM ' + filmData[0])}
            {checkFilmData()}
            {/* <Text>{filmData[0].original_title}</Text>
            <Text>{filmData[1].original_title}</Text>
            <Text>{filmData[2].original_title}</Text> */}
        </View>
    );
};