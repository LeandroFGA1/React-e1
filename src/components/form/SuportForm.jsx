import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        <form onSubmit={formik.handleSubmit}>
            <label>
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
            </label>

            <label>
                Category:
                <select name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
                    <option value="">Select a category</option>
                    <option value="bug">Report a bug</option>
                    <option value="payment_issue">Payment issues</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="others">Others</option>
                    {/* Aqui se agrega */}
                </select>
                {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}
            </label>

            <label>
                Description:
                <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                />
                {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
            </label>

            <label>
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
            </label>

            {/* Agrega aqui si se necesita */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default SupportForm;
