import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef(" ");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider></Divider>
            <p>prev State: {prevState.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                ToggleOtherState
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
