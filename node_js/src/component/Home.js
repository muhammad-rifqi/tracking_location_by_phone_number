import React from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const Home = () => {

  const phoneNumber = parsePhoneNumberFromString('+6281927067602');
  console.log(phoneNumber);

  return (
    <>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                  <h2 className="fs-4 fw-bold">Test</h2>
                  <p className="mb-0">test</p>
                  <p className="mb-0"> test </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;
