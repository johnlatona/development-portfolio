import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import * as Scroll from "react-scroll";
import { StickyContainer, Sticky } from 'react-sticky';
import { Button, Grid, Accordion, Icon, Segment } from "semantic-ui-react";
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
        <div>
          <StickyContainer >
          <div id="background-video-container">
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../videos/typingBackground.mp4"></source>
                </video>
                {/* <img src="../../../videos/image2.png" alt="testimg"/> */}
            </div>
              <div style={{ height: '92vh', position: "static", zIndex: "3"}} id="home">
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Grid.Row>
                        <Grid.Column width={16}>
                        <div id="home-content">
                          <h1 id="name">JOHN LATONA</h1>
                          <h4 id="subtitle">Full-stack Web Developer</h4>
                        </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={16} textAlign="center">
                          <Button id="get-to-know-button">
                            <Link to="nav" spy={true} smooth={true} duration={1000} isDynamic={true}>
                            Get To Know Me
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
            <Parallax>
              <Sticky topOffset={-690} disableCompensation={true}>
                {
                  ({
                    style,
                    distanceFromTop,
                    isSticky,
                    wasSticky
                  }) => {
                    if(distanceFromTop <= -690) {
                      style={
                        "position":"fixed", 
                        "top":"0", 
                        "left":"0", 
                        "right":"0",
                        "height":"75px",
                        "color": "white",
                        "zIndex":"4"
                      }
                    }
                    else {
                      style={
                        "position":"relative",                        
                        "height":"75px",
                        "color": "white",
                        "zIndex":"4"
                      }
                    }
                    return (
                      <div id="nav-wrapper">
                        <nav id="nav" style={style} distanceFromTop={distanceFromTop} isSticky={isSticky} wasSticky={wasSticky} ref="nav">
                            <ul id="main-link-list">
                                <li>
                                  <Link className="navlinks" activeClass="active" to="home" spy={true} smooth={true} duration={1500} delay={100} isDynamic={true} onClick={this.handleMenuClick}>
                                    HOME
                                  </Link>
                                </li>
                                <li>
                                  <Link className="navlinks" activeClass="active" to="myStory" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true} >
                                    MY STORY
                                  </Link>
                                </li>
                                <li>
                                  <Link className="navlinks" activeClass="active" to="portfolio" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true} >
                                    PORTFOLIO
                                  </Link>
                                </li>
                                <li>
                                  <Link className="navlinks" activeClass="active" to="resume" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true} >
                                    RESUME
                                  </Link>
                                </li>
                                <li>
                                  <Link className="navlinks" activeClass="active" to="skills" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true} >
                                    SKILLS
                                  </Link>
                                </li>
                                <li>
                                  <Link className="navlinks" activeClass="active" to="contact" offset={-75} spy={true} smooth={true} duration={1500} isDynamic={true} >
                                    CONTACT
                                  </Link>
                                </li>
                            </ul>
                      </nav>
                    </div>
                    )
                  }
                }
              </Sticky>
              <div id="hidden-div2" style={{"height": "95px", "display":"none"}}/>
            </Parallax>
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

                          <p id="para2"> I've had an interest in technology and software for a long time and I am very eager to continue to build functional, beautiful applications that make people's lives easier. Some of my hobbies include playing and writing music, traveling, reading, and spending time with my friends, family and beautiful fiancee.</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3} className="myStoryRightCol">
                    <div id="myStoryRightColDiv"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Parallax>
            <Parallax strength={300}>
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
                <Grid columns="equal" className="projectTitleGridTop">
                  <Grid.Row>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/johnlatona/GigCompass" name="GigCompass" dataFor="GigCompassTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="GigCompassTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                      {/* <a href="https://github.com/johnlatona/GigCompass" target="_blank" rel="noopener noreferrer"><h3 className="projectTitles">GigCompass</h3></a> */}
                    </Grid.Column>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/joeman098/s0cial3r" name="s0cial3r" dataFor="s0cial3rTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="s0cial3rTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/johnlatona/liri-node-app" name="LIRI" dataFor="LIRITitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="LIRITitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid columns="equal" celled className="portfolio-grid">
                  <Grid.Row>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="https://johnlatona.github.io/GigCompass/" dataFor="GigCompass" img={require ("../../images/projectpics/GigCompass.png")} alt="GigCompass" description="An event search app that utilizes the Ticketmaster and Google Maps APIs to find concerts, theater, or sports events in the city of your choice" />
                      <ReactTooltip place="top" type="light" effect="float" id="GigCompass">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="http://s0cial3r.herokuapp.com/" dataFor="s0cial3r" img={require ("../../images/projectpics/s0cial3r-2.png")} alt="s0cial3r" description="A full-stack social media application that integrates with Twitch to allow users to watch Twitch streams while adding the personal connection component that Twitch lacks . Users can create their own profiles, post custom content to channel pages and engage in real-time chat with other viewers using socket.io technology"/>
                      <ReactTooltip place="top" type="light" effect="float" id="s0cial3r">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="https://github.com/johnlatona/liri-node-app" dataFor="LIRI" img={require ("../../images/projectpics/LIRI.png")} alt="LIRI" description="An interactive CLI application that mimics the same basic functionality of Apple's SIRI and Amazon's Alexa."/>
                      <ReactTooltip place="top" type="light" effect="float" id="LIRI">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid columns="equal" className="projectTitleGridBottom">
                  <Grid.Row>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/johnlatona/TriviaGame" name="90's Music Trivia" dataFor="TriviaGameTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="TriviaGameTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/johnlatona/hangman-CLI" name="Hangman" dataFor="HangmanTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="HangmanTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column>
                      <ProjectLink link="https://github.com/johnlatona/clicky-react-game" name="Clicky Game" dataFor="ClickyGameTitle"/>
                      <ReactTooltip place="top" type="light" effect="float" id="ClickyGameTitle">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid columns="equal" celled className="portfolio-grid">
                  <Grid.Row>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="https://johnlatona.github.io/TriviaGame/" dataFor="TriviaGame" img={require ("../../images/projectpics/TriviaGame.png")} alt="90's Music Trivia" description="A fun interactive 90s music trivia game using jQuery and Javascript for DOM manipulation and animations."/>
                      <ReactTooltip place="top" type="light" effect="float" id="TriviaGame">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="https://github.com/johnlatona/hangman-CLI" dataFor="Hangman" img={require ("../../images/projectpics/hangman-cli.png")} alt="Hangman" description="A CLI rendition of the classic Hangman game written using Node.js."/>
                      <ReactTooltip place="top" type="light" effect="float" id="Hangman">
                        <span>Go to Github Repo</span>
                      </ReactTooltip>
                    </Grid.Column>
                    <Grid.Column className="projectPicHolder">
                      <ProjectContent link="https://johnlatona.github.io/clicky-react-game/" dataFor="ClickyGame" img={require ("../../images/projectpics/ClickyReactGame.png")} alt="Clicky React Game" description="A basic game built entirely with React.js that employs the Fisher-Yates shuffle Algorithm to shuffle images based on user clicks. The user must keep track of their clicks to make sure they don't click the same image twice."/>
                      <ReactTooltip place="top" type="light" effect="float" id="ClickyGame">
                        <span>Go to Live Site</span>
                      </ReactTooltip>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Parallax>
            <Parallax>
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
            </Parallax>
            <Parallax
              blur={2}
              bgImage={require('../../images/skillsBackground.jpg')}
              bgImageAlt="NYC skyline"
              strength={300}
            >
              <div style={{"height": '700px', "position": "relative", "zIndex": "3"}} id="skills">
              Blur transition from min to max
              </div>
            </Parallax>
            <Parallax>
              <div 
                style={{
                  "height": '700px', 
                  "position": "relative", 
                  "zIndex": "3"
                }} 
                id="contact">
              Blur transition from min to max
              </div>
            </Parallax>
          </StickyContainer>
        </div> 
      )
    }
}

export default Portfolio;