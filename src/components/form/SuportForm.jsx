import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormSuportContainer = styled.form`
    width: 90%;
    height: fit-content;
    margin-left: 5%;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 5px;
    label {
        margin: 20px 0px 20px 30px;
        input,textarea{
            margin-left: 5px;
            border: none;
            background-color: var(--white);
            border-bottom: 2px solid grey;
            min-width: 100px;
            &:focus{
                outline: none;
                
            }
            &:active{
            
            }
        }
    }
`;

const NameContainer = styled.label``;
const CategoryContainer = styled.label``;
const DescriptionContainer = styled.label``;
const EmailContainer = styled.label``;

const SupportForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            description: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please enter your name'),
            category: Yup.string().required('Please select a category'),
            description: Yup.string().required('Please enter a description'),
            email: Yup.string().email('Invalid email format').required('Please enter your email'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <>
            <FormSuportContainer onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
                <NameContainer>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </NameContainer>
                <CategoryContainer>
                    Category:
                    <select name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
                        <option value="">Select a category</option>
                        <option value="bug">Report a bug</option>
                        <option value="payment_issue">Payment issues</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="others">Others</option>
                        {/* Agrega aquí más opciones según sea necesario */}
                    </select>
                    {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}
                </CategoryContainer>

                <DescriptionContainer>
                    Description:
                    <textarea
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                </DescriptionContainer>

                <EmailContainer>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </EmailContainer>

                {/* Agrega aquí más campos según sea necesario para tu formulario de soporte */}

                <button type="submit">Submit</button>
            </FormSuportContainer>
        </>
    );
};

export default SupportForm;
