import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box, CardActionArea, Tooltip } from '@mui/material';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { colorMap } from '../utils/colorMap';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  // Başlangıçta ilk renk seçili olsun
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.color && product.color.length > 0 ? product.color[0] : null
  );

  // Seçili rengin görüntülenecek fotoğrafını hesapla
  const getDisplayImages = () => {
    if (selectedColor && product.colorImages?.[selectedColor]) {
      return product.colorImages[selectedColor];
    }
    return product.images && product.images.length > 0 ? product.images : [product.imageUrl];
  };

  const displayImages = getDisplayImages();
  const displayImage = isHovered && displayImages.length > 1 ? displayImages[1] : displayImages[0];

  // Seçili rengin stok miktarını hesapla
  const currentStock = (selectedColor && product.colorStock?.[selectedColor] !== undefined)
    ? product.colorStock[selectedColor]
    : product.stock;

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
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      }}
    >
      {product.isFeatured && (
        <Chip
          label="Yeni Sezon"
          color="secondary"
          size="small"
          sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1, fontWeight: 'bold' }}
        />
      )}

      <CardActionArea onClick={() => navigate(`/product/${product.id}`)} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 230 }}>
          <CardMedia
            component="img"
            height="250"
            image={displayImage}
            alt={`${product.model} - ${selectedColor ?? ''}`}
            sx={{
              objectFit: 'cover',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
              opacity: isHovered ? 0.92 : 1
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, width: '100%', p: 2.5 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
            {product.brand}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ lineHeight: 1.2, mb: 1, fontWeight: 700 }}>
            {product.model}
          </Typography>

          {/* Renk Swatchları */}
          {product.color && product.color.length > 0 && (
            <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 1.5, alignItems: 'center' }}>
              {product.color.map((c) => (
                <Tooltip key={c} title={c} placement="top" arrow>
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(c);
                    }}
                    sx={{
                      width: 20, height: 20,
                      borderRadius: '50%',
                      backgroundColor: colorMap[c] ?? '#ccc',
                      border: selectedColor === c ? '2.5px solid #1A237E' : '2px solid rgba(0,0,0,0.12)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, border 0.2s',
                      '&:hover': { transform: 'scale(1.25)' },
                      ...(c === 'Şeffaf' && { background: 'linear-gradient(135deg, #ccc 25%, #fff 25%, #fff 50%, #ccc 50%, #ccc 75%, #fff 75%)', backgroundSize: '6px 6px' }),
                    }}
                  />
                </Tooltip>
              ))}
              {/* Seçili renk adı */}
              {selectedColor && (
                <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                  {selectedColor}
                </Typography>
              )}
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1.5 }}>
            <Chip label={product.lensType} size="small" sx={{ fontSize: '0.7rem', backgroundColor: 'grey.100' }} />
            <Chip label={product.gender} size="small" sx={{ fontSize: '0.7rem', backgroundColor: 'grey.100' }} />
          </Box>

          <Typography variant="h6" color="primary" sx={{ fontWeight: 900 }}>
            {product.price.toLocaleString('tr-TR')} ₺
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ p: 2, pt: 0, flexDirection: 'column', gap: 0.5 }}>
        {/* Stok uyarısı */}
        {currentStock === 0 && (
          <Typography variant="caption" color="error" sx={{ width: '100%', textAlign: 'center' }}>
            Bu renk stokta yok
          </Typography>
        )}
        <Button
          variant={isHovered ? 'contained' : 'outlined'}
          color="primary"
          fullWidth
          startIcon={<AddShoppingCartIcon />}
          disabled={currentStock === 0}
          sx={{ transition: 'all 0.3s ease', fontWeight: 'bold', borderRadius: 2 }}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, selectedColor); // Renk bilgisini sepete aktar
          }}
        >
          {selectedColor ? `${selectedColor} — Sepete Ekle` : 'Sepete Ekle'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
