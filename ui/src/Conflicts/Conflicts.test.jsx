import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Conflicts from "./Conflicts";
import { BrowserRouter } from "react-router-dom";




describe("Conflicts", () => {
  beforeEach(() => {
    // Arrange
    render(
        <BrowserRouter>
            <Conflicts />
        </BrowserRouter>
    );
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    expect(screen.getByText("March 2025")).toBeInTheDocument();
  });

  test("Renders the today button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    
    expect(screen.getByText('today')).toBeInTheDocument;
  });

  test("Renders an event in the calendar", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    
    waitFor(() => (expect(screen.getAllByText("Wright-Patterson")).toBeInTheDocument()))
  });
  
});