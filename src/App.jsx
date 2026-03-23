import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Cursor from './components/Cursor.jsx'
import HomePage from './pages/HomePage.jsx'
import CaseStudySalesWorkflow from './pages/CaseStudySalesWorkflow.jsx'
import CaseStudyDTCPatient from './pages/CaseStudyDTCPatient.jsx'
import CaseStudyGenAISales from './pages/CaseStudyGenAISales.jsx'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/sales-workflow-redesign" element={<CaseStudySalesWorkflow />} />
        <Route path="/case-study/dtc-patient-activation" element={<CaseStudyDTCPatient />} />
        <Route path="/case-study/genai-sales-enablement" element={<CaseStudyGenAISales />} />
      </Routes>
    </BrowserRouter>
  )
}
