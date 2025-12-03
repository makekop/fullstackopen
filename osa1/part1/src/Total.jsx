const Total = (props) => {
    return (
        <h2>
            Number of excercises in this course ={" "}
            {props.parts[0].exercises +
                props.parts[1].exercises +
                props.parts[2].exercises}
        </h2>
    );
};

export default Total;
