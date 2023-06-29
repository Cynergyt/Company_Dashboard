import React from 'react';

interface CandidateProps {
  role: string,
  company: string,
  city: string,
  location: string
}

const Candidate: React.FC<CandidateProps> = ({ role, company, city, location }) => {
 
  return (
    <div>
        <div> {role} </div>
        <div> {company} </div>
        <div> {city} </div>
        <div> {location} </div>
    </div>
  );
};

export default Candidate;
