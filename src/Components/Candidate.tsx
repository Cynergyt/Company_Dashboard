import React from 'react';

interface CandidateProps {
  role: string,
  company: string,
  city: string,
  location: string
}

const Candidate: React.FC<CandidateProps> = ({ role, company, city, location }) => {
 
  return (
    <div className='candidate-content'>
        <div className='role'> {role} </div>
        <div className='company'> {company} </div>
        <div className='city'> {city} </div>
        <div className='location'> {location} </div>
    </div>
  );
};

export default Candidate;
