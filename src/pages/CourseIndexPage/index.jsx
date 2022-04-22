import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAlert } from 'react-alert'
import TitlePage from "../../components/TitlePage"

const CoursesIndexPage = () => {

	const [courses, setCourses] = useState([])
	const [fetchError = false, setFetchError] = useState([])
	const alert = useAlert()

	const fetchCourses = () => {
		fetch("http://127.0.0.1:8000/api/courses/")
			.then(response => response.json())
        	.then(data => setCourses(data), error => {
        		if (error) {
        			setFetchError(true)
		          	console.log('error')
		        }})
    }

    useEffect(() => {
    	fetchCourses()
    }, [])

    const handleButtons = (e) => {
    	if(e !== null){
	    	const name = e.target.name
	    	const id = e.target.id
	    	//console.log(id)
	    	switch(name) {
	    		case "create":
	    			console.log("create")
	    			break
	    		case "delete":
	    			console.log("delete")
	    			deleteCourse(id)
	    			break
	    		default:
	    			
	    	}
    	}
    }

    const deleteCourse = (id) => {
    	//let status = 404
    	if(window.confirm('Are you sure you wish to delete this course?')) {
	    	fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
	    		method: "DELETE"
	    	})
	    		.then(data => {
	    			console.log(data.status)
	    			if(data.status === 204){
	    				let newCourses = courses.filter(function(course){ return course.id !== +id })
	    				alert.show('Course deleted successfully')
	    				setCourses(newCourses)
	    			}
	    }
	    )
    }
}
    

	return (
		<div>
			<TitlePage title="Courses"/>
			<div className="container">
			{fetchError === true ? <h2 className="display-5">No se pudo conectar con la API</h2> : ''}
				<table className={`table table-striped table-hover ${fetchError === true ? 'd-none' : ''}`}>
				  <thead>
				    <tr>
				      <th scope="col">ID</th>
				      <th scope="col">Image</th>
				      <th scope="col">Name</th>
				      <th scope="col">Professor</th>
				      <th scope="col">Language</th>
				      <th scope="col">
				      	<Link to = {`/course/create`} className="btn btn-primary w-100">
							Create
						</Link>
				      </th>
				    </tr>
				  </thead>
				  <tbody>
				  	{courses.map((course, index) => (
				  		<tr key={index}>
					      <th scope="row">{course.id}</th>
					      <td>
					      	<img src={course.image} style={{height:'100px'}} alt={course.name}/>
					      </td>
					      <td>{course.name}</td>
					      <td>{course.professor}</td>
					      <td>{course.language}</td>
					      <td>
					      	<div className="d-flex justify-content-center">
					      		<Link to = {`/course/details/${course.id}`} className="btn btn-info text-white">
									Details
								</Link>
								<Link to = {`/course/edit/${course.id}`} className="btn btn-secondary mx-1">
									Edit
								</Link>
					      		<button type="button" className="btn btn-danger" name="delete" id={course.id} onClick={handleButtons}>
					      			Delete
					      		</button>
					      	</div>
					      </td>
					    </tr>
				  	))} 
				  </tbody>
				</table>
			</div>
		</div>
	)
}

export default CoursesIndexPage


