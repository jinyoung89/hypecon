import React from 'react';
import diverseYouthFashio from '../assets/images/diverse-youth-fashion.jpg';
import boothImage from '../assets/images/booth.png';
import mapImage from '../assets/images/map.png';


function BrandPage() {
  return (
    <section id="brand" className="waterbomb-wave-section" style={{background:'#FF96C5', color:'#000', padding:'0', paddingTop:'90px'}}>
      {/* 상단 이미지 + 텍스트 오버레이 */}
      <div style={{position:'relative', width:'100%', maxHeight:'340px', overflow:'hidden', marginBottom:'2.5rem'}}>
        <img src={diverseYouthFashio} alt="HYPECON 브랜드 파트너십" style={{width:'100%', objectFit:'cover', maxHeight:'340px', display:'block', filter:'brightness(0.82)'}} />
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none'}}>
          <div style={{color:'#fff', fontWeight:700, fontSize:'1.35rem', textShadow:'0 2px 12px rgba(0,0,0,0.32)', textAlign:'center', padding:'0 1.5rem', lineHeight:'1.5', letterSpacing:'-0.5px'}}>
            HYPECON STYLE WEEK에 선다는 건, 단지 참가가 아닌<br/>글로벌 브랜드로 향하는 첫 걸음입니다
          </div>
        </div>
      </div>

      {/* BRAND 타이틀 및 설명 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div className="text-center mb-2">
          <div style={{fontWeight:'900', fontSize:'2.5rem', letterSpacing:'-1px'}}>BRAND</div>
          <div style={{fontWeight:'700', fontSize:'1.4rem', marginTop:'0.5rem'}}>브랜드가 콘텐츠가 되고, 팬덤이 되는 무대</div>
        </div>
        <div className="text-center mb-6" style={{fontSize:'1.05rem', lineHeight:'1.7'}}>
          <span style={{fontWeight:'bold'}}>HYPECON STYLE WEEK</span>에서 당신의 브랜드는 단순한 제품을 넘어<br/>
          Z세대와 함께 만들어가는 살아있는 콘텐츠가 됩니다.
        </div>
      </div>

      {/* "아무 브랜드나 참가할 수 없습니다" 섹션 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2.2rem 1.5rem', marginBottom:'2.5rem', color:'#222', fontSize:'1.08rem', lineHeight:'1.85', letterSpacing:'-0.01em'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1rem', color:'#FF5768', textAlign:'center'}}>
          "아무 브랜드나 참가할 수 없습니다."
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700}}>Z세대가 진짜로 좋아하는,</span><br/>
          패션과 뷰티를 진짜 브랜드만 선택되는 무대
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          하이픈은 브랜드의 <span style={{fontWeight:700}}>'규모'</span>보다 함께 영향력을 여기 봅니다.
        </div>
        <div style={{marginBottom:'1.1rem'}}>
          <span style={{fontWeight:700}}>Z세대가 찾고, 착고, 퍼뜨리는 가장 즉각한 스타일 베어</span><br/>
          하이픈은 브랜드가 꿈꾸는 다음 레벨입니다.
        </div>
      </div>

      {/* 브랜드 큐레이션 기준 안내 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>브랜드 큐레이션 기준 안내</div>
        
        <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem'}}>
          {[
            {
              number: '1',
              title: 'Z세대 레퍼 보유 여부',
              content: '인스타그램, 틱톡 등 SNS 상의 팔로워 수, 댓글 반응률, 해 커뮤니티 유무 등\n"실제 팬들이 존재하고, 스타일에 영향력을 미치는 브랜드인가?"',
              color: '#FF5768'
            },
            {
              number: '2',
              title: '브랜드 정체성과 스타일 특성성',
              content: '콘셉트 명료도, 컬러 넘어서, 차기반의 세계관과 무드를 가진 브랜드인지\n바로와 아이덴티티, 톤&매, 재품 스타일이 명확히 구분되는가',
              color: '#00A5E3'
            },
            {
              number: '3',
              title: '실제 고객 반응과 리뷰 후기',
              content: '최근 6개월 이내의 온라인 판매 후기, 웹사이트 리뷰, 고객 피드백을 통해\n오프라인, 품질향, 고객 피드백 기반의 실제 반응을 체크',
              color: '#FFBF65'
            },
            {
              number: '4',
              title: '오프라인 확장 잠재력',
              content: '지금까지 온라인 중심이었다면, 오프라인 접점에서 매력적으로 보일 수\n있는가?\n피팅/체험/촬영을 통해 반응을 얻을 수 있는 제품 구성 여부',
              color: '#00CDAC'
            },
            {
              number: '5',
              title: '글로벌 확장 및 컨텐츠화 가능성',
              content: '한국 패션의 반응, 글로벌 매장 비즈, 해외 소셜 인정 여부\n브랜드의 컨텐츠화(릴스, 브이로그, 화보화 등) 가능성',
              color: '#FF60A8'
            }
          ].map((item, index) => (
            <div key={index} style={{
              background:'#fff',
              borderRadius:'18px',
              boxShadow:'0 2px 16px rgba(0,0,0,0.04)',
              padding:'2rem 1.5rem',
              borderLeft:`8px solid ${item.color}`,
              position:'relative'
            }}>
              <div style={{display:'flex', alignItems:'flex-start', gap:'1.5rem', flexWrap:'wrap'}}>
                <div style={{
                  minWidth:'40px',
                  width:'40px',
                  height:'40px',
                  background:item.color,
                  borderRadius:'50%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'#fff',
                  fontWeight:'bold',
                  fontSize:'1.2rem',
                  flexShrink:0
                }}>
                  {item.number}
                </div>
                <div style={{flex:1, minWidth:'300px'}}>
                  <div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#222', marginBottom:'0.8rem', lineHeight:'1.3'}}>
                    {item.title}
                  </div>
                  <div style={{fontSize:'1.05rem', color:'#666', lineHeight:'1.6', whiteSpace:'pre-line'}}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 얼리버드 참가 신청 혜택 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>얼리버드 참가 신청 혜택</div>
        
        <div style={{background:'#fff', borderRadius:'18px', boxShadow:'0 2px 16px rgba(0,0,0,0.04)', padding:'2rem 1.5rem', color:'#222'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr', gap:'0.8rem'}}>
            {[
              '얼리버드 특가 적용 (선착순)',
              '위치 우선 배정 (입구/핵심 동선/무대 인접)',
              '코너 부스 추가 비용 면제 (2부스 이상 신청 시)',
              'SNS 사전 홍보 콘텐츠 기회',
              '브랜드 단독 패캠쇼 / AI 패션쇼 참여 우선권 (선정 브랜드 한정)',
              '브랜드 인터뷰 콘텐츠 및 프로모션 영상 우선 배정',
              '인플루언서, 황홍, 스타일링샵 콘텐츠 연계 우선 지원',
              'B2B 바이어 매칭 프로그램 우선 배정',
              '굿즈 제작 및 커스터마이징 협업 콘텐츠 연계 가능',
              '참가 브랜드 대상 바이어 수주회 등록 가능'
            ].map((benefit, index) => (
              <div key={index} style={{
                display:'flex',
                alignItems:'center',
                padding:'0.8rem 0',
                borderBottom: index !== 9 ? '1px solid #f0f0f0' : 'none'
              }}>
                <div style={{
                  width:'8px',
                  height:'8px',
                  background:'#FF5768',
                  borderRadius:'50%',
                  marginRight:'1rem',
                  flexShrink:0
                }}></div>
                <div style={{fontSize:'1.05rem', lineHeight:'1.5'}}>
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 참가신청 절차 */}
      <div className="container mx-auto px-4" style={{maxWidth:'900px', marginBottom:'2.5rem'}}>
        <div style={{fontWeight:'bold', fontSize:'1.35rem', marginBottom:'1.2rem', color:'#222'}}>참가신청 절차</div>
        
        <div style={{position:'relative', paddingLeft:'60px'}}>
          {/* 세로 타임라인 라인 */}
          <div style={{
            position:'absolute',
            left:'30px',
            top:'30px',
            bottom:'30px',
            width:'3px',
            background:'linear-gradient(to bottom, #FF5768, #00A5E3, #FFBF65, #00CDAC, #FF60A8)',
            borderRadius:'2px'
          }}></div>
          
          {[
            {
              step: '1',
              title: '온라인 얼리 참가 신청서 제출',
              description: '참가 마감일: 2025. 09. 30(화)\n신청 방식: 온라인 참가 신청서 제출 → 내부 큐레이션 심사 → 개별 참가 확정 안내\n⚠️ 얼리버드 특가는 부스 소진 시 조기 마감될 수 있습니다.\n📝 부스 배정은 신청 접수 순서, 브랜드 규모, 부스 타입, 브랜드 콘셉트 등을 종합적으로 검토하여 기준에 따라 배정',
              color: '#FF5768'
            },
            {
              step: '2',
              title: '계약금 납부',
              description: '인보이스 송신 후 결제링크 안내\n부스비 총액의 50% 납부\n💳 계약금 미납시 부스 미확정',
              color: '#00A5E3'
            },
            {
              step: '3',
              title: '잔금납부',
              description: '- 기업 : 인보이스 송신 후 60일 이내 완납\n💳 잔금 미납시 배정된 부스 자동 취소',
              color: '#FFBF65'
            },
            {
              step: '4',
              title: '부대시설 신청 및 입금',
              description: '~2025. 12. 31(수)',
              color: '#00CDAC'
            },
            {
              step: '5',
              title: '전시회 개막',
              description: '~2026. 2.19(목)',
              color: '#FF60A8'
            }
          ].map((item, index) => (
            <div key={index} style={{
              position:'relative',
              marginBottom: index < 4 ? '2.5rem' : '0',
              display:'flex',
              alignItems:'flex-start',
              gap:'1.5rem'
            }}>
              {/* 단계 번호 원 */}
              <div style={{
                position:'absolute',
                left:'-45px',
                top:'10px',
                width:'60px',
                height:'60px',
                background:item.color,
                borderRadius:'50%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                color:'#fff',
                fontWeight:'bold',
                fontSize:'1.5rem',
                boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
                border:'4px solid #fff',
                zIndex:10
              }}>
                {item.step}
              </div>
              
              {/* 내용 카드 */}
              <div style={{
                background:'#fff',
                borderRadius:'12px',
                padding:'1.8rem 1.5rem',
                boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
                borderLeft:`4px solid ${item.color}`,
                width:'100%',
                marginLeft:'15px'
              }}>
                <div style={{fontWeight:'bold', fontSize:'1.2rem', color:'#222', marginBottom:'0.8rem'}}>
                  {item.title}
                </div>
                <div style={{fontSize:'0.95rem', color:'#666', lineHeight:'1.6', whiteSpace:'pre-line'}}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 부스 이미지 */}
        <div className="container mx-auto px-4" style={{maxWidth:'500px', marginBottom:'2.5rem' , marginTop: '3.5rem'}}>
          <div style={{textAlign:'center'}}>
            <img 
              src={boothImage} 
              alt="HYPECON 부스 안내" 
              style={{
                width:'100%', 
                maxWidth:'800px', 
                height:'auto', 
                borderRadius:'12px',
                boxShadow:'0 4px 20px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
        </div>

         {/* map 이미지 */}
         <div className="container mx-auto px-4" style={{maxWidth:'500px', marginBottom:'2.5rem' , marginTop: '3.5rem'}}>
          <div style={{textAlign:'center'}}>
            <img 
              src={mapImage} 
              alt="HYPECON 부스 안내" 
              style={{
                width:'100%', 
                maxWidth:'800px', 
                height:'auto', 
                borderRadius:'12px',
                boxShadow:'0 4px 20px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
        </div>
        
        {/* 모바일 반응형 CSS */}
        <style>{`
          @media (max-width: 768px) {
            .container .mx-auto .px-4 > div[style*="paddingLeft"] {
              padding-left: 40px !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div[style*="position:absolute"][style*="left:30px"] {
              left: 20px !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div > div[style*="position:absolute"][style*="left:-45px"] {
              left: -30px !important;
              width: 40px !important;
              height: 40px !important;
              font-size: 1.2rem !important;
            }
            .container .mx-auto .px-4 > div[style*="paddingLeft"] > div > div[style*="marginLeft:15px"] {
              margin-left: 10px !important;
              padding: 1.2rem 1rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default BrandPage; 