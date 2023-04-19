import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const MainFeature = ({ t }) => {
  return (
    <section className="container my-5">
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
            <h2 className="h1">{t("title1")}</h2>
            <p className="lead">{t("subtitle1")}</p>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/bg1.jpg"
              alt="丰富的社团活动"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around ">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
            <div>
              <h2 className="h1">{t("title2")}</h2>
              <p className="lead">{t("subtitle2")}</p>
            </div>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 feature-image  aos-init feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/bg2.jpg"
              alt="互相帮助"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
            <h2 className="h1">{t("title3")}</h2>
            <p className="lead">{t("subtitle3")}</p>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init  feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/bg3.jpg"
              alt="极客项目"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
            <div>
              <h2 className="h1">{t("title4")}</h2>
              <p className="lead">{t("subtitle4")}</p>
            </div>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 feature-image aos-init "
            data-aos="fade-up"
          >
            <img
              src="/images/bg4.jpg"
              alt="探索永无止境"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};
MainFeature.getInitialProps = async () => ({
  namespacesRequired: ["mainFeature"],
});
MainFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("mainFeature")(MainFeature);
