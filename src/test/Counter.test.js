import { render, screen } from '@testing-library/react';
import React from 'react';
import Counter from '../components/Counter';

describe('Counter tests', () => {
    it('should contains the Counter', () => {
    render(<Counter />);
    });
});