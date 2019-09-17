(function () {
    const siteNavigationBar = document.getElementById('site-main-navigation');
    const mobileNavigationSwitch = document.getElementById('mobile-menu-switch');
    const navigationButtons = document.getElementsByClassName('navigation-button');
    const mobileNavigationClose = document.getElementById('mobile-menu-switch-close');
    const tag_body = document.getElementsByTagName('body')[0];
  
    mobileNavigationSwitch.addEventListener('click', (event)=>{
      $this = event.target;
      tag_body.classList.add('lock-scroll');
      siteNavigationBar.classList.add('active');
    }, false);
  
    siteNavigationBar.addEventListener('click', (event)=>{
      $this = event.target;
      closeMobileNavigationMenu(event);
    }, false);

    siteNavigationBar.addEventListener('touchstart', (event)=>{
      $this = event.target;
      closeMobileNavigationMenu(event);
    }, false);

    mobileNavigationClose.addEventListener('click', (event)=>{
      $this = event.target;
      closeMobileNavigationMenu(event);
    }, false);
  
    for( let i = 0; i < navigationButtons.length; i++){
      const navigationButton = navigationButtons[i];
      navigationButton.addEventListener('click', (event)=> {
        $this = event.target;
        //event.preventDefault();
        event.stopPropagation();
      }, false);
    }

    function closeMobileNavigationMenu(event){
      event.preventDefault();
      event.stopPropagation();
      tag_body.classList.remove('lock-scroll');
      siteNavigationBar.classList.remove('active');
    }

  
    console.log(`header.js Ready`);
  
  }());