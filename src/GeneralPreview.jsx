export default function GeneralPreview({ data }) {
    return (
        <aside className="preview">
        <h3>{data.general.fullName}</h3>
        <p>{data.general.jobTitle}</p>
        </aside>
    );
}