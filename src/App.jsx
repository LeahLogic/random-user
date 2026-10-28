
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: null,
    loading: false,
    error: ''
  };

  getUser = async () => {
    this.setState({
      loading: true,
      error: ''
    });

    try {
      const response = await fetch('https://randomuser.me/api/');

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();

      this.setState({
        user: data.results[0]
      });
    } catch (error) {
      console.error(error);

      this.setState({
        error: 'Could not load a profile. Please try again.'
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, loading, error } = this.state;

    return (
      <div className="app">
        <p className="subtitle">PEOPLE EXPLORER</p>
        <h1>Meet Someone New</h1>
        <p className="description">
          Discover people from around the world.
        </p>

        <div className="profile-card">
          {loading && <p>Loading profile...</p>}

          {error && <p>{error}</p>}

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
