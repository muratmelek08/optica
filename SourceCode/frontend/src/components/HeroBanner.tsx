import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

// Banner slaytları için veri - her biri bir markaya ait
const bannerSlides = [
  {
    image: '/images/banners/banner-rayban.jpg',
    brand: 'Ray-Ban',
    title: 'Ray-Ban Koleksiyonu',
    subtitle: 'Efsanevi tarz, zamansız şıklık. Yeni sezon modelleri şimdi burada.',
    cta: 'Keşfet',
    accent: 'rgba(235, 135, 135, 0.45)', // Ray-Ban kırmızısı tonu
  },
  {
    image: '/images/banners/banner-versace.jpg',
    brand: 'Versace',
    title: 'Versace Medusa',
    subtitle: 'İtalyan lüksünün doruk noktası. Cesur ol, farklı ol.',
    cta: 'Koleksiyonu İncele',
    accent: 'rgba(212, 175, 55, 0.35)', // Versace altın tonu
  },
  {
    image: '/images/banners/banner-prada.jpg',
    brand: 'Prada',
    title: 'Prada Gözlük',
    subtitle: "Milano'nun minimalist zarafetini yüzünüze taşıyın.",
    cta: 'Ürünleri Gör',
    accent: 'rgba(97, 113, 121, 0.45)', // Prada antrasit tonu
  },
  {
    image: '/images/banners/banner-gucci.jpg',
    brand: 'Gucci',
    title: 'Gucci',
    subtitle: 'İkonik GG logolu çerçeveler ile tarzınızı konuşturun.',
    cta: 'Keşfet',
    accent: 'rgba(114, 177, 118, 0.35)', // Gucci yeşili tonu
  },
];

const HeroBanner = () => {
  const navigate = useNavigate();
  // Hangi slide aktif, bunu tutuyorum
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sonraki slida geç
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  // Önceki slida geç
  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  // Her 5 saniyede bir otomatik geçiş yapıyor
  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval); // temizleme: component unmount olunca interval durur
  }, [goNext]);

  const slide = bannerSlides[currentIndex];

  return (
    <Box sx={{ position: 'relative', width: '100%', height: { xs: 320, sm: 420, md: 520 }, overflow: 'hidden', borderRadius: 3, mb: 6 }}>

      {/* Arka Plan Resmi - her slide için parlaklık/doygunluk artırılmış */}
      {bannerSlides.map((s, idx) => (
        <Box
          key={idx}
          sx={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            transition: 'opacity 0.9s ease-in-out',
            opacity: idx === currentIndex ? 1 : 0,
            // Fotoğrafın kendisini daha canlı ve parlak yap
            filter: 'brightness(1.15) saturate(1.3) contrast(1.05)',
            // Ken Burns zoom yavaş (6s), opacity geçişi hızlı (0.8s) - ayrı ayrı tanımlandı
            transform: idx === currentIndex ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 0.8s ease-in-out, transform 6s ease-out',
          }}
        />
      ))}

      {/* Soldan sağa koyu-açık gradient + marka renk tonu */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)`,
      }} />
      {/* Marka rengi accent katman - her slide'a hafif renk kimliği katar */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundColor: slide.accent,
        mixBlendMode: 'multiply',
        transition: 'background-color 0.9s ease',
      }} />

      {/* Metin ve CTA Alanı */}
      <Box
        sx={{
          position: 'relative', zIndex: 2,
          height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', px: { xs: 3, sm: 6, md: 8 }, maxWidth: 600
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 3, mb: 1, fontSize: '0.85rem' }}
        >
          {slide.brand}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: 'white', fontWeight: 900, lineHeight: 1.1, mb: 2, fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' } }}
        >
          {slide.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 420, lineHeight: 1.6 }}
        >
          {slide.subtitle}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate(`/products?brand=${encodeURIComponent(slide.brand)}`)}
          sx={{ alignSelf: 'flex-start', px: 4, py: 1.5, fontWeight: 700, fontSize: '1rem' }}
        >
          {slide.cta}
        </Button>
      </Box>

      {/* Sol/Sağ Ok Butonları */}
      <IconButton
        onClick={goPrev}
        sx={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 3,
          color: 'white', backgroundColor: 'rgba(0,0,0,0.35)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={goNext}
        sx={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 3,
          color: 'white', backgroundColor: 'rgba(0,0,0,0.35)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Alt Nokta Navigasyonu */}
      <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', gap: 1 }}>
        {bannerSlides.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            sx={{
              width: idx === currentIndex ? 28 : 8, height: 8,
              borderRadius: 4,
              backgroundColor: idx === currentIndex ? 'secondary.main' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroBanner;
