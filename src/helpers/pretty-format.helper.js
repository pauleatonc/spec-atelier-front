import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';

export const firstLetterToUppercase = string =>
	`${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const handleChangeToPrettyFormat = date => (
	<Moment local="es" date={date} format="LL" />
);

export const handleChangeToprettyFormatToNow = date => (
	<Moment local="es" date={date} fromNow interval={30000} />
);
