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
    var gantry_crane = document.getElementById('gantry-crane-checkbox')
    var double_beam_hooked_gantry_crane = document.getElementById('double-beam-hook-gantry-crane-checkbox')
    var single_beam_crane = document.getElementById('single-beam-crane-checkbox')
    var double_bridge_crane = document.getElementById('double-bridgeo-crane-checkbox')
    var crane_drum_break = document.getElementById('crane-drum-brake-checkbox')
    var clamshell_grab = document.getElementById('clamshell-grab-checkbox')
    var wire_roop_electric_hoist = document.getElementById('wire-rope-electric-hoist-checkbox')
    var crane_wheels = document.getElementById('crane-wheels-checkbox')
    var crane_remot_control = document.getElementById('crane-remot-control-checkbox')
    if( gantry_crane.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px"></td><td>Gantry Crane</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td><div class="counter m-auto"><div class="down">-</div><div class="count"><input type="text" value="01" class="number"></div><div class="up">+</div></div></td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( double_beam_hooked_gantry_crane.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/double-beam-hook-gantry-crane.jpg" alt="double-beam-hook-gantry-crane" width="40px"></td><td>Double Beam Hook Gantry Crane</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( single_beam_crane.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/single-beam-crane.jpg" alt="single-beam-crane" width="40px"></td><td>Single Beam Crane</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( double_bridge_crane.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/double-beam-crane.jpg" alt="double-bridge-crane" width="40px"></td><td>Double Bridge Crane</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( crane_drum_break.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/crane-drum-brake .jpg" alt="crane-drum-break" width="40px"></td><td>Crane Drum Brake</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( clamshell_grab.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/clamshell-grab.jpg" alt="clamshell-grab" width="40px"></td><td>Clamshell Grab</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( wire_roop_electric_hoist.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/wire-rope-electric-hoist.jpg" alt="wire-rope-electric-hoist" width="40px"></td><td>Wire Rope Electric Hoist</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( crane_wheels.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/cran-wheels.jpg" alt="crane-wheels" width="40px"></td><td>Crane Wheels</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
    if( crane_remot_control.checked == true)
    {
      let templet = '<tr><td></td><td><img src="../../../images/remot-control.jpg" alt="remot-control" width="40px"></td><td>Crane Remot Control</td><td><span style="color: red;">0.00$</span></td><td><p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p></td><td>blank</td><td><button class="remove-button" onclick="deleteRow(this)">Remove</button></td></tr>'
      table.innerHTML += templet
      closeModel(model)
    }
  }
//  popup ends
// inquiry_table starts
const plus = document.querySelector('.up')
const down = document.querySelector('.down')
const count = document.querySelector('.number')
let a = count.value

plus.addEventListener("click",()=>{
  a = count.value
  a++
  a = (a<10) ? "0" + a : a 
  count.value = a
})
down.addEventListener("click",()=>{
  a = count.value
  if(count.value > 1){
    a--
    a = (a<10) ? "0" + a : a 
    count.value = a
  }
})

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
// inquiry_table ends
