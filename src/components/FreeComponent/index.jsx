import React from "react"
import './style.css'

function FreeComponent() {
    return (
        <div className="cardx">
            <div className="cardx-title">
                <h3 className="display-5 py-3">Cuervos APP</h3>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <div className="cardx-img" />

                </div>
                <div className="col-md-3">
                    <img src="assets/img/screenApp.png" className="screenApp" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="container">
                        <p className="cardx-text pb-3">
                            Consulta tus calificaciones de la UTVT desde una amigable interfaz móvil. NO OFICIAL
                        </p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="container">
                        <h3 className="my-3">Registro</h3>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">222</span>
                            <input type="text" className="form-control" placeholder="Matricula" aria-label="Matricula" aria-describedby="basic-addon1"/>
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeComponent