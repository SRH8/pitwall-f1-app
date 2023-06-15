import { ConstructorsData, StandingsList } from '../models/Constructor';

const baseUrl = 'https://ergast.com/api/f1/current/';

export const getStandings = async (path: string): Promise<StandingsList[]> => {
  const response = await fetch(`${baseUrl}${path}`);
  const data: ConstructorsData = await response.json();

  const standings: StandingsList[] = data.MRData.StandingsTable.StandingsLists;
  
  if(!response.ok) {
    throw Error(response.statusText);
  }

  return standings;
}