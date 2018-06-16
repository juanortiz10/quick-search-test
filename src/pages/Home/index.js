import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDemoRequest } from '../../redux/actions/demoActions';

import NavBar from '../../components/NavBar';

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getDemoRequest: payload => {
			dispatch(getDemoRequest(payload));
		}
	};
};
const mapStateToProps = state => {
	return {
		users: state.demoReducer[0]
	};
};

Home.propTypes = {
	dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
