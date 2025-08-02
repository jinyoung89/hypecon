import React from 'react';
import './BuyerPage.css';
import buyerImg from '../assets/images/buyer.png';
import { useLanguage } from '../contexts/LanguageContext';

function BuyerPage() {
  const { t } = useLanguage();
  
  // 화살표 SVG 컴포넌트
  const ArrowDown = () => (
    <div className="arrow-down-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
        <path d="M13 21L0.875647 -2.28386e-06L25.1244 -1.63974e-07L13 21Z" fill="#00E5A8"/>
      </svg>
    </div>
  );
  
  return (
    <div className="buyer-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="buyer-hero-section" style={{backgroundImage: `url(${buyerImg})`}}>
        <div className="buyer-hero-overlay"></div>
        <div className="buyer-hero-text">
          <div className="buyer-hero-main-title" style={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {t('buyer.hero.subtitle')}
          </div>
        </div>
      </section>

      {/* BUYER REGISTRATION 섹션 */}
      <section className="buyer-info-section">
        <div className="buyer-info-inner">
          <h2 className="buyer-info-title">{t('buyer.registration.title')}</h2>
          <div className="buyer-info-content">
            <p className="buyer-info-text" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
              {t('buyer.registration.text')}
            </p>
            <p className="buyer-info-subtext">
              {t('buyer.registration.subtext')}
            </p>
          </div>
        </div>
      </section>

      {/* 등록 대상 섹션 */}
      <section className="buyer-target-section">
        <div className="buyer-target-inner">
          <div className="buyer-target-header">
            <h2 className="buyer-target-title">{t('buyer.target.title')}</h2>
          </div>
          <div className="buyer-target-content">
            <div className="buyer-target-text-container">
              <ul className="buyer-target-list">
                {t('buyer.target.list').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 등록 혜택 섹션 */}
      <section className="buyer-benefit-section">
        <div className="buyer-benefit-inner">
          <div className="buyer-benefit-header">
            <h2 className="buyer-benefit-title">{t('buyer.benefit.title')}</h2>
          </div>
          <div className="buyer-benefit-content">
            <div className="buyer-benefit-text-container">
              <ul className="buyer-benefit-list">
                {t('buyer.benefit.list').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 등록 방법 섹션 */}
      <section className="buyer-method-section">
        <div className="buyer-method-inner">
          <div className="buyer-method-header">
            <h2 className="buyer-method-title">{t('buyer.method.title')}</h2>
          </div>
          <div className="buyer-method-content">
            <div className="buyer-method-text-container">
              <div className="buyer-method-steps">
                {t('buyer.method.list').map((item, index) => (
                  <React.Fragment key={index}>
                    <div 
                      className="buyer-method-step"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                    {index < t('buyer.method.list').length - 1 && <ArrowDown />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER/PRESS 등록 섹션 */}
      <section className="buyer-register-section">
        <div className="buyer-register-inner">
          <div className="buyer-register-header">
            <h2 className="buyer-register-title">{t('buyer.register.title')}</h2>
          </div>
          <div className="buyer-register-content">
            <div className="buyer-register-text-container">
              <p className="buyer-register-note">
                {t('buyer.register.note')}
              </p>
              
              <div className="buyer-register-notice">
                <h3 className="buyer-register-notice-title">{t('buyer.register.notice.title')}</h3>
                <div className="buyer-register-notice-items">
                  {t('buyer.register.notice.list').map((item, index) => (
                    <p key={index} className="buyer-register-notice-item">{item}</p>
                  ))}
                </div>
              </div>
              
              <div className="buyer-register-contact">
                <div className="buyer-register-contact-content">
                  <span className="buyer-register-contact-question">{t('buyer.register.contact.title').replace('💬 ', '')}</span>
                  <span className="buyer-register-contact-divider">|</span>
                  <div className="buyer-register-contact-info">
                    <span className="buyer-register-contact-email">{t('buyer.register.contact.email')}</span>
                    <span className="buyer-register-contact-phone">{t('buyer.register.contact.phone').replace('📞 ', '')}</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="buyer-faq-section">
        <div className="buyer-faq-inner">
          <h2 className="buyer-faq-title">{t('buyer.faq.title')}</h2>
          <div className="buyer-faq-list">
            {t('buyer.faq.items').map((item, index) => (
              <div className="buyer-faq-item" key={index}>
                <div className="buyer-faq-question">
                  <div className="buyer-faq-q-circle">
                    <span className="buyer-faq-q-text">Q</span>
                  </div>
                  <div className="buyer-faq-question-title">{item.q}</div>
                </div>
                <div className="buyer-faq-answer">
                  <div className="buyer-faq-a-circle">
                    <span className="buyer-faq-a-text">A</span>
                  </div>
                  <div className="buyer-faq-answer-text" style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuyerPage; 