import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TitlePage from '../../components/TitlePage'

const CourseEditPage = () => {

	const navigate = useNavigate();

	const {type, id} = useParams()

    const [course, setCourse] = useState([]) 
    const [professors, setProfessors] = useState([]) 
    const [languages, setLanguages] = useState([])

  	const handleChange = (event) => {
    	setCourse({
    		...course,
    		[event.target.name]:event.target.value
    	})
	}

	 const handleSubmit = (event) => {
    	event.preventDefault()
    	updateCourse()
    	console.log(course)
	}

	const fetchCourse = () => {
		fetch(`http://127.0.0.1:8000/api/courses/${id}`)
			.then(response => response.json())
        	.then(data => {
        		setCourse(data)
        	})
			.then(error => console.log(error))
	}

	const updateCourse = () => {
		fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
			method: 'PUT',
			body: JSON.stringify(course),
			headers: {
      			'Content-Type': 'application/json'
    		},
		})
			.then(response => response.json())
        	.then(data => {
        		console.log('ok')
        		setCourse(data)
        	})
			.then(error => console.log(error))
	}

	const fetchProfessors = () => {
		fetch('http://127.0.0.1:8000/api/professors')
			.then(response => response.json())
        	.then(data => setProfessors(data))
			.then(error => console.log(error))
	}

	const fetchLanguages = () => {
		fetch('http://127.0.0.1:8000/api/languages')
			.then(response => response.json())
        	.then(data => setLanguages(data))
			.then(error => console.log(error))
	}

    useEffect(() => {
    	fetchCourse()
    	if(type !== 'details'){
    		fetchProfessors()
    		fetchLanguages()
    	}
    }, [])

    const isReadOnly = type === 'details' ? true : false

	return(
		<div>
			<TitlePage title={type}/>
			<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-lg-5">
						<img src={course.image} alt={course.name} style={{width: '100%'}}/>
						<label className="mt-2 w-100">
							Url image
							<input type="text" className="form-control" placeholder="Image from URL" name="image" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.image} />
						</label>
					</div>
					<div className="col-lg-7">
						<div className="mb-2">
							<label className="w-100">
								Name
								<input type="text" className="form-control" placeholder="Name course" name="name" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.name}/>
							</label>
						</div>
						<div className="mb-2 w-100">
							<label style={{width: '50%'}}>
								Professor
								<select className="form-select" name="professor_id" onChange={handleChange}>
									<option defaultValue value={course.professor_id}>{course.professor}</option>
									{
										type === 'details' ?
										''
										:(
											professors.map((professor, index) => (
												<option key={index} value={professor.id}>{professor.name}</option>
												)
											)
										)
									}
									}
								</select>
							</label>
							<label style={{width: '50%'}}>
								Language
								<select className="form-select" name="language_id" onChange={handleChange}>
									<option defaultValue value={course.language_id}>{course.language}</option>
									{
										type === 'edit' && (
											languages.map((language, index) => (
												<option key={index} value={language.id}>{language.name}</option>
												)
											)
										)
									}
									}
								</select>
							</label>
						</div>						
						<div className="mb-2 d-flex">
							<label className="flex-fill">
								Course color
								<input type="text" className="form-control" placeholder="Course Color" name="courseColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.courseColor}/>
							</label>
							<label className="flex-fill">
								Professor color
								<input type="text" className="form-control" placeholder="Professor Color" name="professorColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.professorColor}/>
							</label>
							<label className="flex-fill">
								Background color
								<input type="text" className="form-control" placeholder="Background Color" name="backgroundColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.backgroundColor}/>
							</label>
						</div>																	
						<div className="mb-2 d-flex">
							<label className="flex-fill">
								Button color
								<input type="text" className="form-control" placeholder="Button color" name="buttonColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.buttonColor}/>
							</label>
							<label className="flex-fill">
								Button text
								<input type="text" className="form-control" placeholder="Button text" name="buttonText" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.buttonText}/>
							</label>
							<label className="ms-3 flex-fill">
								Shadow
								<div className="d-block flex-fill">
									<div className="form-check form-check-inline d-flex pt-1">
									  <div className="form-check-inline flex-fill">
								        <label className="me-3" htmlFor="radio-item-1">
								        <input
								          id="radio-item-1"
								          name="shadow"
								          type="radio"
								          value="shadow"
								          className="form-check-input"
								          onChange={handleChange}
								          disabled={isReadOnly}
								          checked={course.shadow === 'shadow'}
								        />
								        Yes
								        </label>
								      </div>
								      <div className="form-check-inline">
								        <input
								          id="radio-item-2"
								          name="shadow"
								          type="radio"
								          value=""
								          className="form-check-input"
								          onChange={handleChange}
								          disabled={isReadOnly}
								          checked={course.shadow !== 'shadow'}
								        />
								        <label htmlFor="radio-item-2">
								          No
								        </label>
								      </div>
									</div>
								</div>
							</label>
						</div>												
						<div className="mb-2 d-flex">
							<label style={{width:'10%'}}>
								Stars
								<input type="number" className="form-control" placeholder="Stars" name="stars" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.stars}/>
							</label>
							<label className="flex-fill">
								Button link
								<input type="text" className="form-control" placeholder="Button link" name="buttonLink" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.buttonLink}/>
							</label>
						</div>
						<div className="mt-3">
							<button className="btn btn-dark" onClick={() => navigate('/courses')}>Go back</button>
							{type === 'edit' ? <button type="submit" className="btn btn-primary mx-2">Save</button> : '' }
						</div>
					</div>
				</div>
			</form>
			</div>
		</div>
	)
}

export default CourseEditPage