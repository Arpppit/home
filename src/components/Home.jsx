import React ,{ useState } from 'react'
import TermsConditions from './TermsConditions';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Index from '../static/index.jpg'
import './mobile.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Terms & Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TermsConditions/>
      </Modal.Body>
      <Modal.Footer>
      <small>By clicking 'Accept' you are agreeing to our terms and conditions.</small>
        <Button onClick={props.onHide}>Accept</Button>
      </Modal.Footer>
    </Modal>
  );
}




const Home = () => {

  const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <section id= 'header' className = 'd-flex align-items-center' style = {{paddingBottom:'70px',background:`{Index}`}}>
            <div className = 'container-fluid nav_bg'>
                <div className = 'row'>
                
                    <div className = 'col-10 mx-auto'>
                        <div className = 'row'>
                            <div className  ='col-md-8 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1> <strong className = 'brand-name'>Will Creator</strong> </h1>
                            <h2 className = 'my-3'>
                            “Secure your dear ones. Express your wishes so that your </h2>
                               <h2> loved ones stay protected.”
                            </h2>
                            </div>
                            
                            <div className = 'col-lg-4 order-2 order-lg-2 d-flex flex-column justify-content-center' style= {{backgroundColor:'pink', padding:'10px 50px 50px 50px',borderRadius:'13px'}}>
                    <form>
                    <div class="mb-3">
    <label for="exampleInputName" class="form-label">Full Name </label>
    <input type="Name" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="phoneNo" class="form-label">Phone No.</label>
    <input type="phoneNo " class="form-control required" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1"> I Agree to all <a className= 'button' onClick ={() => setModalShow(true)} >Terms and Conditions</a></label>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </div>
  <div style={{display:'flex'}}>
  <button type="button" class="btn btn-primary btn-lg btn-block" style={{justifyContent:'center' }} >Create Will</button>
  </div>
</form>
                    </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </section>
        </>
    )
}

export default Home
