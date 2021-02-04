import React from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";

class Search extends React.Component {
    state = {
        search: "",
        result: []
    };

    componentDidMount() {
        this.searchBook();
    }

    allBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ result: res.data.results }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const filteredSearch = this.state.result.filter(book => book.bookData.volumeInfo.title.includes(this.state.search))
        console.log(this.state.search);
        this.setState({ result: filteredSearch })
    };

    clearSearch = event => {
        event.preventDefault();
        const clear = this.searchBook();
        return clear;
    }

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <h2>Book Search</h2>
                        <SearchForm
                            search={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            clearSearch={this.clearSearch}
                        />
                    </div>
                    <div className="row">
                        <h2>Results</h2>
                        {[...this.state.result].map((item) => (
                            <Results
                                _id={item.id}
                                title={item.volumeInfo.title}
                                authors={item.volumeInfo.authors}
                                description={item.volumeInfo.description}
                                image={item.volumeInfo.imageLinks.thumbnail}
                                link={item.volumeInfo.previewLink}
                                key={item.key}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Search;