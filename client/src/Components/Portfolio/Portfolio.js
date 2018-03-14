import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import * as Scroll from "react-scroll";
import { Button, Grid, Accordion, Segment, Icon } from "semantic-ui-react";
import { ProjectContent, ProjectLink } from "../Projects";
import ReactTooltip from 'react-tooltip';
import "./Portfolio.css";

let Link = Scroll.Link
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class Portfolio extends Component {

  state = {
    navPosition: "relative",
    activeIndex: -1,
    rutgersButton: {
      icon: "plus",
      isActive: "false"
    },
    monmouthButton: {
      icon: "plus",
      isActive: "false"
    },
    apolloButton: {
      icon: "plus",
      isActive: "false"
    },
    princetonButton: {
      icon: "plus",
      isActive: "false"
    },
    tenantButton: {
      icon: "plus",
      isActive: "false"
    },
    kiaButton: {
      icon: "plus",
      isActive: "false"
    },
    gmcButton: {
      icon: "plus",
      isActive: "false"
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if(document.getElementById("nav").style.position === "fixed") {
        this.setState({navPosition: "fixed"});
      }
      else {
        this.setState({navPosition: "relative"});
      }
    })

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }

  handleClick = (e, titleProps) => {
    const { index, className } = titleProps
    console.log(className);
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex }, function() {
      var buttonId = this.state[className];
      if(activeIndex !== index) {
        buttonId.icon = "minus";
        buttonId.isActive = "true"
        this.setState({[className]: buttonId});
      }
      else {
        buttonId.icon = "plus";
        buttonId.isActive = "false"
        this.setState({[className]: buttonId});
      }

      for(let key in this.state) {
        if(key !== className && typeof this.state[key] === "object") {
          const newObj = {
            icon: "plus",
            isActive: "false"
          }
          this.setState({ [key]: newObj });
        }
      }
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

    render() {

      const { activeIndex } = this.state;

      return (
        <div id="main">
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../videos/typingBackground.mp4"></source>
                </video>
            <div id="nav-wrapper">
              <nav id="nav">
                <ul id="main-link-list">
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="home" offset={-75} spy={true} smooth={true} duration={2000} delay={100} isDynamic={true}>
                      HOME
                    </Link>
                  </li>
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="myStory" offset={-75} spy={true} smooth={true} duration={2000} isDynamic={true} >
                      MY STORY
                    </Link>
                  </li>
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="portfolio" offset={-60} spy={true} smooth={true} duration={2000} isDynamic={true} >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="resume" offset={-60} spy={true} smooth={true} duration={2000} isDynamic={true} >
                      RESUME
                    </Link>
                  </li>
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="skills" offset={-40} spy={true} smooth={true} duration={2000} isDynamic={true} >
                      SKILLS
                    </Link>
                  </li>
                  <li className="link-list-items">
                    <Link className="navlinks" activeClass="active" to="contact" offset={-25} spy={true} smooth={true} duration={2000} isDynamic={true} >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
              <div style={{ height: '95vh', position: "static", zIndex: "3"}} id="home">
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Grid.Row>
                        <Grid.Column width={16}>
                        <div id="home-content">
                          <img src={require("../../images/profile.png")} alt="self pic" id="profile-pic"/>
                          <h1 id="name">JOHN LATONA</h1>
                          <h4 id="subtitle">Full-stack Web Developer</h4>
                        </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={16} textAlign="center">
                          <Button id="get-to-know-button">
                            <Link to="myStory" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true}>
                            GET TO KNOW ME
                            </Link>
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            <Parallax 
              bgImage={require('../../images/myStoryBackground.jpg')}
              bgImageAlt="NYC skyline"
              strength={300}
            >
              <div style={{"position": "relative", "zIndex": "3"}} id="myStory">
                <Grid columns={3} className="myStoryGrid">
                  <Grid.Row className="myStoryGridRow1">
                    <Grid.Column width={3} className="myStoryLeftCol">
                      <div id="myStoryLeftColDiv"/>
                    </Grid.Column>
                    <Grid.Column width={10} className="myStoryCenterCol">
                        <div id="myStory-title-border">
                          <h1 id="myStory-title">MY STORY</h1>
                        </div>
                        <div id="myStoryCenterBackgroundDiv">
                          <p id="para1">My name is John and I am a full-stack web developer from the greater New York City area. I have a background in Business Management, having received my undergraduate degree from Monmouth University in 2009. Since then I've been working in the automotive sales industry, with jobs in various departments in retail car dealerships. I took over a finance and insurance product agency in 2014 and was able to grow the business and merge with a larger company. I recently graduated from Rutgers University's accelerated Web Development program, and I am now excited to dive headfirst into the tech industry as a developer.</p>

                          <p id="para2"> I've had an interest in technology and software for a long time and I am very eager to continue to build functional, beautiful applications that make people's lives easier. Some of my hobbies, other than coding, include playing and writing music, traveling, reading, and spending time with my friends, family and beautiful fiancee.</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3} className="myStoryRightCol">
                    <div id="myStoryRightColDiv"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Parallax>
              <div id="portfolio">
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <h1 id="portfolio-title">SOME EXAMPLES OF MY DEVELOPMENT WORK</h1>
                      <h4 id="portfolio-subtitle">Full-stack, Front-End, and Back-End applications I've created</h4>
                      <hr className="line-break"/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid columns={6} centered className="portfolio-grid">
                  <Grid.Row>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/johnlatona/GigCompass" name="GigCompass" dataFor="GigCompassTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="GigCompassTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="https://johnlatona.github.io/GigCompass/" dataFor="GigCompass" img={require ("../../images/projectpics/GigCompass.svg")} alt="GigCompass" description="An event search app that utilizes the Ticketmaster and Google Maps APIs to find concerts, theater, or sports events in the city of your choice" />
                      <ReactTooltip place="top" type="light" effect="float" id="GigCompass">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/joeman098/s0cial3r" name="s0cial3r" dataFor="s0cial3rTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="s0cial3rTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="http://s0cial3r.herokuapp.com/" dataFor="s0cial3r" img={require ("../../images/projectpics/s0cial3r.svg")} alt="s0cial3r" description="A full-stack social media application that integrates with Twitch to allow users to watch Twitch streams while adding the personal connection component that Twitch lacks . Users can create their own profiles, post custom content to channel pages and engage in real-time chat with other viewers using socket.io technology"/>
                      <ReactTooltip place="top" type="light" effect="float" id="s0cial3r">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/johnlatona/liri-node-app" name="LIRI" dataFor="LIRITitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="LIRITitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="https://github.com/johnlatona/liri-node-app" dataFor="LIRI" img={require ("../../images/projectpics/LIRI.svg")} alt="LIRI" description="An interactive CLI application that mimics the same basic functionality of Apple's SIRI and Amazon's Alexa."/>
                      <ReactTooltip place="top" type="light" effect="float" id="LIRI">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/johnlatona/TriviaGame" name="90's Music Trivia" dataFor="TriviaGameTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="TriviaGameTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="https://johnlatona.github.io/TriviaGame/" dataFor="TriviaGame" img={require ("../../images/projectpics/TriviaGame.svg")} alt="90's Music Trivia" description="A fun interactive 90s music trivia game using jQuery and Javascript for DOM manipulation and animations."/>
                      <ReactTooltip place="top" type="light" effect="float" id="TriviaGame">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/johnlatona/hangman-CLI" name="Hangman" dataFor="HangmanTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="HangmanTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="https://github.com/johnlatona/hangman-CLI" dataFor="Hangman" img={require ("../../images/projectpics/hangman.svg")} alt="Hangman" description="A CLI rendition of the classic Hangman game written using Node.js."/>
                      <ReactTooltip place="top" type="light" effect="float" id="Hangman">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder" computer={5} tablet={8} mobile={16}>
                      <ProjectLink link="https://github.com/johnlatona/clicky-react-game" name="Clicky Game" dataFor="ClickyGameTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="ClickyGameTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      <ProjectContent link="https://johnlatona.github.io/clicky-react-game/" dataFor="ClickyGame" img={require ("../../images/projectpics/ClickyGame.svg")} alt="Clicky React Game" description="A basic game built entirely with React.js that employs the Fisher-Yates shuffle Algorithm to shuffle images based on user clicks. The user must keep track of their clicks to make sure they don't click the same image twice."/>
                      <ReactTooltip place="top" type="light" effect="float" id="ClickyGame">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              <div style={{"position": "relative", "zIndex": "3"}} id="resume">
                <Grid columns={3} className="resumeGrid">
                  <Grid.Row className="mainResumeRow">
                    <Grid.Column width={3} className="resumeLeftCol">
                      <div id="myStoryLeftColDiv"/>
                    </Grid.Column>
                    <Grid.Column width={10} className="resumeCenterCol">
                      <div id="myStoryCenterBackgroundDiv">
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column width={16} className="resume-title-col">
                            <h1 id="resume-title">MY JOURNEY</h1>
                            <h4 id="resume-subtitle">The variety of experience and skills gathered throughout my career as a business leader all work to enhance my ability as a resourceful, adept developer</h4>
                            <hr className="line-break"/>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column width={16} className="section-title-col">
                            <h2 className="section-title">My Education</h2>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2017 - 2018
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.rutgersButton.icon} onClick={this.handleClick} active={activeIndex === 0} index={0} className="rutgersButton"/>
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 0} index={0} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>RUTGERS UNIVERSITY</b></p>
                                <p className="resumeEntrySubtitle">Full Stack Web Development</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 0} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  An immersive, full-time 12 week Web Development certificate program that teaches skills including HTML5, CSS3, JavaScript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars, and React.js.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2005 - 2009
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.monmouthButton.icon} onClick={this.handleClick} active={activeIndex === 1} index={1} className="monmouthButton"/>

                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" exclusive="false">
                              <Accordion.Title active={activeIndex === 1} index={1} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>MONMOUTH UNIVERSITY</b></p>
                                <p className="resumeEntrySubtitle">B.S. Business Administration: Management</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 1} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  A four year undergraduate degree specializing in Business Management. 
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column className="section-title-col">
                            <h2 className="section-title">My Work Experience</h2>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates" id="apolloDate">
                              2017 - PRESENT
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.apolloButton.icon} onClick={this.handleClick} active={activeIndex === 2} index={2} className="apolloButton"/>
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 2} index={2} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>APOLLO DEALER SERVICES</b></p>
                                <p className="resumeEntrySubtitle">Independent Strategy and Management Consultant</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 2} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  I serve as a strategy consultant to a large F and I agency based out of New England as they seek to expand into the greater New York marketplace.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2014 - 2017
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.princetonButton.icon} onClick={this.handleClick} active={activeIndex === 3} index={3} className="princetonButton"/>
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 3} index={3} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>PRINCETON DEALER SERVICES</b></p>
                                <p className="resumeEntrySubtitle">President</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 3} className="accordianContent">
                                <p className="resumeEntryDescription">
                                I was the senior leader of a large, automotive Finance and Insurance product agency that specializes in offering innovative finance product solutions for car dealers. I was elected to take over the company in 2014, having very little experience in the field, and in three short years we grew the company to the point where we were acquired by a much larger competitor in 2017, after which time I exited day-to-day operational oversight. I oversaw all aspects of the company from sales/marketing, legal, financials, social media and web presence, strategy and vision, and team development.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2013 - 2014
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.tenantButton.icon} onClick={this.handleClick} active={activeIndex === 4} index={4} className="tenantButton"/>
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 4} index={4} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>TENANT EVALUATION</b></p>
                                <p className="resumeEntrySubtitle">Technical Project Manager/Client Onboarding Director</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 4} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  My first experience in the tech world, I oversaw a team of technical professionals responsible for onboarding new users to Tenant Evaluation's background search and credit-reporting enterprise application for prospective lessees/purchasers in HOAs, condo associations, and apartment complexes. My responsibilities included client relations, form coding, team development, and compliance, among others.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2012 - 2013
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.kiaButton.icon} onClick={this.handleClick} active={activeIndex === 5} index={5} className="kiaButton"/>
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 5} index={5} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>FREEHOLD KIA</b></p>
                                <p className="resumeEntrySubtitle">Sales and Leasing Consultant</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 5} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  I was a member of a team of sales professionals at a high-traffic highway Kia dealership tasked with the responsibility of prospecting customers to purchase new and used automobiles. I consistently met and exceeded my sales objectives.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="resumeEntryRow">
                          <Grid.Column width={3}>
                            <Segment raised className="resumeDates">
                              2011 - 2012
                            </Segment>
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <Button icon={this.state.gmcButton.icon} onClick={this.handleClick} active={activeIndex === 6} index={6} className="gmcButton"/>
                          </Grid.Column>
                          <Grid.Column width={12} className="lastCenterColResume">
                            <Accordion className="accordian" >
                              <Accordion.Title active={activeIndex === 6} index={6} className="accordianTitle">
                                <p className="resumeEntryTitle"><b>MILLER BUICK GMC</b></p>
                                <p className="resumeEntrySubtitle">Sales and Leasing Consultant</p>
                              </Accordion.Title>
                              <Accordion.Content active={activeIndex === 6} className="accordianContent">
                                <p className="resumeEntryDescription">
                                  My first sales job, I was responsible for selling new and used automobiles to new and repeating customers.
                                </p>
                              </Accordion.Content>
                            </Accordion>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={3} className="resumeRightCol">
                      <div id="myStoryRightColDiv"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
              <div style={{"position": "relative", "zIndex": "3"}} id="skills">
                <Grid className="skillsGridTop">
                  <Grid.Row className="skillsMainRow" columns={3}>
                    <Grid.Column width={3} className="skillsLeftCol">
                    </Grid.Column>
                    <Grid.Column width={10} className="skillsCenterCol">
                      <h1 id="skills-title">MY SKILLSET</h1>
                      <h4 id="skills-subtitle">Specific technologies I have in my Web Development toolkit</h4>
                      <hr className="line-break"/>
                    </Grid.Column>
                    <Grid.Column width={3} className="skillsRightCol">
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid className="skillsGridBottom" columns="equal">
                  <Grid.Row className="techSkills">
                    <Grid.Column className="frontEndTech">
                      <h2 className="skillsCatTitle">FRONT END TECHNOLOGIES</h2>
                      <ul>
                        <li className="techs"><img src={require("../../images/logos/html5.png")} alt="html5" className="techImg"/><span className="techName">HTML 5</span></li>
                        <li className="techs"><img src={require("../../images/logos/css3.svg")} alt="css3" className="techImg"/><span className="techName">CSS 3</span></li>
                        <li className="techs"><img src={require("../../images/logos/javascript.png")} alt="javascript" className="techImg"/><span className="techName">Javascript</span></li>
                        <li className="techs"><img src={require("../../images/logos/react.png")} alt="react" className="techImg"/><span className="techName">ReactJS</span></li>
                        <li className="techs"><img src={require("../../images/logos/jQuery.png")} alt="jQuery" className="techImg"/><span className="techName">jQuery</span></li>
                        <li className="techs"><img src={require("../../images/logos/bootstrap.svg")} alt="bootstrap" className="techImg"/><span className="techName">Bootstrap</span></li>
                        <li className="techs"><img src={require("../../images/logos/materialize.png")} alt="materialize" className="techImg" id="materialize"/><span className="techName">Materialize</span></li>
                        <li className="techs"><img src={require("../../images/logos/semantic-ui.png")} alt="semantic-ui" className="techImg" id="materialize"/><span className="techName">Semantic UI</span></li>
                      </ul>
                    </Grid.Column>
                    <Grid.Column className="backEndTech">
                    <h2 className="skillsCatTitle">BACK END TECHNOLOGIES</h2>
                      <ul>
                        <li className="techs"><img src={require("../../images/logos/node.png")} alt="node" className="techImg"/><span className="techName">NodeJS</span></li>
                        <li className="techs"><img src={require("../../images/logos/express.png")} alt="express" className="techImg"/><span className="techName">ExpressJS</span></li>
                        <li className="techs"><img src={require("../../images/logos/MySQL.png")} alt="MySQL" className="techImg"/><span className="techName">MySQL</span></li>
                        <li className="techs"><img src={require("../../images/logos/mongodb.png")} alt="mongoDB" className="techImg"/><span className="techName">MongoDB</span></li>
                      </ul>
                    </Grid.Column>
                    <Grid.Column className="projectManagementTech">
                    <h2 className="skillsCatTitle" id="projectManagementTitle">PROJECT MANAGEMENT<br/>TOOLS</h2>
                      <ul>
                        <li className="techs"><img src={require("../../images/logos/bash.png")} alt="bash" className="techImg"/><span className="techName">Bash</span></li>
                        <li className="techs"><img src={require("../../images/logos/git.png")} alt="git" className="techImg"/><span className="techName">Git</span></li>
                        <li className="techs"><img src={require("../../images/logos/github.png")} alt="github" className="techImg"/><span className="techName">Github</span></li>
                        <li className="techs"><img src={require("../../images/logos/heroku.png")} alt="heroku" className="techImg"/><span className="techName">Heroku</span></li>
                      </ul>
                    </Grid.Column>
                  </Grid.Row>
                 </Grid> 
              </div>
              <div style={{"position": "relative", "zIndex": "3"}} id="contact">
              <Grid className="contactGrid">
                  <Grid.Row className="contactMainRow" columns={3}>
                    <Grid.Column width={3} className="contactLeftCol">
                    </Grid.Column>
                    <Grid.Column width={10} className="contactCenterCol">
                      <Grid.Row columns={1}>
                        <Grid.Column width={16}>
                          <h1 id="contact-title">CONTACT ME</h1>
                          <h4 id="contact-subtitle">I look forward to hearing from you!</h4>
                          <hr className="line-break"/>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={1}>
                        <Grid.Column width={16} textAlign="center">
                          <div id="emailContainer">
                            <Icon name="mail" size="huge" inverted color="black" className="mail-icon"/><a href="mailto:latona0204@gmail.com" id="email">latona0204@gmail.com</a>
                          </div>
                          <div id="socialMediaLinks">
                            <a href="https://www.linkedin.com/in/john-latona/" target="_blank" rel="noopener noreferrer">
                              <img src={require("../../images/logos/linkedin.png")} alt="linkedIn" className="socialMediaLogos"/>
                            </a>
                            <a href="https://github.com/johnlatona" target="_blank" rel="noopener noreferrer">
                              <img src={require("../../images/logos/githubCircle.png")} alt="github" className="socialMediaLogos"/>
                            </a>
                            <a href="https://stackoverflow.com/users/8576109/john-latona" target="_blank" rel="noopener noreferrer">
                              <img src={require("../../images/logos/stackoverflow.png")} alt="stack-overflow" className="socialMediaLogos"/>
                            </a>
                          </div>
                          <div id="copyright">
                            <p id="copyright-text">©2018 John LaTona. All rights reserved</p>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={3} className="contactRightCol">
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>

        </div> 
      )
    }
}

export default Portfolio;