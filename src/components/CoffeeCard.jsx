// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, quantity, supplier, taste, photo } = props.coffee;
    const {coffees, setCoffees} = props;
    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Delete Confirmed')
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !==_id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side shadow-xl bg-[#F4F3F0]">
            <figure className="w-1/2"><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between items-center">
                <div className="mx-5">
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="btn-group btn-group-vertical mx-5 space-y-3">
                    <button className="btn hover:btn-primary">View</button>
                    <Link to={`http://localhost:5173/updatecoffee/${_id}`}>
                        <button className="btn hover:btn-primary">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 hover:btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;