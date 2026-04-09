import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Chip, Paper, Divider, Rating, TextField } from '@mui/material';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  // url e ne geldiyse id olarak cekiyoz ornegin localhost/product/p1
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // elimizdeki static datadan sadec o id li olani bulsun filtrelesn
  const product = mockProducts.find((p) => p.id === id);

  // galeryde eger baska gozluge gierse onceki resimde kalmasın die. id degisince useState 0liyoruz  
  const [mainImageIndex, setMainImageIndex] = useState(0);
  useEffect(() => {
    setMainImageIndex(0);
  }, [id]);

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

  // resim dizisi yokdsa map lerken patlamasn diye ufak bi kontrol yptiım eger bostaysa 1 tne koysun
  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.imageUrl];

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

              {/* stok varsa yesil yziyo stoksuzsa kirmizi yazcak hoca buna dikkat ederdi bnce :)  */}
              <Typography variant="body2" color={product.stock > 0 ? "success.main" : "error.main"} fontWeight="bold" sx={{ mb: 3 }}>
                {product.stock > 0 ? `Stokta var (${product.stock} adet)` : 'Şuan Maleseaf Stokta yok'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                sx={{ py: 1.5, fontSize: '1.1rem' }}
              >
                Sepete Ekle
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
