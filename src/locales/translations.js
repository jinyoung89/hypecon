// 언어별 번역 파일 가져오기
import ko from './ko';
import en from './en';

// 언어별 번역 텍스트 객체
export const translations = {
  KR: ko,
  EN: en
};

// 언어별 텍스트를 가져오는 헬퍼 함수
export const getText = (language, path) => {
  const keys = path.split('.');
  let result = translations[language];
  
  for (const key of keys) {
    if (result && result[key]) {
      result = result[key];
    } else {
      console.warn(`Translation not found for path: ${path} in language: ${language}`);
      return path; // 경로를 그대로 반환
    }
  }
  
  return result;
}; 