import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('First Unit Test', () => {
	it('Should render Hello Spec Atelier', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1').text()).toEqual('Hello Spec Atelier');
	});
});
