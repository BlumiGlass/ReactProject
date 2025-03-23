import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge() {
  const amount=useSelector(state=>state.cart.amount);

  return (
    <IconButton style={{background:"white"}}>
      <ShoppingCartIcon fontSize="medium" />
      <CartBadge badgeContent={amount} color="primary" overlap="circular" />
    </IconButton>
  );
}