import React from 'react';
// import * as api from '../utils/api'

class Nav extends React.Component {
  state = {topics: []};

  // componentDidMount () {
  //   api.getTopics().then((topics) => {
  //     this.setState({ topics });
  //   });
  // };

  // getTopics = () => {
  //   return api.getTopics();
  // };

  render() {
    return (
      <nav>
        <h3>This is Nav bar</h3>
      </nav>
    )
  }
};

export default Nav;