document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if(y.matches)
      {
        if (window.scrollY > 130) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } 
        else{
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
      }
    });
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
      }
      else{
        document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
      }
    }
    var y = window.matchMedia("(min-width: 992px)")
    var x = window.matchMedia("(max-width: 992px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
  });
  
//  popup starts
  const openModelButtons = document.querySelectorAll('[data-model-target]')
  const closeModelButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  openModelButtons.forEach(button =>{
    button.addEventListener('click', () =>{
      const model = document.querySelector(button.dataset.modelTarget)
      openModel(model)
    })
  })
  overlay.addEventListener('click', () =>{
    const models = document.querySelectorAll('.model.active')
    models.forEach(model => {
      closeModel(model)
    })
  })
  closeModelButtons.forEach(button =>{
    button.addEventListener('click', () =>{
      const model = button.closest('.model')
      closeModel(model)
    })
  })
  function openModel(model){
    if(model == null) return
    model.classList.add('active')
    overlay.classList.add('active')
  }
  function closeModel(model){
    if(model == null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
  }
//  popup ends