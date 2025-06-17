import { atom } from 'recoil';

export const checkoutFormState = atom({
  key: 'checkoutFormState',
  default: {
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    paymentMethod: 'e-Money',
    eMoneyNumber: '',
    eMoneyPin: '',
  },
}); 