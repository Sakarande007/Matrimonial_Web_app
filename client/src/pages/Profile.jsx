import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Button, ProgressBar } from 'react-bootstrap';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="profile-section py-5 flex-grow-1 bg-light">
            <Container>
                {/* Profile Header */}
                <Card className="card-shadow border-0 mb-4">
                    <Card.Body className="p-4 p-md-5 text-center text-md-start">
                        <Row className="align-items-center">
                            <Col md={3} className="text-center">
                                <div className="position-relative d-inline-block">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Profile"
                                        className="rounded-circle border border-3 border-white shadow"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                    />
                                    <span className="position-absolute bottom-0 end-0 bg-success p-2 rounded-circle border border-2 border-white"></span>
                                </div>
                            </Col>
                            <Col md={9} className="mt-3 mt-md-0">
                                <h2 className="fw-bold mb-1">Priya Sharma</h2>
                                <p className="text-muted mb-2">SH123456 | Profile created by Self</p>
                                <p className="mb-3">
                                    <i className="fas fa-map-marker-alt text-pink me-2"></i> Mumbai, India
                                    <span className="mx-2">|</span>
                                    24 Yrs, 5' 4"
                                    <span className="mx-2">|</span>
                                    Software Engineer
                                </p>
                                <div className="d-flex gap-2 justify-content-center justify-content-md-start">
                                    <Button className="btn-pink rounded-pill px-4">Edit Profile</Button>
                                    <Button variant="outline-dark" className="rounded-pill px-4">Upload Photos</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Row>
                    {/* Sidebar */}
                    <Col lg={3} className="mb-4">
                        <Card className="card-shadow border-0">
                            <Card.Body>
                                <h6 className="fw-bold mb-3">Profile Completion</h6>
                                <ProgressBar now={75} variant="danger" className="mb-2" style={{ height: '8px', backgroundColor: '#ffd6e0' }} />
                                <small className="text-muted">75% Complete</small>
                                <hr />
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3"><a href="#" className="text-decoration-none text-dark hover-pink"><i className="fas fa-user-circle me-2 text-muted"></i> Basic Details</a></li>
                                    <li className="mb-3"><a href="#" className="text-decoration-none text-dark hover-pink"><i className="fas fa-users me-2 text-muted"></i> Family Details</a></li>
                                    <li className="mb-3"><a href="#" className="text-decoration-none text-dark hover-pink"><i className="fas fa-graduation-cap me-2 text-muted"></i> Career & Education</a></li>
                                    <li><a href="#" className="text-decoration-none text-dark hover-pink"><i className="fas fa-handshake me-2 text-muted"></i> Partner Preference</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Content Tabs */}
                    <Col lg={9}>
                        <Card className="card-shadow border-0">
                            <Card.Body className="p-4">
                                <Tabs defaultActiveKey="about" id="profile-tabs" className="mb-4">
                                    <Tab eventKey="about" title="About Her">
                                        <h5 className="fw-bold mb-4">About Priya</h5>
                                        <p className="text-muted mb-4">
                                            I am a fun-loving and ambitious person. I enjoy traveling, reading, and spending time with my family.
                                            Looking for a partner who is understanding, respectful, and shares similar values.
                                        </p>

                                        <h6 className="fw-bold text-pink mb-3">Basic Details</h6>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <small className="text-muted d-block">Age</small>
                                                <span className="fw-medium">24 Years</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Height</small>
                                                <span className="fw-medium">5' 4" (162 cm)</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Marital Status</small>
                                                <span className="fw-medium">Never Married</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Mother Tongue</small>
                                                <span className="fw-medium">Hindi</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Religion / Caste</small>
                                                <span className="fw-medium">Hindu / Brahmin</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Diet</small>
                                                <span className="fw-medium">Vegetarian</span>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="family" title="Family Details">
                                        <h5 className="fw-bold mb-4">Family Background</h5>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <small className="text-muted d-block">Father's Occupation</small>
                                                <span className="fw-medium">Businessman</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Mother's Occupation</small>
                                                <span className="fw-medium">Homemaker</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">City</small>
                                                <span className="fw-medium">Mumbai</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Family Type</small>
                                                <span className="fw-medium">Nuclear</span>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="education" title="Education & Career">
                                        <h5 className="fw-bold mb-4">Education & Career</h5>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <small className="text-muted d-block">Highest Education</small>
                                                <span className="fw-medium">B.Tech in Computer Science</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">University</small>
                                                <span className="fw-medium">Mumbai University</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Occupation</small>
                                                <span className="fw-medium">Software Engineer</span>
                                            </Col>
                                            <Col md={6}>
                                                <small className="text-muted d-block">Annual Income</small>
                                                <span className="fw-medium">₹ 15 - 20 Lakhs</span>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Profile;
