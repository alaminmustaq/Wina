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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = "";
          cell2.innerHTML = '<img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px">'
          cell3.innerHTML = 'Gantry Crane'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
        
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = "";
          cell2.innerHTML = '<img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px">'
          cell3.innerHTML = '门式起重机'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
        }
      }
      else{
          cell1.innerHTML = "";
          cell2.innerHTML = '<img src="../../../images/granty-crane.jpg" alt="gantry-crane" width="40px">'
          cell3.innerHTML = 'Gantry Crane'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
        
      }
  
      
  
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/double-beam-hook-gantry-crane.jpg" alt="double-beam-hook-gantry-crane" width="40px">'
          cell3.innerHTML = 'Double Beam Hook Gantry Crane'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-hook-gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/double-beam-hook-gantry-crane.jpg" alt="double-beam-hook-gantry-crane" width="40px">'
          cell3.innerHTML = '双梁钩门式起重机'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-hook-gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
        }
      }
      else{
        cell1.innerHTML = ""
        cell2.innerHTML = '<img src="../../../images/double-beam-hook-gantry-crane.jpg" alt="double-beam-hook-gantry-crane" width="40px">'
        cell3.innerHTML = 'Double Beam Hook Gantry Crane'
        cell4.innerHTML = '<span style="color: red;">0.00$</span>'
        cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
        cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-hook-gantry-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
        cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/single-beam-crane.jpg" alt="single-beam-crane" width="40px">'
      cell3.innerHTML = 'Single Beam Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="single-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/single-beam-crane.jpg" alt="single-beam-crane" width="40px">'
          cell3.innerHTML = '单梁起重机'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="single-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
      
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/single-beam-crane.jpg" alt="single-beam-crane" width="40px">'
      cell3.innerHTML = 'Single Beam Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="single-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/double-beam-crane.jpg" alt="double-bridge-crane" width="40px">'
      cell3.innerHTML = 'Double Bridge Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/double-beam-crane.jpg" alt="double-bridge-crane" width="40px">'
          cell3.innerHTML = '双桥起重机'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
      
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/double-beam-crane.jpg" alt="double-bridge-crane" width="40px">'
      cell3.innerHTML = 'Double Bridge Crane'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="double-beam-crane-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/crane-drum-brake .jpg" alt="crane-drum-break" width="40px">'
      cell3.innerHTML = 'Crane Drum Brake'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="crane-drum-brake-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/crane-drum-brake .jpg" alt="crane-drum-break" width="40px">'
          cell3.innerHTML = '起重机鼓式制动器'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="crane-drum-brake-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
      
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/crane-drum-brake .jpg" alt="crane-drum-break" width="40px">'
      cell3.innerHTML = 'Crane Drum Brake'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="crane-drum-brake-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/clamshell-grab.jpg" alt="clamshell-grab" width="40px">'
      cell3.innerHTML = 'Clamshell Grab'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="clamshell-grab-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
          cell2.innerHTML = '<img src="../../../images/clamshell-grab.jpg" alt="clamshell-grab" width="40px">'
          cell3.innerHTML = '翻盖式抓斗'
          cell4.innerHTML = '<span style="color: red;">0.00$</span>'
          cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
          cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="clamshell-grab-count"></div><div class="up" onclick="plus(this)">+</div></div>'
          cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
      
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/clamshell-grab.jpg" alt="clamshell-grab" width="40px">'
      cell3.innerHTML = 'Clamshell Grab'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="clamshell-grab-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/wire-rope-electric-hoist.jpg" alt="wire-rope-electric-hoist" width="40px">'
      cell3.innerHTML = 'Wire Rope Electric Hoist'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="wire-rope-electric-hoist-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/wire-rope-electric-hoist.jpg" alt="wire-rope-electric-hoist" width="40px">'
      cell3.innerHTML = '钢丝绳电动葫芦'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="wire-rope-electric-hoist-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
  
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/wire-rope-electric-hoist.jpg" alt="wire-rope-electric-hoist" width="40px">'
      cell3.innerHTML = 'Wire Rope Electric Hoist'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="wire-rope-electric-hoist-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/cran-wheels.jpg" alt="crane-wheels" width="40px">'
      cell3.innerHTML = 'Crane Wheels'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="cran-wheels-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/cran-wheels.jpg" alt="crane-wheels" width="40px">'
      cell3.innerHTML = '起重机车轮'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="cran-wheels-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
  
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/cran-wheels.jpg" alt="crane-wheels" width="40px">'
      cell3.innerHTML = 'Crane Wheels'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="cran-wheels-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/remot-control.jpg" alt="remot-control" width="40px">'
      cell3.innerHTML = 'Crane Remote Control'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="remot-control-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
        }
        else if(window.location.hash === "#ch"){
          cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/remot-control.jpg" alt="remot-control" width="40px">'
      cell3.innerHTML = '起重机遥控器'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="remot-control-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">消除</button>'
  
        }
      }
      else{
        cell1.innerHTML = ""
      cell2.innerHTML = '<img src="../../../images/remot-control.jpg" alt="remot-control" width="40px">'
      cell3.innerHTML = 'Crane Remote Control'
      cell4.innerHTML = '<span style="color: red;">0.00$</span>'
      cell5.innerHTML = '<p class="border m-0" style="color: rgb(202, 200, 200);">Please en</p>'
      cell6.innerHTML = '<div class="counter m-auto"><div class="down" onclick="down(this)">-</div><div class="count"><input type="text" value="01" class="number" id="remot-control-count"></div><div class="up" onclick="plus(this)">+</div></div>'
      cell7.innerHTML = '<button class="remove-button" onclick="deleteRow(this)">Remove</button>'
  
      }
  
      
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
  // translation starts
  
  var datareload = document.querySelectorAll("[data-relaod]")
  
  function chinese(){
      translate_chinese()
    }
    function english(){
      translate_english()
    }
    
    function translate_chinese(){
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          replace_hash("#eng","")
        }
        else if(window.location.hash === "#ch"){
          replace_hash("#ch","")
        }
      }
      var home = document.querySelector(".home")
      home.textContent = "家"
      home.href = home.href + "#ch"
      
      var about_us = document.querySelector(".about-us")
      about_us.textContent = "关于我们"
      about_us.href = about_us.href + "#ch"
  
      var products = document.querySelector(".products")
      products.textContent = "产品"
      products.href = products.href + "#ch"
  
      var machinery = document.querySelector(".machine")
      machinery.textContent = "机械"
      machinery.href = machinery.href + "#ch"
  
      var project = document.querySelector(".project")
      project.textContent = "工程案例"
      project.setAttribute("href", "#")
  
      var contacts = document.querySelector(".contacts")
      contacts.textContent = "联系人"
      contacts.href = contacts.href + "#ch"
  
      var chatagory_gantry_crane = document.querySelector(".chatagory_gantry_crane")
      chatagory_gantry_crane.textContent = "门式起重机"
      chatagory_gantry_crane.href = chatagory_gantry_crane.href + "#ch"
  
      var chatagory_bridge_crane = document.querySelector(".chatagory_bridge_crane")
      chatagory_bridge_crane.textContent = "桥式起重机"
      chatagory_bridge_crane.href = chatagory_bridge_crane.href + "#ch"
  
      var chatagory_electric_hoist = document.querySelector(".chatagory_electric_hoist")
      chatagory_electric_hoist.textContent = "电动葫芦"
      chatagory_electric_hoist.href = chatagory_electric_hoist.href + "#ch"
  
      var search = document.querySelector(".search")
      search.placeholder = "搜索"
  
      var search_dropdown = document.querySelector(".search-dropdown")
      search_dropdown.placeholder = "搜索"
  
      var search_button = document.querySelector(".search-button")
      search_button.textContent = "搜索"
  
      var search_button_dropdown = document.querySelector(".search-button-dropdown")
      search_button_dropdown.textContent = "搜索"
  
      var footer_product = document.querySelector(".footer-product")
      footer_product.textContent = "产品"
  
      var footer_gantry_crane = document.querySelector(".footer_gantry_crane")
      footer_gantry_crane.textContent = "门式起重机"
  
      var footer_crane_drum_brake = document.querySelector(".footer_crane_drum_brake")
      footer_crane_drum_brake.textContent = "起重机鼓式制动器"
  
      var footer_single_beam_crane = document.querySelector(".footer_single_beam_crane")
      footer_single_beam_crane.textContent = "单梁起重机"
  
      var footer_double_beam_crane = document.querySelector(".footer_double_beam_crane")
      footer_double_beam_crane.textContent = "双梁起重机"
  
      var footer_double_beam_hook_gantry_crane = document.querySelector(".footer_double_beam_hook_gantry_crane")
      footer_double_beam_hook_gantry_crane.textContent = "双梁钩门式起重机"
  
      var footer_clamshell_grab = document.querySelector(".footer_clamshell_grab")
      footer_clamshell_grab.textContent = "翻盖式抓斗"
  
      var footer_wire_rope_electric_hoist = document.querySelector(".footer_wire_rope_electric_hoist")
      footer_wire_rope_electric_hoist.textContent = "钢丝绳电动葫芦"
      
      var footer_crane_wheels = document.querySelector(".footer_crane_wheels")
      footer_crane_wheels.textContent = "起重机车轮"
  
      var footer_remot_control = document.querySelector(".footer_remot_control")
      footer_remot_control.textContent = "起重机遥控器"
  
      var footer_contact_us = document.querySelector(".footer_contact_us")
      footer_contact_us.textContent = "联系我们"
  
      var footer_email = document.querySelector(".footer_email")
      footer_email.textContent = "邮箱：canglong@clsteelstructure.com"
  
      var footer_phone = document.querySelector(".footer_phone")
      footer_phone.textContent = "电话：+86-15981850388"
  
      var footer_address = document.querySelector(".footer_address")
      footer_address.textContent = "地址：中国河南省郑州市新村镇孙庄村107国道西环路南3号"
  
      var footer_follow_us = document.querySelector(".footer_follow_us")
      footer_follow_us.textContent = "跟着我们"
  
      var footer_email_address = document.querySelector(".footer_email_address")
      footer_email_address.textContent = "您的电子邮件地址"
  
      var footer_learn_more = document.querySelector(".footer_learn_more")
      footer_learn_more.textContent = "了解更多关于我们的产品"
  
      var footer_email_placeholder = document.querySelector(".footer_email_placeholder")
      footer_email_placeholder.placeholder = "电子邮件"
  
      var footer_email_placeholder = document.querySelector(".footer_email_placeholder")
      footer_email_placeholder.placeholder = "电子邮件"
  
      var footer_messages = document.querySelector(".footer_messages")
      footer_messages.placeholder = "信息"
  
      var footer_button = document.querySelector(".footer-button")
      footer_button.textContent = "提交"
  
      var title = document.querySelector(".title")
      title.textContent = "温娜配件有限公司"
  
      var homepage_text = document.querySelector(".homepage_text")
      homepage_text.textContent = "主页"
  
      var homepage_link = document.querySelector(".homepage_link")
      homepage_link.textContent = "主页"
      homepage_link.href = homepage_link.href + "#ch"
  
      var copyright_text = document.querySelector(".copyright_text")
      copyright_text.textContent = "版权"
  
      var rest_of_copyright = document.querySelector(".rest_of_copyright")
      rest_of_copyright.textContent = "2022 威娜饰品有限公司好的，保留。"
  
      var enquiry_link = document.querySelector(".enquiry_link")
      enquiry_link.textContent = "询问"
  
      var enquiry_text = document.querySelector(".enquiry_text")
      enquiry_text.textContent = "询问"
      
      var product_info_title = document.querySelector(".product_info_title")
      product_info_title.textContent = "产品信息"
  
      var add_product = document.querySelector(".add_product")
      add_product.textContent = "+添加产品"
      
      var sl = document.querySelector(".sl")
      sl.textContent = "产品序列号"
  
      var thumbnail = document.querySelector(".thumbnail")
      thumbnail.textContent = "缩略图"
  
      var product_name = document.querySelector(".product_name")
      product_name.textContent = "产品名称"
  
      var price = document.querySelector(".price")
      price.textContent = "零售价"
  
      var expected_unit = document.querySelector(".expected_unit")
      expected_unit.textContent = "预期单位"
  
      var quantity = document.querySelector(".quantity")
      quantity.textContent = "订单数量"
  
      var operation = document.querySelector(".operation")
      operation.textContent = "手术"
  
      var crane_name = document.querySelector(".crane_name")
      crane_name.textContent = "起重机车轮"
  
      var remove_button = document.querySelector(".remove-button")
      remove_button.textContent = "消除"
      
      var inquiry_explanation = document.querySelector(".inquiry_explanation")
      inquiry_explanation.textContent = "询价说明"
  
      var contact_info = document.querySelector(".contact_info")
      contact_info.textContent = "联系信息"
      
      var name = document.querySelector(".name")
      name.textContent = "姓名"
  
      var email = document.querySelector(".email")
      email.textContent = "电子邮件"
  
      var phone = document.querySelector(".phone")
      phone.textContent = "电话"
  
      var inquiry_explanation_placeholder = document.querySelector(".inquiry_explanation_placeholder")
      inquiry_explanation_placeholder.placeholder = "请输入您的询问的解释"
  
      var name_placeholder = document.querySelector(".name_placeholder")
      name_placeholder.placeholder = "请输入你的名字"
  
      var email_placeholder = document.querySelector(".email_placeholder")
      email_placeholder.placeholder = "请输入您的电子邮件 ID"
  
      var phone_placeholder = document.querySelector(".phone_placeholder")
      phone_placeholder.placeholder = "请输入您的电话号码"
  
      var submit_btn = document.querySelector(".submit_btn")
      submit_btn.textContent = "提交"
      
      var popup_select = document.querySelector(".popup_select")
      popup_select.textContent = "选择"
  
      var popup_thumbnail = document.querySelector(".popup_thumbnail")
      popup_thumbnail.textContent = "缩略图"
  
      var popup_sl = document.querySelector(".popup_sl")
      popup_sl.textContent = "产品系列"
  
      var popup_product_name = document.querySelector(".popup_product_name")
      popup_product_name.textContent = "产品名称"
  
      var popup_price = document.querySelector(".popup_price")
      popup_price.textContent = "零售价"
      
      var popup_gantry_crane = document.querySelector(".popup_gantry_crane")
      popup_gantry_crane.textContent = "门式起重机"
  
      var popup_double_beam_hook_gantry_crane = document.querySelector(".popup_double_beam_hook_gantry_crane")
      popup_double_beam_hook_gantry_crane.textContent = "双梁钩龙门起重机"
  
      var popup_single_beam_crane = document.querySelector(".popup_single_beam_crane")
      popup_single_beam_crane.textContent = "单梁起重机"
  
      var popup_double_bridge_crane = document.querySelector(".popup_double_bridge_crane")
      popup_double_bridge_crane.textContent = "双桥起重机"
  
      var popup_crane_drum_brake = document.querySelector(".popup_crane_drum_brake")
      popup_crane_drum_brake.textContent = "起重机鼓式制动器"
  
      var popup_clamshell_grab = document.querySelector(".popup_clamshell_grab")
      popup_clamshell_grab.textContent = "翻盖式抓斗"
  
      var popup_wire_rope_elec_hoist = document.querySelector(".popup_wire_rope_elec_hoist")
      popup_wire_rope_elec_hoist.textContent = "钢丝绳电动葫芦"
  
      var popup_crane_wheels = document.querySelector(".popup_crane_wheels")
      popup_crane_wheels.textContent = "起重机车轮"
  
      var popup_remot = document.querySelector(".popup_remot")
      popup_remot.textContent = "起重机遥控器"
      
      var popup_cancel = document.querySelector(".popup_cancel")
      popup_cancel.textContent = "取消"
  
      var popup_confirm = document.querySelector(".popup_confirm")
      popup_confirm.textContent = "确认"
  
      var popup_add_product = document.querySelector(".popup_add_product")
      popup_add_product.textContent = "添加产品"
    }
  
    function translate_english(){
      if(window.location.hash){
        if(window.location.hash === "#eng"){
          replace_hash("#eng","")
        }
        else if(window.location.hash === "#ch"){
          replace_hash("#ch","")
        }
      }
      var home = document.querySelector(".home")
      home.textContent = "Home"
      home.href = home.href + "#eng"
  
      var about_us = document.querySelector(".about-us")
      about_us.textContent = "About Us"
      about_us.href = about_us.href + "#eng"
  
      var products = document.querySelector(".products")
      products.textContent = "Products"
      products.href = products.href + "#eng"
  
      var machinery = document.querySelector(".machine")
      machinery.textContent = "machinery"
      machinery.href = machinery.href + "#eng"
  
      var project = document.querySelector(".project")
      project.textContent = "Project Case"
      project.setAttribute("href", "#")
  
      var contacts = document.querySelector(".contacts")
      contacts.textContent = "Contacts"
      contacts.href = contacts.href + "#eng"
      
      var chatagory_gantry_crane = document.querySelector(".chatagory_gantry_crane")
      chatagory_gantry_crane.textContent = "Gantry Crane"
      chatagory_gantry_crane.href = chatagory_gantry_crane.href + "#eng"
  
      var chatagory_bridge_crane = document.querySelector(".chatagory_bridge_crane")
      chatagory_bridge_crane.textContent = "Bridge Crane"
      chatagory_bridge_crane.href = chatagory_bridge_crane.href + "#eng"
  
      var chatagory_electric_hoist = document.querySelector(".chatagory_electric_hoist")
      chatagory_electric_hoist.textContent = "Electric Hoist"
      chatagory_electric_hoist.href = chatagory_electric_hoist.href + "#eng"
  
      var search = document.querySelector(".search")
      search.placeholder = "Search"
  
      var search_dropdown = document.querySelector(".search-dropdown")
      search_dropdown.placeholder = "Search"
  
      var search_button = document.querySelector(".search-button")
      search_button.textContent = "Search"
  
      var search_button_dropdown = document.querySelector(".search-button-dropdown")
      search_button_dropdown.textContent = "Search"
  
      var footer_product = document.querySelector(".footer-product")
      footer_product.textContent = "PRODUCT"
  
      var footer_gantry_crane = document.querySelector(".footer_gantry_crane")
      footer_gantry_crane.textContent = "Gantry Crane"
  
      var footer_crane_drum_brake = document.querySelector(".footer_crane_drum_brake")
      footer_crane_drum_brake.textContent = "Crane Drum Brake"
  
      var footer_single_beam_crane = document.querySelector(".footer_single_beam_crane")
      footer_single_beam_crane.textContent = "Singel Beam Crane"
  
      var footer_double_beam_crane = document.querySelector(".footer_double_beam_crane")
      footer_double_beam_crane.textContent = "Double Beam Crane"
  
      var footer_double_beam_hook_gantry_crane = document.querySelector(".footer_double_beam_hook_gantry_crane")
      footer_double_beam_hook_gantry_crane.textContent = "Double Beam Hook Gantry Crane"
  
      var footer_clamshell_grab = document.querySelector(".footer_clamshell_grab")
      footer_clamshell_grab.textContent = "Clamshell Grab"
  
      var footer_wire_rope_electric_hoist = document.querySelector(".footer_wire_rope_electric_hoist")
      footer_wire_rope_electric_hoist.textContent = "Wire Rope Electric Hoist"
      
      var footer_crane_wheels = document.querySelector(".footer_crane_wheels")
      footer_crane_wheels.textContent = "Crane Wheels"
  
      var footer_remot_control = document.querySelector(".footer_remot_control")
      footer_remot_control.textContent = "Crane Remot Control"
  
      var footer_contact_us = document.querySelector(".footer_contact_us")
      footer_contact_us.textContent = "Contact Us"
  
      var footer_email = document.querySelector(".footer_email")
      footer_email.textContent = "Email：canglong@clsteelstructure.com"
  
      var footer_phone = document.querySelector(".footer_phone")
      footer_phone.textContent = "Phone：+86-15981850388"
  
      var footer_address = document.querySelector(".footer_address")
      footer_address.textContent = "Address: No. 3 South Side of Xihuanxiang Road, 107 National Road, Sunzhuang Village, Xincun Town, Zhengzhou City, Henan Province China"
  
      var footer_follow_us = document.querySelector(".footer_follow_us")
      footer_follow_us.textContent = "Follow Us"
  
      var footer_email_address = document.querySelector(".footer_email_address")
      footer_email_address.textContent = "YOUR EMAIL ADDRESS"
  
      var footer_learn_more = document.querySelector(".footer_learn_more")
      footer_learn_more.textContent = "Learn more about our products"
  
      var footer_email_placeholder = document.querySelector(".footer_email_placeholder")
      footer_email_placeholder.placeholder = "Email"
  
      var footer_messages = document.querySelector(".footer_messages")
      footer_messages.placeholder = "Message"
  
      var footer_button = document.querySelector(".footer-button")
      footer_button.textContent = "Submit"
  
      var title = document.querySelector(".title")
      title.textContent = "WINNA ACCESSORIES CO..LTD."
  
      var homepage_text = document.querySelector(".homepage_text")
      homepage_text.textContent = "Home Page"
  
      var homepage_link = document.querySelector(".homepage_link")
      homepage_link.textContent = "Homepage"
      homepage_link.href = homepage_link.href + "#eng"
  
      var copyright_text = document.querySelector(".copyright_text")
      copyright_text.textContent = "Copyright"
  
      var rest_of_copyright = document.querySelector(".rest_of_copyright")
      rest_of_copyright.textContent = "2022 Wina Accessories Co.. Ltd. All Alright Reserved."
  
      var enquiry_link = document.querySelector(".enquiry_link")
      enquiry_link.textContent = "Inquiry"
  
      var enquiry_text = document.querySelector(".enquiry_text")
      enquiry_text.textContent = "Inquiry"
  
      var product_info_title = document.querySelector(".product_info_title")
      product_info_title.textContent = "Product Information"
  
      var add_product = document.querySelector(".add_product")
      add_product.textContent = "+Add Product"
  
      var sl = document.querySelector(".sl")
      sl.textContent = "Product serial number"
  
      var thumbnail = document.querySelector(".thumbnail")
      thumbnail.textContent = "Thumbnail"
  
      var product_name = document.querySelector(".product_name")
      product_name.textContent = "Name of product"
  
      var price = document.querySelector(".price")
      price.textContent = "Retail price"
  
      var expected_unit = document.querySelector(".expected_unit")
      expected_unit.textContent = "Expected unit"
  
      var quantity = document.querySelector(".quantity")
      quantity.textContent = "Order quantity"
  
      var operation = document.querySelector(".operation")
      operation.textContent = "Operation"
  
      var crane_name = document.querySelector(".crane_name")
      crane_name.textContent = "Crane Wheels"
  
      var remove_button = document.querySelector(".remove-button")
      remove_button.textContent = "Remove"
  
      var inquiry_explanation = document.querySelector(".inquiry_explanation")
      inquiry_explanation.textContent = "Inquiry Explanation"
  
      var contact_info = document.querySelector(".contact_info")
      contact_info.textContent = "Contact Information"
  
      var name = document.querySelector(".name")
      name.textContent = "Name"
  
      var email = document.querySelector(".email")
      email.textContent = "Email"
  
      var phone = document.querySelector(".phone")
      phone.textContent = "Phone"
  
      var inquiry_explanation_placeholder = document.querySelector(".inquiry_explanation_placeholder")
      inquiry_explanation_placeholder.placeholder = "Please Enter An Explanation For Your Inquiry"
  
      var name_placeholder = document.querySelector(".name_placeholder")
      name_placeholder.placeholder = "Please Enter Your Name"
  
      var email_placeholder = document.querySelector(".email_placeholder")
      email_placeholder.placeholder = "Please Enter Your Email Id"
  
      var phone_placeholder = document.querySelector(".phone_placeholder")
      phone_placeholder.placeholder = "Please Enter Your Phone Number"
  
      var submit_btn = document.querySelector(".submit_btn")
      submit_btn.textContent = "Submit"
  
      var popup_select = document.querySelector(".popup_select")
      popup_select.textContent = "Select"
  
      var popup_thumbnail = document.querySelector(".popup_thumbnail")
      popup_thumbnail.textContent = "Thumbnail"
  
      var popup_sl = document.querySelector(".popup_sl")
      popup_sl.textContent = "Product serial"
  
      var popup_product_name = document.querySelector(".popup_product_name")
      popup_product_name.textContent = "Name of product"
  
      var popup_price = document.querySelector(".popup_price")
      popup_price.textContent = "Retail price"
  
      var popup_gantry_crane = document.querySelector(".popup_gantry_crane")
      popup_gantry_crane.textContent = "Gantry Crane"
  
      var popup_double_beam_hook_gantry_crane = document.querySelector(".popup_double_beam_hook_gantry_crane")
      popup_double_beam_hook_gantry_crane.textContent = "DOUBLE BEAM HOOK GANTRY CRANE"
  
      var popup_single_beam_crane = document.querySelector(".popup_single_beam_crane")
      popup_single_beam_crane.textContent = "SINGLE BEAM CRANE"
  
      var popup_double_bridge_crane = document.querySelector(".popup_double_bridge_crane")
      popup_double_bridge_crane.textContent = "DOUBLE BRIDGE CRANE"
  
      var popup_crane_drum_brake = document.querySelector(".popup_crane_drum_brake")
      popup_crane_drum_brake.textContent = "CRANE DRUM BRAKE"
  
      var popup_clamshell_grab = document.querySelector(".popup_clamshell_grab")
      popup_clamshell_grab.textContent = "CLAMSHELL GRAB"
  
      var popup_wire_rope_elec_hoist = document.querySelector(".popup_wire_rope_elec_hoist")
      popup_wire_rope_elec_hoist.textContent = "WIRE ROPE ELECTRIC HOIST"
  
      var popup_crane_wheels = document.querySelector(".popup_crane_wheels")
      popup_crane_wheels.textContent = "CRANE WHEELS"
  
      var popup_remot = document.querySelector(".popup_remot")
      popup_remot.textContent = "CRANE REMOTE CONTROL"
  
      var popup_cancel = document.querySelector(".popup_cancel")
      popup_cancel.textContent = "Cancel"
  
      var popup_confirm = document.querySelector(".popup_confirm")
      popup_confirm.textContent = "Confirm"
      
      var popup_add_product = document.querySelector(".popup_add_product")
      popup_add_product.textContent = "Add Product"
    }
  
  
    function replace_hash(before,after){
      var home = document.querySelector(".home")
      home.href = home.href.replace(before,after)
  
      var about_us = document.querySelector(".about-us")
      about_us.href = about_us.href.replace(before,after)
  
      var products = document.querySelector(".products")
      products.href = products.href.replace(before,after)
  
      var machinery = document.querySelector(".machine")
      machinery.href = machinery.href.replace(before,after)
  
      var project = document.querySelector(".project")
      project.setAttribute("href", "#")
  
      var contacts = document.querySelector(".contacts")
      contacts.href = contacts.href.replace(before,after)
  
      var chatagory_gantry_crane = document.querySelector(".chatagory_gantry_crane")
      chatagory_gantry_crane.href = chatagory_gantry_crane.href.replace(before,after)
  
      var chatagory_bridge_crane = document.querySelector(".chatagory_bridge_crane")
      chatagory_bridge_crane.href = chatagory_bridge_crane.href.replace(before,after)
  
      var chatagory_electric_hoist = document.querySelector(".chatagory_electric_hoist")
      chatagory_electric_hoist.href = chatagory_electric_hoist.href.replace(before,after)
  
      var homepage_link = document.querySelector(".homepage_link")
      homepage_link.href = homepage_link.href.replace(before,after)
  
    }
    if(window.location.hash){
      if(window.location.hash=="#ch"){
        translate_chinese()
      }
      else if(window.location.hash=="#eng"){
        translate_english()
      }
    }
  
    
    // translation ends
  
  