import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

// GitHub Pages를 위한 basename 설정
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/hypecon' : '';

console.log('Current hostname:', window.location.hostname);
console.log('Is GitHub Pages:', isGitHubPages);
console.log('Using basename:', basename);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
