import React from "react";

const SectionToggle = React.memo(function SectionToggle({ step, setStep }) {
    console.log('Rendering SectionToggle');
    const sections = [
        { id: '0', label: 'Basic', text: 'Basic'},
        { id: '1', label: 'Education', text: 'Education'},
        { id: '2', label: 'Experience', text: 'Experience'},
        { id: '3', label: 'Customize', text: 'Customize'},
    ];

    return (
        <div className="section-toggle">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={`toggle-button ${step === section.id ? 'active' : ''}`}
                    onClick={() => setStep(section.id)}
                    aria-label={section.label}
                    >
                        <span>{section.text}</span>
                    </button>
            ))}
        </div>
    );
});

export default SectionToggle;