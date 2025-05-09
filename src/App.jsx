import { useState } from 'react'
import './style.css';
import './components/EducationForm.css';
import './components/GeneralPreview.css';
import BasicDetailsForm from './components/BasicDetailsForm';
import GeneralPreview from './components/GeneralPreview';
import FormHeader from './components/FormHeader';
import SectionToggle from './components/SectionToggle';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

export default function App() {
  const [resume, setResume] = useState({
    general: { fullName: '', jobTitle: '', email: '', phone: '', location: '', summary: ''},
    education: [{ id: Date.now(), degree: '', college: '', from: '', to: '', score: '', location: ''}],
    experience: [{ id: Date.now() + 1, jobRole: '', company: '', from: '', to: '', location: '', summary: '' }],
    theme: { headerColor: '#ccefff'}
  });

  const [step, setStep] = useState('0');

  return (
    <>
      <div className="app">
        <div className="form-column">
          <FormHeader />
          <SectionToggle step={step} setStep={setStep} />
          {/* <p>Current Section: {step}</p> */}

          {step === '0' && (
            <BasicDetailsForm
              data={resume.general}
              onChange={(general) =>
                setResume({...resume,general})
              }
              setStep = {setStep}
            />
          )}

          {step === '1' && (
            <EducationForm
              data={resume.education}
              onChange={(education) =>
                setResume({...resume,education: education})
              }
              setStep = {setStep}
            />
          )}

          {step === '2' && (
            <ExperienceForm
              data={resume.experience}
              onChange={(experience) =>
                setResume({...resume,experience: experience})
              }
              setStep = {setStep}
            />
          )}
        </div>

        <div className="preview-column">
          <GeneralPreview data={resume} />
        </div>
      </div>
    </>
  );
}
