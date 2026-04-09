import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box, CardActionArea } from '@mui/material';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product; // ts interfacemize gore prop aliyo veritabanindan fln
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // hover filan ooldugunda resmi degistirmek icin buralarda hover stateini tutuyorum
  const [isHovered, setIsHovered] = useState(false);

  // adam ustune gelirse ve 2. resmimiz de datada varsa onu gostersib yoksa normali siritmasin patlamasn kod
  const displayImage = isHovered && product.images && product.images.length > 1 
    ? product.images[1] 
    : product.imageUrl;

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ 
        maxWidth: 345, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        position: 'relative', 
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
        '&:hover': { boxShadow: '0 12px 24px rgba(0,0,0,0.15)', transform: 'translateY(-6px)', transition: 'all 0.4s ease' },
        transition: 'all 0.4s ease'
      }}
    >
      {/* vitrin urunlerine yeni sezon chispi bassin dedik isFeatured sartina gore */}
      {product.isFeatured && (
        <Chip 
          label="Yeni Sezon" 
          color="secondary" 
          size="small" 
          sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1, fontWeight: 'bold' }} 
        />
      )}
      
      {/* kartin ustune basinca url id e gore diger  sayfaya gondersin */}
      <CardActionArea onClick={() => navigate(`/product/${product.id}`)} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 230 }}>
          <CardMedia
            component="img"
            height="250"
            image={displayImage}
            alt={product.model}
            sx={{ 
              objectFit: 'cover', 
              transition: 'opacity 0.5s ease-in-out',
              opacity: isHovered ? 0.9 : 1
            }}
          />
          {/* alt kısıödaki kucuk nokta ibareleri , coklu resmin oldugunu fln belii ediyo zengin gb dursn diyeekldeim */}
          {product.images && product.images.length > 1 && (
            <Box sx={{ position: 'absolute', bottom: 10, w: '100%', display: 'flex', justifyContent: 'center', width: '100%', gap: 0.5 }}>
               {product.images.slice(0, 3).map((_, idx) => (
                  <Box key={idx} sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: (isHovered && idx === 1) || (!isHovered && idx === 0) ? 'primary.main' : 'rgba(255,255,255,0.7)', transition: 'background-color 0.3s' }} />
               ))}
            </Box>
          )}
        </Box>

        <CardContent sx={{ flexGrow: 1, width: '100%', p: 2.5 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
            {product.brand}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: 1.2, mb: 1, fontWeight: 700 }}>
            {product.model}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2, mt: 1 }}>
            <Chip label={product.lensType} size="small" sx={{ fontSize: '0.7rem', backgroundColor: 'grey.100' }} />
            <Chip label={product.gender} size="small" sx={{ fontSize: '0.7rem', backgroundColor: 'grey.100' }} />
          </Box>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 900 }}>
            {product.price.toLocaleString('tr-TR')} ₺
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          variant={isHovered ? "contained" : "outlined"} 
          color="primary"
          fullWidth 
          startIcon={<AddShoppingCartIcon />}
          sx={{ transition: 'all 0.3s ease', fontWeight: 'bold', borderRadius: 2 }}
          onClick={(e) => {
            // burasi cok onmeliii ust divdeki navigate e gitmesin diye propagationu durdurudk hata almayalim
            e.stopPropagation(); 
            addToCart(product);
          }}
        >
          Sepete Ekle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
