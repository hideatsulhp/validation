function dropMenu() {
    const button = $("#drop_menu_btn");
    const menu = $("#drop_menu");
    button.click(function(){
      menu.toggle("500", "swing")
    });
  };
  
  $(function() {
    dropMenu();
  })