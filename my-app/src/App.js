import React, { Component } from 'react';
import './App.css';
import Hobbies from './hobbies/Hobbies';
import About from './about/About';
import Education from './education/Education';
import Work from './work/Work';
import Basics from './basics/Basics';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      "basics": {
        "name": "John Graham",
        "position": "ERP Developer",
        "picture": "",
        "email": "johnmaxwellgraham@gmail.com",
        "phone": "4064519117",
        "location": {
          "address": "347 Water Lily",
          "postalCode": "59718",
          "city": "Bozeman",
          "country": "United States"
        },
        "profiles": 
          {
            "network": "Github",
            "username": "johnmaxwellgraham",
            "url": ""
          }
        
      },
      "aboutMe": 
        "I am a Minnesota native but have lived in Montana for a total of 14 years. I am married with no children but we have a total of 20 legs in our house. 2 dog, 2 cats. Pigeon, Pluto, Lulu, and the baby boy Fletch. I love traveling and trying new things. I hope to be checking Tokyo and Hong Kong off my travel list soon. One thing I am very proud of is owning my own home. It is something that took a lot of time, hard work, and dedication to make it happen."
      ,
      "work": [
        {
          "company": "Mystery Ranch Backpacks",
          "position": "ERP Developer",
          "website": "http://mysteryranch.com",
          "startDate": "Aug 2009",
          "endDate": ""
        },
        {
          "company": "Dish Network",
          "position": "Satellite Installer",
          "website": "http://dish.com",
          "startDate": "Dec 2008",
          "endDate": "June 2009"
        },
        {
          "company": "SPIE - International society for optics and photonics",
          "position": "Help Desk Intern",
          "website": "http://spie.org",
          "startDate": "March 2008",
          "endDate": "October 2008"
        }  
      ],
      "education": [
        {
          "school": "Montana Code School",
          "subject": "Full Stack Web Development",
          "startDate": "September 2017",
          "endDate": "March 2018",
          "gpa": ""
        },
        {
          "school": "Bellingham Technical College",
          "subject": "Comuter Desktop Support",
          "startDate": "September 2006",
          "endDate": "June 2008",
          "gpa": "3.9"
        }
      ],
      "hobbies": ["Rock Climbing", "Snowboarding","Cooking","Ice Climbing","Hockey"]
    }
   
  }
  render() {   
    return (
      <div>
        <div className="App-header">
          <Basics basics= {this.state.basics}/> <br />
        </div>
        <div className="App">
          <About aboutMe={this.state.aboutMe}/> <br />
          <Work work={this.state.work}/>         
          <Education education={this.state.education}/>
          <Hobbies hobbies={this.state.hobbies}/>
        </div>
      </div>
    );
  }
}

export default App;
