import React from "react"
import './style.css'

const starIcon = <img src="assets/img/star.png" className="star" alt="start"/>

class CourseCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { image, courseName, professor, courseColor, professorColor,
            buttonText, backgroundColor, buttonColor, buttonLink, shadow, stars } = this.props

        return (
            <div className="m-auto">
                <div className={`card ${shadow}`} style={{ backgroundColor: backgroundColor, width: '25rem', marginTop: '30px' }}>
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: courseColor }}>{courseName}</h5>
                        <p className="card-text" style={{ color: professorColor }}>Professor: {professor}</p>
                        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className={`btn ${buttonColor}`}>{buttonText}</a>
                    </div>
                    <div class="card-footer">
                    {
                        starsImages(stars)
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCard

function starsImages(star){
    const starts = []
    for(let i=0; i<star; i++){
        starts.push(starIcon)
    }
    return starts
}