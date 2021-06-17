/**
 * Detail screen.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import { Alert, Dimensions, Image, ScrollView, Text, TouchableOpacity } from 'react-native';

import Detail from '../Components/DetailScreen/Detail';
import Header from '../Components/Header';

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Header title="Detail" navigation={navigation} />,
    };
  };

  render() {
    const item = this.props.navigation.getParam('item');
    const from = this.props.navigation.getParam('from');

    return (
      <Detail 
        navigation={this.props.navigation}
        item={item}
        from={from} />
    );
  }
}

export default DetailScreen;
