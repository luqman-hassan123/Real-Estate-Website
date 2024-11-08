import React from 'react';
import './companies.css';

// Component name updated to Companies
const Companies = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* Assuming images are in the public directory */}
          <img src="/prologis.png" alt="Prologis" />
          <img src="/tower.png" alt="Tower" />
          <img src="/equinix.png" alt="Equinix" />
          <img src="/realty.png" alt="Realty" />
        </div>
      </section>
    </div>
  );
};

export default Companies;
