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

// it("Simple test", () => {
//   expect(true).toBe(true);
// })

describe('Feed Component', () => {
    it('renders MessageSender component', () => {
      const wrapper = shallow(<Feed />);
      expect(wrapper.contains(<MessageSender />)).toBe(true);
    });

    it('should be selectable by class "feed"', function() {
      expect(shallow(<Feed />).is('.feed')).toBe(true);
    });
})