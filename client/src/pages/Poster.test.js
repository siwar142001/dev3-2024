import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mock axios
import Poster from './poster';

jest.mock('axios');

describe('Poster component', () => {
  beforeEach(() => {
    // Mock axios post method
    axios.post.mockResolvedValue({ data: { success: true } });
  });

  it('renders the form correctly', () => {
    const { getByLabelText, getByText } = render(<Poster />);
    
    // Test that form elements are rendered
    expect(getByLabelText(/titre/i)).toBeInTheDocument();
    expect(getByLabelText(/description/i)).toBeInTheDocument();
    expect(getByLabelText(/proprietaire/i)).toBeInTheDocument();
    expect(getByLabelText(/dimension/i)).toBeInTheDocument();
    expect(getByLabelText(/categorie/i)).toBeInTheDocument();
    expect(getByLabelText(/place assise/i)).toBeInTheDocument();
    expect(getByLabelText(/place debout/i)).toBeInTheDocument();
    expect(getByLabelText(/ville/i)).toBeInTheDocument();
    expect(getByLabelText(/prix/i)).toBeInTheDocument();
    expect(getByLabelText(/images url/i)).toBeInTheDocument();
    expect(getByText(/poster/i)).toBeInTheDocument();
  });

  it('submits the form with correct data', async () => {
    const { getByLabelText, getByText } = render(<Poster />);
    
    // Fill out the form
    fireEvent.change(getByLabelText(/titre/i), { target: { value: 'Test Titre' } });
    fireEvent.change(getByLabelText(/description/i), { target: { value: 'Test Description' } });
    // Fill out other form fields...

    // Submit the form
    fireEvent.click(getByText(/poster/i));

    // Wait for axios to finish the post request
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/spaces', {
        titre: 'Test Titre',
        description: 'Test Description',
        // Other form data...
      });
    });
  });

  // Add more test cases as needed...
});
