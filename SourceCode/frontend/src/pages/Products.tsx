import { Typography, Grid, Box, Button } from '@mui/material';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  const filteredProducts = useMemo(() => {
    if (!category) return mockProducts; // Filtre yoksa tümünü göster
    
    return mockProducts.filter((p) => {
      const gender = p.gender.toLowerCase();
      const lens = p.lensType;
      
      switch(category) {
        case 'Kadın':
          return gender === 'kadın' || gender === 'unisex' || gender === 'üniseks';
        case 'Erkek':
          return gender === 'erkek' || gender === 'unisex' || gender === 'üniseks';
        case 'Çocuk':
          return gender === 'çocuk';
        case 'Mavi Işık Koruma':
          return lens === 'Mavi Işık Filtreli';
        case 'Güneş Gözlüğü':
          return lens === 'Polarize' || lens === 'UV Korumalı' || lens === 'Standart';
        case 'Sanal Deneme':
          return p.isFeatured; // Vitrin ürünlerini sanal deneme sayalım
        case 'Aksesuar':
          return false; // Veritabanında (mockData) şu an aksesuar kaydı yok
        default:
          return true; // Markalar vb. gelirse hepsini göster
      }
    });
  }, [category]);

  const pageTitle = category ? `${category} Koleksiyonu` : "Tüm Gözlük Koleksiyonu";

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary" sx={{ mb: 4 }}>
        {pageTitle}
      </Typography>

      {filteredProducts.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Bu kategoride henüz yayınlanmış bir ürün bulunamadı.
          </Typography>
          <Button variant="outlined" component={Link} to="/products" sx={{ mt: 2 }}>
            Tüm Ürünleri Gör
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
