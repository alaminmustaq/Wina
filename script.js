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
  const confirmButton = document.querySelectorAll('[data-confirm-button]')
  const overlay = document.getElementById('overlay')
  let table = document.getElementById('inquery-table')

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
  confirmButton.forEach(button =>{
    button.addEventListener('click', () =>{
      const model = button.closest('.model')
      confirmModel(model)
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
  function confirmModel(model){
    if(model == null) return
    var gantry_crane = document.getElementById('gc')
    if( gantry_crane.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px"></td><td>Gantry Crane</td><td>0.00$</td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
  }
//  popup ends
// inquiry_table starts
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function enquiry(){
  let templet = '<tr><td></td><td><img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px"></td><td>Gantry Crane</td><td>0.00$</td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
  table.innerHTML += templet
}
// inquiry_table ends
