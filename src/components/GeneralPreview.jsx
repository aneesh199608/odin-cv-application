export default function GeneralPreview({ data }) {
    console.log('Rendering Preview');
    return (
        <div className="preview-wrapper">
        <div className="preview">
            <div className="preview-header">
                <div className="header-container">
                    <h2 className="header-fullName">{data.general.fullName}</h2>
                    <h4 className="header-jobTitle">{data.general.jobTitle}</h4>
                </div>
                <div className="header-contact">
                    <p className="header-email">{data.general.email}</p>
                    <p className="header-phone">{data.general.phone}</p>
                    <p className="header-location">{data.general.location}</p>
                </div>
            </div>
            <div className="preview-main">
                
                {data.general.summary !== '' && (
                    <div className="preview-section section1">
                        <div className="expedu-title">
                            {/* <svg></svg> */}
                            <h5 className="section-heading">Summary</h5>
                        </div>
                            <p className="summary-description">{data.general.summary}</p>
                        </div>
                )}
                {data.education.length > 0 && (
                    <div className="preview-section section2">
                        <div className="expedu-title">
                            <h5 className="section-heading">Education</h5>
                        </div>
                        <div className="education-entry-container">
                            {data.education.map((edu) => (
                                <div key={edu.id} className="education-entry">
                                    <div className="edu-left">
                                        <p><strong>{edu.degree}</strong>, {edu.college}</p>
                                        <p className="edu-years">{edu.from} - {edu.to}</p>
                                    </div>
                                    <div className="edu-right">
                                        <p>{edu.score}</p>
                                        <p>{edu.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}


            </div>

        
        </div>
        </div>
    );
}