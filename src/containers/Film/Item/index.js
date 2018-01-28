import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '../../../actions';
import FilmItem from '../../../components/Film/Item';

const mapStateToProps = (state) => {
  return {
    film: state.film.currentFilm
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmItem);
