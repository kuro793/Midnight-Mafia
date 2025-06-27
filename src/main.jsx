import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  console.log("main.jsx 실행")
  if (rootEl) {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    console.error("❌ #root 엘리먼트를 찾을 수 없습니다.");
  }
});
