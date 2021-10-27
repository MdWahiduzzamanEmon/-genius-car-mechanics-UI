import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageService = () => {
    const [services, setServices] = React.useState([]);
    // const { serviceId}= useParams()
    // const [name,setName]=React.useState()
    // const [price,setPrice]=React.useState()
    React.useEffect(() => {
        axios
          .get("https://shielded-temple-19599.herokuapp.com/services/")
          .then((res) => {
            setServices(res.data);
          });
    }, []);
    const handleDelete = (id) => {
        axios
          .delete(`https://shielded-temple-19599.herokuapp.com/services/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              alert("delete one item successfully!!!");
              const restService = services.filter(
                (service) => service._id !== id
              );
              setServices(restService);
            }
          });
    }
    //-------------------------------------
    // const [service, setService] = React.useState({});
    // React.useEffect(() => {
    //   axios
    //     .get(`http://localhost:5000/services/${serviceId}`)
    //     .then((res) => setService(res.data));
    // }, []);

    // const handleUpdateName = (e) => {
    //     const UpdateName = e.target.value;
    //     const newName = [ ...service] ;
    //     service.name = UpdateName;
    //     setName(newName);
    //  }
    // const handleUpdatePrice = (e) => {
    //     const UpdatePrice = e.target.value;
    //     setPrice(UpdatePrice);
    //  }
    // const handleUpdate = () => {
    //     console.log(name);
    // }
    return (
      <div>
        <div className="container">
          {services.map((service) => (
            <div
              className="row justify-content-center align-items-center border"
              key={service._id}
            >
              {" "}
              <div className="col-md-3 py-2 ">
                <img src={service.img} alt="" className="img-fluid" />
              </div>
              <div className="col-md-3">{service.name}</div>
              <div className="col-md-2">Price:{service.price}</div>
              <div className="col-md-2 ">
                <Link to={`/updateService/${service?._id}`}>
                  <button className="btn btn-warning">Update</button>
                </Link>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ManageService;