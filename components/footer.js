import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

const Footer = ({ t }) => (
  <section className="row justify-content-center footer-text m-0">
    <div className="col-auto">
      <a
        className="link"
        href="https://docs.qq.com/document/DWUJhY1RIeXlXYXN4" 
        target="_blank"
        >社团规章制度</a>
    </div>

    <div className="col-12 row justify-content-center my-3 footer-copyright">
      © 2022 机研社团-信息化世界探索与研究爱好者协会
    </div>
    <div className="divider"></div>
    <style jsx>{`
      .footer-text {
        font-size: 15px;
        font-weight: 500;
        line-height: 22px;
        color: rgba(141, 141, 141, 1);
      }
      .footer-copyright {
        font-size: 14px;
        line-height: 19px;
        color: rgba(172, 174, 179, 1);
        font-weight: 400;
      }
      .link {
        color: rgba(141, 141, 141, 1);
      }
    `}</style>
  </section>
);
Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Footer);
