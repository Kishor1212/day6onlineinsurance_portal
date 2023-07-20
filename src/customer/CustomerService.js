import React from 'react';
import './CustomerService.css'; 

const CustomerService = () => {
  return (
    <section className="customer-service">
      <div className="customer-service-container">
        <div className="customer-service-left">
          <h2>Contact Our Customer Service</h2>
          <p>We're available to assist you 24/7.</p>
        </div>
        <div className="customer-service-right">
          <a href="tel:+1234567890">Call us: +1 (234) 567-890</a>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
