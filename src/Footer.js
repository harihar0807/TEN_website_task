import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
        <div className="footers">
            <div className="columnf leftf">
                     <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcAP10b_fOQmVYPKGqaiap7dyBvTOrZ0IsQ&usqp=CAU"
                     width="80px"

                     />
                     <img
                     src="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-601425683.jpg"
                     width="80px"

                     />
                     <img
                     src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                     width="80px"

                     />

            </div>
            <div className="columnf middlef">
                        
                        <h3 className="subscribe">Subscribe to our newsletter</h3>
                         <form>
                             <div className="formm">
                              <input className="inputt" type="text" placeholder="Full name" />
                              <input className="inputt" type="text" placeholder="College name" />
                             </div>
                             <div className="formm">
                                 <input className="inputt" type="number" placeholder="Contact Number" />
                                 <input className="inputt" type="email" placeholder="Email" />
                             </div>
                             <button className="submit">Submit</button>
                         </form>
            
            
            </div>
            <div className="columnf rightf">
                   <h3 className="sayf">About Us</h3>
                   <h3 className="sayf">FAQ's</h3>
                   <h3 className="sayf">Contact Us</h3>

            </div>
            </div>
            <div className="bottom">
                  <h4 className="sayb" >© 2020 Limitless Technologies - The Entrepreneurship Network</h4>
            </div>
        </div>
    )
}

export default Footer
