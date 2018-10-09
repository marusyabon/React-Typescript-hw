import React from 'react';
import PropTypes from 'prop-types';

import './Splitter.css';

class Splitter extends React.Component {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
  
  let strArr = this.props.text.split(/<br\s?\/?>/);
  let joinStr = strArr.map(v =>
    <p>{v}</p>
    )
        
    return (
      <div>
        {joinStr}
      </div>
    )
  }
}

export default Splitter;