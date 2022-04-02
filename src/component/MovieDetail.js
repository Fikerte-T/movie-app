import React from "react"

class MovieDetail extends React.Component{
    // state={
    //     divcontainer: false
    // }

    render(){
         
        const btnS = this.props.isMovieDetail;
        return(
            <div>
                <button onClick={this.props.handleChange} > {btnS? 'hide' : 'MovieDetail' }</button>
                { btnS && (<div>
                    <p>
                        <b> {this.props.directorName} </b>
                    </p>
                </div>) }
            </div>
        )
    }
}

export default MovieDetail;