import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { memo } from 'react';

const Portal = memo((props) => {
  const {children, containerId} = props;

  const [domReady, setDomReady] = useState(false)

  // have to be in the dom
  useEffect(() => {
    setDomReady(true)
  })

  //the second parameter have to be dom element, then get it by id
	let containerElement = document.getElementById(containerId);
  if (!containerElement) {
		containerElement = document.createElement('div');
		containerElement.setAttribute('id', containerId);
		document.body.appendChild(containerElement);
	}

  return domReady 
    ?  ReactDOM.createPortal(children, containerElement)
    : null
})
export default Portal