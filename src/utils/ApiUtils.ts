import { ConstructorsData, ConstructorStandingsList } from '../models/Constructor';
import { DriversData, DriverStandingsList } from '../models/Driver';

const baseUrl = 'https://ergast.com/api/f1/current/';

export const getConstructorStandings = async (path: string): Promise<ConstructorStandingsList[]> => {
  const response = await fetch(`${baseUrl}${path}`);
  const data: ConstructorsData = await response.json();
  const standings: ConstructorStandingsList[] = data.MRData.StandingsTable.StandingsLists;
  
  if(!response.ok) {
    throw Error(response.statusText);
  }

  return standings;
}


export const getDriverStandings = async (path: string): Promise<DriverStandingsList[]> => {
  const response = await fetch(`${baseUrl}${path}`);
  const data: DriversData = await response.json();
  const standings: DriverStandingsList[] = data.MRData.StandingsTable.StandingsLists;
  
  if(!response.ok) {
    throw Error(response.statusText);
  }

  return standings;
}
