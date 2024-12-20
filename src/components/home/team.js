import image1 from "../../assets/images/staff-01.jpg"
import image2 from "../../assets/images/staff-02.jpg"
import image3 from "../../assets/images/staff-03.jpg"

export default function Team() {
    return(
        <div id="our_team" class="team-main pad-top-100 pad-bottom-100 parallax" data-aos="fade-up">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                        <h2 class="block-title text-center">
						Our Team 	
					</h2>
                        <p class="title-caption text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div class="team-box">

                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image1} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                        <h3>John Doggett</h3>
                                        <p>The chef’s talent lies in transforming simple ingredients into extraordinary dishes. With years of dedication and creativity, they craft flavors that delight every palate. Their passion for culinary artistry shines in every plate, combining technique and innovation seamlessly.</p>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image2} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                        <h3>Jeffrey Spender</h3>
                                        <p>The chef possesses a unique ability to turn everyday ingredients into culinary masterpieces. Through a combination of expertise and innovation, they create dishes that captivate the senses. Each plate reflects their commitment to excellence.</p>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-md-4 col-sm-6">
                                <div class="sf-team">
                                    <div class="thumb">
                                        <a href="#"><img src={image3} alt=""/></a>
                                    </div>
                                    <div class="text-col">
                                        <h3>Monica Reyes</h3>
                                        <p>With an unwavering dedication to their craft, the chef elevates cooking into an art form. Their creativity and attention to detail transform every meal into a remarkable experience, leaving diners inspired and satisfied.With an unwavering dedication to their craft.</p>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}

                    </div>
                    {/* <!-- end team-box --> */}

                </div>
                {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
    </div>
    )
}