import React from 'react';
import './TicketPage.css';
import ticketImg from '../assets/images/ticket.png';
import { useLanguage } from '../contexts/LanguageContext';

function TicketPage() {
  const { t, language } = useLanguage();
  
  return (
    <div className="ticket-page-root">
      {/* 상단 배경 이미지 섹션 */}
      <section className="ticket-hero-section" style={{backgroundImage: `url(${ticketImg})`}}>
        <div className="ticket-hero-overlay"></div>
        <div className="ticket-hero-text">
          <div className="ticket-hero-main-title">
            {t('ticket.hero.subtitle')}
          </div>
        </div>
      </section>

      {/* TICKET INFORMATION 섹션 */}
      <section className="ticket-info-section">
        <div className="ticket-info-inner">
          <h2 className="hypecon-large-title hypecon-large-title--primary">{t('ticket.info.title')}</h2>
          <div className="ticket-info-content">
            <p className="ticket-info-text" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
              {t('ticket.info.text')}
            </p>
          </div>
        </div>
      </section>

      {/* 온몸으로 즐기는 스타일 페어 섹션 */}
      <section className="ticket-play-section">
        <div className="ticket-play-inner">
          <h3 className="ticket-play-subtitle">{t('ticket.play.subtitle')}</h3>
          <div className="ticket-play-content">
            <div className="ticket-play-left">
              <div className="ticket-play-title">
                {t('ticket.play.title').map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </div>
            </div>
            <div className="ticket-play-separator"></div>
            <div className="ticket-play-right">
              <ul className="ticket-play-list">
                {t('ticket.play.list').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 이런 분들에게 추천해요 섹션 */}
      <section className="ticket-recommend-section">
        <div className="ticket-recommend-inner">
          <div className="ticket-recommend-header">
            <h2 className="ticket-recommend-title">{t('ticket.recommend.title')}</h2>
          </div>
          <div className="ticket-recommend-desc">
            {t('ticket.recommend.desc').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="ticket-recommend-box">
            <ul className="ticket-recommend-list">
              {t('ticket.recommend.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When & Where 섹션 */}
      <section className="ticket-whenwhere-section">
        <div className="ticket-whenwhere-inner">
          <div className="ticket-whenwhere-header">
            <h2 className="ticket-whenwhere-title">{t('ticket.whenWhere.title')}</h2>
          </div>
          <div className="ticket-whenwhere-box">
            <div className="ticket-whenwhere-content">
              <div className="ticket-whenwhere-left">
                <div className="ticket-whenwhere-dates" style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {t('ticket.whenWhere.dates')}
                </div>
                <div className="ticket-whenwhere-location" style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {t('ticket.whenWhere.location')}
                </div>
              </div>
              <div className="ticket-whenwhere-right">
                <div className="ticket-whenwhere-schedule">
                  {t('ticket.whenWhere.schedule').map((item, index) => (
                    <div className="schedule-item" key={index}>
                      <span className="schedule-date">{item.date}</span>
                      <span className="schedule-time">{item.time}</span>
                      <span className="schedule-last">{item.last}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 티켓 가격 & 혜택 섹션 */}
      <section className="ticket-price-section">
        <div className="ticket-price-inner">
          <div className="ticket-price-header">
            <h2 className="ticket-price-title">{t('ticket.price.title')}</h2>
            {language === 'EN' && (
              <p className="ticket-price-usd-notice" style={{
                marginTop: 'clamp(1rem, 2vw, 1.5rem)',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                color: '#666',
                textAlign: 'center'
              }}>
                {t('ticket.price.usdNotice')}
              </p>
            )}
          </div>
          <div className="ticket-price-box">
            <div className="ticket-price-table-container">
              <table className="ticket-price-table">
                <thead>
                  <tr>
                    {t('ticket.price.table.headers').map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t('ticket.price.table.rows').map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* 모바일용 카드 레이아웃 */}
              <div className="ticket-price-table-mobile">
                {t('ticket.price.table.rows').map((row, index) => (
                  <div key={index} className="ticket-card">
                    <div className="ticket-card-header">
                      {row[0]}
                    </div>
                    <div className="ticket-card-row">
                      <span className="ticket-card-label">{t('ticket.price.labels.price')}:</span>
                      <span className="ticket-card-value">{row[1]}</span>
                    </div>
                    <div className="ticket-card-row">
                      <span className="ticket-card-label">{t('ticket.price.labels.benefits')}:</span>
                      <span className="ticket-card-value">{row[2]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="ticket-price-note" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }} dangerouslySetInnerHTML={{__html: t('ticket.price.note')}}>
            </p>

            <h3 className="ticket-refund-title">{t('ticket.refund.title')}</h3>
            <p className="ticket-refund-intro" style={{
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              wordWrap: 'break-word'
            }}>
              {t('ticket.refund.intro')}
            </p>
            <ul className="ticket-refund-list">
              {t('ticket.refund.list').map((item, index) => (
                <li key={index} style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }} dangerouslySetInnerHTML={{__html: item}}>
                </li>
              ))}
            </ul>

            <h3 className="ticket-notes-title">{t('ticket.notes.title')}</h3>
            <ul className="ticket-notes-list">
              {t('ticket.notes.list').map((item, index) => (
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

            <h3 className="ticket-booking-title">{t('ticket.booking.title')}</h3>
            <ol className="ticket-booking-list">
              {t('ticket.booking.list').map((item, index) => (
                <li key={index} style={{
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word'
                }}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 새로운 섹션 */}
      <section className="ticket-new-section">
        <div className="ticket-new-inner">
          <button 
            className="ticket-new-button"
            onClick={() => window.open('https://docs.google.com/forms/d/1qloDsLH1ODQeTmSJQoUrPKQ1fGNs5yi6vw1gbh-IYfM/edit', '_blank')}
          >
            {t('ticket.earlyBird.buttonText')}
          </button>
          <p className="ticket-new-text">
            {t('ticket.earlyBird.description')}
          </p>
        </div>
      </section>
    </div>
  );
}

export default TicketPage; 