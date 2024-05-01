import '@testing-library/jest-dom'
import {render, waitFor, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import ListPage from '@/app/dashboard/page';
 
describe('NotFoundPage', () => {
  it('renders a heading',async () => {
    render(<ListPage />);
    await waitFor(() => {
      expect(screen.getByText("Application List")).toBeInTheDocument();
    });
  })
})