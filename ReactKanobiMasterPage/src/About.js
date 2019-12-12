var React = require('react');
var ReactDOM = require('react-dom');

class About extends React.Component {

    componentDidMount() {

        // Code for After login Can not move back side

        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            //window.location.reload();
            history.go(1);
        };
    }
    render() {
        return (
            <h1>Welcome to React Navigate Page!!</h1>
        );
    }
}
export default About

