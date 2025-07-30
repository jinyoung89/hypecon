import React from 'react';
import './ContactPage.css';
import phoneImg from '../assets/images/phone.png';
import instaImg from '../assets/images/insta.png';
import alarmImg from '../assets/images/alarm.png';
import { useLanguage } from '../contexts/LanguageContext';

function ContactPage() {
  const { t } = useLanguage();

  // 아이콘 이미지 매핑
  const iconImages = {
    phone: phoneImg,
    instagram: instaImg,
    alarm: alarmImg
  };

  return (
    <div className="contact-page-root">
      {/* CONTACT US 섹션 */}
      <section className="contact-hero-section">
        <div className="contact-hero-inner">
          <h1 className="contact-hero-title">{t('contact.hero.title')}</h1>
          <div className="contact-hero-subtitle">
            {t('contact.hero.subtitle').map((line, index) => (
              <p key={index}>
                {line.split('\n').map((textLine, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {textLine}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 정보 섹션 */}
      <section className="contact-info-section">
        <div className="contact-info-inner">
          <div className="contact-info-list">
            {t('contact.info.items').map((item, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={iconImages[item.icon]} alt={item.label} />
                </div>
                <div className="contact-info-label">{item.label}</div>
                <div className="contact-info-separator"></div>
                <div className="contact-info-details">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {detail.split('\n').map((textLine, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {textLine}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 마지막 메시지 섹션 */}
      <section className="contact-message-section">
        <div className="contact-message-inner">
          <div className="contact-message-content">
            {t('contact.message.content').map((line, index) => (
              <p key={index}>
                {line.split('\n').map((textLine, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {textLine}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 섹션은 여기에 구현 */}
    </div>
  );
}

export default ContactPage; 