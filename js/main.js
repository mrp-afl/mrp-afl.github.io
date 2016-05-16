// Setting up some global variables so that we have a sensible initial state.
$(document).ready(function() {
  window.conduct = "Intentional";
  window.impact = "Severe";
  window.contact = "High";
  window.goodbloke = 0;

  //#responsive
  if ($(window).width() < 400) {
    $(".labelMed").text("Med");
  }

  checkmrp();
});

// more #responsive. A more complete way of handling width issues than the onLoad bit
$(function(){
  $(window).resize(function(){
    if($(this).width() < 400){
      $(".labelMed").text("Med");
    }
    else {
      $(".labelMed").text("Medium");
    }
  })
  .resize();//trigger resize on page load
});

//any time an input is clicked, update our globals accordingly
//the goodbloke stuff's just a bit of fluff
$("input").click(function() {
  var $input = $(this);
  if ( $input.attr('name') === "conduct" ) {
    window.conduct = $input.attr('value');
  }
  else if ( $input.attr('name') === "impact" ) {
    window.impact = $input.attr('value');
  }
  else if ( $input.attr('name') === "contact" ) {
    window.contact = $input.attr('value');
  }

  if ( $input.attr('value') === "Intentional" || $input.attr('value') === "Severe" || $input.attr('value') === "High") {
    window.goodbloke++;
  }
  else {
    window.goodbloke = 0;
  }

  checkmrp();
});

//this is messy, uses a bunch of chaining ifs since there's a pretty limited set
//there's probably a better way to do it by assigning each option a value and assigning value ranges to numbers of weeks but that seemed a bit over the top for a set of 16 outcomes
//but the mrp doesn't use points so why should i?
function checkmrp() {
  //literally should never happen - legacy sanity check
  if ( window.conduct == null || window.impact == null || window.contact == null ) {
    return;
  }
  var $base;
  var $plea;

  if (window.goodbloke >= 4) {
    $base = "Look, he's a really good bloke";
    $plea = "Maybe just a fine, I'm sure he's going through a lot.";
    $(".baseSanction").text($base);
    $(".pleaSanction").text($plea);
    //no point doing the rest, he's a good bloke.
    return;
  }

  if (window.conduct === "Intentional") {
    if (window.impact === "Severe") {
      $base = "Tribunal";
      $plea = "n/a";
    }
    else if (window.impact === "High") {
      if (window.contact === "High") {
        $base = "Tribunal";
        $plea = "n/a";
      }
      else if (window.contact === "Body") {
        $base = "3 Matches";
        $plea = "2 Matches";
      }
    }
    else if (window.impact === "Medium") {
      if (window.contact === "High") {
        $base = "3 Matches";;
        $plea = "2 Matches";;
      }
      else if (window.contact === "Body") {
        $base = "2 Matches";
        $plea = "1 Matches";
      }
    }
    else if (window.impact === "Low") {
      if (window.contact === "High") {
        $base = "2 Matches";;
        $plea = "1 Matches";;
      }
      else if (window.contact === "Body") {
        $base = "$1500";
        $plea = "$1000";
      }
    }
  }
  else if (window.conduct === "Careless") {
    if (window.impact === "Severe") {
      $base = "Tribunal";
      $plea = "n/a";
    }
    else if (window.impact === "High") {
      if (window.contact === "High") {
        $base = "3 Matches";
        $plea = "2 Matches";
      }
      else if (window.contact === "Body") {
        $base = "2 Matches";
        $plea = "1 Matches";
      }
    }
    else if (window.impact === "Medium") {
      if (window.contact === "High") {
        $base = "2 Matches";;
        $plea = "1 Matches";;
      }
      else if (window.contact === "Body") {
        $base = "$1500";
        $plea = "$1000";
      }
    }
    else if (window.impact === "Low") {
      if (window.contact === "High") {
        $base = "$1500";
        $plea = "$1000";
      }
      else if (window.contact === "Body") {
        $base = "$1500";
        $plea = "$1000";
      }
    }
  }

  $(".baseSanction").text($base);
  $(".pleaSanction").text($plea);
}
