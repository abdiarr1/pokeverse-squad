import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest"

import Navbar from "../../components/Navbar";

import App from "../../App";

import { SquadContextProvider } from "../../context/SquadContext";

const mockInitialCallImplementation = () => Promise.resolve({ 
    json() { 
        return {results: [{name: "bulbasor", url: "api.example.com"}, {name: "pikachu", url: "api.example.com"}]}
    } 
})

const mockSecondaryCallsImplementation = () => Promise.resolve({ 
    json() { 
        return {sprites: {front_default: "http"}, moves: [{move: {name: "hi"}}, {move: {name: "hi"}}], stats: [{base_stat: 24}]}
    } 
})

describe("Navbar", () => {
    it("renders nav heading", () => {
        render(<SquadContextProvider><Navbar /></SquadContextProvider>);

        const heading = screen.getByText("Pokeverse");

        expect(heading).toBeInTheDocument();
    });

    it("renders battle button when items in squad is 2 or greater", async () => {
        const fetchSpy = vi.spyOn(global, 'fetch');

        fetchSpy.mockImplementationOnce(mockInitialCallImplementation);

        fetchSpy.mockImplementation(mockSecondaryCallsImplementation);

        render(<App />);

        await (waitFor(() => {},{timeout:3000}));

        const addButtons = screen.getAllByText("Add");

        expect(screen.queryByText("Battle")).not.toBeInTheDocument();

        addButtons.forEach((addButton) => {
            fireEvent.click(addButton);
        });

        const battleButton = screen.getByText("Battle");

        expect(battleButton).toBeInTheDocument();
    });
});