import React, { useEffect, useState } from 'react';
import { getConstructorStandings } from '../../utils/ApiUtils';
import { ConstructorStanding, ConstructorStandingsList } from '../../models/Constructor';
import Error from '../error/Error';
import LoadIndicator from '../common/load-indicator/Load-Indicator';
import '../common/styles/Standings.css';

const Constructors: React.FC = () => {

  const [standings, setStandings] = useState<ConstructorStandingsList>();
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const standingsData = await getConstructorStandings();
      const constructorsData = standingsData[0].ConstructorStandings;
      setStandings(standingsData[0]);
      setConstructors(constructorsData);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

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
                  'current' :
                  standings.season} Constructor Standings
              </h1>
              <table className='data-table'>
                <thead>
                  <tr>
                    <th >#</th>
                    <th>Constructor</th>
                    <th>Points</th>
                    <th>Wins</th>
                    <th>Nationality</th>
                  </tr>
                </thead>
                <tbody>
                  {constructors.map((constructor, index) => {
                    return (
                      <tr key={constructor.Constructor.constructorId}>
                        <td>{++index}</td>
                        <td>
                          <a href={constructor.Constructor.url}>
                            {constructor.Constructor.name}
                          </a>
                        </td>
                        <td>{constructor.points}</td>
                        <td>{constructor.wins}</td>
                        <td>{constructor.Constructor.nationality}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> :
          <div className='load-indicator'>
            <LoadIndicator />
          </div> : 
        <Error />
      }
    </>
  );
}

export default Constructors;
