
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';

import axios from 'axios';
import MainModal from '../Modal/MainModal';
import LoadingModal from '../Modal/LoadingModal';
import { Heading } from '../Common';
import { addToFav, delItemFav } from '../../Database/DBInit';

const ic_fav = require('../../Assets/Icons/star.png');
const ic_del = require('../../Assets/Icons/trash.png');

const { width } = Dimensions.get('window');

const styles = {
    image: {
        width,
        height: width * 0.7,
        resizeMode: 'contain',
        backgroundColor: '#ebebeb',
    },
    description: {
        padding: width * 0.02,
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default ({ navigation, item, from }) => {
    const [isLoading, setIsloading] = useState(false);
    const [filmDetail, setFilmDetail] = useState(null);
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'e5f892c6dd56df804defc05de00d8c26';

    useEffect(() => {
        setIsloading(true);
        console.log('DETAIL ', filmDetail);
        console.log('ITEM ', BASE_URL + item.id);
        axios
            .get(BASE_URL + item.id + '?api_key=' + API_KEY + '&language=en-US')
            .then(response => {
                console.log('RESPONSE ', response.data);
                setFilmDetail(response.data);
                setIsloading(false);
            })
            .catch(err => {
                console.log(err);
                setIsloading(false);
            });

    }, []);

    function checkFrom() {
        if (from == 'Home') {
            return (
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => addToFav(filmDetail).then(check => {
                        if (check) {
                            Alert.alert(
                                'Success',
                                'Berhasil menambahkan favorit',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => navigation.navigate('Home'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        }
                    })}>
                    <Image source={ic_fav} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => delItemFav(filmDetail).then(check => {
                        if (check) {
                            Alert.alert(
                                'Success',
                                'Berhasil menghapus dari favorit',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => navigation.navigate('Home'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        }
                    })}>
                    <Image source={ic_del} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
            );
        }

    }

    function checkFilmDetail() {
        if (filmDetail != null) {
            return (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original' + filmDetail.poster_path }} />
                    <Heading h1>{filmDetail.original_title}</Heading>
                    <Text style={styles.description}>{filmDetail.release_date}</Text>
                    <Text style={styles.description}>{filmDetail.overview}</Text>
                    {checkFrom()}
                </ScrollView>
            );
        } else
            return null;

    }
    return (
        <View style={{ flex: 1 }}>
            <MainModal visible={isLoading} animation={'fade'}>
                <LoadingModal />
            </MainModal>
            {checkFilmDetail()}
        </View>
    );
};