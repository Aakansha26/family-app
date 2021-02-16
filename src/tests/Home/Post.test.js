import React from 'react'
import { shallow } from '../../enzyme';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import renderer from 'react-test-renderer'
import Post from '../../Home/Feed/Post/Post'

afterEach(cleanup)

const propsWithoutLocation = {
    profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    username: "ria",
    timestamp: "February 15,2021 at 8:05:08 PM UTC+5:30",
    message:"hii",
    latitude: '',
    longitude: ''
}

const propsWithLocation = {
    profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    username: "ria",
    timestamp: new Date(),
    message:"hii",
    latitude: '28.635955199999998',
    longitude: '77.2308992'
}

describe("Post Component", () => {

    it("Post Component Snapshot test", () => {
        const tree = renderer.create(<Post {...propsWithoutLocation}/>);
        let snapshot = tree.toJSON();
        expect(snapshot).toMatchSnapshot();
    })

    it("Post Component renders properly without Location", () => {
        const wrapper = shallow(<Post {...propsWithoutLocation} />);
        expect(wrapper.exists('.post__avatar')).toEqual(true);
        expect(wrapper.exists('.post__topInfo')).toEqual(true);
        expect(wrapper.exists('.post__msg')).toEqual(true);
        expect(wrapper.exists('.map_div')).toEqual(false);
    });

    it("Post Component renders properly with Location", () => {
        const wrapper = shallow(<Post {...propsWithLocation} />);
        expect(wrapper.exists('.post__avatar')).toEqual(true);
        expect(wrapper.exists('.post__topInfo')).toEqual(true);
        expect(wrapper.exists('.post__msg')).toEqual(true);
        expect(wrapper.exists('.map_div')).toEqual(true);
    });

});

describe("Colour changes to blue on hitting Like and Comment icons", () => {

    it("Colour change for Like icon", () => {
        const wrapper = shallow(<Post {...propsWithoutLocation} />);
        expect(wrapper.find('.post__option')).toHaveLength(3);
        wrapper.find('.post__option').at(0).simulate('click');
        expect(wrapper.find('.blue')).toHaveLength(1);
    })

    it("Colour change for Like icon", () => {
        const wrapper = shallow(<Post {...propsWithoutLocation} />);
        wrapper.find('.post__option').at(1).simulate('click');
        expect(wrapper.find('.blue')).toHaveLength(1);
    })

    it("Colour change for Like icon", () => {
        const wrapper = shallow(<Post {...propsWithoutLocation} />);
        wrapper.find('.post__option').at(2).simulate('click');
        expect(wrapper.find('.blue')).toHaveLength(1);
    })
})