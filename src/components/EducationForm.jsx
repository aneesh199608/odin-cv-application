// import './EducationForm.css';

export default function EducationForm( { data, onChange, setStep }) {
    console.log('Rendering Education Form');

    const addEntry = () => {
        onChange([
            ...data,
            {
                id: Date.now(),
                degree: '',
                college: '',
                from: '',
                to: '',
                city: ''
            }
        ]);
    }

    const update = (id, field, value) =>
        onChange(
            data.map((edu) =>
            edu.id === id ? {...edu, [field]: value } : edu
        )
        );

    const remove = (id) => {
        onChange(data.filter((edu) => edu.id !== id ));
    };

    return (
        <form className="form education-form">
            <div className="header-text">
            <h2>Education Details</h2>
            <button type="button" className="form-button add-new" onClick={addEntry}>Add New</button>
            </div>

            {data.map((edu, index) => (
                <div key = {edu.id} className="entry">
                    <div className="entry-header">
                        <h3>Education {index+1}</h3>
                        <button type="button" className="form-button delete" onClick={() => remove(edu.id)}>Delete</button>
                    </div>

                    <label>Degree *
                        <input 
                            name="degree"
                            value={edu.degree}
                            onChange={(e) => update(edu.id, 'degree', e.target.value)}
                            placeholder="B. Tech"
                            required
                        />
                    </label>

                    <label>College *
                        <input 
                            name="college"
                            value={edu.college}
                            onChange={(e) => update(edu.id, 'college', e.target.value)}
                            placeholder="SRM University"
                            required
                        />
                    </label>

                    <div className="year-group">
                    <label>Start Year *
                        <input 
                            name="from"
                            value={edu.from}
                            onChange={(e) => update(edu.id, 'from', e.target.value)}
                            placeholder="2018"
                            required
                        />
                    </label>

                    <label>End Year *
                        <input 
                            name="to"
                            value={edu.to}
                            onChange={(e) => update(edu.id, 'to', e.target.value)}
                            placeholder="2022, Present"
                            required
                        />
                    </label>
                    </div>

                    <label>Score
                        <input 
                            name="score"
                            value={edu.score}
                            onChange={(e) => update(edu.id, 'score', e.target.value)}
                            placeholder="3.5 CGPA, 80%"
                            required
                        />
                    </label>

                    <label>City
                        <input 
                            name="location"
                            value={edu.location}
                            onChange={(e) => update(edu.id, 'location', e.target.value)}
                            placeholder="Chennai"
                            required
                        />
                    </label>
                
                </div>

                ))}

                <div className="button-group">
                <button className="secondary-button" type="button" onClick={() => setStep('0')}>Previous</button>
                <button className="primary-button" type="button" onClick={() => setStep('2')}>Next</button>
                </div>
            </form>
        );
    }