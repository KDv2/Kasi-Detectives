import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})
export class SetReportsService {
  crimesList : Array<any> = []
  savedLocations : Array<any> = []
  userIncidents : Array<any> = []
  tempArray : Array<any> = []
  currentDate
  monthNum
  monthArray
  month
  date
  year


  addToOldUserReport = false
  addToNewUserReport = true
  addToHighRisk = false
  constructor() { }

  getDate(){
    this.currentDate = new Date()
    console.log(this.currentDate);
    this.date = this.currentDate.getDate()
    console.log(this.date);
    this.month 
    this.monthArray = [
      {key: 0, value: 'January'},
      {key: 1, value: 'February'},
      {key: 2, value: 'March'},
      {key: 3, value: 'April'},
      {key: 4, value: 'May'},
      {key: 5, value: 'June'},
      {key: 6, value: 'July'},
      {key: 7, value: 'August'},
      {key: 8, value: 'September'},
      {key: 9, value: 'October'},
      {key: 10, value: 'November'},
      {key: 11, value: 'December'}
    ]
    
    this.monthNum = this.currentDate.getMonth()
    for(let i = 0; i < this.monthArray.length; i++){
      if(this.monthNum === this.monthArray[i].key){
        this.month = this.monthArray[i].value
      }
    }
    console.log(this.month);
    this.year = this.currentDate.getFullYear()
    console.log(this.year);
  }
  finallySubmit(addToHighRisk, addToOldUserReport, addToNewUserReport){
    console.log('hello');
    
  }
  submitNew(submitInfo){
    return new Promise((resolve, reject) => {
      this.getDate()
      let userId = submitInfo.userId
      let place = submitInfo.address
      let description = submitInfo.description
      let lat = submitInfo.lat
      let lng = submitInfo.lng
      let date = this.date
      let month = this.month
      let year = this.year
      let addToOldUserReport = false
      let addToNewUserReport
      let addToHighRisk = false
  
      addToNewUserReport = false
      addToOldUserReport = false
      addToHighRisk = false
      let highRiskReport = []
      let incidentReport = []
      console.log(lat);
      console.log(lng);
      console.log(description);
      console.log(userId);
      console.log(place);
        //checking if place has been reported before
  
        console.log(addToOldUserReport, 'adding to old report');
        console.log(addToHighRisk, 'adding to high risk');
        console.log(addToNewUserReport, 'adding to new report');
  
  
        var newPostKey = firebase.database().ref().child('Incidents/' + "/" + place + "/").push().key;
      console.log(newPostKey);
        firebase.database().ref().child('Incidents/'+ "/" + place + "/" + newPostKey).update({
          lat : lat,
          lng : lng,
          numberOfReports: 1        
        })
  
        firebase.database().ref().child('Incidents/'+ "/" + place + "/" + newPostKey + '/' + userId).update({
          description: description,
            date: date,
            month: month,
            year: year
        })
      
      
      resolve()
      let gate = 'hell'
      console.log(gate);
      
    })
  }
  submitToOldIncidents(submitInfo, key, numberOfReports){
    return new Promise((resolve, reject) => {
      this.getDate()
      let userId = submitInfo.userId
      let place = submitInfo.address
      let description = submitInfo.description
      let lat = submitInfo.lat
      let lng = submitInfo.lng
      let date = this.date
      let month = this.month
      let year = this.year
      let addToOldUserReport = false
      let addToNewUserReport
      let addToHighRisk = false
  
      addToNewUserReport = false
      addToOldUserReport = false
      addToHighRisk = false
      let highRiskReport = []
      let incidentReport = []
      console.log(lat);
      console.log(lng);
      console.log(description);
      console.log(userId);
      console.log(place);
        //checking if place has been reported before
  
        console.log(addToOldUserReport, 'adding to old report');
        console.log(addToHighRisk, 'adding to high risk');
        console.log(addToNewUserReport, 'adding to new report');
  
        
        var newPostKey = firebase.database().ref().child('Incidents/' + "/" + place + "/").push().key;
        var postKey = key
        console.log(postKey);
        
      console.log(newPostKey);
        firebase.database().ref().child('Incidents/'+ "/" + place + "/" + postKey).update({
          lat : lat,
          lng : lng,
          numberOfReports: numberOfReports + 1       
        })
  
        firebase.database().ref().child('Incidents/'+ "/" + place + "/" + postKey + '/' + userId).update({
          description: description,
            date: date,
            month: month,
            year: year
        })
      
      
      resolve()    
    })
  }
  submitToHighRisk(submitInfo){
    return new Promise((resolve, reject) => {
      this.getDate()
      let userId = submitInfo.userId
      let place = submitInfo.address
      let description = submitInfo.description
      let lat = submitInfo.lat
      let lng = submitInfo.lng
      let date = this.date
      let month = this.month
      let year = this.year
      let addToOldUserReport = false
      let addToNewUserReport
      let addToHighRisk = false
  
      addToNewUserReport = false
      addToOldUserReport = false
      addToHighRisk = false
      let highRiskReport = []
      let incidentReport = []
      console.log(lat);
      console.log(lng);
      console.log(description);
      console.log(userId);
      console.log(place);
        //checking if place has been reported before
  
        console.log(addToOldUserReport, 'adding to old report');
        console.log(addToHighRisk, 'adding to high risk');
        console.log(addToNewUserReport, 'adding to new report');
  
  
        var newPostKey = firebase.database().ref().child('HighRisk/' + "/" + place + "/").push().key;
      console.log(newPostKey);
        firebase.database().ref().child('HighRisk/'+ "/" + place + "/" + newPostKey).update({
          lat : lat,
          lng : lng,
          numberOfReports: 1        
        })
  
        firebase.database().ref().child('HighRisk/'+ "/" + place + "/" + newPostKey + '/' + userId).update({
          description: description,
            date: date,
            month: month,
            year: year
        })
      
      
      resolve()
    })   
  }
  submit(submitInfo){
    return new Promise((resolve, reject) => {
      this.getDate()
      let userId = submitInfo.userId
      let place = submitInfo.address
      let description = submitInfo.description
      let lat = submitInfo.lat
      let lng = submitInfo.lng
      let date = this.date
      let month = this.month
      let year = this.year
      console.log(lat);
      console.log(lng);
      console.log(description);
      console.log(userId);
      console.log(place);
      
      
      
      var newPostKey = firebase.database().ref().child('Incident/' + "/" + place + "/").push().key;
      console.log(newPostKey);
      firebase.database().ref().child('Incident/'+ "/" + place + "/" + newPostKey).update({
        
        
        description: description,
        lat : lat,
        lng : lng,
        userId: userId,
        date: date,
        month: month,
        year: year
      })
      resolve()
    })
  }
    clearArray(array){
      for(let i=0; i < array.length; i++){array.splice(i)}
    }
}
