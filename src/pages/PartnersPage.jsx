import React from 'react';

function PartnersPage() {
  return (
      <section id="partners" className="waterbomb-section dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="waterbomb-section-title mb-6">PARTNERS</div>
          <div
            className="waterbomb-body"
            style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2rem' }}>
            <span style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              브랜드와 연결되는 가장 스타일리시한 접점
            </span>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'SPOTLIGHT SPONSOR', desc: '메인 스폰서\n브랜드 메인 타이틀 공동노출' },
              { name: 'TRENDSETTER SPONSOR', desc: '특정 존 명칭 후원\n체험 콘텐츠 연계' },
              { name: 'EXPERIENCE SPONSOR', desc: '포토존, 스타일링존\n특정 체험 콘텐츠 네이밍' },
              { name: 'COMMUNITY SPONSOR', desc: '굿즈 제작 협업\n서포터즈 캠페인' }
            ].map((partner, index) => (
              <div key={index} className="waterbomb-card fade-in">
                <h3>{partner.name}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{partner.desc}</p>
              </div>
            ))}
          </div>

        <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <button className="waterbomb-btn">
              <span>BECOME A PARTNER</span>
            </button>
          </div>
        </div>
      </section>
  );
}

export default PartnersPage; 