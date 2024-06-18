import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
import Page6 from "./Page6"
import Playlist from "./Playlist"
import './App.css';
import Page5C from "./Page5C"
import Page5C2 from "./Page5C2"

const Page = () => {
    return (
        <div >

            <div className="conteiner">
                <Playlist/>
            </div>
            
                    <div className='container'>
                        <Page1/>
                    </div>
            
                    <div className='container'>
                        <Page2/>
                    </div>

                    <div className='container'>
                        <Page3/>
                    </div>
                
     
                
                    <div className='container'>
                        <Page4/>
                    </div>
                
            
                    <div className='container'>
                        <Page5/>
                    </div>

                    <div className='container'>
                        <Page5C/>
                    </div>
                    <div className='container'>
                        <Page5C2/>
                    </div>


            
                    <div className='container'>
                        <Page6/>
                    </div>
                                

        </div>
        )
    }


export default Page