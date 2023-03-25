import { memo, useState } from 'react';
import { Formik, Form } from 'formik';
import { InputField } from '../InputField';
import './Form.scss';
import { NewProduct } from '../../types/Product';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/productSlice/productsSlice';
import { SignupSchema } from '../../variables';
import { Modal } from '../Modal';

export const FormForNewItem = memo(
  () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (values: NewProduct) => {
      const {
        thumbnail,
        stock,
        brand,
        discountPercentage,
        price,
        rating,
        author,
        title,
      } = values;

      const newProduct = {
        id: +new Date(),
        thumbnail,
        title,
        author,
        rating: +rating,
        price: +price,
        discountPercentage: +discountPercentage,
        brand,
        stock: +stock,
      };

      dispatch(addProduct(newProduct));
      setModalActive(true);
    };

    const initialValues: NewProduct = {
      title: '',
      author: 'TestName',
      year: '2023',
      rating: '4.22',
      price: '',
      discountPercentage: '0.32',
      brand: 'Samsung',
      stock: '',
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    };

    return (
      <div className="form form__dimension">
        <button
          type="button"
          className="form__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="form__button-title">
            Open form to add new product
          </p>
        </button>

        {isOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {
              ({
                values,
                errors,
                touched,
                handleChange,
              }) => (
                <Form className="form__form">
                  <InputField
                    placeholder="Enter the title of a product"
                    error={errors.title}
                    touched={touched.title}
                    values={values.title}
                    handleChange={handleChange}
                    type="text"
                    name="title"
                  />
                  <InputField
                    placeholder="Enter your name"
                    error={errors.author}
                    touched={touched.author}
                    values={values.author}
                    handleChange={handleChange}
                    type="text"
                    name="author"
                  />
                  <InputField
                    placeholder="Enter the year of product creation"
                    error={errors.year}
                    touched={touched.year}
                    values={values.year}
                    handleChange={handleChange}
                    min="1900"
                    max="2023"
                    type="number"
                    name="year"
                  />
                  <InputField
                    placeholder="Enter the product's rating "
                    error={errors.rating}
                    touched={touched.rating}
                    values={values.rating}
                    handleChange={handleChange}
                    type="number"
                    min="0"
                    step="0.01"
                    name="rating"
                  />
                  <InputField
                    placeholder="Enter the price in dollars"
                    error={errors.price}
                    touched={touched.price}
                    values={values.price}
                    handleChange={handleChange}
                    type="number"
                    min="0"
                    name="price"
                  />
                  <InputField
                    placeholder="Enter the discount"
                    error={errors.discountPercentage}
                    touched={touched.discountPercentage}
                    values={values.discountPercentage}
                    handleChange={handleChange}
                    type="number"
                    step="0.01"
                    min="0"
                    name="discountPercentage"
                  />
                  <InputField
                    placeholder="Enter the name of the brand"
                    error={errors.brand}
                    touched={touched.brand}
                    values={values.brand}
                    handleChange={handleChange}
                    type="text"
                    name="brand"
                  />
                  <InputField
                    placeholder="Enter quantity"
                    error={errors.stock}
                    touched={touched.stock}
                    values={values.stock}
                    handleChange={handleChange}
                    type="number"
                    min="0"
                    name="stock"
                  />
                  <InputField
                    placeholder="Enter url of product"
                    error={errors.thumbnail}
                    touched={touched.thumbnail}
                    values={values.thumbnail}
                    handleChange={handleChange}
                    type="text"
                    name="thumbnail"
                  />
                  <button
                    className="form__button form__button--submit"
                    type="submit"
                  >
                    Add the new product to the list
                  </button>
                </Form>
              )
            }
          </Formik>
        )}
        <Modal setActive={setModalActive} active={modalActive}>
          Product was successfully created
        </Modal>
      </div>
    );
  },
);
