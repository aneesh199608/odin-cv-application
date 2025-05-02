export default function BasicDetailsForm( { data, onChange }) {

    const handle = (e) => {
        onChange({
            ...data, [e.target.name]: e.target.value
        });
    }

    return (
        <form className="form">
            <h2>Basic Details</h2>
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
                    type="number"
                    value={data.phone}
                    onChange={handle}
                    placeholder="1234567890"
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

            <button type="button">Next</button>
        </form>
    )
}