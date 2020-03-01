import React from 'react';
import Particles from 'react-particles-js';
import Title from './Components/title';
import Card from './Components/card';
import './App.css';


const particleOptions = {
        particles:{
          number:{
            value:256,
            density:{
              enable:true,
              value_area:1122.388442605866
            }
          },
          color:{
            value:"#fff"
          },
          shape:{
            type:"circle",
            stroke:{
              width:0,
              color:"#000000"
            },
            polygon:{
              nb_sides:5
            },
              image:{
                src:"img/github.svg",
                width:100,
                height:100
              }
            },
            opacity:{
              value:0.13629002517356945,
              random:true,
              anim:{
                enable:false,
                speed:1,
                opacity_min:0.1,
                sync:false
              }
            },
            size:{
              value:10,
              random:true,
              anim:{
                enable:false,
                speed:40,
                size_min:0.1,
                sync:false
              }
            },
            line_linked:{
              enable:false,
              distance:500,
              color:"#ffffff",
              opacity:0.4,
              width:2
            },
            move:{
              enable:true,
              speed:6,
              direction:"bottom",
              random:false,
              straight:false,
              out_mode:"out",
              bounce:false,
              attract:{
                enable:false,
                rotateX:600,
                rotateY:1200
              }
            }
          },
          interactivity:{
            detect_on:"canvas",
            events:{
              onhover:{
                enable:false,
                mode:"bubble"
              },
              onclick:{
                enable:false,
                mode:"repulse"
              },
              resize:true
            },
            modes:{
              grab:{
                distance:400,
                line_linked:{
                  opacity:0.5
                }
              },
              bubble:{
                distance:400,
                size:4,
                duration:0.3,
                opacity:1,
                speed:3
              },
              repulse:{
                distance:200,
                duration:0.4
              },
              push:{
                particles_nb:4
              },
              remove:{
                particles_nb:2
              }
            }
          },
          retina_detect:true
    }
class App extends React.Component{
  render(){
    return (
        <div className="container">
          <div className="component">
            <Title />
          </div>
          <div className="component">
            <Card />
          </div>
            <Particles className="particles" params={particleOptions} />
        </div>
    );
  }
}

export default App;
