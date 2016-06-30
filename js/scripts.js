function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address (street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName + " ";

};

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " +this.state;
};

$(document).ready(function() {
  $("#add-address").click(function(){
    $("#new-addresses").append(
      '<div class="multiple-address">' +
          '<div class="form-group">' +
            '<label for="new-street">street</label>' +
            '<input type="text" class="form-control, new-street" id="new-street">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="new-city">city</label>' +
            '<input type="text" class="form-control, new-city" id="new-city">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="new-state">state</label>' +
            '<input type="text" class="form-control, new-state" id="new-state">' +
        '</div>' +
      '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    $(".multiple-address").not(document.getElementsByClassName(".firstAddress")).css("display","none");
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);

    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#address").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    });
   });
resetFields();
/*   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
   $("input#new-street").val("");
   $("input#new-city").val("");
   $("input#new-state").val("");
*/
  });

  function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");

  };
});
