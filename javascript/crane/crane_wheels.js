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

    var machine_link = document.querySelector(".machine_link")
    machine_link.textContent = "机械"
    machine_link.href = machine_link.href + "#ch"

    var main_title = document.querySelector(".main_title")
    main_title.textContent = "起重机车轮"

    var def = document.querySelector(".def1")
    def.textContent = "起重机车轮包括双轮辋、单轮辋和无轮辋车轮。一般来说，起重机采用双轮辋，小车采用单轮辋。轮子一般采用ZG430-640铸钢。胎面表面硬度为HB300-350，淬火深度不小于20mm。"

    var def = document.querySelector(".def2")
    def.textContent = "起重机车轮主要由车轮、车轴、轴承、轴承座和盖板组成。"

    var spec = document.querySelector(".spec")
    spec.textContent = "特征："

    var spec_1 = document.querySelector(".spec_1")
    spec_1.textContent = "韧性很好。"

    var spec_2 = document.querySelector(".spec_2")
    spec_2.textContent = "硬度高。"

    var spec_3 = document.querySelector(".spec_3")
    spec_3.textContent = "耐磨性。"

    var inquiry_btn = document.querySelector(".inquiry_btn")
    inquiry_btn.textContent = "询问"
    inquiry_btn.href = inquiry_btn.href + "#ch"

    var book_aplication_btn = document.querySelector(".book_aplication_btn")
    book_aplication_btn.textContent = "图书申请"
    book_aplication_btn.href = book_aplication_btn.href + "#ch"
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

    var machine_link = document.querySelector(".machine_link")
    machine_link.textContent = "Machinery"
    machine_link.href = machine_link.href + "#eng"

    var main_title = document.querySelector(".main_title")
    main_title.textContent = "Crane Wheels"

    var def = document.querySelector(".def1")
    def.textContent = "Crane wheels include the double rim, single rim, and rimless wheel. Generally speaking, the crane adopts double rim wheels, and the trolley adopts single rim wheels. The wheels are generally made of ZG430-640 cast steel. The surface hardness of the tread is hb300-350 and the quenching depth is not less than 20 mm."

    var def = document.querySelector(".def2")
    def.textContent = "A Crane wheel is mainly composed of the wheel, axle, bearing, bearing seat, and cover."

    var spec = document.querySelector(".spec")
    spec.textContent = "Features:"

    var spec_1 = document.querySelector(".spec_1")
    spec_1.textContent = "Toughness is good."

    var spec_2 = document.querySelector(".spec_2")
    spec_2.textContent = "High hardness."

    var spec_3 = document.querySelector(".spec_3")
    spec_3.textContent = "Wear resistance."

    var inquiry_btn = document.querySelector(".inquiry_btn")
    inquiry_btn.textContent = "Inquiry"
    inquiry_btn.href = inquiry_btn.href + "#eng"

    var book_aplication_btn = document.querySelector(".book_aplication_btn")
    book_aplication_btn.textContent = "Book Applicaion"
    book_aplication_btn.href = book_aplication_btn.href + "#eng"
    
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

    var machine_link = document.querySelector(".machine_link")
    machine_link.href = machine_link.href.replace(before,after)

    var inquiry_btn = document.querySelector(".inquiry_btn")
    inquiry_btn.href = inquiry_btn.href.replace(before,after)

    var book_aplication_btn = document.querySelector(".book_aplication_btn")
    book_aplication_btn.href = book_aplication_btn.href.replace(before,after)

  }
  if(window.location.hash){
    if(window.location.hash=="#ch"){
      translate_chinese()
    }
    else if(window.location.hash=="#eng"){
      translate_english()
    }
  }
  

