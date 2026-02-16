import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-section position-relative d-flex align-items-center" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            marginTop: '-76px', // Offset navbar height
            paddingTop: '76px'
        }}>
            <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{
                background: 'rgba(0, 0, 0, 0.4)' // Overlay effect
            }}></div>

            <Container className="position-relative text-white z-1">
                <div className="col-lg-7">
                    <h1 className="display-3 fw-bold mb-3 animate-fade-in">
                        Every Love Story is Beautiful
                    </h1>
                    <h2 className="display-4 fw-bold mb-4 animate-fade-in delay-100">
                        <span className="text-pink">Make Yours Special</span>
                    </h2>
                    <p className="lead mb-5 animate-fade-in delay-200">
                        Find your perfect match from millions of trusted profiles. Join SoulMate Matrimony today and start your journey.
                    </p>
                    <Button as={Link} to="/register" className="btn-pink btn-lg rounded-pill px-5 py-3 fw-bold animate-fade-in delay-300">
                        Register Now
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
