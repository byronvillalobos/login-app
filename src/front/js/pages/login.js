import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";
import "../../styles/home.scss";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const {email,setEmail} = useState("");
    const {password,setPassword} = useState("");
    const history = useHistory();

    console.log("this ios your token", store.token);

    const handleclick =() => {
        actions.login(email, password);

    };
    if (store.token && store.token!="" && store.token!=undefined) history.push("/");

	return (
		<div className="text-center mt-5">
			<h1>login</h1>
                {(store.token && store.token!="" && store.token!=undefined) ? "You are logged in with this token" + store.token:

		<div>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleclick}>Login</button>
        </div>
}
		</div>
	);
};
