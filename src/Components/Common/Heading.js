/**
 * Heading component template.
 * Use h1-h6 properties to determine the heading size.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    alignItems: 'flex-start',
    margin: width * 0.02,
  },
};

const Heading = ({h1, h2, h3, h4, h5, h6, underlineColor, children}) => {
  const [fontSize, setFontSize] = useState(null);
  const [underline, setUnderline] = useState(null);

  useEffect(() => {
    if (h6) {
      setFontSize({fontSize: width * 0.05});
    }

    if (h5) {
      setFontSize({fontSize: width * 0.06});
    }

    if (h4) {
      setFontSize({fontSize: width * 0.07});
    }

    if (h3) {
      setFontSize({fontSize: width * 0.08});
    }

    if (h2) {
      setFontSize({fontSize: width * 0.09});
    }

    if (h1) {
      setFontSize({fontSize: width * 0.1});
    }

    if (underlineColor) {
      setUnderline({
        borderBottomWidth: width * 0.01,
        borderColor: underlineColor,
      });
    }
  }, [h1, h2, h3, h4, h5, h6, underlineColor]);

  return (
    <View style={styles.container}>
      <Text style={[fontSize, underline]}>{children}</Text>
    </View>
  );
};

export {Heading};
