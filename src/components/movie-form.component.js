import React from 'react';
import Input from '../common/input.component';
import Form from '../common/form.component';

class MovieForm extends Form {
    state = {
        data: { 
            title: '',
            poster: '',
            rating: ''
        },
        errors: {}
    }

    doSubmit = (e) => {
        
    }

    render() { 
        return (
            <div className="container w-50 mx-auto">
				<form onSubmit={this.handleSubmit}>
					<div className="mb-3">
                        <Input 
                            label="Movie title"
                            name="title"
                            id="title"
                            type="text"
                            value={this.state.data.title}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					<div className="mb-3">
                        <Input 
                            label="Poster url"
                            name="poster"
                            id="poster"
                            type="text"
                            value={this.state.data.poster}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>

                    <div className="mb-3">
                        <Input 
                            label="IMDB Rating"
                            name="rating"
                            id="rating"
                            type="text"
                            value={this.state.data.rating}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
					</div>
					
					<button type="submit" className="btn btn-primary">
						Add Movie
					</button>
				</form>
			</div>
        );
    }
}
 
export default MovieForm;