import React, { createContext, useContext, useState, useEffect } from 'react';
import { getText } from '../locales/translations';

// 언어 컨텍스트 생성
const LanguageContext = createContext();

// 언어 프로바이더 컴포넌트
export const LanguageProvider = ({ children }) => {
  // 로컬 스토리지에서 언어 설정 가져오기, 없으면 'KR' 기본값 사용
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('hypecon-language');
    return savedLanguage || 'KR';
  });

  // 언어 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('hypecon-language', language);
    console.log('Language set to:', language); // 디버깅용 로그
  }, [language]);

  // 언어 변경 함수
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'KR' ? 'EN' : 'KR');
  };

  // 텍스트 가져오기 함수
  const t = (path) => {
    return getText(language, path);
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 커스텀 훅
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 