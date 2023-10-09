import React from "react"
import { Container, Button, Row, Col, Badge } from "react-bootstrap"

import "../styles/About.css"

import html from "../assets/html.svg"
import css from "../assets/css.svg"
import sass from "../assets/sass.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import redux from "../assets/redux.svg"
import node from "../assets/node.svg"
import mongo from "../assets/mongo.svg"
import express from "../assets/express.svg"
import firebase from "../assets/firebase.svg"
import git from "../assets/git.svg"
import typescript from "../assets/typescript.svg"

export const About = () => {
    const myCV = require("../assets/LP-CV.pdf") // import the PDF file

    return (
        <Container fluid id='about'>
            <div className='text-center p-2 mb-4'>
                <h2 className='mt-4'>
                    <Badge pill bg='dark'>
                        About Me
                    </Badge>
                </h2>
                <h5>
                    <i>Self-taught frontend developer</i>
                </h5>
            </div>
            <Row xs={1} md={1} lg={2}>
                <Col className='d-flex justify-content-center align-items-center mt-3 mb-4 ps-3 pe-3'>
                    <ul>
                        <h5 className='mb-5 mt-1'>
                            <strong>
                                <i>
                                    <u>Two years of experience including:</u>
                                </i>
                            </strong>
                        </h5>
                        <li className='mb-3'>
                            <i>
                                Developing websites with HTML, CSS, and
                                JavaScript.
                            </i>
                        </li>
                        <li className='mb-3'>
                            <i>
                                Developing web applications using React.js and
                                Node.js.
                            </i>
                        </li>
                        <li className='mb-3'>
                            <i>
                                Building and deploying web applications using
                                Firebase.
                            </i>
                        </li>
                        <li className='mb-3'>
                            <i>Developing mobile apps with React Native.</i>
                        </li>
                        <li className='mb-3'>
                            <i>
                                Building RESTful APIs with Express.js and
                                MongoDB.
                            </i>
                        </li>
                        <li className='mb-3'>
                            <i>
                                Unit testing, integration testing, end-to-end
                                testing.
                            </i>
                        </li>
                        <li className='mb-3'>
                            <i>
                                Version control Using Git to track changes in
                                code and collaborate with others.
                            </i>
                        </li>
                    </ul>
                </Col>

                {/*  skills Col */}
                <Col className='ps-4 pe-4 mt-3'>
                    <Row className='ps-4 pe-4 text-center'>
                        <h5 className='mb-5'>
                            <strong>
                                <i>
                                    <u>Skills and Technologies:</u>
                                </i>
                            </strong>
                        </h5>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={html}
                                    alt='html'
                                />
                            </div>

                            <small>
                                <i>Html</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={css}
                                    alt='css'
                                />
                            </div>

                            <small>
                                <i>Css</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={sass}
                                    alt='sass'
                                />
                            </div>

                            <small>
                                <i>Sass</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={js}
                                    alt='js'
                                />
                            </div>

                            <small>
                                <i>JavaScript</i>
                            </small>
                        </Col>
                    </Row>

                    {/*  second Row */}
                    <Row className='ps-4 pe-4 mt-3'>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={react}
                                    alt='react'
                                />
                            </div>

                            <small>
                                <i>React</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={node}
                                    alt='node'
                                />
                            </div>
                            <small>
                                <i>Node.js</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={redux}
                                    alt='redux'
                                />
                            </div>

                            <small>
                                <i>Redux</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={mongo}
                                    alt='mongo'
                                />
                            </div>

                            <small>
                                <i>MongoDB</i>
                            </small>
                        </Col>
                    </Row>

                    {/*  third Row */}
                    <Row className='ps-4 pe-4 mt-3'>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={express}
                                    alt='express'
                                />
                            </div>

                            <small>
                                <i>Express</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={firebase}
                                    alt='firebase'
                                />
                            </div>

                            <small>
                                <i>Firebase</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={git}
                                    alt='git'
                                />
                            </div>

                            <small>
                                <i>Git</i>
                            </small>
                        </Col>
                        <Col className='text-center'>
                            <div>
                                <img
                                    className='about-icon mb-1'
                                    src={typescript}
                                    alt='ts'
                                />
                            </div>

                            <small>
                                <i>TypeScript</i>
                            </small>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='text-center mt-2'>
                <a href={myCV} download>
                    <Button className='mt-5 mb-5' size='lg' variant='dark'>
                        <strong>
                            <i>Download CV</i>
                        </strong>
                    </Button>
                </a>
            </div>
        </Container>
    )
}
