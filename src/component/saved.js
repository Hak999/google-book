import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function SavedBooks() {
    const books=[
        {
            authors: ["Douglas Crockford"],
            description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
            image: "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            link: "http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=javascript&hl=&cd=1&source=gbs_api",
            title: "The Good Parts",
        },
        {
            authors: ["David Sawyer McFarland"],
            description: "JavaScript is an essential language for creating modern, interactive websites, but its complex rules challenge even the most experienced web designers. With JavaScript: The Missing Manual, you'll quickly learn how to use JavaScript in sophisticated ways -- without pain or frustration -- even if you have little or no programming experience. JavaScript expert David McFarland first teaches you the basics by having you build a simple program. Then you'll learn how to work with jQuery, a popular library of pre-built JavaScript components that's free and easy to use. With jQuery, you can quickly build modern, interactive web pages -- without having to script everything from scratch! Learn how to add scripts to a web page, store and manipulate information, communicate with the browser window, respond to events like mouse clicks and form submissions, and identify and modify HTML Get real-world examples of JavaScript in action Learn to build pop-up navigation bars, enhance HTML tables, create an interactive photo gallery, and make web forms more usable Create interesting user interfaces with tabbed panels, accordion panels, and pop-up dialog boxes Learn to avoid the ten most common errors new programmers make, and how to find and fix bugs Use JavaScript with Ajax to communicate with a server so that your web pages can receive information without having to reload",
            image: "http://books.google.com/books/content?id=CxY3lNQTATQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            link: "http://books.google.com/books?id=CxY3lNQTATQC&pg=PA168&dq=javascript&hl=&cd=5&source=gbs_api",
            title: "The Missing Manual",
        }
    ];
    return (
        <>
            {/* <div className="container mt-3 p-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Books" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" id="search-btn" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="divider my-5" style={{ clear: "both" }} /> */}
            <div className="container-fluid mt-5">
                
                {
                    books.map((book) => (
                        <Card style={{ width: '100%' }} className="mt-1">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <Card.Title><h3>{book.title}</h3></Card.Title>
                                        <Card.Text>
                                            {book.authors}
                                        </Card.Text>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <a href={book.link} alt={book.title} target="_blank">
                                            <Button variant="info" type="btn" size="small">
                                                View
                                </Button>
                                        </a>
                                &nbsp;
                                <Button variant="info" type="btn" size="small">
                                            Delete
                                </Button>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-sm-1 pt-2">
                                        <img src={book.image} className="img-fluid" />
                                    </div>
                                    <div className="col-sm-11">
                                        {book.description}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>
        </>
    )
}