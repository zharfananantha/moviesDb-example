/**
 * Default banner component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {Indicator} from './Indicator';

const {width} = Dimensions.get('window');

const styles = {
  banner: {
    width: width,
    height: width * 0.6,
    marginBottom: width * 0.02,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: 0,
      sliderIndex: 0,
    };

    this.viewableItemsChange = this.handleViewableItemsChange.bind(this);
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100,
    };

    this.startBannerAutoplay();
  }

  componentWillUnmount() {
    clearInterval(this.autoplay);
  }

  handleViewableItemsChange(info) {
    if (info.viewableItems.length !== 0) {
      this.setState({indicator: info.changed[0].index, sliderIndex: info.changed[0].index});
    }
  }

  startBannerAutoplay() {
    this.autoplay = setInterval(
      function() {
        if (this.props.data.length > 0) {
          const {sliderIndex} = this.state;
          let nextIndex = 0;

          if (sliderIndex !== this.props.data.length - 1) {
            nextIndex = sliderIndex + 1;
          }

          this.scrollToIndex(nextIndex, true);
          this.setState({indicator: nextIndex, sliderIndex: nextIndex});
        }
      }.bind(this),
      3000,
    );
  }

  scrollToIndex = (index, animated) => {
    this.listRef && this.listRef.scrollToIndex({index, animated});
  };

  renderIndicator() {
    if (this.props.data.length > 0) {
      return (
        <View style={styles.indicator}>
          {this.props.data.map((item, index) => (
            <Indicator key={index} index={index} active={this.state.indicator} />
          ))}
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <FlatList
          ref={fl => {
            this.listRef = fl;
          }}
          style={styles.banner}
          data={this.props.data}
          keyExtractor={this.props.keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.items}
          pagingEnabled
          onViewableItemsChanged={this.viewableItemsChange}
          viewabilityConfig={this.viewabilityConfig}
          onScrollToIndexFailed={err => console.log('scrollErr', err)}
        />
        {this.renderIndicator()}
      </View>
    );
  }
}

export {Banner};
