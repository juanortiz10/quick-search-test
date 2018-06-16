import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getQuickSearch } from '../../redux/actions/';

import NavBar from '../../components/NavBar';
import SearchBox from './components/SearchBox';
import SearchItem from './components/SearchItem';
import SearchResultsContainer from './components/SearchResultsContainer';

import './styles.scss';

class Home extends Component {
	handleSearch = word => {
		const { getQuickSearch } = this.props;
		getQuickSearch(word);
	};
	render() {
		const { searchItems } = this.props;
		let items = [];

		if (searchItems) {
			items = searchItems.map((value, index) => {
				return <SearchItem key={index} {...value} position={index} />;
			});
		}
		return (
			<div className="home">
				<NavBar />
				<div className="home--search-container">
					<SearchBox onSearch={this.handleSearch} />
					<SearchResultsContainer results={items} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getQuickSearch: payload => {
			dispatch(getQuickSearch(payload));
		}
	};
};
const mapStateToProps = state => {
	return {
		searchItems: state.searchReducer[0]
	};
};

Home.propTypes = {
	dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
