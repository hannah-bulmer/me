import Particles from 'react-particles-js';
import React, { Component } from 'react';

const particlesOptions = {
    particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 1803.4120608655228
          }
        },
        color: {
          value: "#000000"
        },
        opacity: {
          value: 0.4008530152163807,
          random: false,
          anim: {
            enable: false,
            speed: 0.25,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 15,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: "#000000",
          opacity: 0.5,
          width: 0.5
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
}

class ParticleComponent extends Component {
  render() {
    return <Particles id="canvas" className='particles' params={particlesOptions} />
  }
}

export default ParticleComponent;