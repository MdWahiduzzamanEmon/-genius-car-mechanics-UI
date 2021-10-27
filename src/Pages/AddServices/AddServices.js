import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        axios
          .post("https://shielded-temple-19599.herokuapp.com/services", data)
          .then((res) => {
            if (res.data.insertedId) {
              alert("Service added successfully");
              reset();
            }
          });
        
    };

  
    return (
      <div>
        <h2>Add Services</h2>
        <div className="container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
              className="w-50 py-3 my-4"
            />
            <textarea
              {...register("description")}
              placeholder="Description"
              className="w-50 py-3 my-4"
            />
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="w-50 py-3 my-4"
            />
            <input
              {...register("img")}
              placeholder="Image Link"
              className="w-50 py-3 my-4"
            />
            <input type="submit" className="btn btn-danger" />
          </form>
        </div>
      </div>
    );
};

export default AddServices;