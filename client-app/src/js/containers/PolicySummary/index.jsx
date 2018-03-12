import React from 'react';
import { Redirect } from 'react-router-dom';

const Summary = () => (
  <div className="Container">
    <h2>Claim Verification Summary</h2>
    <br />
    <div className="Grid">
      <div className="Grid-cells">
        <div className="Grid-cell u-size2of12">Policy #:</div>
        <div className="Grid-cell u-size1of12">UA2119398</div>
        <div className="Grid-cell">&nbsp;</div>
        <div className="Grid-cell u-size2of12">Paid to Date:</div>
        <div className="Grid-cell u-size1of12">03/08/2018</div>
        <div className="Grid-cell">&nbsp;</div>
        <div className="Grid-cell u-size2of12">Date of Death:</div>
        <div className="Grid-cell u-size1of12">03/08/2018</div>
        <div className="Grid-cell">&nbsp;</div>
        <div className="Grid-cell u-size2of12">Date of Proof:</div>
        <div className="Grid-cell u-size1of12">03/08/2018</div>
        <div className="Grid-cell">&nbsp;</div>
        <div className="Grid-cell u-size2of12">Claim Effective Date:</div>
        <div className="Grid-cell u-size1of12">03/08/2018</div>
        <div className="Grid-cell">&nbsp;</div>
        <div className="Grid-cell u-size2of12">Selected Rider:</div>
        <div className="Grid-cell u-size1of12">Accidental</div>
      </div>
    </div>
    <br />
    <button className="Button Button--flat u-mR2" onClick={event => this.handleBack(event)}>Back</button>
    <button className="Button Button--outline u-mR2" onClick={event => this.handleCancel(event)}>Cancel</button>
    <button className="Button" onClick={event => this.handleSubmit(event)}>Submit</button>

  </div>
);


Summary.handleSubmit = (event) => {
  event.preventDefault();
  return <Redirect to="/InterestCalc" />;
};

Summary.handleCancel = (event) => {
  event.preventDefault();
  return <Redirect to="/PolicyLookup" />;
};

Summary.handleBack = (event) => {
  event.preventDefault();
  return <Redirect to="/PolicySearchResult" />;
};

export default Summary;
