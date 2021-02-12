import React from 'react'
import Notifications from '../Notifications/Notifications'
import renderer from 'react-test-renderer'
import { fireEvent, render, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Simple test", () => {
    expect(true).toBe(true);
})
describe("Notifications Component", () => {

    it("Snapshot test", () => {
        const tree = renderer.create(<Notifications />);
        let snapshot = tree.toJSON();
        expect(snapshot).toMatchSnapshot();
    })

    it("Renders properly", () => {
        render(<Notifications />);
        expect(screen.getByText("TODAY'S EVENTS")).toBeInTheDocument();
    })

})