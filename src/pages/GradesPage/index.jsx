import React from "react"
import TitlePage from "../../components/TitlePage"

class GradesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <TitlePage title="Grades" />
                <div className="container">
                    <form>
                        <label>
                            Student name
                            <input
                                name="studentName"
                                type="text"
                                placeholder="Enter student name"
                                checked={this.state.studentName}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Homeworks done
                            <input
                                name="homeworksDone"
                                type="text"
                                placeholder="Enter number of homeworks done"
                                checked={this.state.homeworksDone}
                                onChange={this.handleInputChange} />
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default GradesPage