import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Sites from "./Sites";
import { BrowserRouter } from "react-router-dom";




describe("Sites", () => {
  beforeEach(() => {
    // Arrange
    render(
        <BrowserRouter>
            <Sites />
        </BrowserRouter>
    );
  });

  test("Renders the App", () => {
    // Act
    //   No Act steps needed
    // Assert
    waitFor(() => (expect(screen.getAllByText("Site List")).toBeInTheDocument()))
  });

  test("Renders first site", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("LA Air Force Base")).toBeInTheDocument()))
  });
  
  test("Renders second site", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Fort Bragg")).toBeInTheDocument()))
  });

  test("Renders third site", () => {
    // Act
    //   No Act steps needed
    // Assert
    //   Check if the initial count is 0
    waitFor(() => (expect(screen.getByText("Wright-Patterson")).toBeInTheDocument()))
  });

});