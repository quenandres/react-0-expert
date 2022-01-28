import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom';

describe('test de <HookApp />', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});