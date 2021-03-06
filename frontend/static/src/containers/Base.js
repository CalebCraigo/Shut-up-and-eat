import React, {Component} from 'react';
import Map from './Map.js';
import RestaurantDetail from '../components/RestaurantDetail.js';
import axios from 'axios';
import '../Base.css';



class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCoords: null,
      aside: false,
      toggle: false,
      restaurant: null,
      restaurantSelected: false,
      profile:{},
      start: 0,
      highlights: [],
      highlight: '',
      count: 0
    };
    this.randomGenerator = this.randomGenerator.bind(this);
    this.generateButton = this.generateButton.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  componentDidMount(props) {

    console.log('base js did mount');

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          userCoords: { lat: latitude, lng: longitude },
        });
      }
    );



    // let headers = null;
    //
    // if(localStorage.getItem('my-app-user')) {
    //   headers = {
    //     'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).token}`
    //   }
    // }
    //
    // axios.get(`/api/v1/profile/detail/`, {headers: headers})
    // .then(res => {
    //
    //   let highlight = []
    //   let highlights = res.data[0].highlights
    //   highlights.forEach(function(item){
    //     return highlight.push(item.text)
    //   })
    //   let highlightStr = highlight.toString()
    //   let highlightNewStr = highlightStr.replace(/,/g, ' ');
    //   let highlightsURL = encodeURI(highlightNewStr)
    //
    //   this.setState({profile: res.data[0], highlight});
    //   this.setState({highlight: highlightsURL})
    //   console.log(this.state.highlight)
    //
    // })
    // .catch(error =>{
    //   console.log(error);
    // });
   }

  randomGenerator(){
    let headers = null;

    if(localStorage.getItem('my-app-user')) {
      headers = {
        'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).token}`
      }
    }

    if(localStorage.getItem('my-app-user')) {

      axios.get(`/api/v1/profile/detail/`, {headers: headers})
      .then(res => {
        let highlight = []
        let highlights = res.data[0].highlights
        highlights.forEach(function(item){
          return highlight.push(item.text)
        })
        let highlightStr = highlight.toString()
        let highlightNewStr = highlightStr.replace(/,/g, ' ');
        let highlightsURL = encodeURI(highlightNewStr)
        this.setState({profile: res.data[0], highlight});
        this.setState({highlight: highlightsURL})
        console.log(this.state.highlight)
        axios.get(`https://developers.zomato.com/api/v2.1/search?q=${this.state.highlight}&lat=${this.state.userCoords.lat}&lon=${this.state.userCoords.lng}&radius=2000&start=${this.state.start}&count=20&apikey=5ff1c6015f3549f838e7d3a54deb7e8f`)
        .then(res => {
          let restaurant = res.data.restaurants[Math.floor(Math.random()*res.data.restaurants.length)];
          this.setState({restaurant, start: this.state.start + 20, count: this.state.count + 1, restaurantSelected: true, aside: true});
          console.log(this.state.restaurant)
          })
          .catch(error => {
            console.log(error);

          });
      })
      .catch(error =>{
        console.log(error);
      });
    }else{
      axios.get(`https://developers.zomato.com/api/v2.1/search?q=${this.state.highlight}&lat=${this.state.userCoords.lat}&lon=${this.state.userCoords.lng}&radius=1000&start=${this.state.start}&count=20&apikey=5ff1c6015f3549f838e7d3a54deb7e8f`)
      .then(res => {
        let restaurant = res.data.restaurants[Math.floor(Math.random()*res.data.restaurants.length)];
        this.setState({restaurant, start: this.state.start + 20, count: this.state.count + 1, restaurantSelected: true, aside: true});
        console.log(this.state.restaurant)


        })
        .catch(error => {
          console.log(error);

        });
    }

    console.log('randomGenerate is firing');
    }

  generateButton() {
    if(this.props.location.pathname === '/') {
      return <button className='buttons btn btn-secondary btn-lg' type='button' onClick={this.randomGenerator}>Random Generator</button>
    }
    return null;
  }
  minimize() {
    this.setState({toggle: true})
    console.log(this.state.toggle)
  }
  render(){
    return (
      <div className='row'>
        <Map restaurantLocation={this.state.restaurant ? {lat: Number(this.state.restaurant.restaurant.location.latitude), lng: Number(this.state.restaurant.restaurant.location.longitude)} : {lat: 34.8526, lng: -82.3940}}/>
        <aside id='aside' className= {this.state.aside === false ? 'asidehome' : 'aside'} >
          <div className='asideContent'>
            <div>
            {this.props.children}
            {/* only show RestaurantDetail component if random restaurant was selected */}
            {this.state.restaurantSelected && <RestaurantDetail restaurant={this.state.restaurant} profile={this.state.profile} userCoords={this.state.userCoords} />}
            {this.props.location.pathname === '/' && this.state.count !== 3 && <button className='buttons btn btn-secondary btn-lg' type='button' onClick={this.randomGenerator}>Let's Eat!</button>}
            {this.state.count === 3 && <h4>Three strikes and you're out. Shut up and eat!</h4>}
            </div>

          </div>
        </aside>
      </div>
    );
  }
}

export default Base;
