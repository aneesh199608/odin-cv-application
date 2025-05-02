import { useState } from 'react'
import './style.css'
import BasicDetailsForm from './components/BasicDetailsForm';
import GeneralPreview from './GeneralPreview';
import FormHeader from './components/FormHeader';
import SectionToggle from './components/SectionToggle';
import EducationForm from './components/EducationForm';

export default function App() {
  const [resume, setResume] = useState({
    general: { fullName: '', jobTitle: '', email: '', phone: '', location: '', summary: ''},
    education: [{ id: Date.now(), degree: '', college: '', from: '', to: '', location: ''}],
    experience: [{ id: Date.now() + 1, jobRole: '', company: '', from: '', to: '', location: '', summary: '' }],
    theme: { headerColor: '#ccefff'}
  });

  const [step, setStep] = useState('0');

  return (
    <>
      <div className="app">
        <FormHeader />
        <SectionToggle step={step} setStep={setStep} />
        <p>Current Section: {step}</p>

        {step === '0' && (
          <BasicDetailsForm
            data={resume.general}
            onChange={(general) =>
              setResume({...resume,general})
            }
          />
        )}

        {step === '1' && (
          <EducationForm
            data={resume.education}
            onChange={(education) =>
              setResume({...resume,education: education})
            }
          />
        )}

        {step === '2' && (
          <ExperienceForm
            data={resume.experience}
            onChange={(experience) =>
              setResume({...resume,experience: experience})
            }
          />
        )}

        <GeneralPreview data={resume} />
      </div>
    </>
  );
}
