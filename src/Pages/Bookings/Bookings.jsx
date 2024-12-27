import { useEffect, useState } from "react";
import Hook from "../../Hook/Hook";
import Swal from "sweetalert2";
import { MdTurnLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios';
import { linkWithCredential } from "firebase/auth";

const Bookings = () => {
  const { user, loading } = Hook();
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/bookings?email=${user?.email}`; // Fixed typo in `email`

  useEffect(() => {

    axios.get(url,{withCredentials:true})
    .then((res) => {
      setBookings(res.data);
      })
      .catch((err) => console.error("Error fetching bookings:", err));
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  const handleDelete = (id) => {
    console.log("Attempting to delete booking with ID:", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete booking");
            }
            return res.json();
          })
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount) {
              // Update state to remove the deleted booking
              const remainingBookings = bookings.filter((booking) => booking._id !== id);
              setBookings(remainingBookings);
              Swal.fire("Deleted!", "Your booking has been deleted.", "success");
            } else {
              Swal.fire("Error", "Could not delete the booking.", "error");
            }
          })
          .catch((err) => {
            console.error("Error during deletion:", err);
            Swal.fire("Error", "Failed to delete the booking.", "error");
          });
      }
    });
  };


  const handleBookingConform = (id) => {
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id);
          const update = bookings.find(booking => booking._id === id);
          update.status = "confirmed";
          const newBookings = [...remaining, update]
          setBookings(newBookings);
        }
      }
      )
  }



  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold my-8 text-indigo-600">
        Total Bookings: {bookings.length}
      </h2>
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-200 shadow-lg">
            <thead className="bg-indigo-600 text-white">
              <tr><th></th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td onClick={() => handleDelete(booking._id)}
                    className="text-center"><button className="btn btn-circle btn-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button></td>
                  <td className="border px-4 py-2 text-center">
                    <img
                      src={booking.image}
                      alt={booking.service}
                      className="w-24 h-auto rounded-lg mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2 text-center">{booking.service}</td>
                  <td className="border px-4 py-2 text-center">{booking.name}</td>
                  <td className="border px-4 py-2 text-center">{booking.email}</td>
                  <td className="border px-4 py-2 text-center">{booking.phone}</td>
                  <td className="border px-4 py-2 text-center font-semibold text-green-500">
                    {booking.amount}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {booking.status === "confirmed" ? <span className="font-bold text-primary text-center">Confirmed</span> :
                      <button onClick={() => handleBookingConform(booking._id)} className="btn bg-orange-600 text-white">Please Confirm</button>
                    } </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p>No bookings found.</p>
        </div>
      )}
      <div className="mt-8">
        <Link to={'/'}>  <button className="flex btn"><MdTurnLeft /> Continue Shopping</button> </Link>
      </div>
    </div>
  );
};

export default Bookings;
