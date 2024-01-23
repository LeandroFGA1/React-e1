import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormSupportContainer = styled.form`
    width: 50%;
    margin-left: 5%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 5px;
    padding: 20px;

    & > div {
        margin-bottom: 20px;
        min-height: 40px;

        input,
        select,
        textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s;
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: var(--primary-color);
        }

        .error-form {
            color: red;
            margin-top: 5px;
        }
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: var(--grey-dark);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--primary-hover-color);
        }
    }
`;

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
            <FormSupportContainer onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error-form'>{formik.errors.name}</div> : null}
                </div>

                <div>
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">Select a category</option>
                        <option value="bug">Report a bug</option>
                        <option value="payment_issue">Payment issues</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="others">Others</option>
                    </select>
                    {formik.touched.category && formik.errors.category ? <div className="error-form">{formik.errors.category}</div> : null}
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.description && formik.errors.description ? <div className="error-form">{formik.errors.description}</div> : null}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="error-form">{formik.errors.email}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </FormSupportContainer>
        </>
    );
};

export default SupportForm;
