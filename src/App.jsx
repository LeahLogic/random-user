
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: null,
    loading: false
  };

  getUser = async () => {
    this.setState({
      loading: true
    });

    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      user: data.results[0],
      loading: false
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div className="app">
        <p className="subtitle">PEOPLE EXPLORER</p>
        <h1>Meet Someone New</h1>
        <p className="description">
          Discover people from around the world.
        </p>

        <div className="profile-card">
          {loading && <p>Loading profile...</p>}

          {user && (
            <div>
              <img
                className="profile-image"
                src={user.picture.large}
                alt="Profile"
              />

              <h2>
                {user.name.first} {user.name.last}
              </h2>

              <p>{user.dob.age} years old</p>

              <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>City:</strong> {user.location.city}</p>
                <p><strong>Country:</strong> {user.location.country}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            </div>
          )}
        </div>

        <button onClick={this.getUser} disabled={loading}>
          Discover Another Person
        </button>
      </div>
    );
  }
}

export default App;
