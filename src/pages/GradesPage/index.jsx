import React from "react"
import TitlePage from "../../components/TitlePage"

class GradesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            homeworksDone: 0,
            totalHomeworks: 0,
            grade: 0,
            regularStudent: false,
            noScholarships: false,
            period: 0,
            monthlyIncome: 0,
            scholarship: '',
            scholarshipForm: '0',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // allow calculateGrade to be called from outside
        this.calculateGrade = this.calculateGrade.bind(this);
        this.calculateScholarship = this.calculateScholarship.bind(this);
    }

    async handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log({ [name]: value })

        await this.setState({
            [name]: value,
        });

        this.calculateGrade();
    }

    calculateGrade() {

        const { homeworksDone, totalHomeworks } = this.state;

        if (homeworksDone === 0 || totalHomeworks === 0) {
            return;
        }

        const gradePercentage = (homeworksDone / totalHomeworks) * 100;

        // max decimal places
        const grade = Math.round(gradePercentage * 100) / 100;

        this.setState({
            grade: grade,
        });
    }


    async calculateScholarship() {
        const { regularStudent, noScholarships, period, monthlyIncome, studentName } = this.state;
        var scholarship = 'No Scholarship'

         if (regularStudent && noScholarships && period > 2) {
             console.log('entra')
            switch (monthlyIncome) {
                case '0':
                    scholarship = '100% Scholarship'
                    break
                case '1':
                    scholarship = '50% Scholarship'
                    break
                case '2':
                    scholarship = '20% Scholarship'
                    break
                default:
                    //scholarship = '\nNo Scholarship'
            }
        }

        scholarship = `${studentName} ${scholarship}`

        this.setState({
            scholarship: scholarship,
        });
    }

    render() {
        return (
            <div>
                <TitlePage title="Grades" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Student name
                                        <input
                                            name="studentName"
                                            type="text"
                                            placeholder="Enter student name"
                                            onChange={this.handleInputChange}
                                            className="form-control"
                                        />
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Homeworks done
                                        <input
                                            name="homeworksDone"
                                            type="number"
                                            placeholder="Number of HW done"
                                            onChange={this.handleInputChange}
                                            className="form-control"
                                        />
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Total homeworks
                                        <select className="form-select form-select" name="totalHomeworks" onChange={this.handleInputChange}>
                                            <option defaultValue={0}>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                            <option value="6">Six</option>
                                            <option value="7">Seven</option>
                                            <option value="8">Eight</option>
                                            <option value="9">Nine</option>
                                            <option value="10">Ten</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Grade
                                        <input
                                            disabled={true}
                                            name="grade"
                                            type="number"
                                            placeholder="Grade"
                                            value={this.state.grade}
                                            onChange={this.handleInputChange}
                                            className="form-control"
                                        />
                                    </label>
                                </div>
                                <button type="button" className="btn btn-primary" name="scholarshipForm" value={+this.state.scholarshipForm + 1} onClick={this.handleInputChange}>Scholarship Form</button>
                            </form>
                        </div>
                        <div className={this.state.scholarshipForm % 2 == true ? "col-md-6" : "col-md-6 d-none"}>
                    
                            <p className="h3">
                                Scholarship
                            </p>
                            <form>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Requirements
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                Regular student
                                                <input className="form-check-input" type="checkbox" value="" name="regularStudent" onChange={this.handleInputChange} />
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                No others scholarships
                                                <input className="form-check-input" type="checkbox" value="" name="noScholarships" onChange={this.handleInputChange} />
                                            </label>
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Period
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">1
                                                    <input className="form-check-input" type="radio" name="period" value={1} onChange={this.handleInputChange} />
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">2
                                                    <input className="form-check-input" type="radio" name="period" value={2} onChange={this.handleInputChange} />
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">3
                                                    <input className="form-check-input" type="radio" name="period" value={3} onChange={this.handleInputChange} />
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">4
                                                    <input className="form-check-input" type="radio" name="period" value={4} onChange={this.handleInputChange} />
                                                </label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">
                                        Monthly income $USD
                                        <select className="form-select form-select" name="monthlyIncome" onChange={this.handleInputChange}>
                                            <option defaultValue={0}>Open this select menu</option>
                                            <option value={0}>{"< $100"}</option>
                                            <option value={1}>{"< $1000"}</option>
                                            <option value={2}>{"> $1000"}</option>
                                        </select>
                                    </label>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.calculateScholarship}>Calculate</button>
                            </form>
                            <p>{this.state.scholarship}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default GradesPage