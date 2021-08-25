import React from 'react';

interface Props {}

const Dashboard = (props: Props) => {
    return (
        <div
            style={{
                height: '100%',
                backgroundImage: "url('/images/background/dashboard-pg.jpg')",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}
        ></div>
    );
};

export default Dashboard;
