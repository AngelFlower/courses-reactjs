import React from "react"
import TitlePage from "../../components/TitlePage"

function AboutPage() {
    return (
        <div>
            <TitlePage title="About me" />
            <div className="container">

                <div className="card shadow-sm">
                    <div className="row">
                        <img src="assets/img/me.jpeg" className="col-lg-5" alt="" srcset="" />
                        <div className="col-lg-7 card-body px-4">
                            <h5 className="card-title">Angel Flores Carlos</h5>
                            <p className="card-text">
                                19 años
                                <br />
                                Cumpleaños 8 de Junio</p>
                            <p className="fw-bold mb-1">
                                Gustos:
                            </p>
                            <p className="card-text">
                                <ul>
                                    <li>Programar</li>
                                    <li>Fotografia</li>
                                    <li>Leer</li>
                                    <li>Estar en familia</li>
                                    <li>Jugar con mi perro</li>
                                    <li>Ver videos en YT</li>
                                </ul>
                            </p>
                            <p className="fw-bold mb-1">
                                Lo que me gsta de la UTVT:
                            </p>
                            <p className="card-text">
                                <ul>
                                    <li>Sus paisajes</li>
                                    <li>Las papas que venden fuera</li>
                                    <li>Las materias interesantes</li>
                                </ul>
                            </p>
                            <a href="https://www.linkedin.com/in/soyangelflores/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage