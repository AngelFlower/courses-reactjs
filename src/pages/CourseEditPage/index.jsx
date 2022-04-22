import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { fetchCourse, updateCourse, createCourse, fetchProfessors, fetchLanguages } from '../../services/CourseService'
import TitlePage from '../../components/TitlePage'

const CourseEditPage = () => {

	const navigate = useNavigate();

	const {type, id} = useParams()

    const [course, setCourse] = useState({
        image: ''
    }) 
    	
    const [professors, setProfessors] = useState([]) 
    const [languages, setLanguages] = useState([])
    const [errors, setErrors] = useState([])

    const alert = useAlert()

    const validText = new RegExp('^[a-zA-Z0-9]+$')
    const validHexColor = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$')
    //eslint-disable-next-line
   	const validURL = new RegExp('^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}$')

  	const handleChange = (event) => {
  		const name = event.target.name
  		const value = event.target.value

    	setCourse({
    		...course,
    		[name]:event.target.value
    	})

    	console.log(event.target.value)

  		switch (name) {
  			case 'name':
  			case 'buttonText':
  				handleErrors(validText, name, value, 'The text is invalid. Only accept text and numbers')
  				break
  			case 'courseColor':
  			case 'professorColor':
  			case 'backgroundColor':
  				handleErrors(validHexColor, name, value, 'Color must be hexadecimal')
  				break
  			case 'buttonLink':
  			case 'image':
  				handleErrors(validURL, name, value, 'invalid URL. Must be a valid URL like http://example.com/test')
  				break
  			default:
  		}

	}

	const handleErrors = (condition, name, value, errorMessage) => {
		if(!condition.test(value)) {
			console.log('errrooor')
  			setErrors({
  				...errors,
  				[name]: errorMessage	
  			})
  		}
  		else {
  			let newErrors = errors
  			delete newErrors[name]
  			setErrors(newErrors)
  		}
	}

	// validate form if is null
	const validateForm = () => {
		let errorsF = {}
		if(course.name === '') {
			errorsF.name = 'Name is required'
		}
		if(course.buttonText === '') {
			errorsF.buttonText = 'Button text is required'
		}
		if(course.courseColor === '') {
			errorsF.courseColor = 'Course color is required'
		}
		if(course.professorColor === '') {
			errorsF.professorColor = 'Professor color is required'
		}
		if(course.backgroundColor === '') {
			errorsF.backgroundColor = 'Background color is required'
		}
		if(course.buttonLink === '') {
			errorsF.buttonLink = 'Button link is required'
		}
		if(course.image === '') {
			errorsF.image = 'Image is required'
		}
		setErrors({
			...errors,
			...errorsF
		})

		return Object.keys(errorsF).length === 0
	}

	 const handleSubmit =  async (event) => {
    	event.preventDefault()
		console.log(errors)
		if(Object.keys(errors).length === 0 && validateForm()) {
			switch(type) {
				case "edit": updateCourse({course, id, alert})
					break
				case "create": createCourse({course, alert})
					break
				default:
					break
			}
		}
		else {
			alert.error('Please fill all the fields correctly')
		}
		


    	console.log(course)
	}

    useEffect(() => {
		if(type === 'edit' || type === 'details') {
			fetchCourse({setCourse, id})
		}
    	if(type !== 'details'){
    		fetchProfessors({setProfessors})
    		fetchLanguages({setLanguages})
    	}
    }, [])

    const isReadOnly = type === 'details' ? true : false
    // const isCreate = type === 'create' ? true : false

	return(
		<div>
			<TitlePage title={type}/>
			<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-lg-5">
						<img src={course.image} alt={course.name} className={`mb-2 ${Object.keys(course.image).length === 0  && 'd-none'}`} style={{width: '100%'}}/>
						<label className="w-100">
							Url image
							<input type="text" className={`form-control ${errors.hasOwnProperty('image') && 'is-invalid'}`} placeholder="Image from URL" name="image" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.image} />
							<div className="invalid-feedback">
								{errors.image}
							</div>
						</label>
					</div>
					<div className="col-lg-7">
						<div className="mb-2">
							<label className="w-100">
								Name
								<input type="text" className={`form-control ${errors.hasOwnProperty('name') && 'is-invalid'}`} placeholder="Name course" name="name" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.name}/>
								<div className="invalid-feedback">
							        {errors.name}
							    </div>
							</label>
						</div>
						<div className="mb-2 w-100">
							<label style={{width: '50%'}}>
								Professor
								<select className="form-select" name="professor_id" value={course.professor_id} onChange={handleChange}>
									{
										type === 'edit' || type === 'create' ? (
											professors.map((professor, index) => (
												<option key={index} value={professor.id}>{professor.name}</option>
												)
											)
										)
										:
										<option value={course.professor_id}>{course.professor}</option>
									}
								</select>
							</label>
							<label style={{width: '50%'}}>
								Language
								<select className="form-select" name="language_id" value={course.language_id} onChange={handleChange}>
									{
										type === 'edit' || type === 'create' ? (
											languages.map((language, index) => (
												<option key={index} value={language.id}>{language.name}</option>
												)
											)
										)
										:
										<option value={course.language_id}>{course.language}</option>
									}
								</select>
							</label>
						</div>						
						<div className="mb-2 d-flex">
							<label className="flex-fill">
								Course color
								<input type="text" className={`form-control ${errors.hasOwnProperty('courseColor') && 'is-invalid'}`}placeholder="Course Color" name="courseColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.courseColor}/>
								<div className="invalid-feedback">
							        {errors.courseColor}
							    </div>
							</label>
							<label className="flex-fill">
								Professor color
								<input type="text" className={`form-control ${errors.hasOwnProperty('professorColor') && 'is-invalid'}`} placeholder="Professor Color" name="professorColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.professorColor}/>
								<div className="invalid-feedback">
							        {errors.professorColor}
							    </div>
							</label>
							<label className="flex-fill">
								Background color
								<input type="text" className={`form-control ${errors.hasOwnProperty('backgroundColor') && 'is-invalid'}`} placeholder="Background Color" name="backgroundColor" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.backgroundColor}/>
								<div className="invalid-feedback">
							        {errors.backgroundColor}
							    </div>
							</label>
						</div>																	
						<div className="mb-2 d-flex">
							<label className="flex-fill">
								Button color
								<select className="form-select" name="buttonColor" value={course.buttonColor} onChange={handleChange}>
									{
										type === 'edit' || type === 'create' ? (
											<>
												<option value={'btn-primary'}>{'btn-primary'}</option>
												<option value={'btn-secondary'}>{'btn-secondary'}</option>
												<option value={'btn-success'}>{'btn-success'}</option>
												<option value={'btn-danger'}>{'btn-danger'}</option>
											</>
										)
										:
										<option value={course.buttonColor}>{course.buttonColor}</option>
									}
								</select>
							</label>
							<label className="flex-fill">
								Button text
								<input type="text" className={`form-control ${errors.hasOwnProperty('buttonText') && 'is-invalid'}`} placeholder="Button text" name="buttonText" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.buttonText}/>
								<div className="invalid-feedback">
							        {errors.buttonText}
							    </div>
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
								          value="null"
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
								<input type="number" className={`form-control ${errors.hasOwnProperty('stars') && 'is-invalid'}`} placeholder="Stars" name="stars" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.stars}/>
								<div className="invalid-feedback">
							        {errors.stars}
							    </div>
							</label>
							<label className="flex-fill">
								Button link
								<input type="text" className={`form-control ${errors.hasOwnProperty('buttonLink') && 'is-invalid'}`} placeholder="Button link" name="buttonLink" onChange={handleChange} readOnly={isReadOnly} defaultValue={course.buttonLink}/>
								<div className="invalid-feedback">
							        {errors.buttonLink}
							    </div>
							</label>
						</div>
						<div className="mt-3">
							<button className="btn btn-dark" onClick={() => navigate('/courses')}>Go back</button>
							{type !== 'details' ? <button type="submit" className="btn btn-primary mx-2">Save</button> : '' }
						</div>
					</div>
				</div>
			</form>
			</div>
		</div>
	)
}

export default CourseEditPage