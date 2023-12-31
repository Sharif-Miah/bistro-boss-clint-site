import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import TitleSheard from "../../../Component/TitleSheard";
import { FaRegTrashCan, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";

const Allusers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleUpdateRole = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "DELETE"
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                  refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss || All Users</title>
      </Helmet>

      <TitleSheard subHeading="How many??" heading="Manage All Users" />

      <h1 className="text-2xl font-semibold my-4">All users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-[#D1A054] text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleUpdateRole(user)}
                      className="btn btn-ghost bg-orange-600  hover:bg-red-700 text-white"
                    >
                      <FaUserShield className="text-xl" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-700  hover:bg-red-700 text-white"
                  >
                    <FaRegTrashCan className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
