import React from 'react';

const SearchItem = ({ title, href, position }) => {
	return (
		<div
			className={
				position % 2 === 0 ? 'search-item__gray' : 'search-item__white'
			}>
			<a href={href}>
				<span>{title}</span>
			</a>
		</div>
	);
};

export default SearchItem;
