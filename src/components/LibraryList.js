import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';


class Library List extends Component {
  render() {

    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
