import React from 'react';
import './BuyerPage.css';
import buyerImg from '../assets/images/buyer.png';
import { useLanguage } from '../contexts/LanguageContext';

function BuyerPage() {
  const { t } = useLanguage();
  
  return (
    <div className="buyer-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="buyer-hero-section" style={{backgroundImage: `url(${buyerImg})`}}>
        <div className="buyer-hero-overlay"></div>
        <div className="buyer-hero-text">
          <div className="buyer-hero-title">
            {t('buyer.hero.subtitle').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER REGISTRATION 섹션 */}
      <section className="buyer-registration-section">
        <div className="buyer-registration-inner">
          <h2 className="buyer-registration-title">{t('buyer.registration.title')}</h2>
          <div className="buyer-registration-content">
            <p className="buyer-registration-text">
              {t('buyer.registration.text').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="buyer-registration-subtext">
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
              <ul className="buyer-method-list">
                {t('buyer.method.list').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
                <ul className="buyer-register-notice-list">
                  {t('buyer.register.notice.list').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="buyer-register-contact">
                <h3 className="buyer-register-contact-title">{t('buyer.register.contact.title')}</h3>
                <div className="buyer-register-contact-info">
                  <p className="buyer-register-email">{t('buyer.register.contact.email')}</p>
                  <p className="buyer-register-phone">{t('buyer.register.contact.phone')}</p>
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
                  <div className="buyer-faq-answer-text">
                    {item.a.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
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