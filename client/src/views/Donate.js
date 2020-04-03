import React from "react";
import "./donate.css";
import { Paper, Grid, Button, makeStyles } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    width: "90vw"
  },
  categories: {
    margin: "2vh 0vw"
  },
  category: {
    padding: "2vh 1vw 6vh 1vw",
    // width: "25vw",
    backgroundColor: `rgb(236, 236, 236)`
  },
  donateBtn: {
    marginBottom: "3vh",
    backgroundColor: "red",
    color: "white"
  },
  org: {
    padding: "0.3vh 3vw 4vh 3vw",
    margin: "4vh auto"
  }
}));

function Donate() {
  const classes = useStyles();
  return (
    <>
      <h2>We will get through this.</h2>
      <div>
        <p>
          Several organizations are combining efforts to combat the struggles of
          this pandemic.
          <br />
          To help your local community, look up your city's relief efforts.
          <br />
          You can also support small businesses, artists, musicians, independent
          contractors,
          <br />
          and more by purchasing goods and services from them.
          <br />
          We are all in this together.
        </p>
        <p>
          If you are financially able, please consider donating to these
          organizations. Every little bit helps.
        </p>
        <Grid container direction="row" spacing={2} className={classes.root}>
          <Grid item xs={4} className={classes.categories}>
            <Paper className={classes.category}>
              <div>
                <h2>COMMUNITY SUPPORT</h2>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.coreresponse.org/covid19"
                    >
                      CORE Response
                    </a>
                  </h3>
                  <p>
                    CORE is working in partnership with the city of Los Angeles
                    to promote safe and efficient COVID-19 testing to vulnerable
                    populations in Los Angeles. The drive-through testing
                    clinics will be available to those who pre-qualify as high
                    risk.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://donate.coreresponse.org/give/277229/#!/donation/checkout"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.feedingamerica.org/take-action/coronavirus"
                    >
                      Feeding America
                    </a>
                  </h3>
                  <p>
                    They currently have a COVID-19 Response Fund to raise funds
                    and food to support people facing hunger and the food banks
                    who help them. They are also partnered up with school
                    districts to ensure that the 22 million children who rely on
                    school meals have access to food outside of school.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://secure.feedingamerica.org/site/Donation2?df_id=28371&28371.donation=form1&set.Value=&utm_source=&utm_medium=&utm_campaign=&online_promo=COVID+Page&s_src=W203REFER"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.nokidhungry.org/coronavirus"
                    >
                      No Kid Hungry
                    </a>
                  </h3>
                  <p>
                    Millions of vulnerable children are losing the healthy meals
                    they depend on as the coronavirus closes schools nationwide.
                    No Kid Hungry is providing schools and community groups
                    support in feeding these kids through this challenging
                    situation.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://secure.nokidhungry.org/site/Donation2?idb=692968602&df_id=17508&mfc_pref=T&17508.donation=form1&s_subsrc=200WADR00W0&s_src=web&_ga=2.56671586.991672390.1585356224-72097568.1585356224&17508_donation=form1"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.mealsonwheelsamerica.org/take-action/covid-19-response"
                    >
                      Meals On Wheels America
                    </a>
                  </h3>
                  <p>
                    Vulnerable seniors are at the greatest risk amid COVID-19.
                    Meals on Wheels COVID-19 Response Fund helps local
                    communities across the country meet the increased demand for
                    nutritious meals that can keep our seniors safe and healthy.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://ams.mealsonwheelsamerica.org/eweb/DynamicPage.aspx?WebCode=covid19donate&site=mowa&CampCode=COVID-19EmergencyResponseCamp&AplCode=2020ER-WEB-COVID-19&_ga=2.28423740.1495430200.1585356226-804676303.1585356226"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} className={classes.categories}>
            <Paper className={classes.category}>
              <div>
                <h2>GLOBAL AID & RESEARCH</h2>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
                    >
                      WHO COVID-19 Solidarity Response Fund
                    </a>
                  </h3>
                  <p>
                    Proceeds of WHO's response funds will be going towards the
                    critical response efforts in countries most in in need of
                    help and support as the COVID-19 outbreak occurs, including
                    but not limited to accelerating efforts to develop vaccines,
                    tests, and treatments, and putting in place activities to
                    track and understand the spread of the virus.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() => navigate("https://covid19responsefund.org/")}
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://give4cdcf.org/?utm_source=CDCF&utm_medium=web&utm_campaign=combat-coronavirus"
                    >
                      CDC Foundation
                    </a>
                  </h3>
                  <p>
                    CDC Foundation will help communities prevent, detect, and
                    respond to COVID-19 and deploy emergency staffing with the
                    skills required to meet the needs on the front lines at the
                    state and local level. They will also build capacity and
                    infrastructure for global response efforts and other
                    immediate needs as they evolve.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://give4cdcf.org/?utm_source=CDCF&utm_medium=web&utm_campaign=combat-coronavirus"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.pih.org/article/pihs-emergency-coronavirus-response"
                    >
                      Partners in Health
                    </a>
                  </h3>
                  <p>
                    Having deep experience in treating infectious disease
                    outbreaks and responding to emergency situations around the
                    world, PIH is launching a comprehensive effort to test more
                    than 200,000 people for coronavirus.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://ams.mealsonwheelsamerica.org/eweb/DynamicPage.aspx?WebCode=covid19donate&site=mowa&CampCode=COVID-19EmergencyResponseCamp&AplCode=2020ER-WEB-COVID-19&_ga=2.28423740.1495430200.1585356226-804676303.1585356226"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} className={classes.categories}>
            <Paper className={classes.category}>
              <div>
                <h2>HOSPITAL & MEDICAL PERSONNEL</h2>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.directrelief.org/emergency/coronavirus-outbreak/"
                    >
                      Direct Relief
                    </a>
                  </h3>
                  <p>
                    Direct Relief is coordinating with public health
                    authorities, nonprofit organizations and businesses in the
                    U.S., China and globally to provide personal protective
                    equipment and essential medical items to health workers
                    responding to coronavirus.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://secure.directrelief.org/site/Donation2?idb=2084511959&df_id=2924&mfc_pref=T&2924.donation=form1&2924_donation=form1"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://www.providence.org/lp/100m-masks"
                    >
                      Providence
                    </a>
                  </h3>
                  <p>
                    Funds generously donated to Providence will help provide
                    necessary supplies such as personal protective equipment
                    including masks, gowns, face shields for our caregivers.
                    Additionally, funds will be directed towards research in the
                    fight against COVID-19 and care for those who are most
                    vulnerable.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://psjh.give.providence.org/give/276368/#!/donation/checkout"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
                <Paper className={classes.org}>
                  <h3 className="organizations">
                    <a
                      className="links"
                      href="https://nyulangone.org/give/funds/covid-19?mod=article_inline"
                    >
                      NYU Langone Giving
                    </a>
                  </h3>
                  <p>
                    NYU Langone is accepting financial and in-kind donations for
                    personal protective equipment and new, clean medical
                    supplies for medical personnel. Contributions will go into
                    providing employee relief to ensure frontline staff will
                    receive the the care and support they need to focus on the
                    health and safety of the patients.
                  </p>
                  <Button
                    variant="contained"
                    className={classes.donateBtn}
                    onClick={() =>
                      navigate(
                        "https://secure2.convio.net/nyulmc/site/Donation2?6193.donation=form1&df_id=6193&mfc_pref=T&params=eyJkb25hdGlvbl90eXBlIjoiZnVuZCIsImRvY3Rvcl9kYXkiOmZhbHNlLCJsZXZlbF9pZCI6IjE5NzE0IiwiYWxsb2NhdGlvbl9jb2RlIjoiSFNJMDE1OEE4ODAwNjczOTAxTllVUFJKIiwiYXBwZWFsX2NvZGUiOiJORDIwRjAxVyIsImRlc2NyaXB0aW9uIjoiWW91ciBnaWZ0IHdpbGwgc3VwcG9ydCBvdXIgcGF0aWVudHMsIGZyb250bGluZSB0ZWFtcywgYW5kIHJlc2VhcmNoZXJzIiwiZnVuZF90aXRsZSI6IkpvaW4gT3VyIENvbW11bml0eSBUbyBGaWdodCBDT1ZJRC0xOSIsImRlZmF1bHRfZG9uYXRpb25fZnJlcXVlbmN5Ijoib25lLXRpbWUiLCJmb3JtX2lkIjo2NDMwLCJzdWNjZXNzX3JlZGlyZWN0IjoiaHR0cHM6XC9cL255dWxhbmdvbmUub3JnXC9naXZlXC9mdW5kc1wvY292aWQtMTlcL2RvbmF0ZVwvY29uZmlybWF0aW9uP2dpZnRfaWQ9JHtkb25hdGlvblJlc3BvbnNlXC9kb25hdGlvblwvdHJhbnNhY3Rpb25faWR9JmZyZXF1ZW5jeT0ke3N1c3RhaW5pbmcuZnJlcXVlbmN5fSZ0cmlidXRlX25vdGlmeT0ke3RyaWJ1dGUubm90aWZpY2F0aW9uX3R5cGV9JnRyaWJ1dGVfdHlwZT0ke3RyaWJ1dGUudHlwZX0maXNfdGVhbV9jYW1wYWlnbj0iLCJkb25hdGlvbl9sZXZlbHMiOlt7ImxldmVsSWQiOjE5NzEyLCJuYW1lIjoiRG9uYXRpb24gTGV2ZWwgMyIsImFtb3VudCI6eyJmb3JtYXR0ZWQiOiIkMjUuMDAiLCJkZWNpbWFsIjoiMjUuMDAifSwidXNlclNwZWNpZmllZCI6ZmFsc2V9LHsibGV2ZWxJZCI6MTk3MTMsIm5hbWUiOiJEb25hdGlvbiBMZXZlbCAxIiwiYW1vdW50Ijp7ImZvcm1hdHRlZCI6IiQ1MC4wMCIsImRlY2ltYWwiOiI1MC4wMCJ9LCJ1c2VyU3BlY2lmaWVkIjpmYWxzZX0seyJsZXZlbElkIjoxOTcxNCwibmFtZSI6IkRvbmF0aW9uIExldmVsIDIiLCJhbW91bnQiOnsiZm9ybWF0dGVkIjoiJDEwMC4wMCIsImRlY2ltYWwiOiIxMDAuMDAifSwidXNlclNwZWNpZmllZCI6ZmFsc2V9LHsibGV2ZWxJZCI6MTk3MTUsIm5hbWUiOiJEb25hdGlvbiBMZXZlbCA0IiwiYW1vdW50Ijp7ImZvcm1hdHRlZCI6IiQ1MDAuMDAiLCJkZWNpbWFsIjoiNTAwLjAwIn0sInVzZXJTcGVjaWZpZWQiOmZhbHNlfSx7ImxldmVsSWQiOjE5NzExLCJuYW1lIjoiRG9ub3IgRW50ZXJlZCBBbW91bnQiLCJhbW91bnQiOnsiZm9ybWF0dGVkIjoiJDUuMDAiLCJkZWNpbWFsIjoiNS4wMCJ9LCJ1c2VyU3BlY2lmaWVkIjp0cnVlfV0sInBhZ2VfYW5hbHl0aWNzIjoiXC9naXZlXC9mdW5kc1wvY292aWQtMTlcL2RvbmF0ZSIsImlzX3JhZGlvdGhvbl9mb3JtIjoiMCJ9&_ga=2.186475497.1344305894.1585360612-1062066734.1585360612"
                      )
                    }
                  >
                    Donate
                  </Button>
                </Paper>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Donate;
