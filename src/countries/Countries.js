import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './Countries.css';

function Countries() {
    const [countries, setCountries] = useState([]);
    const renderTableData = () => {
        return (
            countries.map(x => {
                return (
                    <tr className='table--row'>
                        <td>{x.name}</td>
                        <td>{x.alpha2Code}</td>
                        <td>{x.population}</td>
                    </tr>);
            })
        )
    };
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            });
    });
    return (
        <div className='countries--background'>
            <div className='countries--table'>
                <Table bordered>
                    <thead className='table--header'>
                        <tr>
                            <th>Name</th>
                            <th>Alpha Code</th>
                            <th>Population Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Countries
