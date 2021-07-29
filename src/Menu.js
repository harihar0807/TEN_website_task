import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className="container">

            <div className="row">
                <div className="column ll">
                       <h2>Home</h2>
                </div>
                <div className="column lll">
                       <h2>Online Courses</h2>
                </div>
                <div className="column lf">
                       <h2>We are Hiring</h2>
                </div>
                <div className="column lff">
                       <h2>More</h2>
                </div>


            </div>
            <div className="fimg">
                <h1 className="say1">A World Of Knowledge at Your FingerTips</h1>
            </div>
            <div className="img2">
                  

                  <div className="scolumn sleft">
                       <h2>About Us</h2>
                       <h1 className="say2">Learning Together From The Comfort of Your Home</h1>
                       <button className="learnmore">Learn More</button>
                  </div>
                  <div className="scolumn sright">
                         <img 
                         className="ssimg"
                           src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
                           />
                  </div>

            </div>
            <div className="img3">
                  
                  <h2 className="welcome"><i>Welcome to</i></h2>
                  <h2 className="say3"><i>THE NEXT BIG THING</i></h2>
                  <button className="join">Join TEN Virtual Campus</button>
              
            

            </div>
            <div className="img4">
                  

                  <div className="column4 left4">
                       <h2>Our Courses</h2>
                       <h2 className="say4">Your New </h2>
                       <h2 className="say4">Journey Begins Here, </h2>
                       <h2 className="say4">Today</h2>
                       
                  </div>
                  <div className="column4 right4">
                        
                       <h2 className="say5">Entrepreneurship made Fun</h2>
                       <button className="explore">Explore Here</button>

                  </div>

            </div>
            <div className="img5">
                  

                  <div className="column5 left5">
                       
                  </div>
                  <div className="column5 middle5">
                        
                       <h2 className="say6">Digital Marketing</h2>
                       

                       <button className="explore">Explore Here</button>

                  </div>
                  <div className="column5 right5">
                        
                      
                  </div>


            </div>
            <div className="img6">
                  

                  <div className="column6 left6">
                       <h2 className="say6 sayy6">Product Management Like a Pro</h2>
                       <button className="explore">Explore Here</button>
                  </div>
                  <div className="column6 right6">
                        
                       

                  </div>
            </div>
            <div className="img7">
                     <h2 className="say7">Our Course Benefits</h2>
            </div>
            <div className="img8">
                <div className="column8 left8">
                    <img className="imgg8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsveGbcBHgo_ZhrNzljqPSiSpn8gE49Oddzg&usqp=CAU"
                    />
                           <h4 className="say8">Expert Teachers</h4>
                           <p>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
                </div>
                <div className="column8 middle8">
                    <img className="imgg8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIh8UO1Q9ZitjZxm7WPyqUOxR93Ta-dV--tw&usqp=CAU"
                    />
                    <h4 className="say8">Online Community</h4>
                    <p>Feel like home, with a "family of invisible friends".</p>

                </div>
                <div className="column8 right8">
                    <img className="imgg8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25e73ddy8yD9OInnVZm8X4rbbww8cd9OYgg&usqp=CAU"
                    />
                      <h4 className="say8">Flexible Curriculum</h4>
                      <p >
                      Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.
                      </p>
                </div>
                <div className="testimonials">
                        <h2 className="testimonial">Testimonials</h2>
                </div>
                <div className="slider">
                    
                    <div className="slide" id="slide-1">
                                <p className="ppp">
                                 I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.Thank you team TEN! -Kshema Unni, Business Development Intern
                                 </p>
                    </div>
                     <div className="slide" id="slide-2">
                                  <p className="ppp">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.-Harsh Rajput, General Management Intern</p>
                     </div>
                     <div className="slide" id="slide-3">
                            <p className="ppp">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!.-Aakriti Malik, DM Intern</p>
                     </div>
                     
                     
               </div>

            </div>
            <div className="img9">
                <h2 className="say9">Power Of TEN Counsulting</h2>
                <button className="explore">Explore Here</button>

            </div>
            

        </div>
    )
}

export default Menu
