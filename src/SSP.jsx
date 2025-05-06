import { useEffect, useState } from 'react';
import './style/SSP.css';

function SSP() {

  
  const [services, setServices] = useState();
  const [servicesChildren, setServicesChildren] = useState([]);
  let tempServices = [];

  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                return resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }

  waitForElm('.wtss-service-menu').then((elm) => {
    console.log('Services menu found.');
    setServices(elm);
    setServicesChildren(services.children);

    
    for(let i = 0; i < servicesChildren.length; i++) {
      tempServices.push(servicesChildren[i]);
      if (i > 4) {
        tempServices[i].hidden=true;
      }
    }
    return tempServices;
  })
  .then(ts => {
    console.log(ts);
    // setServicesChildren(ts);
    // console.log(servicesChildren);
    
  });
  
  return (
    <>

    <div id="wtss-main"></div>
    <div id="wtss-request-phone-instructions-replacement" style={{display:'none'}}>
      Please enter your phone number below to sign into your account.
    </div>
    </>
  );
} 

export default SSP;
