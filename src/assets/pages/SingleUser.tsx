import { useNavigate, useParams } from "react-router-dom";
import { useUserDetailQuery } from "../../redux/feature/userApi";

const SingleUser: React.FC = () => {
  const { id } = useParams(); // Ensure id is always present as a string
  const navigate = useNavigate();

  const { data, isLoading } = useUserDetailQuery(id);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="border-2 border-orange-400 rounded-md p-6">
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div className="flex flex-col justify-center items-start text-xl">
            <img
              className="w-20 h-20 rounded-full"
              src={data?.image}
              alt="Description of the Image"
            />
            <span>First name: {data?.firstName}</span>
            <span>Last name: {data?.lastName}</span>
            <span>Email: {data?.email}</span>
            <span>Address: {data?.address.address}</span>
            <span>City: {data?.address.city}</span>
            <span>Company name: {data?.company.name}</span>
            <button className="mt-4 text-xl cursor-pointer" onClick={() => navigate("/")}>Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
