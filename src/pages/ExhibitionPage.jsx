import React from 'react';
import './ExhibitionPage.css';
import exSec01Img from '../assets/images/ex_sec01.png';
import exSec05Img from '../assets/images/ex_sec05.jpg';
import exSec07Img from '../assets/images/ex_sec07.jpg';
import exIc1 from '../assets/images/ex_ic_1.png';
import exIc2 from '../assets/images/ex_ic_2.png';
import exIc3 from '../assets/images/ex_ic_3.png';
import exIc4 from '../assets/images/ex_ic_4.png';
import exPoster from '../assets/images/ex_poster.png';
import { useLanguage } from '../contexts/LanguageContext';

function ExhibitionPage() {
  const { t } = useLanguage();

  return (
    <div className="exhibition-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="exhibition-hero-section" style={{backgroundImage: `url(${exSec01Img})`}}>
        <div className="exhibition-hero-overlay"></div>
        <div className="exhibition-hero-text">
          <div className="exhibition-hero-content">
            <span className="exhibition-hero-subtitle">
              {t('exhibition.hero.subtitle')}
            </span>
            <span className="exhibition-hero-title">
              <br/>
            </span>
            <span className="exhibition-hero-desc">
              {t('exhibition.hero.desc')}
            </span>
          </div>
        </div>
      </section>

      {/* 포스터 이미지 섹션 */}
      <section className="exhibition-poster-section">
        <div className="exhibition-poster-inner">
          <div className="exhibition-poster-header">
            <h2 className="poster-title">{t('exhibition.poster.title')}</h2>
            <h3 className="poster-date">{t('exhibition.hero.date')}</h3>
          </div>
          <div className="exhibition-poster-content">
            <div className="exhibition-poster-image">
              <img src={exPoster} alt="HYPECON STYLE WEEK SEOUL 2026 포스터" />
            </div>
            <div className="exhibition-poster-info">
              <div className="poster-info-item">
                <span className="info-label">🔷 {t('exhibition.organizer.title')}</span>
                <div className="info-content">
                  {t('exhibition.organizer.host')}<br/>
                  {t('exhibition.organizer.coHost')}
                </div>
              </div>
              
              <div className="poster-info-item">
                <span className="info-label">🔹 {t('exhibition.participants.title')}</span>
                <div className="info-content">
                  {t('exhibition.participants.list').map((item, index) => (
                    <React.Fragment key={index}>
                      • {item}<br/>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="poster-info-item">
                <span className="info-label">🎟️ {t('exhibition.scale.title')}</span>
                <div className="info-content">
                  {t('exhibition.scale.desc')}
                </div>
              </div>
              
              <div className="poster-info-item">
                <span className="info-label">🟣 {t('exhibition.categories.title')}</span>
                <div className="info-content">
                  {t('exhibition.categories.list').map((item, index) => (
                    <React.Fragment key={index}>
                      {item}{index === 0 && <br/>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS HIGHLIGHT 섹션 */}
      <section className="exhibition-programs-section">
        <div className="exhibition-programs-inner">
          <h2 className="exhibition-programs-title">PROGRAMS HIGHLIGHT</h2>
          <div className="exhibition-programs-list">
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc1} alt="Opening Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.19 | OPENING DAY</h3>
                <h4 className="exhibition-programs-subtitle">
                  {t('exhibition.highlights.day1.title')}
                </h4>
                <p className="exhibition-programs-desc">
                  {t('exhibition.highlights.day1.desc')}
                </p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc2} alt="Signature Showcase Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.20 | SIGNATURE SHOWCASE DAY</h3>
                <h4 className="exhibition-programs-subtitle">
                  {t('exhibition.highlights.day2.title')}
                </h4>
                <p className="exhibition-programs-desc">
                  {t('exhibition.highlights.day2.desc')}
                </p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc3} alt="Fan Experience Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.21 | FAN EXPERIENCE DAY</h3>
                <h4 className="exhibition-programs-subtitle">
                  {t('exhibition.highlights.day3.title')}
                </h4>
                <p className="exhibition-programs-desc">
                  {t('exhibition.highlights.day3.desc')}
                </p>
              </div>
            </div>
            <div className="exhibition-programs-item">
              <div className="exhibition-programs-icon">
                <img src={exIc4} alt="Final Drop Day" />
              </div>
              <div className="exhibition-programs-content">
                <h3 className="exhibition-programs-date">02.22 | FINAL DROP DAY</h3>
                <h4 className="exhibition-programs-subtitle">
                  {t('exhibition.highlights.day4.title')}
                </h4>
                <p className="exhibition-programs-desc">
                  {t('exhibition.highlights.day4.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYPECON EXPERIENCE 섹션 */}
      <section className="exhibition-new-experience-section">
        <div className="exhibition-new-experience-inner">
          <h2 className="exhibition-new-experience-title">HYPECON EXPERIENCE</h2>
          
          <div className="exhibition-new-experience-desc">
            <div className="experience-title-text">{t('exhibition.experience.title')}</div>
            <div className="experience-desc-text">{t('exhibition.experience.desc').join('\n')}</div>
          </div>
          
          <div className="exhibition-new-experience-grid">
            <div className="experience-card">
              <h3 className="experience-card-title">{t('exhibition.experience.cards.zone')}</h3>
              <ul className="experience-card-list">
                {t('exhibition.zones').slice(0, 4).map((zone, index) => (
                  <li key={index}>{zone}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-card">
              <h3 className="experience-card-title">{t('exhibition.experience.cards.interaction')}</h3>
              <ul className="experience-card-list">
                {t('exhibition.zones').slice(4, 8).map((zone, index) => (
                  <li key={index}>{zone}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-card">
              <h3 className="experience-card-title">{t('exhibition.experience.cards.sns')}</h3>
              <ul className="experience-card-list">
                {t('exhibition.zones').slice(8, 11).map((zone, index) => (
                  <li key={index}>{zone}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-card">
              <h3 className="experience-card-title">{t('exhibition.experience.cards.commerce')}</h3>
              <ul className="experience-card-list">
                {t('exhibition.zones').slice(11, 15).map((zone, index) => (
                  <li key={index}>{zone}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CONTENT POINTS 섹션 */}
      <section className="exhibition-key-points-section">
        <div className="exhibition-key-points-inner">
          <h2 className="exhibition-key-points-title">{t('exhibition.features.title')}</h2>
          
          <div className="exhibition-key-points-grid">
            <div className="key-point-card">
              <div className="key-point-number">01</div>
              <h3 className="key-point-title">{t('exhibition.features.content.title')}</h3>
              <p className="key-point-desc">{t('exhibition.features.content.desc')}</p>
            </div>
            
            <div className="key-point-card">
              <div className="key-point-number">02</div>
              <h3 className="key-point-title">{t('exhibition.features.brand.title')}</h3>
              <p className="key-point-desc">{t('exhibition.features.brand.desc')}</p>
            </div>
            
            <div className="key-point-card">
              <div className="key-point-number">03</div>
              <h3 className="key-point-title">{t('exhibition.features.feedback.title')}</h3>
              <p className="key-point-desc">{t('exhibition.features.feedback.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HYPECON B2B 바이어 프로그램 섹션 */}
      <section className="exhibition-b2b-section">
        <div className="exhibition-b2b-inner">
          <div className="exhibition-b2b-title">{t('exhibition.b2b.title')}</div>
          
          <div className="exhibition-b2b-list">
            <div className="b2b-item">
              <div className="b2b-item-title">
                {t('exhibition.b2b.program.title')}
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">
                  {t('exhibition.b2b.features').map((feature, index) => 
                    index === 0 ? `· ${feature}` : `\n· ${feature}`
                  ).join('')}
                </div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                {t('exhibition.b2b.lounge.title')}
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">
                  {t('exhibition.b2b.lounge.features').map((feature, index) => 
                    index === 0 ? `· ${feature}` : `\n· ${feature}`
                  ).join('')}
                </div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                {t('exhibition.b2b.seminar.title')}
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">
                  {t('exhibition.b2b.seminar.features').map((feature, index) => 
                    index === 0 ? `· ${feature}` : `\n· ${feature}`
                  ).join('')}
                </div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                {t('exhibition.b2b.showcase.title')}
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">
                  {t('exhibition.b2b.showcase.features').map((feature, index) => 
                    index === 0 ? `· ${feature}` : `\n· ${feature}`
                  ).join('')}
                </div>
              </div>
            </div>
            
            <div className="b2b-item">
              <div className="b2b-item-title">
                {t('exhibition.b2b.online.title')}
              </div>
              <div className="b2b-item-content">
                <div className="b2b-item-desc">
                  {t('exhibition.b2b.online.features').map((feature, index) => 
                    index === 0 ? `· ${feature}` : `\n· ${feature}`
                  ).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN 섹션 */}
      <section className="exhibition-why-join-section">
        <div className="exhibition-why-join-inner">
          <div className="why-join-content">
            <h2 className="why-join-title">WHY<br/>JOIN</h2>
          </div>
          <div className="why-join-image">
            <img src={exSec07Img} alt="Why Join HYPECON" />
          </div>
        </div>
      </section>

      {/* FOR 섹션들 */}
      <section className="exhibition-for-section">
        <div className="exhibition-for-inner">
          <div className="for-grid">
            <div className="for-item">
              <div className="for-title for-brands-title">FOR BRANDS</div>
              <div className="for-content">
                <p>
                  {t('exhibition.conclusion.brand').map((line, index) => (
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <span className="brand-dream-title">{line}</span>
                      ) : (
                        line
                      )}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
            
            <div className="for-item">
              <div className="for-title for-guests-title">FOR GUESTS</div>
              <div className="for-content">
                <p>
                  {t('exhibition.conclusion.visitor').slice(0, 5).map((line, index) => (
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <span className="guest-title">{line}</span>
                      ) : (
                        line
                      )}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
            
            <div className="for-item">
              <div className="for-title for-buyer-title">FOR BUYER</div>
              <div className="for-content">
                <p>
                  <span className="buyer-title">
                    {t('exhibition.conclusion.visitor')[5]}<br/>
                    {t('exhibition.conclusion.visitor')[6]}
                  </span>
                  <br />
                  {t('exhibition.conclusion.visitor').slice(7, 9).map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
            
            <div className="for-item">
              <div className="for-title for-influencer-title">FOR INFLUENCER</div>
              <div className="for-content">
                <p>
                  <span className="influencer-title">
                    {t('exhibition.conclusion.visitor')[9]}<br/>
                    {t('exhibition.conclusion.visitor')[10]}
                  </span>
                  <br />
                  {t('exhibition.conclusion.visitor').slice(11, 15).map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExhibitionPage; 