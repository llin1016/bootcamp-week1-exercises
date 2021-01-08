import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import jumbo from '../../assets/jumbo.jpg'

export const JumboStyles = styled.div`
    .jumbotron{
        background: no-repeat fixed bottom;
        background-size: cover;
        text-align: center;
        background-image: url(${jumbo});
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        right: 0;
        z-index: -1;
    }

    h1 {
        font-size: 600% !important;
        font-family: 'Playfair Display', serif;
        font-weight: 600;
        text-align: center;
    }
`