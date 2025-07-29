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
          <div className="brand-hero-title" style={{color: "var(--hypecon-teal)"}}>
            {t('brand.hero.subtitle')}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT GUIDE 섹션 */}
      <section className="brand-engagement-section">
        <div className="brand-engagement-inner">
          <h2 className="brand-engagement-title">{t('brand.engagement.title')}</h2>
          <div className="brand-engagement-content">
            <p className="brand-engagement-text">
              {t('brand.engagement.text').split('\n').map((line, index) => (
                <span key={index} style={{color: index === 0 ? "#D5FFD2" : "white"}}>
                  {line}
                  {index < t('brand.engagement.text').split('\n').length - 1 && <br />}
                </span>
              ))}
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
                  <p className="curation-card-desc">
                    {card.desc.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 얼리버드 오퍼 섹션 */}
      <section className="brand-earlybird-section">
        <div className="brand-earlybird-inner">
          <h2 className="brand-earlybird-title">{t('brand.earlybird.title')}</h2>
          <div className="brand-earlybird-content">
            <p className="brand-earlybird-info">
              {t('brand.earlybird.info').map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </p>
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
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="brand-booth-subtitle">{t('brand.booth.caution.title')}</h3>
            <ul className="brand-booth-list">
              {t('brand.booth.caution.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="brand-booth-subtitle">{t('brand.booth.termination.title')}</h3>
            <ul className="brand-booth-list">
              {t('brand.booth.termination.items').map((item, index) => (
                <li key={index}>{item}</li>
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
                <li key={index}>{item}</li>
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
              <h3 className="brand-earlybird-benefit-subtitle">
                {t('brand.earlyBenefit.subtitle').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <div className="brand-earlybird-benefit-separator"></div>
            <div className="brand-earlybird-benefit-list">
              <ul>
                {t('brand.earlyBenefit.benefits').map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* 참가 신청 절차 섹션 */}
      <section className="brand-process-section">
        <div className="brand-process-inner">
          <h2 className="brand-process-title">{t('brand.process.title')}</h2>
          <div className="brand-process-flow">
            <div className="process-row">
              <div className="process-step">
                <div className="process-icon">
                  <img src={process01} alt={t('brand.process.steps.0.title')} />
                </div>
                <h3 className="process-step-title">{t('brand.process.steps.0.title')}</h3>
                <div className="process-step-details">
                  {t('brand.process.steps.0.details').map((detail, index) => (
                    <p key={index}>
                      {detail.includes('접수 마감일') || detail.includes('신청 방식') || detail.includes('→ 내부 큐레이션 심사') || detail.includes('→ 개별 참가 확정 안내') ? (
                        <strong>{detail}</strong>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                  <ul>
                    {t('brand.process.steps.0.notes').map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="process-arrow">
                <img src={arrow} alt="다음 단계" />
              </div>
              
              <div className="process-step">
                <div className="process-icon">
                  <img src={process02} alt={t('brand.process.steps.1.title')} />
                </div>
                <h3 className="process-step-title">{t('brand.process.steps.1.title')}</h3>
                <div className="process-step-details">
                  {t('brand.process.steps.1.details').map((detail, index) => (
                    <p key={index}>
                      {detail.includes('인보이스 수신 후 일주일 이내') || detail.includes('부스비 총액의 50% 납부') ? (
                        <strong>{detail}</strong>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                  <ul>
                    {t('brand.process.steps.1.notes').map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="process-arrow">
                <img src={arrow} alt="다음 단계" />
              </div>
            </div>
            
            <div className="process-row">
              <div className="process-step">
                <div className="process-icon">
                  <img src={process03} alt={t('brand.process.steps.2.title')} />
                </div>
                <h3 className="process-step-title">{t('brand.process.steps.2.title')}</h3>
                <div className="process-step-details">
                  {t('brand.process.steps.2.details').map((detail, index) => (
                    <p key={index}>
                      {detail.includes('기한 : 인보이스 수신 후 60일 이내 완납') ? (
                        <strong>{detail}</strong>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                  <ul>
                    {t('brand.process.steps.2.notes').map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="process-arrow">
                <img src={arrow} alt="다음 단계" />
              </div>
              
              <div className="process-step">
                <div className="process-icon">
                  <img src={process04} alt={t('brand.process.steps.3.title')} />
                </div>
                <h3 className="process-step-title">{t('brand.process.steps.3.title')}</h3>
                <div className="process-step-details">
                  {t('brand.process.steps.3.details').map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                  <ul>
                    {t('brand.process.steps.3.notes').map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="process-arrow">
                <img src={arrow} alt="다음 단계" />
              </div>
              
              <div className="process-step">
                <div className="process-icon">
                  <img src={process05} alt={t('brand.process.steps.4.title')} />
                </div>
                <h3 className="process-step-title">{t('brand.process.steps.4.title')}</h3>
                <div className="process-step-details">
                  {t('brand.process.steps.4.details').map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 참가비 납부 안내 섹션 */}
      <section className="brand-payment-section">
        <div className="brand-payment-inner">
          <div className="brand-payment-container">
            <div className="brand-payment-content">
              <h2 className="brand-payment-title">{t('brand.payment.title')}</h2>
              <div className="brand-payment-spacer"></div>
              <div className="brand-payment-subtitle">• {t('brand.payment.deposit.title')}</div>
              <div className="brand-payment-text">{t('brand.payment.deposit.desc')}</div>
              <div className="brand-payment-spacer"></div>
              <div className="brand-payment-subtitle">• {t('brand.payment.balance.title')}</div>
              <div className="brand-payment-text">{t('brand.payment.balance.desc')}</div>
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
                  <div className="brand-faq-answer-text">
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

export default BrandPage; 