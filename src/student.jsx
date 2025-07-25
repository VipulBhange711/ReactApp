import PropTypes from 'prop-types';

function student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Hobby: {props.hobby}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// ✅ Correct lowercase `propTypes`
student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string, // You forgot to include `hobby`, added here
    isStudent: PropTypes.bool
};

student.defaultProps = {
    name: "guest",
    age: 22,
    hobby: "None",
    isStudent: false
};

export default student;
