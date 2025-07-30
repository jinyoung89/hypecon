import React from 'react';
import './BrandPage.css';
import brandImg from '../assets/images/brand.png';
import brand2Img from '../assets/images/brand2.png';
import process01 from '../assets/images/process_01.png';
import process02 from '../assets/images/process_02.png';
import process03 from '../assets/images/process_03.png';
import process04 from '../assets/images/process_04.png';
import process05 from '../assets/images/process_05.png';
import arrow from '../assets/images/arrow.png';
import { useLanguage } from '../contexts/LanguageContext';

function BrandPage() {
  const { t } = useLanguage();

  return (
    <div className="brand-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="brand-hero-section" style={{backgroundImage: `url(${brandImg})`}}>
        <div className="brand-hero-overlay"></div>
        <div className="brand-hero-text">
          <div className="brand-hero-title" style={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
            wordWrap: 'break-word'
          }}>
            {t('brand.hero.subtitle')}
          </div>
        </div>
      </section>

             {/* 흰색 섹션 */}
             <section style={{
        background: 'white',
        height: 'clamp(120px, (240/1920)*100vw, 240px)',
        width: '100%',
        margin: '0',
        padding: '0'
      }}></section>

      {/* ENGAGEMENT GUIDE 섹션 */}
      <section className="brand-engagement-section">
        <div className="brand-engagement-inner">
          <h2 className="brand-engagement-title">{t('brand.engagement.title')}</h2>
          <div className="brand-engagement-content">
            <p className="brand-engagement-text" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
              {t('brand.engagement.text')}
            </p>
          </div>
        </div>
      </section>

      {/* 브랜드 큐레이션 기준 섹션 */}
      <section className="brand-curation-section">
        <div className="brand-curation-inner">
          <h2 className="brand-curation-title">{t('brand.curation.title')}</h2>
          <p className="brand-curation-desc">{t('brand.curation.desc')}</p>
          
          <div className="brand-curation-grid">
            {t('brand.curation.cards').map((card, index) => (
              <div className="curation-card" key={index}>
                <h3 className="curation-card-title">{card.title}</h3>
                <div className="curation-card-content">
                  <p className="curation-card-desc" style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 

     

      {/* 부스 타입 및 참가비 안내 섹션 */}
      <section className="brand-booth-section">
        <div className="brand-booth-inner">
          <h2 className="brand-booth-title" style={{color: "#E1F800"}}>{t('brand.booth.title')}</h2>
          
          <div className="brand-booth-table-container">
            <table className="brand-booth-table" style={{background: "transparent"}}>
              <thead>
                <tr>
                  {t('brand.booth.table.headers').map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t('brand.booth.table.rows').map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="brand-booth-info">
            <h3 className="brand-booth-subtitle">{t('brand.booth.additionalCost.title')}</h3>
            <ul className="brand-booth-list">
              {t('brand.booth.additionalCost.items').map((item, index) => (
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
            
            <h3 className="brand-booth-subtitle">{t('brand.booth.caution.title')}</h3>
            <ul className="brand-booth-list">
              {t('brand.booth.caution.items').map((item, index) => (
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
            
            <h3 className="brand-booth-subtitle">{t('brand.booth.termination.title')}</h3>
            <ul className="brand-booth-list">
              {t('brand.booth.termination.items').map((item, index) => (
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

      {/* 환불 규정 섹션 */}
      <section className="brand-refund-section">
        <div className="brand-refund-inner">
          <h2 className="brand-refund-title" style={{color: "#E1F800"}}>{t('brand.refund.title')}</h2>
          
          <div className="brand-refund-table-container">
            <table className="brand-refund-table" style={{background: "transparent"}}>
              <thead>
                <tr>
                  {t('brand.refund.table.headers').map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t('brand.refund.table.rows').map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="brand-refund-info">
            <h3 className="brand-refund-subtitle">{t('brand.refund.caution.title')}</h3>
            <ul className="brand-refund-list">
              {t('brand.refund.caution.items').map((item, index) => (
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

      {/* 부스 배치도 섹션 */}
      <section className="brand-layout-section">
        <div className="brand-layout-inner">
          <h2 className="brand-layout-title">{t('brand.layout.title')}</h2>
          <div className="brand-layout-image">
            <img src={brand2Img} alt="부스 배치도" />
          </div>
        </div>
      </section>
{/* 얼리버드 혜택 섹션 */}
<section className="brand-earlybird-benefit-section">
        <div className="brand-earlybird-benefit-inner">
          <h2 className="brand-earlybird-benefit-title">{t('brand.earlyBenefit.title')}</h2>
          <div className="brand-earlybird-benefit-content">
            <div className="brand-earlybird-benefit-header">
              <h3 className="brand-earlybird-benefit-subtitle" style={{
                whiteSpace: 'pre-line',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                wordWrap: 'break-word'
              }}>
                {t('brand.earlyBenefit.subtitle')}
              </h3>
            </div>
            <div className="brand-earlybird-benefit-separator"></div>
            <div className="brand-earlybird-benefit-list">
              <ul>
                {t('brand.earlyBenefit.benefits').map((benefit, index) => (
                  <li key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* 참가 신청 절차 섹션 */}
      <section className="brand-process-section">
        <div className="brand-process-inner">
          <div className="brand-process-new-element">{t('brand.process.title')}</div>
          
          <div className="brand-process-flow-chart">
            {/* 1단계: 얼리 참가 신청서 제출 */}
            <div className="process-step-block">
              <div className="process-step-header">{t('brand.process.steps.0.title')}</div>
              <div className="process-step-body">
                {t('brand.process.steps.0.details').map((detail, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {detail}
                  </p>
                ))}
                <ul>
                  {t('brand.process.steps.0.notes').map((note, index) => (
                    <li key={index} style={{
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word'
                    }}>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="process-arrow-down"></div>
            
            {/* 2단계: 계약금 납부 */}
            <div className="process-step-block">
              <div className="process-step-header">{t('brand.process.steps.1.title')}</div>
              <div className="process-step-body">
                {t('brand.process.steps.1.details').map((detail, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {detail}
                  </p>
                ))}
                <ul>
                  {t('brand.process.steps.1.notes').map((note, index) => (
                    <li key={index} style={{
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word'
                    }}>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="process-arrow-down"></div>
            
            {/* 3단계: 잔금 납부 */}
            <div className="process-step-block">
              <div className="process-step-header">{t('brand.process.steps.2.title')}</div>
              <div className="process-step-body">
                {t('brand.process.steps.2.details').map((detail, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {detail}
                  </p>
                ))}
                <ul>
                  {t('brand.process.steps.2.notes').map((note, index) => (
                    <li key={index} style={{
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word'
                    }}>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="process-arrow-down"></div>
            
            {/* 4단계: 부대시설 신청 입금 */}
            <div className="process-step-block">
              <div className="process-step-header">{t('brand.process.steps.3.title')}</div>
              <div className="process-step-body">
                {t('brand.process.steps.3.details').map((detail, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {detail}
                  </p>
                ))}
                <ul>
                  {t('brand.process.steps.3.notes').map((note, index) => (
                    <li key={index} style={{
                      whiteSpace: 'pre-line',
                      wordBreak: 'keep-all',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word'
                    }}>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="process-arrow-down"></div>
            
            {/* 5단계: 페어 개막 */}
            <div className="process-step-block">
              <div className="process-step-header">{t('brand.process.steps.4.title')}</div>
              <div className="process-step-body">
                {t('brand.process.steps.4.details').map((detail, index) => (
                  <p key={index} style={{
                    whiteSpace: 'pre-line',
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word'
                  }}>
                    {detail}
                  </p>
                ))}
                {t('brand.process.steps.4.notes').length > 0 && (
                  <ul>
                    {t('brand.process.steps.4.notes').map((note, index) => (
                      <li key={index} style={{
                        whiteSpace: 'pre-line',
                        wordBreak: 'keep-all',
                        overflowWrap: 'break-word',
                        wordWrap: 'break-word'
                      }}>
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 참가비 납부 안내 섹션 */}
      <section className="brand-payment-section">
        <div className="brand-payment-inner">
          <div className="brand-payment-new-element">{t('brand.payment.title')}</div>
          <div className="brand-payment-content-new">
            <div className="brand-payment-content-wrapper">
              <span className="brand-payment-deposit-title">• {t('brand.payment.deposit.title')}</span>
              <span className="brand-payment-deposit-desc">{t('brand.payment.deposit.desc')}</span>
              <span className="brand-payment-balance-title">• {t('brand.payment.balance.title')}</span>
              <span className="brand-payment-balance-desc">{t('brand.payment.balance.desc')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="brand-faq-section">
        <div className="brand-faq-inner">
          <h2 className="brand-faq-title">{t('brand.faq.title')}</h2>
          <div className="brand-faq-list">
            {t('brand.faq.items').map((item, index) => (
              <div className="brand-faq-item" key={index}>
                <div className="brand-faq-question">
                  <div className="brand-faq-q-circle">
                    <span className="brand-faq-q-text">Q</span>
                  </div>
                  <div className="brand-faq-question-title">{item.q}</div>
                </div>
                <div className="brand-faq-answer">
                  <div className="brand-faq-a-circle">
                    <span className="brand-faq-a-text">A</span>
                  </div>
                  <div className="brand-faq-answer-text" style={{
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

export default BrandPage; 