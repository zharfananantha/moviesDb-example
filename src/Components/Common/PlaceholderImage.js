/**
 * Image component with default placeholder if source is empty string.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

const placeholder = require('../../Assets/Images/placeholder.png');

const PlaceholderImage = ({src, style}) => {
  const [source, setSource] = useState(placeholder);

  useEffect(() => {
    if (src && src !== '') {
      setSource({uri: src});
    }
  }, [src]);

  return <Image style={style} source={source} />;
};

export {PlaceholderImage};
