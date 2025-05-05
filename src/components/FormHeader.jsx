import React from "react";

const FormHeader = React.memo(function FormHeader() {
    console.log('Rendering Header Form');
    return (
        <header className="form-header">
            <div className="form-header-text">
                <h1>Create Your Resume!</h1>
                <p>Let’s get started. Fill in the details below to create your resume.</p>
                {/* <button className="theme-toggle" aria-label="Toggle Theme">Toggle Theme</button> */}
            </div>
        </header>
    );
});

export default FormHeader;