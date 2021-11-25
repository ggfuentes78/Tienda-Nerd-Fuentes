import React from 'react'
import { Loader } from 'semantic-ui-react'

const Spinner = () => {
    return(
        <div>
            <Loader active inline='centered' size='huge'>Cargando</Loader>
        </div>
    )
}

export default Spinner
