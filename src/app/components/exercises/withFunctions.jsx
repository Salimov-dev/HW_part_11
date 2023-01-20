import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const handleOnLogin = () => {
        localStorage.setItem("auth", JSON.stringify(true));
    };
    const handleOnLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <SimpleComponent
                {...{ isAuth }}
                onLogin={handleOnLogin}
                onLogOut={handleOnLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
