import React from 'react';
import { useQuery, gql } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
export default function Launches() {
    const {loading, error, data} = useQuery(LAUNCHES_QUERY);
    if(loading) return <h4>Loading...</h4>
    if(error) return <h4>{error}</h4>
        
        return (
            <di>
                {data.launches.map(item => (
                    <p>{item.flight_number}</p>
                ))}
            </di>
        )
}