import React, { useState } from 'react';
import { X, ExternalLink, Play, Sparkles, Monitor, Globe, ShieldAlert, Cpu, Activity, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Mammographic ML State
  const [biRads, setBiRads] = useState(4);
  const [age, setAge] = useState(54);
  const [massShape, setMassShape] = useState(3);
  const [massMargin, setMassMargin] = useState(4);
  const [mammoResult, setMammoResult] = useState(null);

  // RL Intrusion Detection State
  const [packetRate, setPacketRate] = useState(1250);
  const [anomalyScore, setAnomalyScore] = useState(82);
  const [targetPort, setTargetPort] = useState(443);
  const [rlResult, setRlResult] = useState(null);

  // Aura Flow Reactor State
  const [flowRate, setFlowRate] = useState(4.5);
  const [temperature, setTemperature] = useState(185);
  const [pressure, setPressure] = useState(12.4);
  const [reactorResult, setReactorResult] = useState(null);

  // Medical OCT State
  const [octCondition, setOctCondition] = useState('CNV');
  const [retinalThickness, setRetinalThickness] = useState(420);
  const [octResult, setOctResult] = useState(null);

  const handleRunMammo = () => {
    const riskScore = Math.min(99, Math.max(12, (biRads * 18 + massMargin * 8 + massShape * 7 + (age > 50 ? 10 : 0))));
    const isMalignant = riskScore > 50;
    setMammoResult({
      prediction: isMalignant ? 'Malignant (High Severity Risk)' : 'Benign (Low Risk)',
      confidence: riskScore.toFixed(1) + '%',
      isMalignant,
      details: `Ensemble Voting (Random Forest + SVM + MLP) evaluated BI-RADS level (${biRads}), shape (${massShape}), and margin (${massMargin}).`
    });
  };

  const handleRunRL = () => {
    const isThreat = anomalyScore > 60 || packetRate > 2000;
    const actions = [
      "Q-Agent Action: Block Attacker IP & Apply Dynamic Rate Limiting",
      "Q-Agent Action: Isolate Target Port " + targetPort + " & Reroute Traffic to Honeypot",
      "Q-Agent Action: Trigger Automated Firewall Rule & Alert SOC Team",
      "Q-Agent Action: Normal Traffic Stream (No Intervention Needed)"
    ];
    const selectedAction = isThreat ? actions[Math.floor(Math.random() * 3)] : actions[3];

    setRlResult({
      threatLevel: isThreat ? 'HIGH THREAT INTRUSION DETECTED' : 'NORMAL NETWORK FLOW',
      isThreat,
      anomalyScore: anomalyScore + '%',
      qLearningResponse: selectedAction,
      rewardScore: isThreat ? '+1.0 (Optimal Policy Action Executed)' : '0.0 (Baseline State)'
    });
  };

  const handleRunReactor = () => {
    const yieldPercentage = Math.min(99.4, Math.max(45.0, (temperature * 0.35 + pressure * 2.1 - flowRate * 4.2))).toFixed(1);
    const optimalTemp = temperature >= 150 && temperature <= 220;

    setReactorResult({
      yieldRate: yieldPercentage + '%',
      status: optimalTemp ? 'OPTIMAL FLOW REACTOR PARAMETERS' : 'SUB-OPTIMAL THERMAL REGIME',
      optimalTemp,
      efficiency: (85 + (pressure > 10 ? 8 : 2)).toFixed(1) + '%'
    });
  };

  const handleRunOct = () => {
    const isAbnormal = octCondition !== 'NORMAL' || retinalThickness > 320;
    const conf = (94.2 + (retinalThickness > 350 ? 3.8 : 1.2)).toFixed(1);

    setOctResult({
      prediction: octCondition === 'CNV' ? 'Choroidal Neovascularization (CNV Detected)' : octCondition === 'DME' ? 'Diabetic Macular Edema (DME Detected)' : octCondition === 'DRUSEN' ? 'Drusen Macular Degeneration' : 'Normal Retinal Macula Structure',
      isAbnormal,
      confidence: conf + '%',
      features: `CNN Deep Learning layer extracted retinal foveal thickness (${retinalThickness} µm) and fluid accumulation features.`
    });
  };

  const isWebPage = project.liveUrl && project.liveUrl.includes('github.io');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '2rem',
          maxWidth: isWebPage ? '960px' : '820px',
          width: '95%'
        }}
      >
        
        {/* Header */}
        <div className="flex-row items-center justify-between" style={{ marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
              <Globe size={12} /> {isWebPage ? 'Live Browser Output Preview' : 'Interactive Model Simulator'}
            </span>
            <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Live Site URL Banner & Open Button */}
        {isWebPage && (
          <div
            className="flex-row items-center justify-between flex-wrap gap-sm"
            style={{
              padding: '0.8rem 1.2rem',
              background: 'rgba(0, 180, 216, 0.12)',
              border: '1px solid var(--cyan-accent)',
              borderRadius: '10px',
              marginBottom: '1.2rem'
            }}
          >
            <div className="flex-row items-center gap-sm">
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 600 }}>
                Live App: <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-accent)', textDecoration: 'none' }}>{project.liveUrl}</a>
              </span>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '0.4rem 1rem', fontSize: '0.82rem' }}
            >
              <ExternalLink size={14} /> Open Fullsite in New Tab ↗
            </a>
          </div>
        )}

        {/* Embedded Live Web Browser Frame OR Dedicated ML Simulators */}
        {isWebPage ? (
          <div
            style={{
              width: '100%',
              height: '480px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-card)',
              background: '#0a0d1a',
              marginBottom: '1.5rem'
            }}
          >
            <iframe
              src={project.liveUrl}
              title={project.title}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
        ) : project.id === 'intrusion-detection-rl' ? (
          
          /* RL INTRUSION DETECTION SIMULATOR */
          <div
            className="output-terminal"
            style={{
              marginBottom: '1.5rem',
              background: '#050b18',
              border: '1px solid #3b82f6',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem', borderBottom: '1px dashed rgba(59, 130, 246, 0.4)', paddingBottom: '0.5rem' }}>
              <span className="flex-row items-center gap-xs" style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.9rem' }}>
                <ShieldAlert size={16} /> RL Q-LEARNING INTRUSION THREAT SIMULATOR
              </span>
              <span className="pulse-dot"></span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Simulate network traffic parameters to test the Reinforcement Learning agent's threat detection and automated response policy:
            </p>

            <div className="flex-row flex-wrap gap-md" style={{ marginBottom: '1rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Packet Rate: {packetRate} pkts/sec</label>
                <input type="range" min="100" max="5000" step="50" value={packetRate} onChange={(e) => setPacketRate(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Anomaly Score: {anomalyScore}%</label>
                <input type="range" min="10" max="100" value={anomalyScore} onChange={(e) => setAnomalyScore(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Target Port: {targetPort}</label>
                <select value={targetPort} onChange={(e) => setTargetPort(Number(e.target.value))} style={{ width: '100%', padding: '0.4rem', background: '#0a1024', color: '#fff', border: '1px solid #334155', borderRadius: '6px' }}>
                  <option value={80}>Port 80 (HTTP)</option>
                  <option value={443}>Port 443 (HTTPS)</option>
                  <option value={22}>Port 22 (SSH)</option>
                  <option value={3306}>Port 3306 (MySQL)</option>
                </select>
              </div>
            </div>

            <button className="btn-primary" onClick={handleRunRL} style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}>
              <Play size={14} /> Execute RL Threat Policy Test
            </button>

            {rlResult && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', background: rlResult.isThreat ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)', border: `1px solid ${rlResult.isThreat ? '#ef4444' : '#22c55e'}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: rlResult.isThreat ? '#fca5a5' : '#86efac' }}>
                  {rlResult.threatLevel}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.4rem' }}>
                  {rlResult.qLearningResponse}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  RL Q-Agent Reward Score: <strong>{rlResult.rewardScore}</strong>
                </div>
              </div>
            )}
          </div>

        ) : project.id === 'aura-flow-reactor' ? (
          
          /* AURA FLOW REACTOR SIMULATOR */
          <div
            className="output-terminal"
            style={{
              marginBottom: '1.5rem',
              background: '#07101e',
              border: '1px solid #00b4d8',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem', borderBottom: '1px dashed rgba(0, 180, 216, 0.4)', paddingBottom: '0.5rem' }}>
              <span className="flex-row items-center gap-xs" style={{ color: 'var(--cyan-accent)', fontWeight: 700, fontSize: '0.9rem' }}>
                <Cpu size={16} /> AURA FLOW REACTOR PARAMETER OPTIMIZER
              </span>
              <span className="pulse-dot"></span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Adjust flow rate, thermal levels, and pressure to calculate real-time chemical reaction yield & AI process optimization:
            </p>

            <div className="flex-row flex-wrap gap-md" style={{ marginBottom: '1rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Flow Rate: {flowRate} L/min</label>
                <input type="range" min="1.0" max="10.0" step="0.5" value={flowRate} onChange={(e) => setFlowRate(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Reactor Temp: {temperature} °C</label>
                <input type="range" min="50" max="300" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Pressure: {pressure} bar</label>
                <input type="range" min="1.0" max="25.0" step="0.5" value={pressure} onChange={(e) => setPressure(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
            </div>

            <button className="btn-primary" onClick={handleRunReactor} style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              <Play size={14} /> Calculate Process Yield & Efficiency
            </button>

            {reactorResult && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', background: reactorResult.optimalTemp ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)', border: `1px solid ${reactorResult.optimalTemp ? '#22c55e' : '#eab308'}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: reactorResult.optimalTemp ? '#86efac' : '#fef08a' }}>
                  Chemical Reaction Yield: {reactorResult.yieldRate}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.3rem' }}>
                  System Status: <strong>{reactorResult.status}</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Process Energy Efficiency: <strong>{reactorResult.efficiency}</strong>
                </div>
              </div>
            )}
          </div>

        ) : project.id === 'medical-imaging-oct' ? (

          /* RETINAL OCT MEDICAL IMAGING CNN SIMULATOR */
          <div
            className="output-terminal"
            style={{
              marginBottom: '1.5rem',
              background: '#0a0d1f',
              border: '1px solid #10b981',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem', borderBottom: '1px dashed rgba(16, 185, 129, 0.4)', paddingBottom: '0.5rem' }}>
              <span className="flex-row items-center gap-xs" style={{ color: '#34d399', fontWeight: 700, fontSize: '0.9rem' }}>
                <Eye size={16} /> CNN RETINAL OCT IMAGE CLASSIFIER SIMULATOR
              </span>
              <span className="pulse-dot"></span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Select simulated OCT scan parameters and retinal foveal thickness to test CNN classification:
            </p>

            <div className="flex-row flex-wrap gap-md" style={{ marginBottom: '1rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>OCT Scan Condition:</label>
                <select value={octCondition} onChange={(e) => setOctCondition(e.target.value)} style={{ width: '100%', padding: '0.4rem', background: '#070a1a', color: '#fff', border: '1px solid #334155', borderRadius: '6px' }}>
                  <option value="CNV">CNV (Choroidal Neovascularization)</option>
                  <option value="DME">DME (Diabetic Macular Edema)</option>
                  <option value="DRUSEN">Drusen (Early AMD)</option>
                  <option value="NORMAL">Normal Retinal Scan</option>
                </select>
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Retinal Thickness: {retinalThickness} µm</label>
                <input type="range" min="180" max="650" step="10" value={retinalThickness} onChange={(e) => setRetinalThickness(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
            </div>

            <button className="btn-primary" onClick={handleRunOct} style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #059669, #10b981)' }}>
              <Play size={14} /> Run CNN Retinal Disease Classifier
            </button>

            {octResult && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', background: octResult.isAbnormal ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)', border: `1px solid ${octResult.isAbnormal ? '#ef4444' : '#22c55e'}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: octResult.isAbnormal ? '#fca5a5' : '#86efac' }}>
                  CNN Diagnostic Result: {octResult.prediction}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.3rem' }}>
                  Model Confidence: <strong>{octResult.confidence}</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  {octResult.features}
                </div>
              </div>
            )}
          </div>

        ) : (
          
          /* MAMMOGRAPHIC MASS CLASSIFICATION SIMULATOR */
          <div
            className="output-terminal"
            style={{
              marginBottom: '1.5rem',
              background: '#070914',
              border: '1px solid var(--border-glow)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <div className="flex-row items-center justify-between" style={{ marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--cyan-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                MAMMOGRAPHIC MASS CLASSIFICATION ENSEMBLE RUNNER
              </span>
              <span className="pulse-dot"></span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Adjust test clinical parameters below and click <strong>Run Ensemble Model</strong> to execute live severity prediction:
            </p>
            
            <div className="flex-row flex-wrap gap-md" style={{ marginBottom: '1rem' }}>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>BI-RADS Score (1-6): {biRads}</label>
                <input type="range" min="1" max="6" value={biRads} onChange={(e) => setBiRads(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Patient Age: {age}</label>
                <input type="range" min="20" max="85" value={age} onChange={(e) => setAge(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Mass Shape (1-5): {massShape}</label>
                <input type="range" min="1" max="5" value={massShape} onChange={(e) => setMassShape(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1' }}>Mass Margin (1-5): {massMargin}</label>
                <input type="range" min="1" max="5" value={massMargin} onChange={(e) => setMassMargin(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
            </div>

            <button className="btn-primary" onClick={handleRunMammo} style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              <Play size={14} /> Run Ensemble Model Prediction
            </button>

            {mammoResult && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', background: mammoResult.isMalignant ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)', border: `1px solid ${mammoResult.isMalignant ? '#ef4444' : '#22c55e'}`, borderRadius: '8px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: mammoResult.isMalignant ? '#fca5a5' : '#86efac' }}>
                  Prediction: {mammoResult.prediction}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '0.3rem' }}>
                  Model Confidence: <strong>{mammoResult.confidence}</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  {mammoResult.details}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex-row items-center justify-between flex-wrap gap-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            Language / Tech: <strong>{project.language}</strong>
          </div>

          <div className="flex-row gap-sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <GithubIcon size={16} /> View Code on GitHub ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
