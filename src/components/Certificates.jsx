import React, { useState } from 'react';
import { Award, ExternalLink, Eye, X, CheckCircle2, Sparkles, QrCode, FileText } from 'lucide-react';

export const certificatesData = [
  {
    id: "cognibot-ml",
    title: "Machine Learning Professional Training",
    issuer: "Cognibot AI Meets Industry & Sathyabama Institute",
    date: "April 12, 2025",
    conductedDates: "4th Feb, 2025 - 11th Apr, 2025",
    credentialId: "Register No: 42110428",
    category: "Machine Learning",
    signatory: "Ajay Kumar (Director)",
    description: "45 hours professional training program on Machine Learning conducted between Feb 4, 2025 and Apr 11, 2025.",
    badgeColor: "#b91c1c",
    accentColor: "#ef4444"
  },
  {
    id: "alo-mobile-app",
    title: "Mobile App Development Internship",
    issuer: "ALO School of Design & Technology / ALO Info-Tech",
    date: "May 23, 2025",
    conductedDates: "18/05/2025 - 23/05/2025",
    credentialId: "ALO-INT-2025",
    category: "Mobile Engineering",
    signatory: "B. Natarajan (CEO) & Esai Kumar P",
    description: "One-week internship in Mobile App Development at ALO Info-Tech. Gained practical experience in mobile app UI design, functionality, testing, and deployment.",
    badgeColor: "#1d4ed8",
    accentColor: "#3b82f6"
  },
  {
    id: "ibm-r-vis",
    title: "Data Visualization with R (DV0151EN)",
    issuer: "Cognitive Class | IBM Developer Skills Network",
    date: "April 7, 2025",
    credentialId: "DV0151EN",
    category: "Data Science",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/83d6deb8d24d4eb0b3a4b608a2b84902",
    description: "Successfully completed and received a passing grade in Data Visualization with R, powered by IBM Developer Skills Network.",
    badgeColor: "#0284c7",
    accentColor: "#00b4d8"
  },
  {
    id: "imarticus-ml",
    title: "Bootcamp Training on Machine Learning & Medical Imaging (Eye OCT)",
    issuer: "Imarticus Learning & Skill India (NSDC)",
    date: "October 12, 2024",
    conductedDates: "19-July-2024 - 12-Oct-2024",
    credentialId: "0428-10-2024",
    category: "Machine Learning",
    signatory: "Mr. Nikhil Barshikar (Managing Director)",
    description: "40 hours Bootcamp Training on Machine Learning with a Capstone Mini Project in Medical Imaging (Eye OCT).",
    badgeColor: "#047857",
    accentColor: "#10b981"
  },
  {
    id: "oracle-oci",
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "March 26, 2024 (Valid thru March 26, 2026)",
    credentialId: "100570962OCIF2023CA",
    category: "Cloud Architecture",
    signatory: "Damien Carey (Senior Vice President, Oracle University)",
    description: "Recognized by Oracle Corporation as Oracle Certified Foundations Associate in Cloud Infrastructure 2023.",
    badgeColor: "#c2410c",
    accentColor: "#f97316"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" style={{ padding: '5rem 0', background: 'rgba(3, 10, 22, 0.7)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Official Verified Credentials
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
            Verified <span className="gradient-text">Certifications Gallery</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0.8rem auto 0 auto' }}>
            Click any certificate card to open and inspect the full authentic certificate document, registration IDs, and issuer details.
          </p>
        </div>

        {/* Certificates Flexbox Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center'
          }}
        >
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card flex-col justify-between"
              onClick={() => setSelectedCert(cert)}
              style={{
                flex: '1 1 340px',
                maxWidth: '380px',
                minWidth: '290px',
                padding: '1.8rem',
                borderRadius: '18px',
                cursor: 'pointer',
                borderTop: `4px solid ${cert.accentColor}`,
                position: 'relative'
              }}
            >
              <div>
                {/* Visual Ribbon Badge */}
                <div className="flex-row justify-between items-center" style={{ marginBottom: '1rem' }}>
                  <span className="badge" style={{ fontSize: '0.75rem', borderColor: cert.accentColor, color: '#caf0f8' }}>
                    <Award size={12} /> {cert.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>{cert.date}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div style={{ fontSize: '0.85rem', color: cert.accentColor, fontWeight: 700, marginBottom: '0.8rem' }}>
                  {cert.issuer}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {cert.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex-row items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                  ID: <strong>{cert.credentialId}</strong>
                </span>

                <button
                  className="btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                  style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                >
                  <Eye size={14} /> View Certificate 👁️
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN AUTHENTIC CERTIFICATE VIEWER MODAL */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '2rem', maxWidth: '840px', width: '95%' }}
          >
            {/* Modal Header */}
            <div className="flex-row justify-between items-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <div className="flex-row items-center gap-sm">
                <Award size={26} color={selectedCert.accentColor} />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700 }}>{selectedCert.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: selectedCert.accentColor, fontWeight: 600 }}>{selectedCert.issuer}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Rendered Certificate Card Frame */}
            <div
              style={{
                background: '#fff',
                color: '#0f172a',
                padding: '3rem 2rem',
                borderRadius: '16px',
                border: `6px double ${selectedCert.accentColor}`,
                textAlign: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
                position: 'relative'
              }}
            >
              {/* Certificate Ribbon */}
              <div style={{ position: 'absolute', top: '15px', right: '20px', background: selectedCert.accentColor, color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                VERIFIED E-CERTIFICATE
              </div>

              <div style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '0.5rem' }}>
                CERTIFICATE OF TRAINING & RECOGNITION
              </div>

              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.6rem 0', fontWeight: 800 }}>
                HARIES H
              </h2>

              {selectedCert.credentialId && (
                <div style={{ fontSize: '0.9rem', color: '#dc2626', fontWeight: 700, marginBottom: '1rem' }}>
                  {selectedCert.credentialId}
                </div>
              )}

              <p style={{ fontSize: '0.95rem', color: '#334155', maxWidth: '640px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                This is proudly presented to <strong>Haries H</strong> for successfully completing <strong>{selectedCert.title}</strong> conducted by <strong>{selectedCert.issuer}</strong> {selectedCert.conductedDates && `between ${selectedCert.conductedDates}`}.
              </p>

              <div className="flex-row justify-between items-center" style={{ marginTop: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                <div>
                  Date: <strong>{selectedCert.date}</strong>
                </div>
                {selectedCert.signatory && (
                  <div>
                    Signatory: <strong>{selectedCert.signatory}</strong>
                  </div>
                )}
                <div style={{ color: '#059669', fontWeight: 700 }}>
                  <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '4px' }} /> Authentic Credential
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex-row justify-between items-center flex-wrap gap-sm">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                {selectedCert.issuer}
              </span>

              <div className="flex-row gap-sm">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={14} /> Verify Online ↗
                  </a>
                )}
                <a
                  href="./resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <FileText size={14} /> View All Credentials Document ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
