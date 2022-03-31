import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import { FiCalendar } from "react-icons/fi";
import { DivInformation, DivMonth, DivWeekly, SubTitleCal, TitleCalendar } from '../../styles/styledComponents/CalendarStyled';
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
                
    return (
        <div>
            <TitleCalendar> Calendario <FiCalendar /> </TitleCalendar>
            <DivWeekly>
                <SubTitleCal> Detallado Semanal </SubTitleCal>

              
                  
                      <Accordion defaultActiveKey="0" flush>
                          <Accordion.Item eventKey="0">
                              <Accordion.Header> Lunes </Accordion.Header>
                              <Accordion.Body>
                                  
                                 <h2>DESAYUNO</h2>
                              <DesayunoCard dish={desayuno[0]}/>
                                  <h2>ALMUERZO</h2>
                              <AlmuerzoCard dish={almuerzos[0]}/>
                                  <h2>CENA</h2>
                              <CenaCard dish={cena[0]}/>    
      
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                              <Accordion.Header>Martes</Accordion.Header>
                              <Accordion.Body>                   
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                              <Accordion.Header>Miercoles</Accordion.Header>
                              <Accordion.Body>
                         
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                              <Accordion.Header>Jueves</Accordion.Header>
                              <Accordion.Body>
                               
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                              <Accordion.Header>Viernes</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                              <Accordion.Header>Sábado</Accordion.Header>
                              <Accordion.Body>
                                
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="6">
                              <Accordion.Header>Domingo</Accordion.Header>
                              <Accordion.Body>
                            
                              </Accordion.Body>
                          </Accordion.Item>
                          
                      </Accordion>
                    )
                

            
      
                          
           

            </DivWeekly>

            <DivInformation>
                <SubTitleCal>Detalles del menú</SubTitleCal>
            </DivInformation>


        </div>
    )
}

export default Calendar