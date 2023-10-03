import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap"

import "../styles/About.css"
import ilustration from "../assets/aboutbg.jpg"
import icon from "../assets/coder.svg"
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
    return (
        <Container fluid id='about' className='mt-4'>
            <div className='text-center p-2 mb-4'>
                <h1 className='about-title'>
                    <i>About Me</i>
                </h1>
                <h5>
                    <i>Self-taught frontend developer</i>
                </h5>
            </div>
            <Row>
                <Col className='d-flex justify-content-center align-items-center mt-3 mb-4'>
                    <div className='about-text'>
                        <p>
                            <img src={icon} className='about-icon me-2' />
                            <strong>
                                <i> Developing for over two years</i>
                            </strong>
                        </p>

                        <p>
                            <img src={icon} className='about-icon me-2' />
                            <strong>
                                <i>
                                    Utel University Web Full Stack Certification
                                </i>
                            </strong>
                        </p>

                        <p className='mb-4'>
                            <img src={icon} className='about-icon me-2' />
                            <strong>
                                <i>Expertise with :</i>
                            </strong>
                        </p>

                        {/*  first Row */}
                        <Row className='ps-4 pe-4'>
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
                    </div>
                </Col>

                {/*  Ilustration Col */}
                <Col className='d-flex justify-content-center align-items-center p-3'>
                    <Image
                        roundedCircle
                        src={ilustration}
                        style={{
                            width: "400px",
                            height: "400px",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
