import { AppBar, Toolbar, Typography, Badge, IconButton, Button, Box, Divider, useTheme, useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Arama çubuğu vs. için sabit kategori listesi
const categories = [
  "Güneş Gözlüğü",
  "Kadın",
  "Erkek",
  "Çocuk",
  "Markalar",
  "Aksesuar",
  "Sanal Deneme",
  "Mavi Işık Koruma"
];

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    // position="sticky" sayesinde sayfa kaydırıldığında header hep üstte kalır
    <AppBar position="sticky" elevation={0} sx={{ 
      zIndex: 1100,
      background: 'linear-gradient(135deg, #0D1B4B 0%, #1A237E 60%, #283593 100%)', // Profesyonel lacivert degrade
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      {/* === ÜST KISIM: Logo + Navigasyon === */}
      <Toolbar sx={{ py: 1.5, px: { xs: 2, sm: 3, md: 4 } }}>
        
        {/* Logo Alanı */}
        <Box 
          component={Link} 
          to="/"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'white',
            gap: 1.5
          }}
        >
          {/* Gözlük ikonu - filter ile beyaz yapıldı */}
          <Box sx={{
            width: 40, height: 40, borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.25)'
          }}>
            <img 
              src="https://img.icons8.com/color/48/000000/sun-glasses.png" 
              alt="optica logo" 
              style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)' }} 
            />
          </Box>

          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 900, 
                letterSpacing: 4, 
                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                lineHeight: 1,
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              OPTİCA
            </Typography>
            {/* Küçük bir tagline - çok ince yazı, aşırı dikkat çekmez ama profesyonellik katar */}
            <Typography sx={{ fontSize: '0.6rem', letterSpacing: 2, opacity: 0.6, lineHeight: 1, mt: 0.3 }}>
              PREMIUM EYEWEARs
            </Typography>
          </Box>
        </Box>
        
        {/* Sağ Menü Butonları */}
        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 2 }, alignItems: 'center' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 1.5, 
              fontSize: '0.8rem',
              display: { xs: 'none', sm: 'flex' },
              opacity: 0.85,
              transition: 'all 0.25s ease',
              '&:hover': { opacity: 1, color: '#FF9800', backgroundColor: 'rgba(255,255,255,0.05)' }
            }}
          >
            VİTRİN
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/products" 
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 1.5,
              fontSize: '0.8rem',
              opacity: 0.85,
              transition: 'all 0.25s ease',
              '&:hover': { opacity: 1, color: '#FF9800', backgroundColor: 'rgba(255,255,255,0.05)' }
            }}
          >
            KOLEKSİYON
          </Button>

          {/* Sepet ikonu - hover'da renk değişimi ve ufak büyüme animasyonu */}
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'rgba(255,255,255,0.2)', display: { xs: 'none', sm: 'block' } }} />

          <IconButton 
            onClick={() => navigate('/cart')} 
            sx={{ 
              color: 'white', 
              transition: 'all 0.25s ease',
              position: 'relative',
              '&:hover': { color: '#FF9800', transform: 'scale(1.15)', backgroundColor: 'rgba(255,255,255,0.08)' }
            }}
          >
            <Badge badgeContent={cartCount} color="error" sx={{ '& .MuiBadge-badge': { fontWeight: 700, fontFamily: 'Outfit' } }}>
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* === ALT KISIM: Kategori Menüsü === */}
      {/* Hafif transparan lacivert zemin - üstten biraz daha koyu */}
      <Box sx={{ 
        backgroundColor: 'rgba(0,0,0,0.2)', 
        overflowX: 'auto', 
        borderTop: '1px solid rgba(255,255,255,0.08)',
        '&::-webkit-scrollbar': { display: 'none' } // Yatay scroll çubuğu gizlendi, mobilde daha iyi görünür
      }}>
        <Toolbar 
          variant="dense" 
          sx={{ 
            minHeight: 42, 
            display: 'flex', 
            justifyContent: isMobile ? 'flex-start' : 'center', 
            gap: { xs: 0.5, sm: 2 },
            px: { xs: 1, sm: 3 }
          }}
        >
          {categories.map((category) => (
            <Button 
              key={category} 
              sx={{ 
                textTransform: 'none', 
                fontSize: '0.82rem', 
                whiteSpace: 'nowrap',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: 0.5,
                py: 0.5,
                minWidth: 'auto',
                transition: 'all 0.2s ease',
                borderBottom: '2px solid transparent',
                borderRadius: 0,
                '&:hover': { 
                  color: 'white', 
                  backgroundColor: 'transparent',
                  borderBottomColor: '#FF9800' // Alt çizgi hover efekti - çok şık duruyor
                }
              }}
              onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
            >
              {category}
            </Button>
          ))}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
