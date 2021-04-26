// Edit the code below
let place = 'online';

function skyzoneHQ() {
  return middleFunction('United States');

  function middleFunction(place) {
    return innerFunction('Illinois State');

    function innerFunction(place) {
      place = 'Chicago';
      return innermostFunction();

      function innermostFunction() {
        return (
          'SkyZone is ' + place + ', ' + place + ', ' + place + ', ' + place
        );
      }
    }
  }
}
