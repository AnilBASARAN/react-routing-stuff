import './App.css';
import Dog from './Dog';
import About from './About';
import HomePage from './HomePage';
import React,{Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {page: "about"}
    this.renderPage = this.renderPage.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage){
    this.setState({page : newPage});
  }

 renderPage(){
    if(this.state.page === "about") return <About/>
    else if(this.state.page === "dog") return <Dog/>
    else if(this.state.page === "home") return <HomePage/>
  }

  render(){
  return (
    <div className="App">
      <nav>
        <a onClick={()=> this.changePage("about")}>About</a>
        <a onClick={()=> this.changePage("dog")}>Dog</a>
        <a onClick={()=> this.changePage("home")}>Home</a>
      </nav>
     {this.renderPage()}
    </div>
  );

}
}

export default App;
