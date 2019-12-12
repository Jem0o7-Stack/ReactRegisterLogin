var React = require('react');

class SectionFour extends React.Component {
    render() {

        return (

            <section className="section" data-background-image="../public/images/banner_testimonial.jpg" data-shadow="" data-nav-color="#ffffff" data-nav-color-text="#d73e4d" data-color="" data-title-color="" data-title="Testimonials" data-anchor="testimonials" style={{ background: 'fixed' }}>
                <div className="section-content" data-appear-animation="fadeInLeft" data-appear-animation-delay="300">
                    <div className="container section-wrap">
                        <div className="testimonials hidden-xs" data-options='{"singleItem": true}'>
                            <div className="testimonial">
                                <h4>Christian Webb AUSTRALIA</h4>
                                <img src="../public/images/testimon-1.png" />
                                <h2>Assignment writing Australia</h2>
                                <p>I was looking for best assignment service in Australia. My friends referred me to MyAssignmentHelp.com. Man, I have been so happy. They have more than 3000 assignment experts, where you can buy assignments. This is the best online assignment help ever.</p>
                            </div>
                        </div>

                        <div className="carousel testimonials visible-xs" data-options='{"singleItem": true}'>
                            <div className="testimonial">
                                <h4>Christian Webb AUSTRALIA</h4>
                                <img src="../public/images/testimon-1.png" />
                                <h2>Assignment writing Australia</h2>
                                <p>I was looking for best assignment service in Australia. My friends referred me to MyAssignmentHelp.com. Man, I have been so happy. They have more than 3000 assignment experts, where you can buy assignments. This is the best online assignment help ever.</p>
                            </div>
                            <div className="testimonial">
                                <h4>Christian Webb AUSTRALIA</h4>
                                <img src="../public/images/testimon-2.png" />
                                <h2>Assignment writing Australia</h2>
                                <p>I was looking for best assignment service in Australia. My friends referred me to MyAssignmentHelp.com. Man, I have been so happy. They have more than 3000 assignment experts, where you can buy assignments. This is the best online assignment help ever.</p>
                            </div>
                            <div className="testimonial">
                                <h4>Christian Webb AUSTRALIA</h4>
                                <img src="../public/images/testimon-3.png" />
                                <h2>Assignment writing Australia</h2>
                                <p>I was looking for best assignment service in Australia. My friends referred me to MyAssignmentHelp.com. Man, I have been so happy. They have more than 3000 assignment experts, where you can buy assignments. This is the best online assignment help ever.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider hidden-xs">
                    <a href="#" className="prv-testimonial"><i className="fa fa-angle-up"></i></a>
                    <ul className="half-circle">
                        <li><a href="#testimonials"></a></li>
                        <li><a href="#testimonials1"></a></li>
                        <li><a href="#testimonials2"></a></li>
                    </ul>
                    <a href="#" className="next-testimonial"><i className="fa fa-angle-down"></i></a>
                </div>
            </section>

        );
    }
}

export default SectionFour;