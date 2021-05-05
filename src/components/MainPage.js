import React, { useEffect } from "react";

import Card from "./Card";
import {
  getData,
  filterDataByYear,
  filterDataBySuccessLand,
  filterDataBySuccessLandAndLaunch,
} from "./actions";
import { connect } from "react-redux";

const MainPage = ({
  getData,
  data,
  filterDataByYear,
  filterDataBySuccessLand,
  filterDataBySuccessLandAndLaunch,
}) => {
  useEffect(() => getData(), [getData]);
  console.log(data);
  return (
    <section className='container'>
      <h2>SpaceX Launch Programs</h2>

      <section className='container-inside'>
        <div className='filter-pane'>
          <h4 className='heading-filter'>
            <strong>Filters</strong>
          </h4>

          <span>Launch Year</span>
          <hr />
          <div className='buttons'>
            <div className='button' onClick={() => filterDataByYear(2006)}>
              2006
            </div>

            <div className='button' onClick={() => filterDataByYear(2007)}>
              2007
            </div>
            <div className='button' onClick={() => filterDataByYear(2008)}>
              2008
            </div>
            <div className='button' onClick={() => filterDataByYear(2009)}>
              2009
            </div>
            <div className='button' onClick={() => filterDataByYear(2010)}>
              2010
            </div>
            <div className='button' onClick={() => filterDataByYear(2011)}>
              2011
            </div>
            <div className='button' onClick={() => filterDataByYear(2012)}>
              2012
            </div>
            <div className='button' onClick={() => filterDataByYear(2013)}>
              2013
            </div>
            <div className='button' onClick={() => filterDataByYear(2014)}>
              2014
            </div>
            <div className='button' onClick={() => filterDataByYear(2015)}>
              2015
            </div>
            <div className='button' onClick={() => filterDataByYear(2016)}>
              2016
            </div>
            <div className='button' onClick={() => filterDataByYear(2017)}>
              2017
            </div>
            <div className='button' onClick={() => filterDataByYear(2018)}>
              2018
            </div>
            <div className='button' onClick={() => filterDataByYear(2019)}>
              2019
            </div>
            <div className='button' onClick={() => filterDataByYear(2020)}>
              2020
            </div>
          </div>
          <div className='successful'>
            <div>
              <h4>Successful Launch</h4>
              <hr />
            </div>
            <div className='buttons'>
              <div className='button' onClick={() => filterDataBySuccessLand()}>
                True
              </div>
              <div
                className='button'
                onClick={() => filterDataBySuccessLand(false)}
              >
                False
              </div>
            </div>
          </div>
          <div className='successful'>
            <div>
              <h4>Successful Landing</h4>
              <hr />
            </div>
            <div className='buttons'>
              <div
                className='button'
                onClick={() => filterDataBySuccessLandAndLaunch()}
              >
                True
              </div>
              <div
                className='button'
                onClick={() => filterDataBySuccessLandAndLaunch(false)}
              >
                False
              </div>
            </div>
          </div>
        </div>
        <section className='cards'>
          {data.map(
            (
              {
                launch_year,
                flight_number,
                launch_success,
                rocket: {
                  first_stage: { cores },
                },
                mission_name,
                links: { mission_patch_small },
                mission_id,
              },
              index
            ) => (
              <Card
                key={index}
                mission_name={mission_name}
                mission_patch_small={mission_patch_small}
                mission_id={mission_id}
                launch_year={launch_year}
                launch_success={launch_success}
                flight_number={flight_number}
                cores={cores}
              />
            )
          )}
        </section>
      </section>

      <footer>
        <h1>Developed By :Kunal Goel and Tanul Deshmukh</h1>
      </footer>
    </section>
  );
};
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, {
  getData,
  filterDataByYear,
  filterDataBySuccessLand,
  filterDataBySuccessLandAndLaunch,
})(MainPage);
