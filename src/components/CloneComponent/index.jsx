import React from "react"
import './style.css'

function CloneComponent() {
    return (
        <div className="blueContainer w-100">
            <div className="px-5 py-4 row">
                <div className="col-5">
                    <div className="row px-5 py-4 ">
                        <img src="assets/img/cocaColaLogo.png" className="imagenMarca m-auto" alt="" />
                    </div>
                    <div className="row bg-light px-5 py-4 ">
                        <img src="assets/img/vendedor.png" className="imagenVendedor m-auto" alt="" />
                    </div>
                </div>
                <div className="col-7 d-flex justify-content-between flex-column  p-4">
                    <div className="contenedorContacto p-3">
                        <p>
                            Nombre empresa: Coca Cola
                        </p>
                        <p>
                            Teléfono : 7223556646
                        </p>
                        <p>
                            Estado : México
                        </p>
                        <p>
                            Contacto : Pancho pistolas
                        </p>
                    </div>
                    <div class="alert alert-warning d-flex align-items-center alerta m-auto" role="alert">
                        <div>
                            Aviso: Empresa pendiente de pago
                        </div>
                    </div>
                    <button type="button" class="btn btn-success btnDetalle m-auto">Detalle empresa</button>
                </div>
            </div>
        </div>
    )
}

export default CloneComponent