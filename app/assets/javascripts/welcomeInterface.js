function replaceName(name, code_name){
  $(".name").html(name);
  $("#name_variable").replaceWith(name);
  $("#code_name").html(code_name);
}

function upcase(name){
  var upcase = name.toUpperCase();
  replaceName(upcase, "name.upcase");
}

function downcase(name){
  var downcase = name.toLowerCase();
  replaceName(downcase, "name.downcase");
}

function reverse(name){
  var reverse = name.split("").reverse().join("");
  replaceName(reverse, "name.reverse");
}

function replace(name){
  var replace = name.replace(/A|a|E|e|I|i|O|o|U|u/g, "★");
  replaceName(replace, "name.replace");
}
