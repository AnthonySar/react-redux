import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewsletterV2 from "./NewsletterV2";

describe('NewsletterV2 Component', () => {

  it("Rendu du formulaire d'upload de fichier", async () => {
    render(<NewsletterV2 />);

    const fileInput = screen.getByTestId('input-upload');
    expect(fileInput).toBeInTheDocument();

    const submitBtn = screen.getByText('Go Console');
    expect(submitBtn).toBeInTheDocument();
  });
  
  it('Submit du formulaire avec fichier valide', async () => {
    render(<NewsletterV2 />);

    const fileInput = screen.getByTestId('input-upload');
    const file = new File(
      ['(⌐□_□)'],
      'test.pdf',
      { type: 'application/pdf'}
    );
    fireEvent.change(fileInput, {target: { files: [file] } });

    const submitBtn = screen.getByText('Go Console');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/form values/i)).toBeInTheDocument();
    })
  });

  it("Message d'erreur pour les fichiers invalidés", async () => {
    render(<NewsletterV2 />);
    
    const fileInput = screen.getByTestId('input-upload');
    const file = new File(
      ['(⌐□_□)'], 
      'test.exe', 
      { type: 'application/octet-stream' }
    );
    fireEvent.change(fileInput, { target: { files: [file] } });

    const submitBtn = screen.getByText('Go Console');
    fireEvent.click(submitBtn);
    const errMsg = await screen.findByText(/file is not of supported type/i);
    expect(errMsg).toBeInTheDocument(); 
  })
})