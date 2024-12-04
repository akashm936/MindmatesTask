import React from 'react';

const Home = ({ user }) => {
  return (
    <div className="text-center mt-12">
      {user ? (
        <>
          <h1 className="text-3xl font-bold">Welcome {user.displayName || 'User'}</h1>
          <p className="mt-4 text-xl">Email: {user.email}</p>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen text-xl">
          <p>Please log in to see your email.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
