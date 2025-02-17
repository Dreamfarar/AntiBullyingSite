
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Card, CardContent } from './components/Card';
import { Button } from './components/Button';

function Home() {
  return (
    <Card>
      <h1>BuddyShield Anti-Bullying Platform</h1>
      <p>Select your section:</p>
      <Button to="/younger">Younger Students</Button>
      <Button to="/middle">Middle School Students</Button>
    </Card>
  );
}

function YoungerStudents() {
  return <Card><h2>Younger Students Section</h2><p>Interactive design.</p></Card>;
}

function MiddleStudents() {
  return <Card><h2>Middle School Section</h2><p>Modern design.</p></Card>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/younger" element={<YoungerStudents />} />
        <Route path="/middle" element={<MiddleStudents />} />
      </Routes>
    </Router>
  );
}
