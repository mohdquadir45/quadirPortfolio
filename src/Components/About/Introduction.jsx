import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} style={{objectFit:'cover'}} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Mohammed Quadir </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Akola, Maharashtra (India)
                </span>
                . I have completed my graduation in BE (Mechanical Engineering)
                from{" "}
                <span className="different">
                  Mauli College of Engineering, Shegaon (MH)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Newton School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Urdu Books{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
