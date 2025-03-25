import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Submit from "./Submit";
import { BrowserRouter } from "react-router-dom";




describe("Submit", () => {
  beforeEach(() => {
    // Arrange
    render(
        <BrowserRouter>
            <Submit />
        </BrowserRouter>
    );
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    waitFor(() => (expect(screen.getAllByText("Submit")).toBeInTheDocument()))
  });

  test("Renders the site dropdown", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("LA Air Force Base")).toBeInTheDocument()))
  });
  
  test("Renders the condition slider", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Green")).toBeInTheDocument()))
  });

  test("Renders the start date box", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Start Date")).toBeInTheDocument()))
  });

});