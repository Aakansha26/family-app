import React from 'react'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import React16Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new React16Adapter() });
import renderer from 'react-test-renderer'
import { fireEvent, render, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import Feed from '../Home/Feed/Feed'
import MessageSender from '../Home/Feed/MessageSender/MessageSender'

describe('Feed Component', () => {
    it('renders one MessageSender component', () => {
      const wrapper = shallow(<Feed />);
      console.log(wrapper.debug());
      expect(wrapper.find(MessageSender)).to.have.lengthOf(1);
    });
})