import React from "react";

export const ProjectContent = (props) => {
    const { link, img, alt, description, dataFor, ...rest} = props;
    console.log(...rest);
    return (
    <a {...rest} data-tip data-for={props.dataFor} href={props.link} target="_blank" rel="noopener noreferrer" className="projectDetails">
        <img src={props.img} alt={props.alt} width="100%"/>
        <div className="projectDescription">
            <p>{props.description}</p>
        </div>
    </a> 
)};

export const ProjectLink = props => {
    const { link, name, dataFor, ...rest } = props;
    return (
    <a {...rest} data-tip data-for={props.dataFor} href={props.link} target="_blank" rel="noopener noreferrer">
        <h3 className="projectTitles">{props.name}</h3>
    </a>
)};