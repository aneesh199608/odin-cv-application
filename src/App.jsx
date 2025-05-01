import { useState } from 'react'
import './style.css'
import BasicDetailsForm from './components/BasicDetailsForm';
import GeneralPreview from './GeneralPreview';
import FormHeader from './components/FormHeader';

export default function App() {
  const [resume, setResume] = useState({
    general: { fullName: '', jobTitle: '', email: '', phone: '', location: '', summary: ''},
    education: [],
    experience: [],
    theme: { headerColor: '#ccefff'}
  });

  const [step, setStep] = useState('0');

  return (
    <>
      <div className="app">
        <FormHeader />
        {/* <SectionToggle step={step} setStep={setStep} /> */}
        {/* <GeneralPreview resume={resume} /> */}
      </div>
    </>
  );
}
