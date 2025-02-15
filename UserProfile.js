import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiService.getUser(id);
      setUser(response);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.profile?.bio}</p>
      <h2>Posts</h2>
      {/* Render user posts here */}
    </div>
  );
};

export default UserProfile;
