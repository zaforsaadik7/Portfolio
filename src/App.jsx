import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchFocusSection from './components/ResearchFocusSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import SkillStackSection from './components/SkillStackSection';
import ResearchInterestsSection from './components/ResearchInterestsSection';
import ContactSection from './components/ContactSection';
import HobbiesSection from './components/HobbiesSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminModal from './components/AdminModal';

import {
  subscribeToPortfolio,
  persistPortfolioData,
  subscribeToAuth,
  signOutAdmin,
} from './services/portfolioService';

export default function App() {
  const [data, setData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeModal, setActiveModal] = useState({ isOpen: false, sectionType: null, initialData: null, editIndex: null });

  useEffect(() => {
    const unsubscribeData = subscribeToPortfolio((portfolioData) => {
      setData(portfolioData);
      setIsLoading(false);
    });

    const unsubscribeAuth = subscribeToAuth(setIsAdmin);

    return () => {
      unsubscribeData();
      unsubscribeAuth();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleExportData = () => {
    const jsonString = JSON.stringify(data, null, 2);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(jsonString).then(() => {
        alert("Portfolio data JSON copied to clipboard! Paste it into your assistant chat to update the site permanently for all visitors.");
      }).catch(() => {
        prompt("Copy your updated portfolio JSON below:", jsonString);
      });
    } else {
      prompt("Copy your updated portfolio JSON below:", jsonString);
    }
  };

  const openEditModal = (sectionType, initialData = null, editIndex = null) => {
    setActiveModal({ isOpen: true, sectionType, initialData, editIndex });
  };

  const closeModal = () => {
    setActiveModal({ isOpen: false, sectionType: null, initialData: null, editIndex: null });
  };

  const handleSaveSection = (savedPayload) => {
    const { sectionType, editIndex, initialData } = activeModal;

    setData(prev => {
      const updated = { ...prev };

      switch (sectionType) {
        case 'coverPhoto':
          updated.coverPhoto = savedPayload;
          break;
        case 'profilePhoto':
          updated.profilePhoto = savedPayload;
          break;
        case 'bio':
          updated.bio = { ...prev.bio, ...savedPayload };
          break;
        case 'about':
          updated.about = typeof savedPayload === 'string' ? savedPayload : savedPayload.about;
          break;
        case 'socialMedia':
          if (initialData?.id) {
            updated.socialMedia = prev.socialMedia.map(s => s.id === initialData.id ? { ...s, ...savedPayload } : s);
          } else {
            const newItem = { id: `sm-${Date.now()}`, ...savedPayload };
            updated.socialMedia = [...(prev.socialMedia || []), newItem];
          }
          break;
        case 'experience':
          {
            const experiencePayload = savedPayload.isCurrent
              ? { ...savedPayload, endDate: '' }
              : savedPayload;
            if (initialData?.id) {
              updated.experience = prev.experience.map(e => e.id === initialData.id ? { ...e, ...experiencePayload } : e);
            } else {
              const newItem = { id: `exp-${Date.now()}`, ...experiencePayload };
              updated.experience = [...(prev.experience || []), newItem];
            }
          }
          break;
        case 'researchFocus':
          if (initialData?.id) {
            updated.researchFocus = prev.researchFocus.map(r => r.id === initialData.id ? { ...r, ...savedPayload } : r);
          } else {
            const newItem = { id: `rf-${Date.now()}`, ...savedPayload };
            updated.researchFocus = [...(prev.researchFocus || []), newItem];
          }
          break;
        case 'projects':
          if (initialData?.id) {
            updated.projects = prev.projects.map(p => p.id === initialData.id ? { ...p, ...savedPayload } : p);
          } else {
            const newItem = { id: `proj-${Date.now()}`, ...savedPayload };
            updated.projects = [...(prev.projects || []), newItem];
          }
          break;
        case 'education':
          if (initialData?.id) {
            updated.education = prev.education.map(ed => ed.id === initialData.id ? { ...ed, ...savedPayload } : ed);
          } else {
            const newItem = { id: `edu-${Date.now()}`, ...savedPayload };
            updated.education = [...(prev.education || []), newItem];
          }
          break;
        case 'skills':
          if (editIndex !== null && editIndex >= 0) {
            const newSkills = [...prev.skills];
            newSkills[editIndex] = savedPayload;
            updated.skills = newSkills;
          } else {
            updated.skills = [...(prev.skills || []), savedPayload];
          }
          break;
        case 'researchInterests':
          {
            const interestText = typeof savedPayload === 'string' ? savedPayload : savedPayload.text;
            if (editIndex !== null && editIndex >= 0) {
              const newInterests = [...prev.researchInterests];
              newInterests[editIndex] = interestText;
              updated.researchInterests = newInterests;
            } else {
              updated.researchInterests = [...(prev.researchInterests || []), interestText];
            }
          }
          break;
        case 'contact':
          if (initialData?.id) {
            updated.contact = prev.contact.map(c => c.id === initialData.id ? { ...c, ...savedPayload } : c);
          } else {
            const newItem = { id: `c-${Date.now()}`, ...savedPayload };
            updated.contact = [...(prev.contact || []), newItem];
          }
          break;
        case 'hobbies':
          if (initialData?.id) {
            updated.hobbies = (prev.hobbies || []).map(h => h.id === initialData.id ? { ...h, ...savedPayload } : h);
          } else {
            const newItem = { id: `hob-${Date.now()}`, ...savedPayload };
            updated.hobbies = [...(prev.hobbies || []), newItem];
          }
          break;
        case 'responseTime':
          updated.responseTime = typeof savedPayload === 'string' ? savedPayload : savedPayload.text;
          break;
        default:
          break;
      }

      persistPortfolioData(updated).catch(err => console.error('Failed to persist portfolio data:', err));
      return updated;
    });
  };

  const handleDeleteItem = (sectionType, idOrIndex) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setData(prev => {
      const updated = { ...prev };
      switch (sectionType) {
        case 'socialMedia':
          updated.socialMedia = prev.socialMedia.filter(s => s.id !== idOrIndex);
          break;
        case 'experience':
          updated.experience = prev.experience.filter(e => e.id !== idOrIndex);
          break;
        case 'researchFocus':
          updated.researchFocus = prev.researchFocus.filter(r => r.id !== idOrIndex);
          break;
        case 'projects':
          updated.projects = prev.projects.filter(p => p.id !== idOrIndex);
          break;
        case 'education':
          updated.education = prev.education.filter(ed => ed.id !== idOrIndex);
          break;
        case 'skills':
          updated.skills = prev.skills.filter((_, idx) => idx !== idOrIndex);
          break;
        case 'researchInterests':
          updated.researchInterests = prev.researchInterests.filter((_, idx) => idx !== idOrIndex);
          break;
        case 'contact':
          updated.contact = prev.contact.filter(c => c.id !== idOrIndex);
          break;
        case 'hobbies':
          updated.hobbies = (prev.hobbies || []).filter(h => h.id !== idOrIndex);
          break;
        default:
          break;
      }

      persistPortfolioData(updated).catch(err => console.error('Failed to persist portfolio data:', err));
      return updated;
    });
  };

  if (isLoading || !data) {
    return (
      <div className="loading-screen">
        Loading portfolio...
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        isAdmin={isAdmin}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        downloadCvData={data.downloadCv}
        onEditCv={() => openEditModal('downloadCv', data.downloadCv)}
        onExportData={handleExportData}
      />

      <main className="container" style={{ flex: 1 }}>
        <Hero
          data={data}
          isAdmin={isAdmin}
          onEditSection={(sec) => openEditModal(sec, data[sec])}
          onAddSocial={() => openEditModal('socialMedia')}
          onEditSocial={(soc) => openEditModal('socialMedia', soc)}
          onDeleteSocial={(id) => handleDeleteItem('socialMedia', id)}
        />

        <div className="portfolio-grid">
          <div>
            <AboutSection
              aboutText={data.about}
              isAdmin={isAdmin}
              onEdit={() => openEditModal('about', data.about)}
            />

            <ExperienceSection
              experiences={data.experience}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('experience')}
              onEdit={(exp) => openEditModal('experience', exp)}
              onDelete={(id) => handleDeleteItem('experience', id)}
            />

            <ResearchFocusSection
              researchItems={data.researchFocus}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('researchFocus')}
              onEdit={(rf) => openEditModal('researchFocus', rf)}
              onDelete={(id) => handleDeleteItem('researchFocus', id)}
            />

            <ProjectsSection
              projects={data.projects}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('projects')}
              onEdit={(proj) => openEditModal('projects', proj)}
              onDelete={(id) => handleDeleteItem('projects', id)}
            />
          </div>

          <div>
            <EducationSection
              educationList={data.education}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('education')}
              onEdit={(edu) => openEditModal('education', edu)}
              onDelete={(id) => handleDeleteItem('education', id)}
            />

            <SkillStackSection
              skills={data.skills}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('skills')}
              onEdit={(skillGroup, idx) => openEditModal('skills', skillGroup, idx)}
              onDelete={(idx) => handleDeleteItem('skills', idx)}
            />

            <ResearchInterestsSection
              interests={data.researchInterests}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('researchInterests')}
              onEdit={(topic, idx) => openEditModal('researchInterests', topic, idx)}
              onDelete={(idx) => handleDeleteItem('researchInterests', idx)}
            />

            <HobbiesSection
              hobbies={data.hobbies || []}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('hobbies')}
              onEdit={(hob) => openEditModal('hobbies', hob)}
              onDelete={(id) => handleDeleteItem('hobbies', id)}
            />

            <ContactSection
              contactList={data.contact}
              responseTime={data.responseTime}
              isAdmin={isAdmin}
              onAdd={() => openEditModal('contact')}
              onEdit={(c) => openEditModal('contact', c)}
              onDelete={(id) => handleDeleteItem('contact', id)}
              onEditResponseTime={() => openEditModal('responseTime', data.responseTime)}
            />
          </div>
        </div>
      </main>

      <Footer
        name={data.bio?.fullName || "Zafor Saadik"}
        socialMedia={data.socialMedia}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => setIsAdmin(true)}
      />

      <AdminModal
        isOpen={activeModal.isOpen}
        onClose={closeModal}
        sectionType={activeModal.sectionType}
        initialData={activeModal.initialData}
        onSave={handleSaveSection}
      />
    </div>
  );
}
