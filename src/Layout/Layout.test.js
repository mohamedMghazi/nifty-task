import { render } from '@testing-library/react';
import Layout from "./index";

global.Request = jest.fn(() => ({}));

test("renders Layout component without crashing", () => {
    render(<Layout />);
});
