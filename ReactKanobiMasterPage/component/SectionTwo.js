var React = require('react');

class SectionTwo extends React.Component {
    render() {

        return ( 

              <section className="section  vertical-bottom inverse" data-background-image="" data-background="rgba(255,255,255,1)" data-shadow="" data-nav-color="#d73e4d" data-nav-color-text="#ffffff" data-color="#768088" data-title-color="#373981" data-title="Introduction" data-anchor="introduction">
                <div className="section-content not-scroll padditop-about">
                    <div className="container section-wrap" style={{ paddingbottom: '0px' }}>
                        <p className="samititle" data-appear-animation="zoomIn" data-appear-animation-delay="400">You should know</p>
                        <h1 className="section-title" data-appear-animation="zoomIn" data-appear-animation-delay="400"><span>Who</span> We Are</h1>
                        <div className="row">
                            <div className=" col-lg-12">
                                <p className="descriptions" data-appear-animation="zoomIn" data-appear-animation-delay="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
         containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum.</p>

                                <div className="service-icon-groups">
                                    <ul>
                                        <li data-appear-animation="fadeInUpBig" data-appear-animation-delay="250"><div className="serviceicon support"></div> <p>24x7 Support</p></li>
                                        <li data-appear-animation="fadeInUpBig" data-appear-animation-delay="350"><div className="serviceicon delivery"></div> <p>On Time Delivery</p></li>
                                        <li data-appear-animation="fadeInUpBig" data-appear-animation-delay="450"><div className="serviceicon guarantee"></div> <p>Best Price Guarantee</p></li>
                                        <li data-appear-animation="fadeInUpBig" data-appear-animation-delay="550"><div className="serviceicon plagiarism"></div> <p>Plagiarism Free</p></li>
                                        <li data-appear-animation="fadeInUpBig" data-appear-animation-delay="650"><div className="serviceicon quality"></div> <p>Top Quality</p></li>
                                    </ul>
                                </div>
                                <hr className="pg-gap" style={{ marginbottom: '29px' }} />
                            </div>
                        </div>
                        <div className="animation-box hidden-xs" style={{ height: '340px' }}></div>
                    </div>
                </div>

            </section>

            );
    }
}

export default SectionTwo;