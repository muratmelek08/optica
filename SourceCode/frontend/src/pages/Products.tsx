import { useState, useMemo } from 'react';
import { Typography, Grid, Box, Button, Chip, Divider, Paper } from '@mui/material';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import { useLocation, Link } from 'react-router-dom';
import { colorMap } from '../utils/colorMap';

// Tüm benzersiz markaları listeden çek (otomatik, elle yazmaya gerek yok)
const allBrands = [...new Set(mockProducts.map((p) => p.brand))].sort();

// Tüm benzersiz renkleri çek
const allColors = [...new Set(mockProducts.flatMap((p) => p.color ?? []))].sort();

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const brandParam = queryParams.get('brand'); // Bannerdan gelen marka filtresi

  // Seçili marka ve renk state'leri
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParam);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let result = mockProducts;

    // Önce kategori filtresini uygula
    if (category) {
      result = result.filter((p) => {
        const gender = p.gender.toLowerCase();
        switch (category) {
          case 'Kadın': return gender === 'kadın' || gender === 'unisex';
          case 'Erkek': return gender === 'erkek' || gender === 'unisex';
          case 'Çocuk': return gender === 'çocuk';
          case 'Mavi Işık Koruma': return p.lensType === 'Mavi Işık Filtreli';
          case 'Güneş Gözlüğü': return p.lensType === 'Polarize' || p.lensType === 'UV Korumalı' || p.lensType === 'Standart';
          case 'Sanal Deneme': return !!p.isFeatured;
          case 'Aksesuar': return false;
          default: return true;
        }
      });
    }

    // Sonra marka filtresini uygula
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // En son renk filtresini uygula
    if (selectedColor) {
      result = result.filter((p) => p.color?.includes(selectedColor));
    }

    return result;
  }, [category, selectedBrand, selectedColor]);

  const pageTitle = selectedBrand
    ? `${selectedBrand} Gözlükleri`
    : category
      ? `${category} Koleksiyonu`
      : 'Tüm Gözlük Koleksiyonu';

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>

      {/* === SOL FİLTRE PANELİ === */}
      <Paper elevation={0} sx={{ width: 220, flexShrink: 0, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, display: { xs: 'none', md: 'block' } }}>

        {/* Marka Filtresi */}
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>Marka</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}>
          <Button
            size="small"
            variant={!selectedBrand ? 'contained' : 'text'}
            onClick={() => setSelectedBrand(null)}
            sx={{ justifyContent: 'flex-start', fontWeight: !selectedBrand ? 700 : 400 }}
          >
            Tümü
          </Button>
          {allBrands.map((brand) => (
            <Button
              key={brand}
              size="small"
              variant={selectedBrand === brand ? 'contained' : 'text'}
              onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
              sx={{ justifyContent: 'flex-start', fontWeight: selectedBrand === brand ? 700 : 400 }}
            >
              {brand}
            </Button>
          ))}
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Renk Filtresi */}
        <Typography variant="subtitle1" fontWeight={700} gutterBottom>Renk</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {allColors.map((color) => (
            <Box
              key={color}
              onClick={() => setSelectedColor(selectedColor === color ? null : color)}
              title={color}
              sx={{
                width: 28, height: 28,
                borderRadius: '50%',
                backgroundColor: colorMap[color] ?? '#ccc',
                cursor: 'pointer',
                border: selectedColor === color ? '3px solid' : '2px solid',
                borderColor: selectedColor === color ? 'primary.main' : 'rgba(0,0,0,0.15)',
                transition: 'transform 0.2s, border 0.2s',
                '&:hover': { transform: 'scale(1.2)' },
                // Şeffaf renk için özel arka plan deseni
                ...(color === 'Şeffaf' && {
                  background: 'linear-gradient(135deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%)',
                  backgroundSize: '8px 8px',
                })
              }}
            />
          ))}
        </Box>
        {selectedColor && (
          <Button size="small" onClick={() => setSelectedColor(null)} sx={{ mt: 1, p: 0 }}>
            × Rengi Temizle
          </Button>
        )}
      </Paper>

      {/* === ÜRÜN LİSTESİ === */}
      <Box sx={{ flex: 1 }}>
        {/* Üst başlık ve aktif filtre etiketleri */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
            {pageTitle}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {selectedBrand && (
              <Chip label={selectedBrand} onDelete={() => setSelectedBrand(null)} color="primary" variant="outlined" />
            )}
            {selectedColor && (
              <Chip
                label={selectedColor}
                onDelete={() => setSelectedColor(null)}
                sx={{ backgroundColor: colorMap[selectedColor] ?? '#ccc', color: 'white' }}
              />
            )}
          </Box>
        </Box>

        {filteredProducts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Bu filtreye uygun ürün bulunamadı.
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/products"
              sx={{ mt: 2 }}
              onClick={() => { setSelectedBrand(null); setSelectedColor(null); }}
            >
              Tüm Ürünleri Gör
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Products;
