import React from 'react'
import CreateEventForm from '../CreateEvent/CreateEventForm/CreateEventForm'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import React16Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new React16Adapter() });
import { shallow, mount } from 'enzyme';
import { fireEvent, render, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Simple test", () => {
    expect(true).toBe(true);
})

const mocksubmitClose = jest.fn();

describe("CreateEventForm Component", () => {

    it("Snapshot test", () => {
        const tree = renderer.create(<CreateEventForm />);
        let snapshot = tree.toJSON();
        expect(snapshot).toMatchSnapshot();
    })

    it("CreateEventForm Renders properly", () => {
        render(<CreateEventForm />);
        expect(screen.getByText("Time to Remember Family Occassions!")).toBeInTheDocument();
        expect(screen.getByText("Add Event")).toBeInTheDocument();
    })

    it("Filling the Form", () => {
        const { container, getByText, getByTestId } = render(<CreateEventForm />);

        expect(getByText("Add Event")).toBeInTheDocument();

        fireEvent.change(getByTestId('eventName-id'), { target: { value: "Birthday" } })
        expect(getByTestId('eventName-id')).toHaveValue("Birthday");

        fireEvent.change(getByTestId('eventDescription-id'), { target: { value: "Buy birthday gift" } })
        expect(getByTestId('eventDescription-id')).toHaveValue("Buy birthday gift");


    })

})

describe("Test to check submit button works properly", () => {
    it("when input fields are empty", () => {

     const { container, getByText } = render(<CreateEventForm />);
     fireEvent.click(getByText('Add Event'));

     expect(screen.getByText("Please enter valid name!")).toBeInTheDocument();

    });
})