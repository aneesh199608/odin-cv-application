export default function BasicDetailsForm( { data, onChange }) {

    const handle = (e) => {
        onChange({
            ...data, [e.target.name]: e.target.value
        });
    }

    return (
        <form className="form">
            <h1>Create your resume</h1>
            <p className="subtitle">
                Let's get started. Fill in the details below to create your resume.
            </p>

            <label>Full Name *
                <input 
                    name="fullName"
                    value={data.fullName}
                    onChange={handle}
                    placeholder="Name"
                    required
                 />
            </label>

            <label>Job Title (optional)
                <input 
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handle}
                    placeholder="Title"
                    required
                 />
            </label>

            <button type="button">Next</button>
        </form>
    )
}