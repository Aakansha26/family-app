import React from 'react'
import { shallow } from '../../enzyme';
import CreateEvent from '../../CreateEvent/CreateEvent'
import CreateEventForm from '../../CreateEvent/CreateEventForm/CreateEventForm'
import Sidebar from '../../Sidebar/Sidebar';
import Notifications from '../../Notifications/Notifications';

describe("Home Component", () => {

    it("Home Component renders properly", () => {
        const wrapper = shallow(<CreateEvent />);
        expect(wrapper.contains(<Sidebar />)).toBe(true);
        expect(wrapper.contains(<CreateEventForm />)).toBe(true);
        expect(wrapper.contains(<Notifications />)).toBe(true);
    })

    it('should be selectable by class "home"', function() {
        expect(shallow(<CreateEvent />).is('.createEvent')).toBe(true);
      });
})