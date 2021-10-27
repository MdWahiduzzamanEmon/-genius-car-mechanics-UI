import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = React.useState({})
    React.useEffect(() => {
        axios
          .get(
            `https://shielded-temple-19599.herokuapp.com/services/${serviceId}`
          )
          .then((res) => setService(res.data));
    },[])
    return (
        <div>
            <h2>Name: { service.name}</h2>
            <h2><img src={ service.img} alt="" /></h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;