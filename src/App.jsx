import { useState } from 'react'
import './style.css'
import GeneralForm from './GeneralForm';
import GeneralPreview from './GeneralPreview';

export default function App() {
  const [general, setGeneral] = useState({
    fullName: '',
    jobTitle: '',
  });

  return (
    <>
      <div className="app">
        <GeneralForm data={general} onChange={setGeneral} />
        <GeneralPreview data={general} />
      </div>
    </>
  );
}
