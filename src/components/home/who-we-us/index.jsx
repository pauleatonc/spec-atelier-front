import React from 'react';

import { DATA } from './constants';

const WhoWeUs = () => {
	return (
		<div className="who-we-us">
			{DATA.map((section) => (
				<div className="who-we-us__section">
					<img
						className="who-we-us__section__icon"
						src={section.icon}
						alt={section.title}
					/>
					<div className="who-we-us__section__info">
						<h4 className="who-we-us__section__info__title">{section.title}</h4>
						<p className="who-we-us__section__info__descent">
							{section.descent}
						</p>
						<p className="who-we-us__section__info__description">
							{section.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default WhoWeUs;
