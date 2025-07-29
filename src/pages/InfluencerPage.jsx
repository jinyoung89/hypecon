import React from 'react';
import './InfluencerPage.css';
import influencerImg from '../assets/images/influencer.png';
import { useLanguage } from '../contexts/LanguageContext';

function InfluencerPage() {
  const { t } = useLanguage();
  
  // 인플로언서 등록 핸들러 (Google Forms로 이동)
  const handleInfluencerApply = () => {
    window.open('https://docs.google.com/forms/d/1ot0y2q8LRFzkeql-lvd3On5gwk-8pq6IB9l2ejKWq_Y/edit', '_blank');
  };
  
  return (
    <div className="influencer-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="influencer-hero-section" style={{backgroundImage: `url(${influencerImg})`}}>
        <div className="influencer-hero-overlay"></div>
        <div className="influencer-hero-text">
          <div className="influencer-hero-title">
            {t('influencer.hero.subtitle').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* INFLUENCER REGISTRATION 섹션 */}
      <section className="influencer-registration-section">
        <div className="influencer-registration-inner">
          <h2 className="influencer-registration-title">{t('influencer.registration.title')}</h2>
          <div className="influencer-registration-content">
            <p className="influencer-registration-text">
              {t('influencer.registration.text')}
            </p>
            <p className="influencer-registration-subtext">
              {t('influencer.registration.subtext')}
            </p>
          </div>
        </div>
      </section>

      {/* 이런 분들을 초청합니다 섹션 */}
      <section className="influencer-invite-section">
        <div className="influencer-invite-inner">
          <div className="influencer-invite-header">
            <h2 className="influencer-invite-title">{t('influencer.invite.title')}</h2>
          </div>
          <div className="influencer-invite-content">
            <p className="influencer-invite-text">
              {t('influencer.invite.text')}
            </p>
            <p className="influencer-invite-subtext">
              {t('influencer.invite.subtext')}
            </p>
            <div className="influencer-invite-box">
              <div className="influencer-invite-text-content">
                {t('influencer.invite.content').map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 선정된 인플루언서에게 제공되는 혜택 섹션 */}
      <section className="influencer-benefit-section">
        <div className="influencer-benefit-inner">
          <div className="influencer-benefit-header">
            <h2 className="influencer-benefit-title">{t('influencer.benefit.title')}</h2>
          </div>
          <div className="influencer-benefit-content">
            <ul className="influencer-benefit-list">
              {t('influencer.benefit.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 선정 기준 & 주의사항, 일정 안내, 신청 방법, 문의 섹션 */}
      <section className="influencer-info-section">
        <div className="influencer-info-inner">
          {/* 선정 기준 & 주의사항 */}
          <div className="influencer-criteria-section">
            <h3 className="influencer-criteria-title">{t('influencer.info.criteria.title')}</h3>
            <ul className="influencer-criteria-list">
              {t('influencer.info.criteria.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 일정 안내 */}
          <div className="influencer-schedule-section">
            <h3 className="influencer-schedule-title">{t('influencer.info.schedule.title')}</h3>
            <ul className="influencer-schedule-list">
              {t('influencer.info.schedule.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 신청 방법 */}
          <div className="influencer-apply-section">
            <h3 className="influencer-apply-title">{t('influencer.info.apply.title')}</h3>
            <ul className="influencer-apply-list">
              {t('influencer.info.apply.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 참여 신청하기 버튼 */}
          <div className="influencer-apply-button-container">
            <button className="influencer-apply-button" onClick={handleInfluencerApply}>{t('influencer.info.apply.button')}</button>
          </div>

          {/* 문의 */}
          <div className="influencer-contact-section">
            <h3 className="influencer-contact-title">{t('influencer.info.contact.title')}</h3>
            <ul className="influencer-contact-list">
              {t('influencer.info.contact.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

   {/* WHAT IT TAKES 섹션 */}
   <section className="influencer-what-it-takes-section">
        <div className="influencer-what-it-takes-inner">
          <h2 className="influencer-what-it-takes-title">{t('influencer.whatItTakes.title')}</h2>
          <div className="influencer-what-it-takes-content">
            <p className="influencer-what-it-takes-text">
              {t('influencer.whatItTakes.text')}
            </p>
            <div className="influencer-what-it-takes-list">
              {t('influencer.whatItTakes.list').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <p className="influencer-what-it-takes-ending">
              {t('influencer.whatItTakes.ending')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="influencer-faq-section">
        <div className="influencer-faq-inner">
          <h2 className="influencer-faq-title">{t('influencer.faq.title')}</h2>
          <div className="influencer-faq-list">
            {t('influencer.faq.items').map((item, index) => (
              <div className="influencer-faq-item" key={index}>
                <div className="influencer-faq-question">
                  <div className="influencer-faq-q-circle">
                    <span className="influencer-faq-q-text">Q</span>
                  </div>
                  <div className="influencer-faq-question-title">{item.q}</div>
                </div>
                <div className="influencer-faq-answer">
                  <div className="influencer-faq-a-circle">
                    <span className="influencer-faq-a-text">A</span>
                  </div>
                  <div className="influencer-faq-answer-text">
                    {item.a.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
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

export default InfluencerPage; 