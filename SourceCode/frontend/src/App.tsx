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
      default: '#f5f5f7', // Yumuşak açık gri - Apple.com tarzı (beyaz değil ama göz yormaz)
      paper: '#FFFFFF',   // Kartlar tam beyaz kalıyor, sayfadan belirgin biçimde ayrılıyor
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // 0'dan 12'ye taşıdık - tüm MUI bileşenlerine otomatik uygulanır
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Butonlara orta yuvarlaklık - ne kaba köşe ne balon gibi
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // Bu CSS ThemeProvider üzerinden tüm Card bileşenlerine uygulanıyor
          borderRadius: 16, // Kartlara güzel yuvarlak köşe
          transition: 'transform 0.35s ease, box-shadow 0.35s ease', // Yumuşak geçiş
          '&:hover': {
            transform: 'translateY(-6px)', // Hafifçe yukarı kalkma efekti
            boxShadow: '0 20px 40px rgba(26, 35, 126, 0.15)', // Lacivert tonlu derin gölge
          }
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: '16px 16px 0 0', // Resmin sadece üst köşeleri yuvarlak (alt dümdüz)
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6, // Chip'ler çok yuvarlak olunca ucuz görünüyor, orta iyi
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
