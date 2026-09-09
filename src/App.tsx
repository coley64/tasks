import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, edited by Nicholas
                West in 2026! Hello World!
            </header>
            <img
                src="./assets/scaredy_cat.JPG"
                alt="A funny picture of a (somewhat scared) cat."
            />
            To Do:
            <ul>
                <li> Assignment 3</li>
                <li> Assignment 4</li>
                <li> Assignment 5</li>
            </ul>
            <h1>Hi</h1>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
