import { Box, Typography, Button, Grid, Paper, Container } from '@mui/material';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Home = () => {
  const featuredProducts = mockProducts.filter((p) => p.isFeatured).slice(0, 4);
  const bestSellers = mockProducts.slice(5, 9);
  const newArrivals = mockProducts.slice(8, 12);

  return (
    <Box sx={{ pb: 8, pt: 8 }}>

      {/* Öne Çıkan Ürünler Vitrini */}
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 900 }}>
            Öne Çıkan Stiller
          </Typography>
          <Button component={Link} to="/products" color="primary" endIcon={<ArrowForwardIcon />} sx={{ fontWeight: 'bold' }}>
            Tümünü Gör
          </Button>
        </Box>

        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Trend Olanlar (Çok Satanlar) */}
      <Container sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 900 }}>
            Trend Olanlar (Çok Satanlar)
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {bestSellers.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Yeni Eklenenler */}
      <Container sx={{ mb: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 900 }}>
            Yeni Sezon Gözlükler
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {newArrivals.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sipariş Güvenceleri - Sayfa Sonu */}
      <Container sx={{ mb: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', px: 2 }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>Ücretsiz ve Hızlı Kargo</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.8 }}>
              Tüm gönderimlerde anında kargoya çıkış ve Türkiye'nin her yerine ücretsiz teslimat avantajı sunuyoruz.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', px: 2 }}>
            <VerifiedUserOutlinedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>2 Yıl Orijinal Garanti</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.8 }}>
              Tüm ürünlerimiz %100 orijinal marka garantilidir ve distribütör güvencesiyle parça desteğine sahiptir.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', px: 2 }}>
            <SupportAgentOutlinedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>Uzman Optik Desteği</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.8 }}>
              Cam veya çerçeve seçimlerinizle alakalı uzman ekibimiz 7/24 size online destek vermeye hazır.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
