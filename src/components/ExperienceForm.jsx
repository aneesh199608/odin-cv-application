export default function ExperienceForm( { data, onChange, setStep }) {
    console.log('Rendering Experience Form')
    
    const addEntry = () => {
        onChange([
            ...data,
            {
                id: Date.now() + 1,
                jobRole: '',
                company: '',
                from: '',
                to: '',
                location: ''
            }
        ]);
    }

    const update = (id, field, value) =>
        onChange(
            data.map((exp) =>
            exp.id === id ? {...exp, [field]: value } : exp
        )
        );

    const remove = (id) => {
        onChange(data.filter((exp) => exp.id !== id ));
    };

    return (
        <form className="form education-form">
            <div className="header-text">
            <h2>Experience Details</h2>
            <button type="button" className="form-button add-new" onClick={addEntry}>Add New</button>
            </div>

            {data.map((exp, index) => (
                <div key = {exp.id} className="entry">
                    <div className="entry-header">
                        <h3>Work Experience {index+1}</h3>
                        <button type="button" className="form-button delete" onClick={() => remove(exp.id)}>Delete</button>
                    </div>

                    <label>Job Role *
                        <input 
                            name="jobRole"
                            value={exp.jobRole}
                            onChange={(e) => update(exp.id, 'jobRole', e.target.value)}
                            placeholder="Software Engineer"
                            required
                        />
                    </label>

                    <label>Company *
                        <input 
                            name="company"
                            value={exp.company}
                            onChange={(e) => update(exp.id, 'company', e.target.value)}
                            placeholder="Zoho"
                            required
                        />
                    </label>

                    <div className="year-group">
                    <label>Start Year *
                        <input 
                            name="from"
                            value={exp.from}
                            onChange={(e) => update(exp.id, 'from', e.target.value)}
                            placeholder="2018"
                            required
                        />
                    </label>

                    <label>End Year *
                        <input 
                            name="to"
                            value={exp.to}
                            onChange={(e) => update(exp.id, 'to', e.target.value)}
                            placeholder="2022, Present"
                            required
                        />
                    </label>
                    </div>

                    <label>City
                        <input 
                            name="location"
                            value={exp.location}
                            onChange={(e) => update(exp.id, 'location', e.target.value)}
                            placeholder="Chennai"
                            required
                        />
                    </label>

                    <label>Work Summary (use pointers and action words)
                        <textarea 
                            name="summary"
                            value={exp.summary}
                            onChange={(e) => update(exp.id, 'summary', e.target.value)}
                            placeholder="Led UX research and prototyping for interactive-based learning, validating insights through user testing and analytics. User interviews were conducted with over 20 students and 5 teachers."
                            required
                        />
                    </label>
                
                </div>

                ))}

            <div className="button-group">
                <button className="secondary-button" type="button" onClick={() => setStep('1')}>Previous</button>
                <button className="primary-button" type="button" onClick={() => setStep('3')}>Next</button>
            </div>
        </form>
    )
}