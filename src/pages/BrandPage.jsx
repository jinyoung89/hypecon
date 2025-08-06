import React from 'react';
import './BrandPage.css';
import brandImg from '../assets/images/brand.png';
import booth1Img from '../assets/images/booth1.png';
import booth2Img from '../assets/images/booth2.png';
import booth3Img from '../assets/images/booth3.png';
import booth4Img from '../assets/images/booth4.png';
import booth5Img from '../assets/images/booth5.png';
import booth6Img from '../assets/images/booth6.png';
import process01 from '../assets/images/process_01.png';
import process02 from '../assets/images/process_02.png';
import process03 from '../assets/images/process_03.png';
import process04 from '../assets/images/process_04.png';
import process05 from '../assets/images/process_05.png';
import arrow from '../assets/images/arrow.png';
import { useLanguage } from '../contexts/LanguageContext';

// 부스 섹션 컴포넌트
const BoothSection = ({ title, description, image, altText, earlyPrice, regularPrice, isGrayBackground = false }) => {
  const { t } = useLanguage();
  
  return (
    <section className={`brand-booth-type-section ${isGrayBackground ? 'brand-booth-type-section-gray' : ''}`}>
      <div className="brand-booth-type-inner">
        <h3 className="brand-booth-type-subtitle">{title}</h3>
        {description && <p className="brand-booth-type-desc">{description}</p>}
        <div className="brand-booth-type-image">
          <img src={image} alt={altText} />
        </div>
        <div className="brand-booth-type-price">
          <div className="price-row">
            <span className="price-label">{t('brand.booth.boothTypes.labels.earlyPrice')}</span>
            <span className="price-colon">:</span>
            <span className="price-value">{earlyPrice}</span>
          </div>
          <div className="price-row">
            <span className="price-label">{t('brand.booth.boothTypes.labels.regularPrice')}</span>
            <span className="price-colon">:</span>
            <span className="price-value">{regularPrice}</span>
          </div>
        </div>
        <div className="brand-booth-type-content">
          {/* 부스 타입 내용 */}
        </div>
      </div>
    </section>
  );
};

