import { render, screen } from '@testing-library/react';

import Error from "../../components/Error";

describe("Error", () => {
    it("Should contain error message", () => {
        render(<Error />);

        const heading = screen.getByText("Error");

        const message = screen.getByText("Sorry, there was an error...");

        expect(heading).toBeInTheDocument();
        expect(message).toBeInTheDocument();
    });
});