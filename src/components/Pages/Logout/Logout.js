import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthService from '../../../services/AuthService';

const Logout = () => {
	const navigate = useNavigate();

    useEffect(() => {
        AuthService.logout();

        navigate('/');
    }, []);



}

export default Logout;