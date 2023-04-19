import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";

const HeaderOption = ({ t, router, theme }) => {
  const routeName = router.pathname;
  return (
    <div>
      <div className="row ">
        <li className="col-lg-auto mt-2">
          <Link href="/faq">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("faq")}
            </a>
          </Link>
        </li>
        <li className="col-lg-auto mt-2">
          <Link href="/log">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("log")}
            </a>
          </Link>
        </li>
      </div>

      <style jsx>{`
        .froze {
          color: white;
        }
      `}</style>
    </div>
  );
};
HeaderOption.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});
HeaderOption.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("header")(withRouter(HeaderOption));
