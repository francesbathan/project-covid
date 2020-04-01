import React from "react";
import "./resources.css";

function Resources() {
  return (
    <>
      <h2>Stay informed.</h2>
      <div>
        <p>
          One way to prevent the spread of COVID-19 and help flatten the curve
          is to be informed about this virus.
          <br />
          We encourage you to make your research and only get your information
          from reliable sources.
        </p>
        <p>Please refer to the following resources to help you:</p>

        <div className="resourceList">
          <h4 className="organizations">World Health Organization (WHO)</h4>
          <a
            className="links"
            href="https://www.who.int/health-topics/coronavirus"
          >
            https://www.who.int/health-topics/coronavirus
          </a>

          <h4 className="organizations">
            Centers For Disease Control and Prevention (CDC)
          </h4>
          <a
            className="links"
            href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
          >
            https://www.cdc.gov/coronavirus/2019-nCoV/index.html
          </a>

          <h4 className="organizations">
            The White House in partnership with CDC
          </h4>
          <a className="links" href="coronavirus.gov">
            https://www.coronavirus.gov/
          </a>

          <h4 className="organizations">
            U.S. Department of Education Advisory for Schools
          </h4>
          <a className="links" href="https://www.ed.gov/coronavirus">
            https://www.ed.gov/coronavirus
          </a>

          <h4 className="organizations">
            John Hopkins University & Medicine Coronavirus Resource Center
          </h4>
          <a className="links" href="https://coronavirus.jhu.edu/">
            https://coronavirus.jhu.edu/
          </a>

          <h4 className="organizations">Harvard Coronavirus Resource Center</h4>
          <a
            className="links"
            href="https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center"
          >
            https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center
          </a>

          <h4 className="organizations">National Institutes of Health</h4>
          <a
            className="links"
            href="https://www.nih.gov/health-information/coronavirus"
          >
            https://www.nih.gov/health-information/coronavirus
          </a>

          <h4 className="organizations">Food and Drug Administration</h4>
          <a
            className="links"
            href="https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19"
          >
            https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19
          </a>

          <h4 className="organizations">
            U.S. Department of State - Bureau of Consular Affairs Travel
            Advisory
          </h4>
          <a
            className="links"
            href="https://travel.state.gov/content/travel/en/traveladvisories/ea/covid-19-information.html"
          >
            https://travel.state.gov/content/travel/en/traveladvisories/ea/covid-19-information.html
          </a>
        </div>
      </div>
    </>
  );
}
export default Resources;
