export default function EducationForm( { data, onChange }) {

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
                    name="degree"
                    value={data.degree}
                    onChange={handle}
                    placeholder="B. Tech"
                    required
                 />
            </label>

            <label>College *
                <input 
                    name="college"
                    value={data.college}
                    onChange={handle}
                    placeholder="SRM University"
                    required
                 />
            </label>

            <button className="secondary-button" type="button">Previous</button>
            <button className="primary-button" type="button">Next</button>
        </form>
    )
}