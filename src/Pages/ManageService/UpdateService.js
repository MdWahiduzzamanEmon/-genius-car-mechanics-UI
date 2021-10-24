import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateService = () => {
    const { serviceId } = useParams();
    const [service, setService] = React.useState({});

    React.useEffect(() => {
      axios
        .get(`http://localhost:5000/services/${serviceId}`)
        .then((res) => setService(res.data));
    }, []);
    // console.log(service);



    const handleUpdateName = (e) => {
        const UpdateName = e.target.value;
        const newName = { name:UpdateName,price:service.price,img:service.img,description:service.description };
       
        setService(newName);
     }
    const handleUpdatePrice = (e) => {
        const UpdatePrice = e.target.value;
        const newPrice = { ...service }
        newPrice.price=UpdatePrice;
        setService(newPrice);
     }
    const handleUpdateImage = (e) => {
        const UpdateImg = e.target.value;
        const newImg = { ...service }
        newImg.img = UpdateImg;
        setService(newImg);
    }
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`http://localhost:5000/services/${serviceId}`, service)
        .then((res) => {
            if (res.data.matchedCount === 1) {
                alert("Update successfully!!!");
                e.target.reset();
                setService({});
            }
        });
    //   console.log(service);
    };
    return (
      <div>
        <div className="row justify-content-center align-items-center border">
          {" "}
          <div className="col-md-3 py-2 ">
            <img src={service.img} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3">{service.name}</div>
          <div className="col-md-2">Price:{service.price}</div>
          <div className="col-md-2 ">{service.description}</div>
        </div>

        <section>
          <form
            className="d-flex justify-content-center align-items-center flex-column"
            onSubmit={handleSubmit}
          >
            
              <Form.Control
                type="text"
                className="w-50 py-3 my-4"
                placeholder="Product Name"
                onChange={handleUpdateName}
                value={service.name || " "}
              />
        
            <Form.Control
              type="text"
              placeholder="Price"
              className="w-50 py-3 my-4"
              value={service.price || " "}
              onChange={handleUpdatePrice}
            />
            <Form.Control
              placeholder="Image Link"
              className="w-50 py-3 my-4"
              onChange={handleUpdateImage}
            />
            <button className="btn btn-warning mb-5">Update</button>
          </form>
        </section>
      </div>
    );
};

export default UpdateService;