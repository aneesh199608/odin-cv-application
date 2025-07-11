import { useEffect, useState, useRef } from 'react';
import { sampleData } from './sampleData';

import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import { vfs } from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = vfs;

export default function GeneralPreview({ data, setResume }) {
    console.log('Rendering Preview');

    const [scale, setScale] = useState(1);
    const toolbarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const toolbarHeight = toolbarRef.current?.offsetHeight || 0;
            const gap = 16;
            const padding = 32;
            const resumeHeight = 1123;
            
            const availableHeight = window.innerHeight - toolbarHeight - gap - padding;
            const scaleFactor = Math.min(availableHeight / resumeHeight, 1);
            setScale(Math.max(0.1, scaleFactor));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDownload = () => {
        const element = document.querySelector('.preview');
      
        // Clone the resume element without transforming or styling it
        const cloned = element.cloneNode(true);
        cloned.style.transform = 'none';
        cloned.style.width = '794px';
        cloned.style.height = '1123px';
        cloned.style.border = 'none';
      
        // Append to a hidden container for html-to-pdfmake processing
        const hiddenContainer = document.createElement('div');
        hiddenContainer.style.position = 'absolute';
        hiddenContainer.style.left = '-9999px';
        hiddenContainer.appendChild(cloned);
        document.body.appendChild(hiddenContainer);
      
        // Convert to PDFMake structure
        const html = cloned.outerHTML;
        const pdfContent = htmlToPdfmake(html); // no style copying
      
        // Create and download PDF
        const docDefinition = {
          content: pdfContent,
          pageSize: 'A4',
          pageMargins: [40, 40, 40, 40],
          defaultStyle: {
            font: 'Roboto'
          }
        };
      
        pdfMake.createPdf(docDefinition).download('resume.pdf');
      
        document.body.removeChild(hiddenContainer);
      };           
                     
      
    const handleLoadSample = () => {
        sessionStorage.setItem('resume-data', JSON.stringify(sampleData));
        setResume(sampleData);
      };

      const handleClear = () => {
        sessionStorage.removeItem('resume-data');
        setResume({
          general: { fullName: '', jobTitle: '', email: '', phone: '', location: '', summary: '' },
          education: [],
          experience: [],
          theme: { headerColor: '#ccefff' }
        });
      };

    return (
        <div className="preview-wrapper">
            <div className="preview-toolbar" ref={toolbarRef}>
                <button onClick={handleDownload}>Download PDF</button>
                <button onClick={handleLoadSample}>Load Sample</button>
                <button onClick={handleClear}>Clear All</button>
            </div>

            <div
                className="preview-scale-container"
                >
                <div className="preview"
                style={{ transform: `scale(${scale})`,  transformOrigin: 'top center', height: '1123px', }}
                >
                    <div className="preview-header"
                        style={{ backgroundColor: data.theme?.headerColor || '#E5F4FF'}}
                    >
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
                                                <p>{edu.score}</p>
                                                
                                            </div>
                                            <div className="edu-right">
                                                <p className="edu-years">{edu.from} - {edu.to}</p>
                                                
                                                <p>{edu.location}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            )}

                            {data.experience.length > 0 && (
                            <div className="preview-section section3">
                                <div className="expedu-title">
                                    <h5 className="section-heading">Experience</h5>
                                </div>
                                <div className="experience-entry-container">
                                    {data.experience.map((exp) => (
                                        <div key={exp.id} className="experience-entry">
                                                <div className="exp-top">
                                                    <p><strong>{exp.jobRole}</strong>, {exp.company}</p>
                                                    <p className="exp-years">{exp.from} - {exp.to}</p>
                                                </div>
                                                <p className="summary-description">{exp.summary}</p>
                                                
                                        </div>
                                    ))}
                                </div>
                            </div>
                            )}


                    </div>

                
                </div>
            </div>
        </div>
    );
}