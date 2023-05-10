import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // Send Data to server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfull!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className='text-3xl text-purple-600 text-center font-bold'>Add Coffee</h1>
            <form onSubmit={handleAddCoffee} className="w-1/3 mx-auto">
                {/* Name and Quantity */}
                <div className="md:flex gap-4 justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group" >
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" style={{borderRadius:'8px'}} />
                        </label>
                    </div>
                </div>
                {/* Supplier and Test */}
                <div className="md:flex gap-4 justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                </div>
                {/* Category and Details */}
                <div className="md:flex gap-4 justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                </div>
                {/* Photo URL */}
                <div className="md:flex gap-4 justify-center">
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" style={{borderRadius:'8px'}}/>
                        </label>
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;