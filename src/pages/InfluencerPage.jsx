import React from 'react';
import './InfluencerPage.css';
import influencerImg from '../assets/images/influencer.png';
import { useLanguage } from '../contexts/LanguageContext';

function InfluencerPage() {
  const { t } = useLanguage();
  
  // 화살표 SVG 컴포넌트
  const ArrowDown = () => (
    <div className="arrow-down-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
        <path d="M13 21L0.875647 -2.28386e-06L25.1244 -1.63974e-07L13 21Z" fill="#00E5A8"/>
      </svg>
    </div>
  );
  
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
          <div className="influencer-hero-main-title">
            {t('influencer.hero.subtitle')}
          </div>
        </div>
      </section>

      {/* INFLUENCER REGISTRATION 섹션 */}
      <section className="influencer-info-section">
        <div className="influencer-info-inner">
          <h2 className="hypecon-large-title hypecon-large-title--primary">{t('influencer.registration.title')}</h2>
          <div className="influencer-info-content">
            <p className="influencer-info-text">
              {t('influencer.registration.text')}
            </p>
            <p className="influencer-info-subtext" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
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
            <p className="influencer-invite-text" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
              {t('influencer.invite.text')}
            </p>
            <p 
              className="influencer-invite-subtext" 
              style={{
                whiteSpace: 'pre-line',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                wordWrap: 'break-word'
              }}
              dangerouslySetInnerHTML={{ __html: t('influencer.invite.subtext') }}
            />
            <div className="influencer-invite-box">
              <div className="influencer-invite-text-content">
                {t('influencer.invite.content').map((item, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {item}
                  </p>
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
                <li key={index} style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 선정 기준 & 주의사항, 일정 안내, 신청 방법, 문의 섹션 */}
      <section className="influencer-info-section criteria-section">
        <div className="influencer-info-inner">
      

          {/* 일정 안내 */}
          <div className="influencer-schedule-section">
            <h3 className="influencer-schedule-title">{t('influencer.info.schedule.title')}</h3>
            <ul className="influencer-schedule-list">
              {t('influencer.info.schedule.list').map((item, index) => (
                <li key={index} style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 신청 방법 */}
          <div className="influencer-apply-section">
            <h3 className="influencer-apply-title">{t('influencer.info.apply.title')}</h3>
            <div className="influencer-apply-steps">
              {t('influencer.info.apply.list').map((item, index) => (
                <React.Fragment key={index}>
                  <div className="influencer-apply-step" style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {item}
                  </div>
                  {index < t('influencer.info.apply.list').length - 1 && <ArrowDown />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 참여 신청하기 버튼 */}
          <div className="influencer-apply-button-container">
            <button className="influencer-apply-button" onClick={handleInfluencerApply}>{t('influencer.info.apply.button')}</button>
          </div>

         
    {/* 선정 기준 & 주의사항 */}
    <div className="influencer-criteria-section">
            <h3 className="influencer-criteria-title">{t('influencer.info.criteria.title')}</h3>
            <ul className="influencer-criteria-list">
              {t('influencer.info.criteria.list').map((item, index) => (
                <li key={index} style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {item}
                </li>
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
            <div className="influencer-what-it-takes-text-group">
              {t('influencer.whatItTakes.textWithList')}
            </div>
            <div className="influencer-what-it-takes-ending">
              {t('influencer.whatItTakes.ending')}
            </div>
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
                  <div className="influencer-faq-answer-text" style={{
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

export default InfluencerPage; 