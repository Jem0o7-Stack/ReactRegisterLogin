var React = require('react');
var ReactDOM = require('react-dom');
import SectionSeven from '../../component/SectionSeven';
import SectionSix from '../../component/SectionSix';
import SectionFive from '../../component/SectionFive';
import SectionFour from '../../component/SectionFour';
import SectionThree from '../../component/SectionThree';
import SectionTwo from '../../component/SectionTwo';
import SectionOne from '../../component/SectionOne';
import LoginPopUpModal from '../../component/LoginPopUpModal';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
         <div>
         <div className="main">

            <SectionOne/>

            <SectionTwo/>

            <SectionThree/>

            <SectionFour/>

            <SectionFive/>

            <SectionSix/>

            <SectionSeven/>

            <LoginPopUpModal/>       		

         </div>
         </div>
        );
    }
}

export default HomePage;

//ReactDOM.render(<Hello />, document.getElementById('root'));