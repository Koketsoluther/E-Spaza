import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';
import { assets } from '../Assets/assets';

describe('Footer', () => {
  test('renders the footer component', () => {
    render(<Footer/>);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the footer content', () => {
    render(<Footer />);
    expect(screen.getByText("E-spaza")).toBeInTheDocument();
    expect(screen.getByText(/We are e-spaza/i)).toBeInTheDocument();
    expect(screen.getByText(/COMPANY/i)).toBeInTheDocument();
    expect(screen.getByText(/GET IN TOUCH/i)).toBeInTheDocument();
    expect(screen.getByText(/0874643637/i)).toBeInTheDocument();
    expect(screen.getByText(/espaza@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright 2024 © Espaza.com - All Right Reserved/i)).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    render(<Footer />);
    const facebookIcon = screen.getByAltText('');
    expect(facebookIcon).toBeInTheDocument();
    expect(facebookIcon.src).toContain(assets.facebook_icon);
  });

  test('renders company links', () => {
    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Delivery')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });
});