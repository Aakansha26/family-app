import React from 'react'
import { configure } from 'enzyme';
import React16Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new React16Adapter() });
import { shallow, mount } from 'enzyme';
import Home from '../Home/Home'
import Feed from '../Home/Feed/Feed'
import Sidebar from '../Sidebar/Sidebar';
import Notifications from '../Notifications/Notifications';

describe("Home Component", () => {

    it("Home Component renders properly", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.contains(<Sidebar />)).toBe(true);
        expect(wrapper.contains(<Feed />)).toBe(true);
        expect(wrapper.contains(<Notifications />)).toBe(true);
    })

    it('should be selectable by class "home"', function() {
        expect(shallow(<Home />).is('.home')).toBe(true);
      });
})