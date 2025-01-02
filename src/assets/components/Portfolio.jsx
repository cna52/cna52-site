import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

export default function Portfolio() {
    const projectData=[
        {
            title: "Card Title 1",
            text: "This is some text for card 1. It's a bit longer.",
            buttonText: "Learn More",
          },
          {
            title: "Card Title 2",
            text: "This is some text for card 2. It contains more details.",
            buttonText: "Discover",
          },
          {
            title: "Card Title 3",
            text: "This is some text for card 3. It's very informative.",
            buttonText: "Explore",
          },
          {
            title: "Card Title 4",
            text: "This is some text for card 4. It wraps things up nicely.",
            buttonText: "Find Out",
          },
    ]

  return (
    <div>
        <h1>Portfolio</h1>
        <Row xs={1} md={2} className="g-4">
        {projectData.map((card, idx) => (
        <Col key={idx}>
            <Card className="portfolio-cards">
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">{card.buttonText}</Button>
            </Card.Body>
            </Card>
        </Col>
        ))}
        </Row>
    </div>
  )
}
