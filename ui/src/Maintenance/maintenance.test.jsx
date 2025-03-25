import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Maintenance from "./Maintenance";
import { BrowserRouter } from "react-router-dom";




describe("Maintenance", () => {
  beforeEach(() => {
    // Arrange
    render(
        <BrowserRouter>
            <Maintenance />
        </BrowserRouter>
    );
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    waitFor(() => (expect(screen.getAllByText("Maintenance ID")).toBeInTheDocument()))
  });

  test("Renders the filter section", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    expect(screen.getByText("Filter:")).toBeInTheDocument();
  });
  
  test("Renders the first maintenace ticket", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Brook Broke Something")).toBeInTheDocument()))
  });

  test("Renders the Edit button", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Edit")).toBeInTheDocument()))
  });

});