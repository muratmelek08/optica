import { AppBar, Toolbar, Typography, Badge, IconButton, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

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
    <AppBar position="sticky" color="primary" elevation={3} sx={{ zIndex: 1100 }}>
      {/* Üst Ana Menü */}
      <Toolbar sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', color: 'white' }} component={Link} to="/">
          {/* Logo beyaz olsun diye invert edildi */}
          <img src="https://img.icons8.com/color/48/000000/sun-glasses.png" alt="logo" style={{ width: 32, height: 32, marginRight: 12, filter: 'brightness(0) invert(1)' }} />
          <Typography 
            variant="h5" 
            sx={{ fontWeight: 900, letterSpacing: 3, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
          >
            OPTİCA
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 3 }, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 700, letterSpacing: 1, display: { xs: 'none', sm: 'flex' }, transition: 'all 0.3s', '&:hover': { color: 'secondary.main' } }}>
            VİTRİN
          </Button>
          <Button color="inherit" component={Link} to="/products" sx={{ fontWeight: 700, letterSpacing: 1, transition: 'all 0.3s', '&:hover': { color: 'secondary.main' } }}>
            KOLEKSİYON
          </Button>
          
          <IconButton onClick={() => navigate('/cart')} sx={{ ml: 1, color: 'white', transition: 'all 0.3s', '&:hover': { color: 'secondary.main', transform: 'scale(1.1)' } }}>
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Alt Kategori Menüsü (Açık Gri veya Beyaz) */}
      <Box sx={{ backgroundColor: '#ffffff', overflowX: 'auto', borderTop: '1px solid #f0f0f0', px: { xs: 0, sm: 2 } }}>
        <Toolbar 
          variant="dense" 
          sx={{ 
            minHeight: 44, 
            display: 'flex', 
            justifyContent: isMobile ? 'flex-start' : 'center', 
            gap: { xs: 1, sm: 3 }
          }}
        >
          {categories.map((category) => (
            <Button 
              key={category} 
              color="inherit" 
              sx={{ 
                textTransform: 'none', 
                fontSize: '0.85rem', 
                whiteSpace: 'nowrap',
                fontWeight: 600,
                color: 'grey.700',
                transition: 'color 0.2s',
                '&:hover': { color: 'primary.main', backgroundColor: 'transparent' } // Sadece yazi vurgulaniyor elit bir sekilde
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
