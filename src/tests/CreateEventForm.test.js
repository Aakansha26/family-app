import React from 'react'
import CreateEventForm from '../CreateEvent/CreateEventForm/CreateEventForm'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme';
import React16Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new React16Adapter() });
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("CreateEventForm Component", () => {

    it("Snapshot test", () => {
        const tree = renderer.create(<CreateEventForm />);
        let snapshot = tree.toJSON();
        expect(snapshot).toMatchSnapshot();
    })

    it("CreateEventForm Renders properly", () => {
        render(<CreateEventForm />);
        expect(screen.getByText("Time to Remember Family Occassions!")).toBeInTheDocument();
        expect(screen.getByText("Event Name")).toBeInTheDocument();
        expect(screen.getByText("Event Description")).toBeInTheDocument();
        expect(screen.getByText("Event Date")).toBeInTheDocument();
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

describe("Test to check 'Add Event' button works properly", () => {
    it("when input fields are empty", () => {

     const { container, getByText } = render(<CreateEventForm />);
     fireEvent.click(getByText('Add Event'));

     expect(screen.getByText("Event Name cannot be empty")).toBeInTheDocument();

    });

    it("when input fields are not empty", () => {
        const { container, getByText, getByTestId } = render(<CreateEventForm />);
        fireEvent.change(getByTestId('eventName-id'), { target: { value: "Birthday" } })
        fireEvent.change(getByTestId('eventDescription-id'), { target: { value: "Buy birthday gift" } })
        fireEvent.change(getByTestId('eventDate-id'), { target: { value: '2020-05-24'  } })
        fireEvent.click(getByText('Add Event'));
        expect(screen.getByText("Event Added Successfully!")).toBeInTheDocument();
    })
})