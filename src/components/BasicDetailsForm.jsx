export default function BasicDetailsForm( { data, onChange, setStep }) {
    console.log('Rendering Basic Details Form');

    const handle = (e) => {
        onChange({
            ...data, [e.target.name]: e.target.value
        });
    }

    return (
        <form className="form">
            <h2>Basic Details</h2>
            <div className="form-inputs">
            <label>Full Name *
                <input 
                    name="fullName"
                    value={data.fullName}
                    onChange={handle}
                    placeholder="Virat Kohli"
                    required
                 />
            </label>

            <label>Job Title (use industry recommended terminology)
                <input 
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handle}
                    placeholder="Product Designer"
                    required
                 />
            </label>

            <label>Email ID *
                <input 
                    name="email"
                    value={data.email}
                    onChange={handle}
                    placeholder="xyz@abc.com"
                    required
                 />
            </label>

            <label>Phone Number
                <input 
                    name="phone"
                    type="tel"
                    value={data.phone}
                    onChange={handle}
                    placeholder="+91 XXXXXXXXXX"
                 />
            </label>

            <label>City (currently working from)
                <input 
                    name="location"
                    type="text"
                    value={data.location}
                    onChange={handle}
                    placeholder="Chennai, TN"
                 />
            </label>

            <label>Summary
                <textarea 
                    name="summary"
                    value={data.summary}
                    onChange={handle}
                    placeholder="A motivated professional with 5+ years of experience in software development."
                 />
            </label>
            </div>

            <button type="button" onClick={() => setStep('1')}>Next</button>
        </form>
    )
}