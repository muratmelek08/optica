import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Container, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

// Modern E-Ticaret Teması Yapılandırması
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A237E', // Şık ve güven veren Koyu Lacivert (Navy Blue)
    },
    secondary: {
      main: '#ff6d00', // Seçimleri ve aksiyon butonlarını belli edecek premium turuncu
    },
    background: {
      default: '#FAFAFA', // Çok hafif kırık beyaz arkaplan (gözü yormaz)
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600, // Moda sitelerindeki net, kalın buton fontları
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Kaba köşeler yerine köşeli keskin veya 0 radius elit görünür ama 4 kalsın, biz 0 yapalım
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  },
  shape: {
    borderRadius: 0, // Keskin modern hatlar (High-end fashion siteleri genelde böyle kullanır)
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Tarayıcıların default margin vs. değerlerini sıfırlar, temiz bir sayfa verir */}
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Container>
          <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#000', color: 'white', textAlign: 'center', borderTop: '1px solid #333' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Box>OPTİCA &copy; 2026 - Tüm Hakları Saklıdır</Box>
              <Box sx={{ color: 'grey.500', fontSize: '0.85rem' }}>E-Ticaret Mezuniyet Projesi</Box>
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
