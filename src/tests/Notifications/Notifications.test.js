import React from 'react'
import Notifications from '../../Notifications/Notifications'
import renderer from 'react-test-renderer'
import { shallow } from '../../enzyme';
import "@testing-library/jest-dom";


describe("Notifications Component", () => {

    it("Notifications Component renders properly", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists('.today-events')).toEqual(true);
        expect(wrapper.exists('.upcoming-events')).toEqual(true);
    })

    it('should be selectable by class "notifications"', function() {
        expect(shallow(<Notifications />).is('.notifications')).toBe(true);
    });

})