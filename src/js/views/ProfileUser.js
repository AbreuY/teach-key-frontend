import React, { useContext } from "react";
import { AppContext } from "../store/appContext";


export const ProfileUser = () => {
    const { store, actions } = useContext(AppContext);
    return (
        <>
        {
        localStorage.getItem("token") && (
        <ProfileUser />
    )}
    {!localStorage.getItem("token") && history.push("/")}
    </>
    );
};