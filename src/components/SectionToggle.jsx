import React from "react";
import './SectionToggle.css';

const SectionToggle = React.memo(function SectionToggle({ step, setStep }) {
    console.log('Rendering SectionToggle');
    const sections = [
        { id: '0', label: 'Basic', text: 'Basic'},
        { id: '1', label: 'Education', text: 'Education'},
        { id: '2', label: 'Experience', text: 'Experience'},
        { id: '3', label: 'Customize', text: 'Customize'},
    ];

    return (
        <div className="section-toggle-container">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`section-toggle-button ${step === section.id ? 'active' : ''}`}
                    onClick={() => setStep(section.id)}
                    aria-label={section.label}
                    type="button"
                    >
                        <span>{section.text}</span>
                    </button>
            ))}
        </div>
    );
});

export default SectionToggle;