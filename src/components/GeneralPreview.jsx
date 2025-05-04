export default function GeneralPreview({ data }) {
    console.log('Rendering Preview');
    return (
        <aside className="preview">
            <div className="preview-header">
                <h2 className="header-fullName">{data.general.fullName}</h2>
                <h4 className="header-jobTitle">{data.general.jobTitle}</h4>
                <div className="header-contact">
                    <p className="header-email">{data.general.email}</p>
                    <p className="header-phone">{data.general.phone}</p>
                    <p className="header-location">{data.general.location}</p>
                </div>
            </div>
            <div className="preview-main">
            {data.general.summary !== '' && (
                <div className="summary">
                    <div className="summary-title">
                        {/* <svg></svg> */}
                        <h5 className="summary-text">Summary</h5>
                    </div>
                        <p className="summary-description">{data.general.summary}</p>
                    </div>
            )}
            </div>

        
        </aside>
    );
}