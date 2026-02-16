import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const stories = [
    {
        id: 1,
        names: 'Rohan & Sneha',
        img: 'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        text: "We met on SoulMate 6 months ago and instantly clicked. The platform made it so easy to find someone with shared values."
    },
    {
        id: 2,
        names: 'Amit & Pooja',
        img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        text: "Thank you SoulMate for helping me find my better half. We got married last month and couldn't be happier!"
    },
    {
        id: 3,
        names: 'Arjun & Meera',
        img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        text: "Highly recommended! The profiles are genuine and the interface is very user-friendly."
    }
];

const Stories = () => {
    return (
        <section id="stories" className="section-padding bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Happy Stories</h2>
                    <div className="bg-pink mx-auto" style={{ height: '3px', width: '60px' }}></div>
                </div>
                <Row className="g-4">
                    {stories.map(story => (
                        <Col key={story.id} md={4}>
                            <Card className="card-shadow border-0 h-100 hover-lift">
                                <Card.Img variant="top" src={story.img} style={{ height: '250px', objectFit: 'cover' }} />
                                <Card.Body className="text-center p-4">
                                    <h5 className="fw-bold mb-3">{story.names}</h5>
                                    <p className="text-muted small fst-italic">"{story.text}"</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Stories;
