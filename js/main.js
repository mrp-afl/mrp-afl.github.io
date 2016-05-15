$(document).ready(function() {
  window.conduct = "Intentional";
  window.impact = "Severe";
  window.contact = "High";

  checkmrp();
});

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

  checkmrp();
});

function checkmrp() {
  if ( window.conduct == null || window.impact == null || window.contact == null ) {
    return;
  }
  var $base;
  var $plea;
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
