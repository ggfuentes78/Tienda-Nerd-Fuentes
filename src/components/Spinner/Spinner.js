//React
import React from 'react'
//Semantic UI
import { Loader } from 'semantic-ui-react'

//Loader como transicion para la carga de items
const Spinner = () => {
    return(
        <div>
            <Loader active inline='centered' size='huge'>Cargando</Loader>
        </div>
    )
}

export default Spinner
