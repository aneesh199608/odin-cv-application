export default function GeneralPreview({ data }) {
    console.log('Rendering Preview');
    return (
        <aside className="preview">
        <h3>{data.general.fullName}</h3>
        <p>{data.general.jobTitle}</p>
        </aside>
    );
}