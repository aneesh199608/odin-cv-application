export default function EducationForm( { data, onChange }) {
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
            <h2>Education Details</h2>

            {data.map((edu) => (
            <div key = {edu.id} className="entry">

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
                <button type="button" onClick={() => addEntry(edu.id)}>Add</button>
                <button type="button" onClick={() => remove(edu.id)}>Delete
                </button>
            </div>

))}

            <button className="secondary-button" type="button">Previous</button>
            <button className="primary-button" type="button">Next</button>
        </form>
    );
}