import React from 'react'
import Notes from '../static/notes.jpg'
import {VscDebugBreakpointData} from 'react-icons/vsc';
const Mobilepoints = () => {
    return (
        <div>
             <div className = 'row' style={{height:'30%'}}>
                <div className = 'col-12' style={{marginTop:'30px'}}>
                    <img src={Notes} alt = '' style = {{justifyContent:'center',objectFit:'contain'}}></img>
                </div>

            </div>
            <div className = 'row' style={{height:'40%', borderBottom:'2px solid grey'}}>
                <div className = 'col-12'>
                <h1 style = {{marginTop:'20px', textAlign:'center'}}> Points to Remember</h1>
                    <div className = 'content' style = {{marginTop:'35px', marginLeft:'10px',marginRight:'10px'}}> 
                    <p style = {{fontSize:'1rem'}}><VscDebugBreakpointData/> A Will can be printed on a plain paper without the need of stamp paper or notary.</p>
                    <p style = {{fontSize:'1.1rem'}}><VscDebugBreakpointData/> Registration of a Will is not compulsory.</p>
                    <p style = {{fontSize:'1.1rem'}}><VscDebugBreakpointData/> The Will has to be signed in front of two witnesses and vice-versa.</p>
 </div>
                </div>

            </div>
        </div>
    )
}

export default Mobilepoints
