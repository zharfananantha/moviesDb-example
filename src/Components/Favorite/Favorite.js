
import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';

import axios from 'axios';
import { useStateValue } from '../../State';
import MainModal from '../Modal/MainModal';
import LoadingModal from '../Modal/LoadingModal';
import { CardViewWithImage } from 'react-native-simple-card-view';
import { getAllFav, init } from '../../Database/DBInit';

const { width } = Dimensions.get('window');

export default ({navigation}) => {
    const [{ film }, dispatch] = useStateValue();
    const [isLoading, setIsloading] = useState(false);
    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        getAllFav().then(data => {
            setFilmData(data);
            console.log('DATA FAV ', data)
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
                            title={item.title}
                            imageWidth={'100%'}
                            imageHeight={180}
                            roundedImage={false}
                            onPress={() => navigation.navigate(
                                'Detail', {
                                    item: item,
                                    from: 'Fav'
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
            {checkFilmData()}
        </View>
    );
};