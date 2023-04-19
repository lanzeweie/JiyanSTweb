import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
const Support = ({ t }) => {
  return (
    <div>
      <Header />
      <section className="bg-dynamic pb-5"> 
        <div className="container mt-4">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <h1 className="page-title">信息部</h1>
              <p className="page-down">主页</p>
            </div>
          </div>
          <div
            className="row mt-lg-5 justify-content-center aos-init"
            data-aos="fade-up"
          >
            <div>
              <div className="row mt-4 justify-content-start mr-0 ml-0">
                <div className="col-2 pr-0 row justify-content-center">
                  <svg className="icon form-icon" aria-hidden="true">
                    <use href={`#icon-zu59`}></use>
                  </svg>
                </div>
                <div className="col-10">
                  <div className="xinxi-zhuye-title">{t("xinxibu1-1")}</div>
                  <div className="xinxi-zhuye-subtitle">
                    {t("xinxibu1-2")}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row mt-4 justify-content-start mr-0 ml-0">
                <div className="col-2 pr-0 row justify-content-center">
                  <svg className="icon form-icon" aria-hidden="true">
                    <use href={`#icon-renxiang`}></use>
                  </svg>
                </div>
                <div className="col-10">
                <div className="xinxi-zhuye-title">{t("xinxibu2-1")}</div>
                  <div className="xinxi-zhuye-subtitle">
                    {t("xinxibu2-2")}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <style jsx>{`
        .xinxi-zhuye-title {
          font-size: calc(1rem + 0.7vw);
          font-weight: 600;
          line-height: 43px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
        }
        .xinxi-zhuye-subtitle {
          font-size: 18px;
          line-height: 25px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.55;
          font-weight: 500;
        }
        .form-link {
          font-size: 18px;
          font-weight: 500;
          line-height: 2;
          color: rgba(37, 104, 239, 1);
          opacity: 1;
        }
        .form-icon {
          font-size: 60px;
        }
        .page-down {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          
        }
        @media (max-width: 992px) {
          .feedback-subtitle,
          .form-link {
            font-size: 15px;
          }
          .form-icon {
            display: none;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
};
Support.getInitialProps = async () => ({
  namespacesRequired: ["common", "header","xinxibu"],
});
Support.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("xinxibu")(Support);
