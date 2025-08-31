import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FloatingBackground from '../components/FloatingBackground';
import ReadingProgress from '../components/ReadingProgress';
import '../styles/pages/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const titleText = heroTitle.textContent;
      heroTitle.textContent = '';
      
      setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
          if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
          }
        };
        typeWriter();
      }, 1000);
    }
  }, []);

  return (
    <div className="home-page" dir="rtl" lang="ar">
      <ReadingProgress />
      <FloatingBackground />
      <Navbar />
      
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">صباح المهندسة</h1>
          <p className="hero-subtitle">قصة عن الصباحات المتكررة والأحلام المؤجلة في عالم الهندسة</p>
          <Link to="/article" className="read-article-btn">قراءة المقال</Link>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>
      
      <section className="featured-articles">
        <div className="container">
          <h2 className="section-title">مقالات مميزة</h2>
          <div className="articles-grid">
            <article className="article-card">
              <div className="article-thumbnail">
                <img src="/1.webp" alt="صباح المهندسة" />
                <div className="article-overlay"></div>
              </div>
              <div className="article-content">
                <h3 className="article-title">صباح المهندسة</h3>
                <p className="article-excerpt">
                  في كل صباح، أستيقظ على منبّه هاتفي الذكي بعد خمس دقائق بالضبط.
                  لستُ إنسانة منضبطة، فقدت القدرة على النوم بعمق...
                </p>
                <Link to="/article" className="article-link">
                  اقرأ المزيد
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} المجلة الأدبية - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
