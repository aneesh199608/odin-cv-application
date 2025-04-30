export default GeneralPreview({ data }) {
    return (
        <aside className="preview">
        <h2>{data.fullName}</h2>
        <p>{data.jobTitle}</p>
        </aside>
    );
}