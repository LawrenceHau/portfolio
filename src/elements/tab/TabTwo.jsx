import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProgressBar } from "react-bootstrap";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "General",
      tab3 = "Experience",
      tab4 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div
                        className={`rn-progress-bar progress-bar--1 mt_dec--10`}
                      >
                        <div className="row py-3">
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">HTML, CSS, Javascript</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">MERN STACK</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">Python, Django</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">Heroku</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">AtlasDB</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">Mongoose, MongoSH</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">PostgreSql</h6>
                          </div>
                          <div className="col-md-3 col-6">
                            {" "}
                            <h6 className="title">PGAdmin4</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="row">
                        <div className="col-md-4 col-6">
                          {" "}
                          <h6 className="title">Time Management</h6>
                        </div>
                        <div className="col-md-4 col-6">
                          {" "}
                          <h6 className="title">Group Coordination</h6>
                        </div>
                        <div className="col-md-4 col-6">
                          {" "}
                          <h6 className="title">Project Development</h6>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul className="">
                        <li>
                          <a href="#">
                            Internship<span> - Castro Computers</span>
                          </a>{" "}
                          2012 - 2013
                          <ul
                            className="pl-3 "
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              Direct and Remote support for OSX, Windows, and
                              Linux.
                            </li>
                            <li>Keep software up to date.</li>
                            <li>
                              Manage, backup, disassemble, and reassemble, and
                              create RAID servers.
                            </li>
                          </ul>
                        </li>
                        <hr className="split-hr" />
                        <li>
                          <a href="#">
                            Youth Coordinator
                            <span> - Real Options for City Kids </span>
                          </a>{" "}
                          2018 - 2020
                          <ul
                            className="pl-3 "
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              Responsible for coordinating, developing,
                              implementing, and evaluating group projects.
                            </li>
                            <li>
                              Ensure a variety of physical, recreational,
                              cultural, and educational requirements
                            </li>
                          </ul>
                        </li>
                        <hr className="split-hr" />
                        <li>
                          <a href="#">
                            Remote Fellowship
                            <span>
                              {" "}
                              - General Assembly Full Stack Immersive{" "}
                            </span>
                          </a>{" "}
                          July 2021 - November 2021
                          <ul
                            className="pl-3 "
                            style={{ listStyleType: "disc" }}
                          >
                            <li>League Trivia Game</li>
                            <li>Random Cocktail Generator</li>
                            <li>Porto the Portfolio Application</li>
                            <li>TBD</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#">
                            High School Degree
                            <span> - City Arts and Technology High School</span>
                          </a>{" "}
                          2010
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
