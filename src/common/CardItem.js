import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.css';
import '../countries/CountryDetails';
import CountryDetails from '../countries/CountryDetails';
import { Button } from 'reactstrap';

const GET_BY_NAME = 'https://restcountries.eu/rest/v2/name/';

function CardItem(props) {
    const [populationSize, setPopulationSize] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    useEffect(() => {
        fetch(`${GET_BY_NAME}${props.countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setPopulationSize(data[0].population);
            });
    });
    return (
        <>
            {showModal && <CountryDetails countryName={props.countryName} onClose={closeModal} />}
            <Card className='card--item'>
                <a style={{ cursor: 'pointer' }} onClick={() => { setShowModal(true) }}>
                    <Card.Img className='card--img' variant='top' src={props.url} />
                </a>
                <Card.Body>
                    <Card.Title className='card--title'>{props.countryName}</Card.Title>
                    <Card.Footer className='card--footer' >Population size: {populationSize}</Card.Footer>
                </Card.Body>
            </Card >
        </>
    )
}

export default CardItem
