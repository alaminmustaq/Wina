document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if(y.matches)
      {
        if (window.scrollY > 112) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar_top').classList.add('opacity-class');
          document.getElementById('navbar_top').classList.add('nav-shadow');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } 
        else{
          document.getElementById('navbar_top').classList.remove('fixed-top');
          
          document.getElementById('navbar_top').classList.remove('nav-shadow');
          document.getElementById('navbar_top').classList.remove('opacity-class');
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

  var row_count = 2

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

      var row = table.insertRow(row_count);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = "";
      cell2.innerHTML = '<img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px">'
      cell3.innerHTML = 'Gantry Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)
      gantry_crane.checked = false
    }
    if( double_beam_hooked_gantry_crane.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      var cell6 = row.insertCell(5)
      var cell7 = row.insertCell(6)

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/double-beam-hook-gantry-crane.jpg" alt="double-beam-hook-gantry-crane" width="40px">'
      cell3.innerHTML = 'Double Beam Hook Gantry Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-hook-gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      double_beam_hooked_gantry_crane.checked = false
    }
    if( single_beam_crane.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/single-beam-crane.jpg" alt="single-beam-crane" width="40px">'
      cell3.innerHTML = 'Single Beam Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="single-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      single_beam_crane.checked = false
    }
    if( double_bridge_crane.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/double-beam-crane.jpg" alt="double-bridge-crane" width="40px">'
      cell3.innerHTML = 'Double Bridge Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      double_bridge_crane.checked = false
    }
    if( crane_drum_break.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/crane-drum-brake .jpg" alt="crane-drum-break" width="40px">'
      cell3.innerHTML = 'Crane Drum Brake'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="crane-drum-brake-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      crane_drum_break.checked = false
    }
    if( clamshell_grab.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      var cell6 = row.insertCell(5)
      var cell7 = row.insertCell(6)

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/clamshell-grab.jpg" alt="clamshell-grab" width="40px">'
      cell3.innerHTML = 'Clamshell Grab'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="clamshell-grab-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      clamshell_grab.checked = false
    }
    if( wire_roop_electric_hoist.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      var cell6 = row.insertCell(5)
      var cell7 = row.insertCell(6)

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/wire-rope-electric-hoist.jpg" alt="wire-rope-electric-hoist" width="40px">'
      cell3.innerHTML = 'Wire Rope Electric Hoist'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="wire-rope-electric-hoist-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      wire_roop_electric_hoist.checked = false
    }
    if( crane_wheels.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      var cell6 = row.insertCell(5)
      var cell7 = row.insertCell(6)

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/cran-wheels.jpg" alt="crane-wheels" width="40px">'
      cell3.innerHTML = 'Crane Wheels'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="cran-wheels-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++
    
      closeModel(model)

      crane_wheels.checked = false
    }
    if( crane_remot_control.checked == true)
    {
      var row = table.insertRow(row_count)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cell5 = row.insertCell(4)
      var cell6 = row.insertCell(5)
      var cell7 = row.insertCell(6)

      cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/remot-control.jpg" alt="remot-control" width="40px">'
      cell3.innerHTML = 'Crane Remot Control'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="remot-control-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'

      row_count++

      closeModel(model)

      crane_remot_control.checked = false
    }
  }
//  popup ends

// inquiry_table starts

var count = document.querySelector('.number')
let a = count.value

function plus(btn){
  count = btn.parentNode.querySelector('.number')
  a = count.value
  a++
  a = (a<10) ? "0" + a : a 
  count.value = a
  console.log(count.id)
}
function down(btn){
  count = btn.parentNode.querySelector('.number')
  a = count.value
  if(count.value > 1){
    a--
    a = (a<10) ? "0" + a : a 
    count.value = a
  }
}

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  row_count--
}
// inquiry_table ends

//page translation starts

//page translation ends
