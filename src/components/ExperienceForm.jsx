export default function ExperienceForm( { data, onChange, setStep }) {
    console.log('Rendering Experience Form')
    const handle = (e) => {
        onChange({
            ...data, [e.target.name]: e.target.value
        });
    }

    return (
        <form className="form">
            <h2>Experience Form</h2>

            <label>Job Role *
                <input 
                    name="jobRole"
                    value={data.jobRole}
                    onChange={handle}
                    placeholder="Product Designer"
                    required
                 />
            </label>

            <label>Company *
                <input 
                    name="company"
                    value={data.college}
                    onChange={handle}
                    placeholder="Microsoft"
                    required
                 />
            </label>

            <button className="secondary-button" type="button" onClick={() => setStep('1')}>Previous</button>
            <button className="primary-button" type="button" onClick={() => setStep('3')}>Next</button>
        </form>
    )
}