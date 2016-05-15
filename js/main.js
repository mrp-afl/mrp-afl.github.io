$(document).ready(function() {
  window.conduct = "Intentional";
  window.impact = "Severe";
  window.contact = "High";
  window.goodbloke = 0;

  checkmrp();
});

$("input").click(function() {
  var $input = $(this);
  if ( $input.attr('name') === "conduct" ) {
    if ( $input.attr('value') === "Intentional" ) {
      window.goodbloke++;
    }
    else {
      window.goodbloke = 0;
    }
    window.conduct = $input.attr('value');
  }
  else if ( $input.attr('name') === "impact" ) {
    if ( $input.attr('value') === "Severe" ) {
      window.goodbloke++;
    }
    else {
      window.goodbloke = 0;
    }
    window.impact = $input.attr('value');
  }
  else if ( $input.attr('name') === "contact" ) {
    if ( $input.attr('value') === "High" ) {
      window.goodbloke++;
    }
    else {
      window.goodbloke = 0;
    }
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

  if (window.goodbloke >= 9) {
    $base = "Look, he's a really good bloke";
    $plea = "Maybe just a fine, I'm sure he's going through a lot.";
    $(".baseSanction").text($base);
    $(".pleaSanction").text($plea);
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
