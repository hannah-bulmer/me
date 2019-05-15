import React from 'react';
import WebsiteLink from './WebsiteLink';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      showDropdown: false,
      error: '',
      isLoading: false,
    }
    this.myDropdown = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    this.getWeather(6176823);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    console.log(e.target);
    if (!this.myDropdown.contains(e.target)) {
      this.setState({ showDropdown: false });
    }
  }

  getWeather = async (id) => {
    try {
      const Api_Key = '859499bfed4c14594bd97b7545189cfb';
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${Api_Key}`);
      const response = await api_call.json();
      this.setState({ weather: response })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  getNewWeather = (e) => {
    this.getWeather(e.target.value);
  }

  openDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  renderLinks() {
    return (
      this.props.links.map(link => <WebsiteLink link={link.link} image={link.image} />)
    )
  }
  
  renderSearch(name) {
    const dropdownClass = "dropdown-content " + (this.state.showDropdown && "open");
    return (
      <div class="dropdown" ref={myDropdown => this.myDropdown = myDropdown}>
        <button class="dropbtn" onClick={this.openDropdown}>{name}</button>
        <div class={dropdownClass}>
          <button value={6167865} onClick={this.getNewWeather}>Toronto</button>
          <button value={6176823} onClick={this.getNewWeather}>Waterloo</button>
          <button value={5128638} onClick={this.getNewWeather}>New York</button>
          <button value={2654675} onClick={this.getNewWeather}>Bristol</button>
      </div>
    </div>
    )
  }

  render() {
    let weather = '';
    let weatherType = '';
    let cityName = '';
    if (this.state.weather !== '') {
      weather = Math.round(this.state.weather.main.temp - 273.15);
      weatherType = this.state.weather.weather[0].main;
      cityName = this.state.weather.name;
    }
    return (
      <div className="page">
        <header className="header sticky">
          <div className="App weather">Weather in {this.renderSearch(cityName)}: {weather}º, {weatherType}</div>
          <button className="App headerTabs" onClick={this.props.scrollToAbout}>About</button>
          <button className="App headerTabs" onClick={this.props.scrollToProjects}>Projects</button>
          <button className="App headerTabs" onClick={this.props.scrollToExperiences}>Experience</button>

        </header>
          <div className="title">Hannah Bulmer</div>
          <h4>Aspiring computer scientist • Coffee enthusiast</h4>
          {this.renderLinks()}
      </div>
    )
  }
}

export default FrontPage;