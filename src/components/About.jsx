import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap"

import "../styles/About.css"
import ilustration from "../assets/aboutbg.jpg"
import icon from "../assets/coder.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import node from "../assets/node.svg"
import mongo from "../assets/mongo.svg"
import express from "../assets/express.svg"
import firebase from "../assets/firebase.svg"
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

                        <Row className='ps-5 pe-5'>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={html}
                                    alt='html'
                                />
                                <h6>
                                    <i>Html</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={css}
                                    alt='css'
                                />
                                <h6>
                                    <i>Css</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={js}
                                    alt='js'
                                />
                                <h6>
                                    <i>JavaScript</i>
                                </h6>
                            </Col>
                        </Row>

                        {/*  second Row */}
                        <Row className='ps-5 pe-5 mt-3'>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={react}
                                    alt='react'
                                />
                                <h6>
                                    <i>React</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={node}
                                    alt='node'
                                />
                                <h6>
                                    <i>Node.js</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={mongo}
                                    alt='mongo'
                                />
                                <h6>
                                    <i>MongoDB</i>
                                </h6>
                            </Col>
                        </Row>

                        {/*  third Row */}
                        <Row className='ps-5 pe-5 mt-3'>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={express}
                                    alt='express'
                                />
                                <h6>
                                    <i>Express.js</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={firebase}
                                    alt='firebase'
                                />
                                <h6>
                                    <i>Firebase</i>
                                </h6>
                            </Col>
                            <Col className='text-center'>
                                <img
                                    className='about-icon mb-1'
                                    src={typescript}
                                    alt='ts'
                                />
                                <h6>
                                    <i>TypeScript</i>
                                </h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
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
