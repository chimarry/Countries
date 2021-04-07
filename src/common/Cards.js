import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these TRENDING countries</h1>
            <Container fluid>
                <Row>
                    <Col >
                        <CardItem url='https://restcountries.eu/data/cod.svg' countryName='Congo' />
                    </Col>
                    <Col>
                        <CardItem url='https://restcountries.eu/data/afg.svg' countryName='Afghanistan' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardItem url='https://restcountries.eu/data/srb.svg' countryName='Serbia' />
                    </Col>
                    <Col>
                        <CardItem url='https://restcountries.eu/data/gha.svg' countryName='Ghana' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardItem url='https://restcountries.eu/data/col.svg' countryName='Colombia' />
                    </Col>
                    <Col>
                        <CardItem url='https://restcountries.eu/data/isl.svg' countryName='Iceland' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards
