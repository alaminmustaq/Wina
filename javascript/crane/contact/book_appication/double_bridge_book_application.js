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
      home.textContent = "???"
      home.href = home.href + "#ch"
      
      var about_us = document.querySelector(".about-us")
      about_us.textContent = "????????????"
      about_us.href = about_us.href + "#ch"
  
      var products = document.querySelector(".products")
      products.textContent = "??????"
      products.href = products.href + "#ch"
  
      var machinery = document.querySelector(".machine")
      machinery.textContent = "??????"
      machinery.href = machinery.href + "#ch"
  
      var project = document.querySelector(".project")
      project.textContent = "????????????"
      project.setAttribute("href", "#")
  
      var contacts = document.querySelector(".contacts")
      contacts.textContent = "?????????"
      contacts.href = contacts.href + "#ch"
  
      var chatagory_gantry_crane = document.querySelector(".chatagory_gantry_crane")
      chatagory_gantry_crane.textContent = "???????????????"
      chatagory_gantry_crane.href = chatagory_gantry_crane.href + "#ch"
  
      var chatagory_bridge_crane = document.querySelector(".chatagory_bridge_crane")
      chatagory_bridge_crane.textContent = "???????????????"
      chatagory_bridge_crane.href = chatagory_bridge_crane.href + "#ch"
  
      var chatagory_electric_hoist = document.querySelector(".chatagory_electric_hoist")
      chatagory_electric_hoist.textContent = "????????????"
      chatagory_electric_hoist.href = chatagory_electric_hoist.href + "#ch"
  
      var search = document.querySelector(".search")
      search.placeholder = "??????"
  
      var search_dropdown = document.querySelector(".search-dropdown")
      search_dropdown.placeholder = "??????"
  
      var search_button = document.querySelector(".search-button")
      search_button.textContent = "??????"
  
      var search_button_dropdown = document.querySelector(".search-button-dropdown")
      search_button_dropdown.textContent = "??????"
  
      var footer_product = document.querySelector(".footer-product")
      footer_product.textContent = "??????"
  
      var footer_gantry_crane = document.querySelector(".footer_gantry_crane")
      footer_gantry_crane.textContent = "???????????????"
  
      var footer_crane_drum_brake = document.querySelector(".footer_crane_drum_brake")
      footer_crane_drum_brake.textContent = "????????????????????????"
  
      var footer_single_beam_crane = document.querySelector(".footer_single_beam_crane")
      footer_single_beam_crane.textContent = "???????????????"
  
      var footer_double_beam_crane = document.querySelector(".footer_double_beam_crane")
      footer_double_beam_crane.textContent = "???????????????"
  
      var footer_double_beam_hook_gantry_crane = document.querySelector(".footer_double_beam_hook_gantry_crane")
      footer_double_beam_hook_gantry_crane.textContent = "????????????????????????"
  
      var footer_clamshell_grab = document.querySelector(".footer_clamshell_grab")
      footer_clamshell_grab.textContent = "???????????????"
  
      var footer_wire_rope_electric_hoist = document.querySelector(".footer_wire_rope_electric_hoist")
      footer_wire_rope_electric_hoist.textContent = "?????????????????????"
      
      var footer_crane_wheels = document.querySelector(".footer_crane_wheels")
      footer_crane_wheels.textContent = "???????????????"
  
      var footer_remot_control = document.querySelector(".footer_remot_control")
      footer_remot_control.textContent = "??????????????????"
  
      var footer_contact_us = document.querySelector(".footer_contact_us")
      footer_contact_us.textContent = "????????????"
  
      var footer_email = document.querySelector(".footer_email")
      footer_email.textContent = "?????????canglong@clsteelstructure.com"
  
      var footer_phone = document.querySelector(".footer_phone")
      footer_phone.textContent = "?????????+86-15981850388"
  
      var footer_address = document.querySelector(".footer_address")
      footer_address.textContent = "???????????????????????????????????????????????????107??????????????????3???"
  
      var footer_follow_us = document.querySelector(".footer_follow_us")
      footer_follow_us.textContent = "????????????"
  
      var footer_email_address = document.querySelector(".footer_email_address")
      footer_email_address.textContent = "????????????????????????"
  
      var footer_learn_more = document.querySelector(".footer_learn_more")
      footer_learn_more.textContent = "?????????????????????????????????"
  
      var footer_email_placeholder = document.querySelector(".footer_email_placeholder")
      footer_email_placeholder.placeholder = "????????????"
  
      var footer_email_placeholder = document.querySelector(".footer_email_placeholder")
      footer_email_placeholder.placeholder = "????????????"
  
      var footer_messages = document.querySelector(".footer_messages")
      footer_messages.placeholder = "??????"
  
      var footer_button = document.querySelector(".footer-button")
      footer_button.textContent = "??????"
  
      var title = document.querySelector(".title")
      title.textContent = "????????????????????????"
  
      var homepage_text = document.querySelector(".homepage_text")
      homepage_text.textContent = "??????"
  
      var homepage_link = document.querySelector(".homepage_link")
      homepage_link.textContent = "??????"
      homepage_link.href = homepage_link.href + "#ch"
  
      var copyright_text = document.querySelector(".copyright_text")
      copyright_text.textContent = "??????"
  
      var rest_of_copyright = document.querySelector(".rest_of_copyright")
      rest_of_copyright.textContent = "2022 ??????????????????????????????????????????"

      var book_application_link = document.querySelector(".book_application_link")
      book_application_link.textContent = "????????????"
  
      var book_application_text = document.querySelector(".book_application_text")
      book_application_text.textContent = "????????????"
      
      var product_info_title = document.querySelector(".product_info_title")
      product_info_title.textContent = "????????????"
      
      var sl = document.querySelector(".sl")
      sl.textContent = "???????????????"
  
      var thumbnail = document.querySelector(".thumbnail")
      thumbnail.textContent = "?????????"
  
      var product_name = document.querySelector(".product_name")
      product_name.textContent = "????????????"
  
      var crane_name = document.querySelector(".crane_name")
      crane_name.textContent = "???????????????"
        
      var appointment_time_text = document.querySelector(".appointment_time_text")
      appointment_time_text.textContent = "????????????"
  
      var appointment_time_placeholder = document.querySelector(".appointment_time_placeholder")
      appointment_time_placeholder.placeholder = "????????????"
  
      var appointment_location = document.querySelector(".appointment_location")
      appointment_location.textContent = "????????????"
  
      var dhaka = document.querySelector(".dhaka")
      dhaka.textContent = "??????"
  
      var savar = document.querySelector(".savar")
      savar.textContent = "?????????"
  
      var appointment_explanation_text = document.querySelector(".appointment_explanation_text")
      appointment_explanation_text.textContent = "????????????"
  
      var appointment_explanation_placeholder = document.querySelector(".appointment_explanation_placeholder")
      appointment_explanation_placeholder.placeholder = "???????????????????????????"

      var contact_info = document.querySelector(".contact_info")
      contact_info.textContent = "????????????"
      
      var name = document.querySelector(".name")
      name.textContent = "??????"
  
      var email = document.querySelector(".email")
      email.textContent = "????????????"
  
      var phone = document.querySelector(".phone")
      phone.textContent = "??????"
  
      var name_placeholder = document.querySelector(".name_placeholder")
      name_placeholder.placeholder = "?????????????????????"
  
      var email_placeholder = document.querySelector(".email_placeholder")
      email_placeholder.placeholder = "??????????????????????????? ID"
  
      var phone_placeholder = document.querySelector(".phone_placeholder")
      phone_placeholder.placeholder = "???????????????????????????"
  
      var submit_btn = document.querySelector(".submit_btn")
      submit_btn.textContent = "??????"
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
      footer_email.textContent = "Email???canglong@clsteelstructure.com"
  
      var footer_phone = document.querySelector(".footer_phone")
      footer_phone.textContent = "Phone???+86-15981850388"
  
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
  
      var book_application_link = document.querySelector(".book_application_link")
      book_application_link.textContent = "Book Application"
  
      var book_application_text = document.querySelector(".book_application_text")
      book_application_text.textContent = "Book Application"
  
      var product_info_title = document.querySelector(".product_info_title")
      product_info_title.textContent = "Product Information"
  
      var sl = document.querySelector(".sl")
      sl.textContent = "Product serial number"
  
      var thumbnail = document.querySelector(".thumbnail")
      thumbnail.textContent = "Thumbnail"
  
      var product_name = document.querySelector(".product_name")
      product_name.textContent = "Name of product"
  
      var crane_name = document.querySelector(".crane_name")
      crane_name.textContent = "Double Bridge Crane"
  
      var contact_info = document.querySelector(".contact_info")
      contact_info.textContent = "Contact Information"
  
      var appointment_time_text = document.querySelector(".appointment_time_text")
      appointment_time_text.textContent = "Appointment Time"
  
      var appointment_time_placeholder = document.querySelector(".appointment_time_placeholder")
      appointment_time_placeholder.placeholder = "Appointment Time"
  
      var appointment_location = document.querySelector(".appointment_location")
      appointment_location.textContent = "Appointment Location"
  
      var dhaka = document.querySelector(".dhaka")
      dhaka.textContent = "Dhaka"
  
      var savar = document.querySelector(".savar")
      savar.textContent = "Savar"
  
      var appointment_explanation_text = document.querySelector(".appointment_explanation_text")
      appointment_explanation_text.textContent = "Appointment Explanation"
  
      var appointment_explanation_placeholder = document.querySelector(".appointment_explanation_placeholder")
      appointment_explanation_placeholder.placeholder = "Please Enter An Explanation For This Appointment"
  
        
      var name = document.querySelector(".name")
      name.textContent = "Name"

      var email = document.querySelector(".email")
      email.textContent = "Email"
  
      var phone = document.querySelector(".phone")
      phone.textContent = "Phone Number"
  
      var name_placeholder = document.querySelector(".name_placeholder")
      name_placeholder.placeholder = "Please Enter Your Name"
  
      var email_placeholder = document.querySelector(".email_placeholder")
      email_placeholder.placeholder = "Please Enter Your Email Id"
  
      var phone_placeholder = document.querySelector(".phone_placeholder")
      phone_placeholder.placeholder = "Please Enter Your Phone Number"
  
      var submit_btn = document.querySelector(".submit_btn")
      submit_btn.textContent = "Submit"
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