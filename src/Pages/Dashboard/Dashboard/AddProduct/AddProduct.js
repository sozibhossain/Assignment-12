import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('product add successfully');
                reset();
            }
        })
    };


    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description"/>
            <input type="number" {...register("price")} placeholder="price"/>
            <input {...register("img")} placeholder="Images Url"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;