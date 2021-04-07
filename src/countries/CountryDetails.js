import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CountryDetails.css';
import { Button } from '../common/Button';
const GET_BY_NAME = 'https://restcountries.eu/rest/v2/name/';

const CountryDetails = (props) => {
    const [country, setCountry] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const hideModal = () => {
        setIsOpen(false);
        props.onClose();
    }

    const printCountryDetails = (paramCountry) => {
        return (<div className='modal--div'>
            <div className='row'>
                <div className='col-sm margin--top'>
                    <h5>Population</h5>  {paramCountry.population}
                </div>
                <div className='col-sm margin--top'>
                    <h5> Region</h5>  {paramCountry.region}
                </div>
            </div>
            <div className='row'>
                <div className='col-sm margin--top' >
                    <h5>Alpha code</h5>  {paramCountry.alpha2Code}
                </div>
                <div className='col-sm margin--top'>
                    <h5>Languages</h5>
                    <ul>
                        {paramCountry.languages.map(function (x, index) { return <li key={index}>{x.name}</li> })}
                    </ul>
                </div>
            </div>
        </div>);
    }

    useEffect(() => {
        fetch(`${GET_BY_NAME}${props.countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data[0]);
            });

    }, [props.countryName]);
    return (
        <div>
            <Modal className='modal--theme modal-content' isOpen={isOpen}>
                <ModalHeader className='modal--header'>{props.countryName}</ModalHeader>
                <ModalBody>
                    {country && printCountryDetails(country)}
                </ModalBody>
                <ModalFooter className='modal--footer'>
                    <Button buttonStyle='btn--outline' onClick={hideModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CountryDetails;
