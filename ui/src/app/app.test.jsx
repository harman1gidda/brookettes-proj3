import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";




describe("App", () => {
  beforeEach(() => {
    // Arrange
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    expect(screen.getByText("TrackQ")).toBeInTheDocument();
  });

  test("Renders the submit button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("Submit New Request")).toBeInTheDocument();
  });

  test("Renders the sites button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("Sites")).toBeInTheDocument();
  });

  test("Renders the conflict button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("Conflicts")).toBeInTheDocument();
  });

  test("Renders the maintenance button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("Maintenance")).toBeInTheDocument();
  });

  

});