import React from 'react'

function TitlePage(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <h1 class="navbar-brand">{props.title}</h1>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </nav>

    )
}

export default TitlePage