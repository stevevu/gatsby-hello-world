import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default function Contact() {
  return (
    <div style={{ color: 'purple' }}>
      <Link to="/">Home</Link>
      <Header>Contact Us!</Header>
      <p>This is the Contact Us page</p>
    </div>
  )
}
