import React from "react"
import CloneComponent from "../../components/CloneComponent"
import FreeComponent from "../../components/FreeComponent"

function ComponentsPage() {
    return (
        <div className="container my-5">
            <h3 className="mb-4 mt-5">Tipo de diseño 1 de componente</h3>
            <CloneComponent />
            <h3 className="mb-4 mt-5">Componente libre</h3>
            <FreeComponent />
        </div>
    )
}

export default ComponentsPage