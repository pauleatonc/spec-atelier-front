import React from 'react';
import { Link } from 'react-router-dom';

const LoginChangeAuthView = props => {
	const { label, path, textLink, style } = props;

	return (
		<p className={style}>
			{label}
			<Link to={`/${path}`} className={`${style}__link`}>
				{textLink}
			</Link>
		</p>
	);
};

export default LoginChangeAuthView;
