import React from "react";
import Labels from "../../Shared/Labels/Labels";
import "./PoliticsAndBusiness.css";

const PoliticsAndBusiness = ({ PoliticsData }) => {
  return (
    <>
      <div className="politics-and-business-containers">
        <div className="politics-and-business-main-containers">
          <div className="politics-containers">
            <Labels labelName="POLITICS"/>
            {PoliticsData.map((each, index) => (
              <div className="politics-data-containers">
                <div className="figure-container">
                  <figure>
                    <img
                      src={each?.img}
                      className="politics-image"
                      alt="politics"
                    />
                  </figure>
                </div>

                <div className="title-description-container">
                  <div className="title-section">
                    <h4>{each?.title}</h4>
                  </div>
                  <div className="description-section">
                    <p>{each?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="trending-container">
            <Labels labelName="TRENDING"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticsAndBusiness;
