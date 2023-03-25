import * as Yup from 'yup';

export const DEFAULT_PAGE = '1';
export const DEFAULT_ITEMS_PER_PAGE = '6';
export const GITHUB = 'https://github.com/valntyn';

export const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[0-9a-zA-Z_\-/.]+$/, 'Forbidden symbols')
    .required('Required'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[0-9a-zA-Z_\-/.]+$/, 'Forbidden symbols')
    .required('Required'),
  year: Yup.number()
    .min(1900, 'Too Old!')
    .required('Required'),
  rating: Yup.number()
    .max(5, 'Too Much! enter from 1 to 5')
    .required('Required'),
  price: Yup.number()
    .min(0, 'Too Less!')
    .max(100000, 'Too much')
    .required('Required'),
  discountPercentage: Yup.number()
    .max(1, 'Too Much! should be from 0.01-1.00')
    .required('Required'),
  brand: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[0-9a-zA-Z_\-/.]+$/, 'Forbidden symbols')
    .required('Required'),
  stock: Yup.number()
    .required('Required'),
  thumbnail: Yup.string()
    .required('Required'),
});