function BrandPage() {
  const { t, language } = useLanguage();

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
          <h2 className="hypecon-large-title hypecon-large-title--primary">{t('brand.engagement.title')}</h2>
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

      {/* 부스 타입 섹션 - 주석처리됨
      <section className="brand-booth-type-section">
        <div className="brand-booth-type-inner">
          <h2 className="brand-booth-type-title">{t('brand.booth.boothTypes.title')}</h2>
          <p className="brand-booth-type-notice">{t('brand.booth.boothTypes.notice')}</p>
          {language === 'EN' && (
            <p className="brand-booth-type-notice">{t('brand.booth.boothTypes.usdNotice')}</p>
          )}
          <h3 className="brand-booth-type-subtitle">{t('brand.booth.boothTypes.independent.title')}</h3>
          <p className="brand-booth-type-desc">{t('brand.booth.boothTypes.independent.description')}</p>
          <div className="brand-booth-type-image">
            <img src={booth1Img} alt={t('brand.booth.boothTypes.independent.alt')} />
          </div>
          <div className="brand-booth-type-price">
            <div className="price-row">
              <span className="price-label">{t('brand.booth.boothTypes.labels.earlyPrice')}</span>
              <span className="price-colon">:</span>
              <span className="price-value">{t('brand.booth.boothTypes.independent.earlyPrice')}</span>
            </div>
            <div className="price-row">
              <span className="price-label">{t('brand.booth.boothTypes.labels.regularPrice')}</span>
              <span className="price-colon">:</span>
              <span className="price-value">{t('brand.booth.boothTypes.independent.regularPrice')}</span>
            </div>
          </div>
          <div className="brand-booth-type-content">
            부스 타입 내용
          </div>
        </div>
      </section>

      기본부스 섹션
      <BoothSection
        title={t('brand.booth.boothTypes.basic.title')}
        image={booth2Img}
        altText={t('brand.booth.boothTypes.basic.alt')}
        earlyPrice={t('brand.booth.boothTypes.basic.earlyPrice')}
        regularPrice={t('brand.booth.boothTypes.basic.regularPrice')}
        isGrayBackground={true}
      />

      아트월 부스 섹션
      <BoothSection
        title={t('brand.booth.boothTypes.artwall.title')}
        image={booth3Img}
        altText={t('brand.booth.boothTypes.artwall.alt')}
        earlyPrice={t('brand.booth.boothTypes.artwall.earlyPrice')}
        regularPrice={t('brand.booth.boothTypes.artwall.regularPrice')}
      />

    

      <BoothSection
        title={t('brand.booth.boothTypes.acrylic4.title')}
        image={booth4Img}
        altText={t('brand.booth.boothTypes.acrylic4.alt')}
        earlyPrice={t('brand.booth.boothTypes.acrylic4.earlyPrice')}
        regularPrice={t('brand.booth.boothTypes.acrylic4.regularPrice')}
        isGrayBackground={true}
      />

        아크릴 부스 섹션
        <BoothSection
        title={t('brand.booth.boothTypes.acrylic6.title')}
        image={booth5Img}
        altText={t('brand.booth.boothTypes.acrylic6.alt')}
        earlyPrice={t('brand.booth.boothTypes.acrylic6.earlyPrice')}
        regularPrice={t('brand.booth.boothTypes.acrylic6.regularPrice')}
      
        
      />


    <BoothSection
        title={t('brand.booth.boothTypes.acrylic8.title')}
        image={booth6Img}
        altText={t('brand.booth.boothTypes.acrylic8.alt')}
        earlyPrice={t('brand.booth.boothTypes.acrylic8.earlyPrice')}
        regularPrice={t('brand.booth.boothTypes.acrylic8.regularPrice')}
        isGrayBackground={true}
         
      />
      */}

      {/* 부스 타입 및 참가비 안내 섹션 */}
      <section className="brand-booth-section">
        <div className="brand-booth-inner">
        <h2 className="brand-booth-title" style={{color: "#E1F800"}}>{t('brand.booth.title')}</h2>
          

        {language === 'EN' && (
              <p className="brand-booth-table-note">
                {t('brand.booth.boothTypes.usdNotice')}
              </p>
            )}

        <div className="brand-booth-table-container">
          <p className="brand-booth-table-note text-left">
          {t('brand.booth.boothSizeNote.independent')}
          </p>

        
          {/* 독립 부스 타입 표 와 내용 */}
            <div className="brand-booth-type-table-container">
              <table className="brand-booth-simple-table">
                <thead>
                  <tr>
                    <th>{t('brand.booth.boothTypeTable.headers.type')}</th>
                    <th>
                      <div className="th-content">
                        <div className="main-text">{t('brand.booth.labels.earlyPrice')}</div>
                        <div className="vat-excluded-text">{t('brand.booth.labels.vatExcluded')}</div>
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        <div className="main-text">{t('brand.booth.labels.regularPrice')}</div>
                        <div className="vat-excluded-text">{t('brand.booth.labels.vatExcluded')}</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('brand.booth.boothTypeTable.independent.name')}</td>
                    <td>{t('brand.booth.boothTypeTable.independent.earlyPrice')}</td>
                    <td>{t('brand.booth.boothTypeTable.independent.regularPrice')}</td>
                  </tr>
                </tbody>
              </table>
              
              {/* 모바일용 카드 레이아웃 */}
              <div className="brand-booth-type-table-mobile">
                <div className="booth-type-card">
                  <div className="booth-type-card-header">{t('brand.booth.boothTypeTable.independent.name')}</div>
                  <div className="booth-type-card-row">
                    <span className="booth-type-card-label">{t('brand.booth.labels.earlyPrice')}</span>
                    <span className="booth-type-card-value">{t('brand.booth.boothTypeTable.independent.earlyPrice')}</span>
                  </div>
                  <div className="booth-type-card-row">
                    <span className="booth-type-card-label">{t('brand.booth.labels.regularPrice')}</span>
                    <span className="booth-type-card-value">{t('brand.booth.boothTypeTable.independent.regularPrice')}</span>
                  </div>
                  <div className="booth-type-card-note">
                    <span style={{fontSize: 'clamp(12px, (20/1920)*100vw, 20px)', fontWeight: 400}}>{t('brand.booth.labels.vatExcluded')}</span>
                  </div>
                </div>
              </div>
            </div>

      

            <ul className="brand-booth-basic-list">
              {t('brand.booth.boothTypeTable.independent.details').map((detail, index) => {
                let processedDetail = detail;
                
                if (language === 'EN') {
                  // 영어: "2 booths"만 굵게
                  processedDetail = detail.replace(t('brand.booth.boothTypeTable.independent.twoBoothsOnlyText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.independent.twoBoothsOnlyText')}</span>`)
                                         .replace(t('brand.booth.boothTypeTable.independent.areaOnlyText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.independent.areaOnlyText')}</span>`);
                } else {
                  // 한국어: "2부스 이상"과 "면적만 제공" 굵게
                  processedDetail = detail.replace(t('brand.booth.boothTypeTable.independent.twoBoothsText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.independent.twoBoothsText')}</span>`)
                                         .replace(t('brand.booth.boothTypeTable.independent.areaOnlyText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.independent.areaOnlyText')}</span>`);
                }
                
                return (
                  <li key={index} dangerouslySetInnerHTML={{
                    __html: processedDetail
                  }}></li>
                );
              })}
            </ul>
            
            {/* 조립 부스 타입 표 와 내용 */}
            <p className="brand-booth-table-note text-left">
            {t('brand.booth.boothSizeNote.assembly')}
            </p>
            
            <div className="brand-booth-type-table-container">
              <table className="brand-booth-simple-table">
                <thead>
                  <tr>
                    <th>{t('brand.booth.boothTypeTable.headers.type')}</th>
                    <th>
                      <div className="th-content">
                        <div className="main-text">{t('brand.booth.labels.earlyPrice')}</div>
                        <div className="vat-excluded-text">{t('brand.booth.labels.vatExcluded')}</div>
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        <div className="main-text">{t('brand.booth.labels.regularPrice')}</div>
                        <div className="vat-excluded-text">{t('brand.booth.labels.vatExcluded')}</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('brand.booth.boothTypeTable.assembly.name')}</td>
                    <td>{t('brand.booth.boothTypeTable.assembly.earlyPrice')}</td>
                    <td>{t('brand.booth.boothTypeTable.assembly.regularPrice')}</td>
                  </tr>
                </tbody>
              </table>
              
              {/* 모바일용 카드 레이아웃 */}
              <div className="brand-booth-type-table-mobile">
                <div className="booth-type-card">
                  <div className="booth-type-card-header">{t('brand.booth.boothTypeTable.assembly.name')}</div>
                  <div className="booth-type-card-row">
                    <span className="booth-type-card-label">{t('brand.booth.labels.earlyPrice')}</span>
                    <span className="booth-type-card-value">{t('brand.booth.boothTypeTable.assembly.earlyPrice')}</span>
                  </div>
                  <div className="booth-type-card-row">
                    <span className="booth-type-card-label">{t('brand.booth.labels.regularPrice')}</span>
                    <span className="booth-type-card-value">{t('brand.booth.boothTypeTable.assembly.regularPrice')}</span>
                  </div>
                  <div className="booth-type-card-note">
                    <span style={{fontSize: 'clamp(12px, (20/1920)*100vw, 20px)', fontWeight: 400}}>{t('brand.booth.labels.vatExcluded')}</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="brand-booth-basic-list">
              {t('brand.booth.boothTypeTable.assembly.details').map((detail, index) => (
                <li key={index} dangerouslySetInnerHTML={{
                  __html: detail.replace(t('brand.booth.boothTypeTable.assembly.facilitiesText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.assembly.facilitiesText')}</span>`)
                                  .replace(t('brand.booth.boothTypeTable.assembly.singleBoothText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.assembly.singleBoothText')}</span>`)
                }}></li>
              ))}
            </ul>


            {/* 프리미엄부스 타입 표 와 내용 */}
            <p className="brand-booth-table-note text-left">
            {t('brand.booth.boothSizeNote.premium')}
            </p>
            
            <div className="brand-premium-booth-table-container">
              <table className="brand-premium-booth-table">
                <thead>
                  <tr>
                    <th>{t('brand.booth.boothTypeTable.headers.type')}</th>
                    <th>{t('brand.booth.boothTypeTable.headers.subtype')}</th>
                    <th>{t('brand.booth.boothTypeTable.headers.quantity')}</th>
                    <th>
                      <div className="th-content">
                        <div className="main-text">{t('brand.booth.boothTypeTable.headers.constructionFee')}</div>
                        <div className="vat-excluded-text">{t('brand.booth.labels.independentBoothSeparate')}</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="4" className="booth-type">{t('brand.booth.boothTypeTable.premium.name')}</td>
                    <td rowSpan="2" className="booth-subtype">{t('brand.booth.boothTypeTable.premium.blockBooth')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.booth2')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.prices.block2')}</td>
                  </tr>
                  <tr>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.booth4')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.prices.block4')}</td>
                  </tr>
                  <tr>
                    <td rowSpan="2" className="booth-subtype">{t('brand.booth.boothTypeTable.premium.lightBooth')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.booth2')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.prices.light2')}</td>
                  </tr>
                  <tr>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.booth4')}</td>
                    <td className="booth-info">{t('brand.booth.boothTypeTable.premium.prices.light4')}</td>
                  </tr>
                </tbody>
              </table>
              
              {/* 모바일용 카드 레이아웃 */}
              <div className="brand-premium-booth-table-mobile">
                <div className="premium-booth-card">
                  <div className="premium-booth-card-header">{t('brand.booth.boothTypeTable.premium.name')} - {t('brand.booth.boothTypeTable.premium.blockBooth')}</div>
                  <div className="premium-booth-card-row">
                    <span className="premium-booth-card-label">{t('brand.booth.boothTypeTable.premium.booth2')}</span>
                    <span className="premium-booth-card-value">{t('brand.booth.boothTypeTable.premium.prices.block2')}</span>
                  </div>
                  <div className="premium-booth-card-row">
                    <span className="premium-booth-card-label">{t('brand.booth.boothTypeTable.premium.booth4')}</span>
                    <span className="premium-booth-card-value">{t('brand.booth.boothTypeTable.premium.prices.block4')}</span>
                  </div>
                </div>
                
                <div className="premium-booth-card">
                  <div className="premium-booth-card-header">{t('brand.booth.boothTypeTable.premium.name')} - {t('brand.booth.boothTypeTable.premium.lightBooth')}</div>
                  <div className="premium-booth-card-row">
                    <span className="premium-booth-card-label">{t('brand.booth.boothTypeTable.premium.booth2')}</span>
                    <span className="premium-booth-card-value">{t('brand.booth.boothTypeTable.premium.prices.light2')}</span>
                  </div>
                  <div className="premium-booth-card-row">
                    <span className="premium-booth-card-label">{t('brand.booth.boothTypeTable.premium.booth4')}</span>
                    <span className="premium-booth-card-value">{t('brand.booth.boothTypeTable.premium.prices.light4')}</span>
                  </div>
                </div>
                
                <div className="premium-booth-card-note">
                  <span style={{fontSize: 'clamp(12px, (24/1920)*100vw, 24px)', fontWeight: 400}}>{t('brand.booth.labels.independentBoothSeparate')}</span>
                </div>
              </div>
            </div>

            <ul className="brand-booth-basic-list">
              {t('brand.booth.boothTypeTable.premium.details').map((detail, index) => (
                <li key={index} dangerouslySetInnerHTML={{
                  __html: detail.replace(t('brand.booth.boothTypeTable.premium.constructionFeeText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.premium.constructionFeeText')}</span>`)
                                  .replace(t('brand.booth.boothTypeTable.premium.separateChargeText'), `<span style="font-weight: 700;">${t('brand.booth.boothTypeTable.premium.separateChargeText')}</span>`)
                }}></li>
              ))}
            </ul>


        
            
            <h3 className="brand-booth-additional-cost-title">
              {t('brand.booth.additionalCostTitle')}
            </h3>
            
            <ul className="brand-booth-additional-cost-list">
              {t('brand.booth.additionalCostItems').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="brand-booth-corner-benefits-title">
              {t('brand.booth.cornerBenefits.title')}
            </h3>
            
            <div className="brand-booth-corner-benefits-table-container">
              <table className="brand-booth-corner-benefits-table">
                <tbody>
                  {t('brand.booth.cornerBenefits.table.rows').map((row, index) => (
                    <tr key={index}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="brand-booth-basic-list">
              <li>{t('brand.booth.cornerBenefits.additionalCost')}</li>
            </ul>

            <h3 className="brand-booth-termination-title">
              {t('brand.booth.termination.title')}
            </h3>
            
            <ul className="brand-booth-termination-list">
              {t('brand.booth.termination.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="brand-booth-caution-title">
              {t('brand.booth.cautionSimple.title')}
            </h3>
            
            <ul className="brand-booth-caution-list">
              {t('brand.booth.cautionSimple.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <p className="brand-booth-caution-note">
              {t('brand.booth.cautionSimple.note')}
            </p>


            
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
                      <td key={cellIndex} dangerouslySetInnerHTML={{__html: cell}}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* 모바일용 카드 레이아웃 */}
            <div className="brand-refund-table-mobile">
              {t('brand.refund.table.rows').map((row, index) => (
                <div key={index} className="refund-card">
                  <div className="refund-card-header">
                    {row[0]}
                  </div>
                  <div className="refund-card-row">
                    <span className="refund-card-label">{t('brand.refund.labels.conditionLabel')}</span>
                    <span className="refund-card-value" dangerouslySetInnerHTML={{__html: row[1]}}></span>
                  </div>
                  <div className="refund-card-row">
                    <span className="refund-card-label">{t('brand.refund.labels.refundLabel')}</span>
                    <span className="refund-card-value" dangerouslySetInnerHTML={{__html: row[2]}}></span>
                  </div>
                </div>
              ))}
            </div>
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

      {/* 얼리버드 혜택 섹션 */}
      <section className="brand-earlybird-benefit-section">
        <div className="brand-earlybird-benefit-inner">
          <h2 className="hypecon-large-title hypecon-large-title--primary">{t('brand.earlyBenefit.title')}</h2>
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
                  }} dangerouslySetInnerHTML={{__html: detail}}>
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
                  }} dangerouslySetInnerHTML={{__html: detail}}>
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
                  }} dangerouslySetInnerHTML={{__html: detail}}>
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
                  }} dangerouslySetInnerHTML={{__html: detail}}>
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
                  }} dangerouslySetInnerHTML={{__html: detail}}>
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
          <div 
            className="brand-payment-new-element" 
            onClick={() => window.open('https://docs.google.com/forms/d/1qloDsLH1ODQeTmSJQoUrPKQ1fGNs5yi6vw1gbh-IYfM/edit', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            {t('brand.payment.title')}
          </div>
          <div className="brand-payment-subtitle">{t('brand.payment.subtitle')}</div>
          <div className="brand-payment-content-new">
            <div className="brand-payment-content-wrapper">
              <span className="brand-payment-deposit-title">{t('brand.payment.deposit.title')}</span>
              <span className="brand-payment-deposit-desc">{t('brand.payment.deposit.desc')}</span>
              <span className="brand-payment-balance-title">{t('brand.payment.balance.title')}</span>
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