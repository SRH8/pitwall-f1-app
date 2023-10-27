import React, { useEffect, useState } from 'react';
import { DriverStanding, DriverStandingsList } from '../../models/Driver';
import { getDriverStandings } from '../../utils/ApiUtils';
import LoadIndicator from '../common/load-indicator/Load-Indicator';
import Error from '../error/Error';
import '../common/styles/Standings.css';

const Drivers: React.FC = () => {

  const[standings, setStandings] = useState<DriverStandingsList>();
  const[drivers, setDrivers] = useState<DriverStanding[]>([]);
  const[isLoading, setLoading] = useState<boolean>(false);
  const[hasError, setError] = useState<boolean>(false);

  const loadData = async () => {
    setLoading(true);

    try {
      const standingsData = await getDriverStandings();
      const driversData = standingsData[0].DriverStandings;
      setStandings(standingsData[0]);
      setDrivers(driversData);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {!hasError ?
        !isLoading ?
          <div>
            <div className='table-wrapper'>
              <h1>
                {typeof standings === 'undefined' ?
                 'current':
                  standings.season} Driver Standings
              </h1>
              <table className='data-table'>
                <thead>
                  <tr>
                  <th >#</th>
                    <th>Driver</th>
                    <th>Number</th>
                    <th>Points</th>
                    <th>Wins</th>
                    <th>Nationality</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((drivers, index) => {
                    return (
                      <tr key={drivers.Driver.driverId}>
                        <td>{++index}</td>
                        <td>
                          <a href={drivers.Driver.url}>
                          {drivers.Driver.givenName} {drivers.Driver.familyName}
                          </a>
                        </td>
                        <td>{drivers.Driver.permanentNumber}</td>
                        <td>{drivers.points}</td>
                        <td>{drivers.wins}</td>
                        <td>{drivers.Driver.nationality}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> :
          <div>
            <LoadIndicator />
          </div> :
          <Error />
      }
    </>
  );
}

export default Drivers;
