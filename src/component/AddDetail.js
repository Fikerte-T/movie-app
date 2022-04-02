import React from 'react'

class AddDetail extends React.Component {
state = {
    isActive: false
  };

  handleShow = () => {
    this.setState({
      isActive: true
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <>
        <div>
          <h1>Hello react</h1>
          {/* <p>  {this.props.name}</p>
           */}
           <div>
                {this.props.movieList.map((movie, index) =>
                    // <DisplayMovie  movieEach={movie} index={index}
                    // handleChange={this.props.handleChange} />
                    <p>{movie.name}</p>
                )}
            </div>
          <button onClick={this.handleHide}>Hide</button>
          
        </div>
        </>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleShow}>Movie detail</button>
        </div>
      );
    }
  }
}

export default AddDetail;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     isActive: false
//   };

//   handleShow = () => {
//     this.setState({isActive: true});
//   };

//   handleHide = () => {
//     this.setState({isActive: false});
//   };

//   render() {
//       return (
//         <div>
//           {this.state.isActive && <h1>Hello react</h1>}
//            {this.state.isActive ?(
//               <HideButton onClick={this.handleHide}/>
//            ) : (
//              <ShowButton onClick={this.handleShow}/>
//            )}
//         </div>
//       )
//   }
// }

// export default App;
// In this example, we are rendering <HideButton> component if isActive property is true.If the property is false we are rendering <ShowButton> component.


// Get my latest tutorials
// Email
// user@email.com
// Related tutorials
// How to solve the template not provided in Create-react-app
// React form handling tutorial
// A beginners guide to react props
// How to get the cookie in React
// How to Add Google ads to Gatsby & React apps

// Share:
// facebook
// twitter
// Css Tutorials & Demos
// How rotate an image continuously in CSS
// In this demo, we are going to learn about how to rotate an image continuously using the css animations.

// How to create a Instagram login Page
// In this demo, i will show you how to create a instagram login page using html and css.

// How to create a pulse animation in CSS
// In this demo, i will show you how to create a pulse animation using css.

// Creating a snowfall animation using css and JavaScript
// In this demo, i will show you how to create a snow fall animation using css and JavaScript.


// Top Udemy Courses
// JavaScript - The Complete Guide 2021 (Beginner + Advanced)
// JavaScript - The Complete Guide 2021 (Beginner + Advanced)
// 64,026 students enrolled
// 52 hours of video content
// View Course
// React - The Complete Guide (incl Hooks, React Router, Redux)
// React - The Complete Guide (incl Hooks, React Router, Redux)
// 284,472 students enrolled
// 40 hours of video content
// View Course
// Vue - The Complete Guide (w/ Router, Vuex, Composition API)
// Vue - The Complete Guide (w/ Router, Vuex, Composition API)
// 152,857 students enrolled
// 48.5 hours of video content
// View Course

// Advertise
// @saigowthamr
// Rss feed
// Affiliate Disclosure
// Get my latest tutorials
// Email
// user@email.com
// © 2022 Reactgo
