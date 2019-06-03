import styled, {keyframes,css} from "styled-components";
import {Media} from '../../Config';

const progressiveReveal = keyframes`
	0% { transform: scale(1.05); opacity: 0; }
	100% { transform: scale(1); opacity: 1; }
`;


export const StyledCard =  styled.div`

  display: flex;
  position:relative;
  width: ${props=>props.width?props.width:'100%'};
  height: ${props=>props.height?props.height:'100%'};
  border: 0 none;
  overflow:hidden;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  border-radius:2rem;
  /* transform: skewY(-6deg);
  transform-origin: top left; */
  ${props=>!props.isBackgroundImage && css`
  background-color:#fff;
  color:#222;
  `}
  margin:1rem;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
 

${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;

export const StyledLink =  styled.a`

  /* position: relative; */
  display: block;
  overflow: hidden;
  outline: none;
  width:100%;
  height:100%;
  position: absolute;
    top:0;
    left:0;
    z-index:-1;
  ${props=>props.skew&&`
    transform: skew(${props.skew.degree});
    transform-origin: ${props.skew.origin};
    `
  }
  ${props=>props.rounded&&`
    border-bottom-left-radius: ${props.rounded.left};
    border-bottom-right-radius: ${props.rounded.right};
    `
  }

&:not(.replace) {
  cursor: default;
}

& img {
  display: block;
  width: auto;
  max-width: none;
  height: 100%;
  border: 0 none;
}

& img.preview {
  filter: blur(2vw);
  transform: scale(1.05);
}

& img.reveal {
  position: absolute;
  left: 0;
  top: 0;
  will-change: transform, opacity;
  animation: ${progressiveReveal} 1s ease-out;
}

${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;


export const StyledImage =  styled.img`
  max-width:100vw;
  max-height:100vh;
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  border: 0 none;



${Media.phone `

`}

${Media.tablet `

`}

${Media.laptop `

`}

${Media.desktop `



`}

  `;


