import React from 'react';
import { render } from '@testing-library/react';
import Home from '../home.jsx';
import ProjectDisplay from '../src/components/project display/project display.jsx';
import SocialIcons from '../src/components/icon groups/Social Icons.jsx';

test('Home component loads correctly', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('home-hero-section')).toBeInTheDocument();
  expect(getByTestId('introduction')).toBeInTheDocument();
  expect(getByTestId('Skills')).toBeInTheDocument();
  expect(getByTestId('contact-section')).toBeInTheDocument();
});

test('ProjectDisplay component loads correctly', () => {
  const { getByTestId } = render(<ProjectDisplay data-testid="project-display" />);
  expect(getByTestId('project-display')).toBeInTheDocument();
});

test('SocialIcons component loads correctly', () => {
  const { getByTestId } = render(<SocialIcons data-testid="social-icons" />);
  expect(getByTestId('social-icons')).toBeInTheDocument();
});

