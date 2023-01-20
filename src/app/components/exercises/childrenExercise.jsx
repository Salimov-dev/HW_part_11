import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    const FormComponent = ({ children }) => {
        return React.Children.map(children, (child) => {
            const number = children.indexOf(child) + 1;
            return (
                <div className="d-flex">
                    <div className="pe-1">{number}.</div>
                    {React.cloneElement(child)}
                </div>
            );
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <FormComponent>
                <Component />
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
