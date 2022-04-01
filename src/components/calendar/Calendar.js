import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { FiCalendar } from "react-icons/fi";
import { DivInformation, DivWeekly, SubTitleCal, TitleCalendar } from '../../styles/styledComponents/CalendarStyled';
import { urlRA, urlRC, urlRD } from '../../utilities/urlRecipes';
import AlmuerzoCard from './AlmuerzoCard';
import CenaCard from './CenaCard';
import DesayunoCard from './DesayunoCard';

const Calendar = () => {
    const [almuerzos, setAlmuerzos] = useState([]);
    const [desayuno, setDesayuno] = useState([]);
    const [cena, setCena] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const dataServer = await axios.get(urlRA);                
            setAlmuerzos(dataServer.data)
            const dataCena = await axios.get(urlRC);                
            setCena(dataCena.data)
            const dataDesayuno = await axios.get(urlRD);
            setDesayuno(dataDesayuno.data)
            setIsLoading(false);
        }
        fetchData()
    }, [])

    if(isLoading) {
        return <div>Cargando...</div>
        }
    // const number = [0, 1, 2, 3, 4, 5, 6];
    return (
        <div>
            <TitleCalendar> Calendario <FiCalendar /> </TitleCalendar>

            <div>
                <button>Plan común</button>
                <button>Plan vegetariano</button>
                <button>Plan vegano</button>
            </div>

            <DivWeekly>
                <SubTitleCal> Detallado Semanal </SubTitleCal>                              
                <Accordion defaultActiveKey="0" flush>

                <Accordion.Item eventKey="0" >
                <Accordion.Header> Lunes </Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[0]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[0]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[0]}/>    
                </Accordion.Body>
                </Accordion.Item >

                <Accordion.Item eventKey="1" >
                <Accordion.Header>Martes</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[1]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[1]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[1]}/>    
                </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2" >
                <Accordion.Header>Miercoles</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[2]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[2]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[2]}/>    
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" >
                <Accordion.Header>Jueves</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[3]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[3]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[3]}/>    
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" >
                <Accordion.Header>Viernes</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[4]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[4]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[4]}/>    
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" >
                <Accordion.Header>Sábado</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[5]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[5]}/>
                    <h4>CENA</h4>
                <CenaCard dish={cena[5]}/>    
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                <Accordion.Header>Domingo</Accordion.Header>
                <Accordion.Body>
                <h4>DESAYUNO</h4>
                <DesayunoCard dish={desayuno[6]}/>
                    <h4>ALMUERZO</h4>
                <AlmuerzoCard dish={almuerzos[6]}/>
                    <h4>CENA</h4>
                {/* <CenaCard dish={cena[6]}/>     */}
                </Accordion.Body>
                </Accordion.Item>

                </Accordion>
                                
            </DivWeekly>

            {/* <DivInformation>
                <SubTitleCal>Detalles del menú</SubTitleCal>

                <Card className='resume-menu-card' style={{ width: '18rem' }}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>Precio total: $ {totalPrice}</ListGroup.Item>
                        <ListGroup.Item>Puntaje saludable: {totalHealth} Health points  </ListGroup.Item>
                        <ListGroup.Item>Total Tiempo de Preparación: {totalTime} ' </ListGroup.Item>
                    </ListGroup>
                </Card>

            </DivInformation> */}

        </div>
    )
}

export default Calendar