import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Chip, Paper, Divider, Rating, TextField } from '@mui/material';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';
import { colorMap } from '../utils/colorMap';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = mockProducts.find((p) => p.id === id);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  // Seçili renk state'i - başlangıçta ilk renk seçili olsun
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    setMainImageIndex(0);
    // Ürün değişince seçili rengi de sıfırla
    setSelectedColor(product?.color?.[0] ?? null);
  }, [id, product]);


  if (!product) {
    // hata verip patlamasin urun yoksa boyle bisey gostersin 
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h5" color="error">Ürün bulunamadı.</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          Geri Dön
        </Button>
      </Box>
    );
  }

  // Renk seçiliyse o renge ait görseller, yoksa genel images dizisi
  const galleryImages = (() => {
    if (selectedColor && product.colorImages?.[selectedColor]) {
      return product.colorImages[selectedColor];
    }
    return product.images && product.images.length > 0 ? product.images : [product.imageUrl];
  })();

  return (
    <Box>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Geri Dön
      </Button>

      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {/* asil secili gorseli buraya basecagiz idex ile cekio asagdan idnx e gore decigsoyor */}
            <Box
              component="img"
              src={galleryImages[mainImageIndex]}
              alt={`${product.model} - Görsel ${mainImageIndex + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
            {/* alttaki minik resim galerisi eger fotlar 2 den fazlasa falan cikicak maptan basioz */}
            {galleryImages.length > 1 && (
              <Box sx={{ display: 'flex', gap: 2, mt: 2, overflowX: 'auto', pb: 1 }}>
                {galleryImages.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    onClick={() => setMainImageIndex(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 1,
                      cursor: 'pointer',
                      border: mainImageIndex === index ? '2px solid #1a237e' : '2px solid transparent',
                      opacity: mainImageIndex === index ? 1 : 0.6,
                      '&:hover': { opacity: 1 }
                    }}
                  />
                ))}
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h4" component="h1" fontWeight="bold">
                  {product.brand} - {product.model}
                </Typography>
                {product.isFeatured && (
                  <Chip label="Öne Çıkan" color="secondary" size="small" />
                )}
              </Box>

              <Typography variant="h5" color="primary" sx={{ my: 2, fontWeight: 'bold' }}>
                {product.price.toLocaleString('tr-TR')} ₺
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                {product.description}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Özellikler:</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                <Chip label={`Cam: ${product.lensType}`} variant="outlined" />
                <Chip label={`Çerçeve: ${product.frameMaterial}`} variant="outlined" />
                <Chip label={`Kullanım: ${product.gender}`} variant="outlined" />
              </Box>

              {/* Stok Durumu - renge özel stok varsa onu göster */}
              {(() => {
                const currentStock = (selectedColor && product.colorStock?.[selectedColor] !== undefined)
                  ? product.colorStock[selectedColor]
                  : product.stock;
                return (
                  <Typography variant="body2" color={currentStock > 0 ? "success.main" : "error.main"} fontWeight="bold" sx={{ mb: 2 }}>
                    {currentStock > 0
                      ? `Stokta var (${currentStock} adet${selectedColor ? ` — ${selectedColor}` : ''})`
                      : `${selectedColor ? selectedColor + ' rengi' : 'Bu ürün'} şu an stokta yok`}
                  </Typography>
                );
              })()}

              {/* Renk Seçimi - colorImages varsa fotoğraf değiştirir */}
              {product.color && product.color.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Renk: <strong>{selectedColor ?? '—'}</strong>
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                    {product.color.map((c) => (
                      <Box
                        key={c}
                        onClick={() => { setSelectedColor(c); setMainImageIndex(0); }}
                        title={c}
                        sx={{
                          width: 32, height: 32,
                          borderRadius: '50%',
                          backgroundColor: colorMap[c] ?? '#ccc',
                          cursor: 'pointer',
                          border: selectedColor === c ? '3px solid #1A237E' : '2.5px solid rgba(0,0,0,0.1)',
                          boxShadow: selectedColor === c ? '0 0 0 2px rgba(26,35,126,0.25)' : 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': { transform: 'scale(1.2)' },
                          ...(c === 'Şeffaf' && { background: 'linear-gradient(135deg, #ddd 25%, #fff 25%, #fff 50%, #ddd 50%, #ddd 75%, #fff 75%)', backgroundSize: '8px 8px' }),
                        }}
                      />
                    ))}
                  </Box>
                  {/* Renk seçimine ait fotoğraf yoksa bilgi ver */}
                  {selectedColor && !product.colorImages?.[selectedColor] && (
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                      Bu renk için özel fotoğraf yüklenmemiş.
                    </Typography>
                  )}
                </Box>
              )}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addToCart(product, selectedColor)} // Seçili rengi sepete aktar
                disabled={(() => {
                  const s = (selectedColor && product.colorStock?.[selectedColor] !== undefined)
                    ? product.colorStock[selectedColor] : product.stock;
                  return s === 0;
                })()}
                sx={{ py: 1.5, fontSize: '1.1rem' }}
              >
                {selectedColor ? `${selectedColor} — Sepete Ekle` : 'Sepete Ekle'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* hoca bilerek calismayan bos yorum yari istiyodu placeholder niyetine onlari ui bastım */}
      <Paper elevation={1} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Kullanıcı Yorumları
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Bu ürüne yorum yapmak için giriş yapmalısınız. Arka uç (backend) bağlantısı kurulduğunda bu alan aktif olacaktır.
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography component="legend" color="text.secondary">Puanınız:</Typography>
            <Rating
              name="product-rating-placeholder"
              value={0}
              size="large"
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              readOnly
            />
          </Box>
          <TextField
            label="Deneyiminizi bizimle paylaşın..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            disabled
          />
          <Button variant="outlined" disabled sx={{ width: 'fit-content' }}>
            Yorumu Kaydet
          </Button>
        </Box>
      </Paper>

      {/* sahte de olsa satici soru sor tassarimi ekledik mui lari kullanarak guzel duruyor */}
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Satıcıya Soru Sor
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Gözlük ölçüleri veya cam özellikleri hakkında daha fazla bilgiye mi ihtiyacınız var?
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
          <TextField
            label="Sorunuzu buraya yazın..."
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            disabled
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            disabled
            sx={{ width: 'fit-content' }}
          >
            Soruyu Gönder
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
