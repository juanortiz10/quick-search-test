import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			searchWord: ''
		};
	}
	handleSearchChange = event => {
		const { onSearch } = this.props;
		const { searchWord } = this.state;

		this.setState({ searchWord: event.target.value }, () => {
			onSearch(searchWord);
		});
	};
	render() {
		const { searchWord } = this.state;
		const { onSearch } = this.props;

		return (
			<div className="search-box">
				<input
					value={searchWord}
					onChange={this.handleSearchChange}
					className="search-box--input"
					placeholder="Search term"
				/>
				<div className="search-box--button-container">
					<button
						className="search-box--button"
						onClick={() => onSearch(searchWord)}>
						Search
					</button>
				</div>
			</div>
		);
	}
}

SearchBox.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default SearchBox;
