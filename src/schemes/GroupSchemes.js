import React from 'react';
import './GroupSchemes.css';

const GroupSchemes = () => {
  return (
    <div className="group-schemes">
      <h2>Group Schemes</h2>
      <div className="scheme-card">
        <h3>Term insurance</h3>
        <p>Term life insurance policies offer coverage for a specified amount of time, typically anywhere from one to 30 years. Term life insurance offers a death benefit, which is intended to help your beneficiaries replace your income if you pass away.</p>
        <a href="#" className="button">Learn More</a>
      </div>
      <div className="scheme-card">
        <h3>Term insurance with return of premium.</h3>
        <p>The answer depends on your need. If you are expecting life insurance to financially protect your family from death, and you can manage your saving needs through other means, term insurance is the best. If you want to receive a payout on survival of the policy term, you should buy return of premium plan</p>
        <a href="#" className="button">Learn More</a>
      </div>
      <div className="scheme-card">
        <h3>Endowment plans.</h3>
        <p>Endowment plans pay an amount known as Death Benefit to the nominee in case of an unfortunate demise of the life assured. Maturity benefits: The unique feature of endowment plans is that they provide benefits upon maturity. On completion of the tenure of the policy, the policyholder receives a maturity benefit.</p>
        <a href="#" className="button">Learn More</a>
      </div>
      <div className="scheme-card">
        <h3>Whole life insurance.</h3>
        <p>Whole life insurance is a type of permanent life insurance, which means the insured person is covered for the duration of their life as long as premiums are paid on time.</p>
        <a href="#" className="button">Learn More</a>
      </div>
      <div className="scheme-card">
        <h3>Group life insurance.</h3>
        <p>Group life insurance is a type of term life insurance plan purchased by an employer or organization to cover an entire group of people. Often, this insurance is offered as an employment benefit or membership perk at little or no cost to insured individuals.</p>
        <a href="#" className="button">Learn More</a>
      </div>
      <div className="scheme-card">
        <h3>Child Insurance Plans.</h3>
        <p>Child plans are insurance cum investment plans that help an individual create a corpus for children's future, over a period of time (policy term). On maturity, these plans pay a lump sum amount which can be used to pay your child's college fees or marriage expenses.</p>
        <a href="#" className="button">Learn More</a>
      </div>
    </div>
  );
};

export default GroupSchemes;
