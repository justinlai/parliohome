$(document).ready(function() {
 $('#fullpage').fullpage({
        //Navigation
        // menu: true,
        lockAnchors: false,
        anchors:['Parlio', 'Perspectives','Community','Parlio Is For You'],
        navigation: true,
        navigationPosition: 'left',
        verticalCentered: true,
        navigationTooltips: ['Parlio', 'Perspectives','Community','Parlio Is For You'],
    });
 	var bounce1 = new Bounce();
	bounce1.translate({
    from: { x: 0, y: 300 },
    to: { x: 0, y: 1000 },
    duration: 10000,
    delay: 1000,
    stiffness: 4
  	})
  // .scale({
  //   from: { x: 1, y: 1 },
  //   to: { x: 0.1, y: 2.3 },
  //   easing: "sway",
  //   duration: 800,
  //   delay: 65,
  //   stiffness: 2
  // })
  // .scale({
  //   from: { x: 1, y: 1},
  //   to: { x: 5, y: 1 },
  //   easing: "sway",
  //   duration: 300,
  //   delay: 30,
  // })
  bounce1.applyTo(document.querySelectorAll(".circle-one"));
});
