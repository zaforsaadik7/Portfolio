import React, { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { uploadPortfolioFile } from '../services/portfolioService';
import { formatUrl } from '../utils/urlHelper';

const STRING_SECTIONS = new Set(['about', 'researchInterests', 'responseTime', 'coverPhoto', 'profilePhoto']);

export default function AdminModal({ isOpen, onClose, sectionType, initialData, onSave }) {
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const wasOpenRef = useRef(false);
  const mouseDownTargetRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      wasOpenRef.current = false;
      return;
    }

    if (!wasOpenRef.current) {
      wasOpenRef.current = true;
      let dataToSet;
      if (STRING_SECTIONS.has(sectionType) && typeof initialData === 'string') {
        dataToSet = initialData;
        setPreviewImage(sectionType === 'coverPhoto' || sectionType === 'profilePhoto' ? initialData : null);
      } else if (initialData && typeof initialData === 'object') {
        const cloned = { ...initialData };
        if (Array.isArray(cloned.keywords)) cloned.keywords = cloned.keywords.join(', ');
        if (Array.isArray(cloned.techStack)) cloned.techStack = cloned.techStack.join(', ');
        if (Array.isArray(cloned.items)) cloned.items = cloned.items.join(', ');
        dataToSet = cloned;
        setPreviewImage(initialData.image || initialData.fileUrl || null);
      } else {
        dataToSet = {};
        setPreviewImage(null);
      }
      setFormData(dataToSet);
    }
  }, [isOpen, sectionType, initialData]);

  if (!isOpen) return null;

  const handleOverlayMouseDown = (e) => {
    mouseDownTargetRef.current = e.target;
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && mouseDownTargetRef.current === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const storagePath = `portfolio/${sectionType}/${Date.now()}-${file.name}`;
      const fileUrl = await uploadPortfolioFile(file, storagePath);
      setPreviewImage(fileUrl);

      if (sectionType === 'coverPhoto' || sectionType === 'profilePhoto') {
        setFormData(fileUrl);
      } else if (sectionType === 'downloadCv') {
        setFormData(prev => ({
          ...prev,
          fileUrl,
          fileName: file.name,
        }));
      } else if (sectionType === 'projects') {
        setFormData(prev => ({ ...prev, iconImage: fileUrl }));
      } else {
        setFormData(prev => ({ ...prev, image: fileUrl }));
      }
    } catch (err) {
      console.error('File upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const processArrayField = (val) => {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      return val.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload;
    if (sectionType === 'coverPhoto' || sectionType === 'profilePhoto') {
      payload = previewImage || formData;
    } else if (sectionType === 'about' || sectionType === 'responseTime') {
      payload = typeof formData === 'string' ? formData : formData;
    } else if (sectionType === 'researchInterests') {
      payload = typeof formData === 'string' ? formData : (formData.text || '');
    } else {
      payload = formData;
    }

    if (payload && typeof payload === 'object') {
      if (payload.url) payload.url = formatUrl(payload.url);
      if (payload.link) payload.link = formatUrl(payload.link);
      if (payload.demoLink) payload.demoLink = formatUrl(payload.demoLink);

      if ('keywords' in payload) payload.keywords = processArrayField(payload.keywords);
      if ('techStack' in payload) payload.techStack = processArrayField(payload.techStack);
      if ('items' in payload && sectionType === 'skills') payload.items = processArrayField(payload.items);
    }

    onSave(payload);
    onClose();
  };

  const renderFormFields = () => {
    switch (sectionType) {
      case 'coverPhoto':
      case 'profilePhoto':
        return (
          <div>
            <div className="form-group">
              <label className="form-label">Upload New Image</label>
              <input type="file" accept="image/*" onChange={handleFileUpload} className="form-input" disabled={isUploading} />
              {isUploading && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Uploading...</p>}
            </div>
            {previewImage && (
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <p className="form-label">Preview</p>
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    maxHeight: '180px',
                    borderRadius: sectionType === 'profilePhoto' ? '50%' : '8px',
                    border: '1px solid var(--border-color)',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
          </div>
        );

      case 'bio':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" value={formData.fullName || ''} onChange={e => handleInputChange('fullName', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Primary Title / Designation</label>
              <input type="text" className="form-input" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Location Badge</label>
              <input type="text" className="form-input" value={formData.location || ''} onChange={e => handleInputChange('location', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Badge</label>
              <input type="text" className="form-input" value={formData.phone || ''} onChange={e => handleInputChange('phone', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Availability Status Pill</label>
              <input type="text" className="form-input" value={formData.statusBadge || ''} onChange={e => handleInputChange('statusBadge', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Short Bio Headline</label>
              <textarea className="form-textarea" rows={3} value={formData.shortBio || ''} onChange={e => handleInputChange('shortBio', e.target.value)} />
            </div>
          </>
        );

      case 'about':
        return (
          <div className="form-group">
            <label className="form-label">About Paragraph</label>
            <textarea
              className="form-textarea"
              rows={6}
              value={typeof formData === 'string' ? formData : (formData.about || '')}
              onChange={e => setFormData(e.target.value)}
              required
            />
          </div>
        );

      case 'socialMedia':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Platform Name</label>
              <input type="text" className="form-input" placeholder="LinkedIn, GitHub, Scholar..." value={formData.platform || ''} onChange={e => handleInputChange('platform', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Display Label</label>
              <input type="text" className="form-input" placeholder="LinkedIn" value={formData.label || ''} onChange={e => handleInputChange('label', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Profile URL</label>
              <input type="text" className="form-input" placeholder="https://... or www.linkedin.com/..." value={formData.url || ''} onChange={e => handleInputChange('url', e.target.value)} required />
            </div>
          </>
        );

      case 'experience':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Position / Job Title</label>
              <input type="text" className="form-input" placeholder="CTO & Co-Founder" value={formData.position || ''} onChange={e => handleInputChange('position', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Company / Institute Name</label>
              <input type="text" className="form-input" placeholder="ARI Software Lab" value={formData.company || ''} onChange={e => handleInputChange('company', e.target.value)} required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input type="text" className="form-input" placeholder="2022" value={formData.startDate || ''} onChange={e => handleInputChange('startDate', e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input type="text" className="form-input" placeholder="2024" value={formData.isCurrent ? '' : (formData.endDate || '')} onChange={e => handleInputChange('endDate', e.target.value)} disabled={formData.isCurrent} />
              </div>
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" id="isCurrent" checked={!!formData.isCurrent} onChange={e => handleInputChange('isCurrent', e.target.checked)} />
              <label htmlFor="isCurrent" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>Currently Working Here</label>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" rows={4} value={formData.description || ''} onChange={e => handleInputChange('description', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Related Link (Optional)</label>
              <input type="text" className="form-input" placeholder="https://..." value={formData.link || ''} onChange={e => handleInputChange('link', e.target.value)} />
            </div>
          </>
        );

      case 'researchFocus':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Research Title</label>
              <input type="text" className="form-input" placeholder="TERRA: Temporal-Evolution RAG" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Publication Status</label>
              <select className="form-select" value={formData.status || 'Published'} onChange={e => handleInputChange('status', e.target.value)}>
                <option value="Published">Published</option>
                <option value="Preprint">Preprint</option>
                <option value="Under Review">Under Review</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Journal / Conference Venue</label>
                <input type="text" className="form-input" placeholder="IEEE / ArXiv" value={formData.venue || ''} onChange={e => handleInputChange('venue', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Year</label>
                <input type="text" className="form-input" placeholder="2024" value={formData.year || ''} onChange={e => handleInputChange('year', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" rows={4} value={formData.description || ''} onChange={e => handleInputChange('description', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Related Paper / Project Link</label>
              <input type="text" className="form-input" placeholder="https://arxiv.org/..." value={formData.link || ''} onChange={e => handleInputChange('link', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Keywords / Tags (Comma separated)</label>
              <input
                type="text"
                className="form-input"
                placeholder="NLP, RAG, Temporal Reasoning"
                value={formData.keywords || ''}
                onChange={e => handleInputChange('keywords', e.target.value)}
              />
            </div>
          </>
        );

      case 'projects':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Project Title</label>
              <input type="text" className="form-input" placeholder="ObsidianIDE" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Icon Type</label>
              <select className="form-select" value={formData.icon || 'code'} onChange={e => handleInputChange('icon', e.target.value)}>
                <option value="code">Code</option>
                <option value="droplet">Droplet</option>
                <option value="eye">Eye</option>
                <option value="globe">Globe</option>
                <option value="message-square">Message</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" rows={3} value={formData.description || ''} onChange={e => handleInputChange('description', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Primary Link (GitHub / Repo)</label>
              <input type="text" className="form-input" placeholder="https://github.com/..." value={formData.link || ''} onChange={e => handleInputChange('link', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Live Demo Link (Optional)</label>
              <input type="text" className="form-input" placeholder="https://demo.example.com" value={formData.demoLink || ''} onChange={e => handleInputChange('demoLink', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Tech Stack Tags (Comma separated)</label>
              <input
                type="text"
                className="form-input"
                placeholder="React, Tauri, Monaco"
                value={formData.techStack || ''}
                onChange={e => handleInputChange('techStack', e.target.value)}
              />
            </div>
          </>
        );

      case 'education':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Degree Name</label>
              <input type="text" className="form-input" placeholder="B.Sc. in Computer Science & Engineering" value={formData.degree || ''} onChange={e => handleInputChange('degree', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Institute Name</label>
              <input type="text" className="form-input" placeholder="BUBT" value={formData.institute || ''} onChange={e => handleInputChange('institute', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Result / CGPA</label>
              <input type="text" className="form-input" placeholder="CGPA: 3.85" value={formData.result || ''} onChange={e => handleInputChange('result', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Key Highlights / Honors</label>
              <input type="text" className="form-input" placeholder="Dean's Honor List, AI focus" value={formData.highlights || ''} onChange={e => handleInputChange('highlights', e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input type="text" className="form-input" placeholder="2021" value={formData.startDate || ''} onChange={e => handleInputChange('startDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input type="text" className="form-input" placeholder="2025" value={formData.endDate || ''} onChange={e => handleInputChange('endDate', e.target.value)} />
              </div>
            </div>
          </>
        );

      case 'skills':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Skill Category Title</label>
              <input type="text" className="form-input" placeholder="Machine Learning & AI" value={formData.category || ''} onChange={e => handleInputChange('category', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Skills / Keywords (Comma separated)</label>
              <input
                type="text"
                className="form-input"
                placeholder="PyTorch, TensorFlow, Keras, Scikit-Learn"
                value={formData.items || ''}
                onChange={e => handleInputChange('items', e.target.value)}
                required
              />
            </div>
          </>
        );

      case 'researchInterests':
        return (
          <div className="form-group">
            <label className="form-label">Research Interest Tag</label>
            <input
              type="text"
              className="form-input"
              placeholder="Natural Language Processing (NLP)"
              value={typeof formData === 'string' ? formData : (formData.text || '')}
              onChange={e => setFormData(e.target.value)}
              required
            />
          </div>
        );

      case 'contact':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Contact Type</label>
              <select className="form-select" value={formData.type || 'email'} onChange={e => handleInputChange('type', e.target.value)}>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="location">Location</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Display Label</label>
              <input type="text" className="form-input" placeholder="Email" value={formData.label || ''} onChange={e => handleInputChange('label', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Value</label>
              <input type="text" className="form-input" placeholder="sayhitosaadik@gmail.com" value={formData.value || ''} onChange={e => handleInputChange('value', e.target.value)} required />
            </div>
          </>
        );

      case 'hobbies':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Hobby Name / Title</label>
              <input
                type="text"
                className="form-input"
                placeholder="Photography, Open Source, Chess..."
                value={formData.name || ''}
                onChange={e => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                rows={3}
                placeholder="Brief description about this hobby or activity..."
                value={formData.description || ''}
                onChange={e => handleInputChange('description', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Related Link (Optional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="https://..."
                value={formData.link || ''}
                onChange={e => handleInputChange('link', e.target.value)}
              />
            </div>
          </>
        );

      case 'responseTime':
        return (
          <div className="form-group">
            <label className="form-label">Expected Response Time Note</label>
            <input
              type="text"
              className="form-input"
              placeholder="Response time: ~24 hours"
              value={typeof formData === 'string' ? formData : (formData.text || '')}
              onChange={e => setFormData(e.target.value)}
              required
            />
          </div>
        );

      case 'downloadCv':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Upload CV Document (PDF)</label>
              <input type="file" accept=".pdf,application/pdf" onChange={handleFileUpload} className="form-input" disabled={isUploading} />
              {isUploading && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>Uploading...</p>}
            </div>
            <div className="form-group">
              <label className="form-label">File URL or Path</label>
              <input type="text" className="form-input" value={formData.fileUrl || ''} onChange={e => handleInputChange('fileUrl', e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Download File Name</label>
              <input type="text" className="form-input" value={formData.fileName || 'Zafor_Saadik_CV.pdf'} onChange={e => handleInputChange('fileName', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Button Label Text</label>
              <input type="text" className="form-input" value={formData.buttonText || 'Download CV'} onChange={e => handleInputChange('buttonText', e.target.value)} required />
            </div>
          </>
        );

      default:
        return (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            This section does not have an edit form configured yet.
          </p>
        );
    }
  };

  const getModalTitle = () => {
    if (sectionType === 'coverPhoto') return 'Edit Cover Photo';
    if (sectionType === 'profilePhoto') return 'Edit Profile Photo';
    if (sectionType === 'bio') return 'Edit Bio Info';
    if (sectionType === 'about') return 'Edit About Section';
    if (sectionType === 'downloadCv') return 'Edit Download CV';
    if (sectionType === 'responseTime') return 'Edit Response Time';
    return initialData ? 'Edit Section Item' : 'Add New Item';
  };

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayMouseDown} onClick={handleOverlayClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{getModalTitle()}</h3>
          <button className="admin-edit-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {renderFormFields()}

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={isUploading}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isUploading}>
              <Check size={16} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
