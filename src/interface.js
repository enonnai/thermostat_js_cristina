$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#current-city').change(function(){
    var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp+' Celsius');
  });
});

$('#temperature-up').click(function() {
  thermostat.up();
   updateTemperature();
});

$('#temperature-down').click(function() {
  thermostat.down();
   updateTemperature();
});

$('#temperature-reset').click(function() {
   thermostat.resetTemperature();
   updateTemperature();
 });

 $('#power-saving-on').click(function() {
    thermostat.switchOn();
    updateTemperature();
  });

  $('#power-saving-off').click(function() {
     thermostat.switchOff();
     updateTemperature();
   });

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

});
