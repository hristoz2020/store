import { useNavigate } from "react-router-dom";

const Logout = () => {
	const navigate = useNavigate();

	localStorage.clear();

	navigate("/login");
};

export default Logout;
