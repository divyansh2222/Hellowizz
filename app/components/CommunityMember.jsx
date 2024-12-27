import React from 'react';
import CommunityMemberCard from './CommunityMemberCard';
import members from './Member';  // Importing members data

const CommunityMembers = () => {
  return (
    <div className="grid  sm:grid-cols-2  lg:grid-cols-3 gap-6 p-6 bg-gray-100 ">
      {members.map((member) => (
        <CommunityMemberCard key={member.id} member={member} />  
      ))}
    </div>
  );
};

export default CommunityMembers;
