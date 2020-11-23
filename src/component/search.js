import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
export default function SearchBooks() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyDFAjO5mIqt9G4iDyRuh2loWPYDzJZNZGA");
    const [loading,setLoading]=useState(false);
    const handleChange = (e) => {
        const search = e.target.value;
        setSearch(search);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + apiKey).then(data => {
            const books = data.data.items;
            setLoading(false);
            setBooks(books);
            console.log(books);
        });
    }
    return (
        <>
            <div className="container mt-3 p-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search Books" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" id="search-btn" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="divider my-5" style={{ clear: "both" }} />
            <div className="container-fluid mt-5">
                {
                    loading && (
                        <div className="container text-center mt-5">
                            <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                    )
                }
                {
                    books.map((book) => (
                        <Card style={{ width: '100%' }} className="mt-1">
                            <Card.Body>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <Card.Title><h3>{book.volumeInfo.subtitle}</h3></Card.Title>
                                        <Card.Text>
                                           Author: {book.volumeInfo.authors}
                                        </Card.Text>
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <a href={book.volumeInfo.previewLink} alt={book.volumeInfo.title} target="_blank">
                                            <Button variant="info" type="btn" size="small">
                                                View
                                </Button>
                                        </a>
                                &nbsp;
                                <Button variant="info" type="btn" size="small">
                                            Save
                                </Button>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-sm-1 pt-2">
                                        <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid" />
                                    </div>
                                    <div className="col-sm-11">
                                        {book.volumeInfo.description}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }

            </div>
        </>
    );
}