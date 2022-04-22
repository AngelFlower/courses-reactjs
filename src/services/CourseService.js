export const fetchCourse = ({setCourse, id}) => {
		fetch(`http://127.0.0.1:8000/api/courses/${id}`)
			.then(response => response.json())
        	.then(data => {
        		setCourse(data)
        	})
			.then(error => console.log(error))
	}

export const createCourse = ({course, alert}) => {
		fetch(`http://127.0.0.1:8000/api/courses`, {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
      			'Content-Type': 'application/json'
    		},
		})
			.then(response => {
				if(response.status === 201){
					alert.show('Course created successfully')
				}
				else {
					alert.show('Error creating course')
				}
			})
	}
export const updateCourse = ({course, id, alert}) => {
		fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
			method: 'PUT',
			body: JSON.stringify(course),
			headers: {
      			'Content-Type': 'application/json'
    		},
		})
			.then(response => {
				if(response.status === 200){
					alert.show('Course updated successfully')
				}
				else {
					alert.show('Error updating course')
				}
			})
	}

export const fetchProfessors = ({setProfessors}) => {
		fetch('http://127.0.0.1:8000/api/professors')
			.then(response => response.json())
        	.then(data => setProfessors(data))
			.then(error => console.log(error))
	}

export const fetchLanguages = ({setLanguages}) => {
		fetch('http://127.0.0.1:8000/api/languages')
			.then(response => response.json())
        	.then(data => setLanguages(data))
			.then(error => console.log(error))
	}