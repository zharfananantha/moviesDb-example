import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Favorite from '../Components/Favorite/Favorite';

const styles = {
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};

export default class FavoriteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Header title="Favorite" navigation={navigation} />,
    };
  };

  render() {
    return <Favorite 
              navigation={this.props.navigation}/>;
  }
}
