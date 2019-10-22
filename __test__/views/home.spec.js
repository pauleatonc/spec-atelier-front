/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/views/home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home view', () => {
	it('should render the home view content', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.find('h1').text()).toEqual('Home');
	});
});
