import React from 'react'
import { shallow } from '../../enzyme';
import "@testing-library/jest-dom";
import Feed from '../../Home/Feed/Feed'
import MessageSender from '../../Home/Feed/MessageSender/MessageSender'


describe('Feed Component', () => {
    it('renders MessageSender component', () => {
      const wrapper = shallow(<Feed />);
      expect(wrapper.contains(<MessageSender />)).toBe(true);
    });

    it('should be selectable by class "feed"', function() {
      expect(shallow(<Feed />).is('.feed')).toBe(true);
    });
})