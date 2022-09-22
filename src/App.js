import React from 'react';
import "../src/assets/scss/header.scss"
import './App.scss';

import { Header, SearchForService, About, VideoConsultation, 
  TM, ThreeSteps, MedicineCenter, Services, VerifiedDoctors, 
  AreYouAQualidiedAndExpertDoctor, AskedQuestions, PatientSayingABoutUs,
  News_Blogs, Footer } from './components/index';

function App() {
  return (
    <div className="">
        <Header />
        <SearchForService />
        <About />
        <VideoConsultation />
        <TM />
        <ThreeSteps />
        <MedicineCenter />
        <Services />
        <VerifiedDoctors />
        <AreYouAQualidiedAndExpertDoctor />
        <AskedQuestions />
        <PatientSayingABoutUs />
        <News_Blogs />
        <Footer /> 
    </div>
  );
}

export default App;
