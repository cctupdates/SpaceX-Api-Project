import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <section className='landing'>
        <div className='access'>
          <img
            style={{
              width: "400px",
              height: "100px",
              backgroundColor: "white",
            }}
            src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png'
            alt=''
          />

          <Link to='/spacex'>
            <div className='access-btn'>Access Website</div>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
