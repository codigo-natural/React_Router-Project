import React from 'react';

const ProfileData = ({ user }) => {
  return (
    <ul>
      <li>
        <b>phonenumber:</b> {user?.phonenumber || '-'}
      </li>
      <li>
        <b>Description:</b> {user?.Description || '-'}
      </li>
      <li>
        <b>Roles:</b> {user?.roles}
      </li>
    </ul>
  );
};

export { ProfileData };
