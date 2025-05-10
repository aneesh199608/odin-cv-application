const colors = ['#E5F4FF', '#E5E5FF', '#FFE5F0', '#FFF8DC', '#E5FFF5', '#F5F5F5'];

export default function CustomizeForm({ data, onChange, setStep }) {
    return (
        <form className="form">
            <h2>Customize Settings</h2>
            <div className="color-options">
                {colors.map((color) => (
                    <button 
                        key = {color}
                        type = "button"
                        className = "color-circle"
                        style = {{ backgroundColor: color }}
                        onClick = {() => onChange({ ...data, headerColor: color })}
                    />
                ))}
            </div>
            <button className="secondary-button" type="button" onClick={() => setStep('2')}>Previous</button>
        </form>
    );
}