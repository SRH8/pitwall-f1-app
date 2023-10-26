import { ConstructorsData, ConstructorStandingsList } from '../models/Constructor';
import { DriversData, DriverStandingsList } from '../models/Driver';
import env from "react-dotenv";

const baseUrl = `${env.API_URL}`;
const constructorsPath = 'constructorStandings.json';
const driversPath = 'driverStandings.json'; 

export const getConstructorStandings = async (): Promise<ConstructorStandingsList[]> => {
  const response = await fetch(`${baseUrl}${constructorsPath}`);
  const data: ConstructorsData = await response.json();
  const standings: ConstructorStandingsList[] = data.MRData.StandingsTable.StandingsLists;
  
  if(!response.ok) {
    throw Error(response.statusText);
  }

  return standings;
}

export const getDriverStandings = async (): Promise<DriverStandingsList[]> => {
  const response = await fetch(`${baseUrl}${driversPath}`);
  const data: DriversData = await response.json();
  const standings: DriverStandingsList[] = data.MRData.StandingsTable.StandingsLists;
  
  if(!response.ok) {
    throw Error(response.statusText);
  }

  return standings;
}
