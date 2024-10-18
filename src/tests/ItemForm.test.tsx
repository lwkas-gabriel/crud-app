// src/components/ItemForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ItemForm } from '../components/ItemForm';
import { ItemProvider } from '../contexts/ItemContext';
import '@testing-library/jest-dom';

describe('ItemForm', () => {
  test('renders input fields and submits form', () => {
    render(
      <ItemProvider>
        <ItemForm />
      </ItemProvider>
    );

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descrição')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Teste' } });
    fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição do teste' } });

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(screen.getByPlaceholderText('Nome')).toHaveValue();
    expect(screen.getByPlaceholderText('Descrição')).toHaveValue();
  });
});
