import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Home from '../Components/Home/Home';

const styles = {
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Header title="Home" navigation={navigation} />,
    };
  };

  render() {
    return <Home 
              navigation={this.props.navigation}/>;
    // return (
    //   <>
    //     <HookBanner />
    //     {/*<HomeMenu
    //       navigateProfile={() => this.props.navigation.navigate('Profile')}
    //       navigateForm={() => this.props.navigation.navigate('Form')}
    //       navigateNfc={() => this.props.navigation.navigate('Nfc')}
    //       navigateProduct={() => this.props.navigation.navigate('Product')}
    //       navigateMap={() => this.props.navigation.navigate('Map')}
    //     />*/}
    //     <View style={styles.footer}>
    //       <Footer />
    //     </View>
    //   </>
    // );
  }
}
