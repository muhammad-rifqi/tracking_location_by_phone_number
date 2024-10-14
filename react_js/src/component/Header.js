import React from "react";

const Header = () => {
  return (
    <>
      <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">Salam Hangat!</h1>
                        <p className="fs-4">Berikut adalah daftar Portofolio yang sudah di kerjaan dalam kurun waktu selama bekerja di perusahaan dan projek freelence!!</p>
                        <a className="btn btn-primary btn-lg" href="/">List Aplikasi!</a>
                    </div>
                </div>
            </div>
        </header>
    </>
  );

}

export default Header