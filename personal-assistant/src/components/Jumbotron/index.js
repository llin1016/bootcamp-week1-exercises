import React from 'react'

import { JumboStyles } from './styles'
import { Jumbotron } from 'react-bootstrap'

export const Jumbo = (props) => (
    <JumboStyles>
        <Jumbotron fluid className='jumbo'>
        <h1> {props.name} </h1>
        </Jumbotron>
    </JumboStyles>
)
