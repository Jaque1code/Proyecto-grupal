import React, { useContext } from 'react'
import ContextoGlobal from '../contexts/ContextoGlobal.jsx'
import { Row, Col } from 'react-bootstrap'
import CardAuto from './CardAuto.jsx'


const Galeria = () => {
    const { autos } = useContext(ContextoGlobal); 
  return (
    <>
     <Row>
        {
             autos.map((auto) => {
                 return <Col><CardAuto auto={auto}></CardAuto> </Col>
            })
        }
     </Row>

    </>
  )
}

export default Galeria