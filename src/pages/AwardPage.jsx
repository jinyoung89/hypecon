import React from 'react';
import './AwardPage.css';
import awardImg from '../assets/images/award.png';
import { useLanguage } from '../contexts/LanguageContext';

function AwardPage() {
  const { t } = useLanguage();

  return (
    <div className="award-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="award-hero-section" style={{backgroundImage: `url(${awardImg})`}}>
        <div className="award-hero-overlay"></div>
        <div className="award-hero-text">
          <div className="award-hero-title" style={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {t('award.hero.title')}
          </div>
        </div>
      </section>

      {/* HYPECON STYLE AWARDS 섹션 */}
      <section className="award-style-awards-section">
        <div className="award-style-awards-inner">
          <h2 className="award-style-awards-title" style={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {t('award.styleAwards.title')}
          </h2>
          <div className="award-style-awards-content">
            <p className="award-style-awards-text">
              {t('award.styleAwards.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* 행사 개요 섹션 */}
      <section className="award-overview-section">
        <div className="award-overview-inner">
          <div className="award-overview-header">
            <h2 className="award-overview-title">{t('award.overview.title')}</h2>
          </div>
          <div className="award-overview-content">
            <ul className="award-overview-list">
              {t('award.overview.items').map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 주요 시상 부문 섹션 */}
      <section className="award-categories-section">
        <div className="award-categories-inner">
          <div className="award-categories-header">
            <h2 className="award-categories-title">{t('award.categories.title')}</h2>
          </div>
          <div className="award-categories-content">
            <div className="award-categories-box">
              <div className="award-categories-list">
                {t('award.categories.items').map((category, index) => (
                  <div key={index} className="award-category-item">
                    <div className="award-category-title" style={{
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word'
                    }}>
                      {category.title}
                    </div>
                    {category.desc && (
                      <div className="award-category-description" style={{
                        whiteSpace: 'pre-line',
                        wordBreak: 'keep-all',
                        overflowWrap: 'break-word',
                        wordWrap: 'break-word'
                      }}>
                        {category.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 수상자 선정 방식 섹션 */}
      <section className="award-selection-section">
        <div className="award-selection-inner">
          <h2 className="award-selection-title">{t('award.selection.title')}</h2>
          <div className="award-selection-content">
            <div className="award-selection-flow">
              {t('award.selection.stages').map((stage, index) => (
                <React.Fragment key={index}>
                  <div className="award-selection-stage">
                    <div className="award-selection-stage-number">{stage.number}</div>
                    <div className="award-selection-stage-content">
                      <div>
                        <div className="award-selection-stage-title" style={{
                          whiteSpace: 'pre-line',
                          wordBreak: 'keep-all',
                          overflowWrap: 'break-word',
                          wordWrap: 'break-word'
                        }}>
                          {stage.title}
                        </div>
                        <div className="award-selection-stage-details" style={{
                          whiteSpace: 'pre-line',
                          wordBreak: 'keep-all',
                          overflowWrap: 'break-word',
                          wordWrap: 'break-word'
                        }}>
                          : {stage.details}
                        </div>
                        {stage.note && (
                          <div className="award-selection-stage-note" style={{
                            whiteSpace: 'pre-line',
                            wordBreak: 'keep-all',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word'
                          }}>
                            {stage.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < t('award.selection.stages').length - 1 && (
                    <div className="award-selection-arrow">▼</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 수상자 혜택 섹션 */}
      <section className="award-benefits-section">
        <div className="award-benefits-inner">
          <h2 className="award-benefits-title">{t('award.benefits.title')}</h2>
          <div className="award-benefits-content">
            <div className="award-benefits-box">
              <div className="award-benefits-list">
                {t('award.benefits.items').map((benefit, index) => (
                  <div key={index} className="award-benefit-item">
                    <span className="award-benefit-icon"></span>
                    <span className="award-benefit-text">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 관람객 참여 섹션 */}
      <section className="award-participation-section">
        <div className="award-participation-inner">
          <h2 className="award-participation-title">{t('award.participation.title')}</h2>
          <div className="award-participation-content">
            <div className="award-participation-box">
              <ul className="award-participation-list">
                {t('award.participation.items').map((item, index) => (
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
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="award-faq-section">
        <div className="award-faq-inner">
          <h2 className="award-faq-title">{t('award.faq.title')}</h2>
          <div className="award-faq-list">
            {t('award.faq.items').map((faq, index) => (
              <div key={index} className="award-faq-item">
                <div className="award-faq-question">
                  <div className="award-faq-q-circle">
                    <span className="award-faq-q-text">Q</span>
                  </div>
                  <div className="award-faq-question-title">{faq.q}</div>
                </div>
                <div className="award-faq-answer">
                  <div className="award-faq-a-circle">
                    <span className="award-faq-a-text">A</span>
                  </div>
                  <div className="award-faq-answer-text" style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 컨택 섹션 */}
      <section className="award-contact-section">
        <div className="award-contact-inner">
          <div className="award-contact-content">
            <span className="award-contact-question">{t('award.contact.question')}</span>
            <span className="award-contact-divider">|</span>
            <div className="award-contact-details">
              <span className="award-contact-email">{t('award.contact.email')}</span>
              <span className="award-contact-phone">{t('award.contact.phone')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 섹션은 여기에 구현 */}
    </div>
  );
}

export default AwardPage; 