import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const members = [
    {
        id: 1,
        name: 'Priya Sharma',
        age: 24,
        location: 'Mumbai',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        name: 'Rahul Khanna',
        age: 28,
        location: 'Delhi',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        name: 'Anjali Mehta',
        age: 26,
        location: 'Bangalore',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        name: 'Vikram Singh',
        age: 29,
        location: 'Pune',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
];

const Members = () => {
    return (
        <section id="members" className="section-padding bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Active Members</h2>
                    <div className="bg-pink mx-auto" style={{ height: '3px', width: '60px' }}></div>
                </div>
                <Row className="g-4">
                    {members.map(member => (
                        <Col key={member.id} md={6} lg={3}>
                            <Card className="card-shadow h-100 overflow-hidden text-center">
                                <div className="position-relative overflow-hidden group">
                                    <Card.Img
                                        variant="top"
                                        src={member.img}
                                        className="img-fluid"
                                        style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    />
                                    {/* Hover overlay could go here via CSS or extra div */}
                                </div>
                                <Card.Body>
                                    <h5 className="card-title fw-bold">{member.name}, {member.age}</h5>
                                    <Card.Text className="text-muted">
                                        <i className="fas fa-map-marker-alt text-pink me-1"></i> {member.location}
                                    </Card.Text>
                                    <Button variant="outline-dark" size="sm" className="rounded-pill px-4 hover-pink">
                                        View Profile
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Members;
