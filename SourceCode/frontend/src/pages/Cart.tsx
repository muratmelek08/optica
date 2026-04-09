import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Divider, Button, Paper, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h5" gutterBottom>
          Sepetiniz şu an boş.
        </Typography>
        <Button variant="contained" component={Link} to="/products" sx={{ mt: 2 }}>
          Alışverişe Başla
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
        Sepetim
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <List>
              {cart.map((item, index) => (
                <Box key={item.product.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" color="error" onClick={() => removeFromCart(item.product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.product.imageUrl} variant="rounded" sx={{ width: 56, height: 56, mr: 2 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${item.product.brand} - ${item.product.model}`}
                      secondary={`Birim Fiyat: ${item.product.price.toLocaleString('tr-TR')} ₺ | Adet: ${item.quantity}`}
                    />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {(item.product.price * item.quantity).toLocaleString('tr-TR')} ₺
                    </Typography>
                  </ListItem>
                  {index < cart.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f1f8e9' }}>
            <Typography variant="h6" gutterBottom borderBottom="1px solid #ccc" pb={1}>
              Sipariş Özeti
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 3 }}>
              <Typography variant="subtitle1">Toplam Tutar:</Typography>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {totalPrice.toLocaleString('tr-TR')} ₺
              </Typography>
            </Box>
            <Button variant="contained" color="secondary" fullWidth size="large">
              Siparişi Tamamla
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
