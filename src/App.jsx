import { useState } from 'react'
import './style.css'

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
