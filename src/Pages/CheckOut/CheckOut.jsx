
import { useLoaderData } from "react-router-dom";
import Hook from "../../Hook/Hook";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, _id,img
    } = service

    const { user } = Hook()
    const handleBookService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const amount = form.amount.value;
        const order = {
            serviceId: _id, service: title, image:img, name, email, phone, amount
        }
        console.log(order);

        fetch('http://localhost:3000/bookings',{
method:'POST',
headers:{
    'content-type':'application/json',
},
body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: "Good job!",
                    text: "Your booking is successful",
                    icon: "success"
                  });
                  form.reset()
            }
        })


    }

    return (
        <div className="my-16 flex justify-center items-center">
            <form onSubmit={handleBookService} className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="col-span-full">
                    <h2 className="text-3xl text-center font-bold">Book Service : {title}</h2>

                </div>
                <div className="">
                    <label className="text-sm">Your Name</label>
                    <input name="name" defaultValue={user?.displayname}  required type="text" placeholder="Enter your name" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 " />
                </div>
                <div className="">
                    <label className="text-sm">Date</label>
                    <input name="date" required type="date" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="">
                    <label className="text-sm">Your Phone</label>
                    <input name="phone" required type="text" placeholder="Your Phone" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="">
                    <label className="text-sm">Your Email</label>
                    <input name="email" defaultValue={user?.email} required type="text" placeholder="Your Email" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="">
                    <label className="text-sm">Due amount</label>
                    <input name="amount" defaultValue={'$' + price} required type="text" placeholder="Due amount" className="w-full input input-bordered rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>


                <div className="col-span-full text-center">
                    <input required type="submit" value={"Order Confirm"} className="btn btn-secondary w-full text-black" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;