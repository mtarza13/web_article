import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FloatingBackground from '../components/FloatingBackground';
import ReadingProgress from '../components/ReadingProgress';
import '../styles/pages/ArticlePage.css';

const ArticlePage = () => {
  // Add HTML title
  useEffect(() => {
    document.title = "صباح المهندسة - Morning of the Engineer";
  }, []);
  
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe article container
    const articleContainer = document.getElementById('articleContainer');
    if (articleContainer) observer.observe(articleContainer);

    // Parallax effect for text
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxTexts = document.querySelectorAll('.parallax-text p');
      
      parallaxTexts.forEach((text, index) => {
        const speed = 0.05 + (index * 0.01);
        const yPos = -(scrolled * speed);
        text.style.transform = `translateY(${yPos}px)`;
      });
      
      // Update navbar background opacity
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const opacity = Math.min(scrolled / 100, 0.95);
        navbar.style.background = `rgba(15, 15, 35, ${opacity})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Create rain effect
    const createRain = () => {
      const rainContainer = document.getElementById('rainContainer');
      if (!rainContainer) return;
      
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const raindrop = document.createElement('div');
          raindrop.className = 'raindrop';
          raindrop.style.left = Math.random() * 100 + '%';
          raindrop.style.animationDelay = Math.random() * 2 + 's';
          raindrop.style.animationDuration = (2.5 + Math.random() * 2) + 's';
          rainContainer.appendChild(raindrop);
          
          // Remove raindrop after animation
          setTimeout(() => {
            if (raindrop.parentNode) {
              raindrop.parentNode.removeChild(raindrop);
            }
          }, 4000);
        }, i * 200);
      }
    };

    // Start rain effect when photo is visible
    const photoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          createRain();
          // Repeat rain effect
          const interval = setInterval(createRain, 6000);
          return () => clearInterval(interval);
        }
      });
    }, { threshold: 0.3 });

    const photoContainer = document.querySelector('.photo-container');
    if (photoContainer) {
      photoObserver.observe(photoContainer);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      photoObserver.disconnect();
    };
  }, []);

  return (
    <div className="article-page" dir="rtl" lang="ar">
      <ReadingProgress />
      <FloatingBackground />
      <Navbar />
      
      <section className="article-section" id="article">
        <div className="article-container" id="articleContainer">
          <Link to="/" className="back-button">
            <span>←</span>
            العودة للمقالات
          </Link>

          <div className="article-meta">
            <span className="article-date">15 مايو، 2024</span>
            <span className="article-category">تأملات</span>
          </div>

          <div className="photo-section">
            <div className="photo-container">
              <div className="photo-overlay"></div>
              <div className="sadness-filter"></div>
              <div className="rain-container" id="rainContainer"></div>
              <div className="photo-caption">
                <div className="photo-title">لحظة تأمل</div>
                <div className="photo-description">
                  في صمت الصباح، تتأمل المهندسة انعكاسها في نافذة مكتبها، 
                  بينما تسقط قطرات المطر كدموع السماء على زجاج أحلامها المؤجلة.
                </div>
              </div>
            </div>
          </div>

          <div className="article-content parallax-text">
            <p style={{ animationDelay: '0.2s' }}>في كل صباح، أستيقظ على منبّه هاتفي الذكي بعد خمس دقائق بالضبط.</p>
            
            <p style={{ animationDelay: '0.4s' }}>لستُ إنسانة منضبطة، فقدت القدرة على النوم بعمق منذ أن أقنعت نفسي أن لا شيء في هذا العالم يستحق التأخير.</p>

            <p style={{ animationDelay: '0.6s' }}>أنا مهندسة.</p>
            
            <p style={{ animationDelay: '0.8s' }}>أعرف كيف تُبنى البنايات، وكيف تسير الكهرباء في الشرايين المعدنية للمدن.</p>
            
            <p style={{ animationDelay: '1.0s' }}>أعرف المعادلات التي تحفظ التوازن في الهياكل، وأعرف أن كل ذلك لا يساوي شيئاً حين تنفجر فوضى الداخل.</p>

            <p style={{ animationDelay: '1.2s' }}>أعيش في منزل عصري، بأثاث لامع، ونوافذ تطلّ على الشارع الرئيسي، ومرآة ترحّب بي كل صباح بعبارة: "صباح الخير".</p>
            
            <p style={{ animationDelay: '1.4s' }}>لكن لا أحد يخبر هذه المرآة أنني لم أعد "بخير"، ولا أنها لا تدري أنني نسيتُ لماذا أستيقظ أصلاً.</p>

            <p style={{ animationDelay: '1.8s' }}>أرتدي خوذتي البيضاء، أرفع رأسي، وأمارس دور المهندسة كما لو كنتُ ممثلة سيئة نسيت نصف نصّها.</p>
            
            <p style={{ animationDelay: '2.0s' }}>أرسم الخطوط، أعدّ التقارير، أشرح للرجال كيف يمرّ الكابل من هنا إلى هناك، ثم أعود إلى منزلي بنفس الخط المستقيم الذي لا يؤدي إلى أي شيء.</p>

            <p style={{ animationDelay: '2.4s' }}>في الليالي، أطفئ الأضواء بهاتفي، لكنني لا أطفئ رأسي… فلهذا الرأس لا زرّ.</p>
            
            <p style={{ animationDelay: '2.6s' }}>إنه يشتغل وحده؛ كلما سكت كل شيء من حولي، بدأ هو بالحديث…</p>
          </div>

          <div className="tags-container">
            <div className="tags">
              <span className="tag">شعر</span>
              <span className="tag">حياة</span>
              <span className="tag">تأمل</span>
              <span className="tag">مهندسة</span>
              <span className="tag">صباح</span>
              <span className="tag">روتين</span>
            </div>
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

export default ArticlePage;
