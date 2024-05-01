import '@testing-library/jest-dom'
import {render, waitFor, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import NotFoundPage from '../not-found';
 
describe('NotFoundPage', () => {
  it('renders a heading',async () => {
    render(<NotFoundPage />);
    await waitFor(() => {
      expect(screen.getByText("Not found – 404!")).toBeInTheDocument();
    });
  })
})