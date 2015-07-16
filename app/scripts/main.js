$(document).ready(function() {
 $('#fullpage').fullpage({
        //Navigation
        // menu: true,
        lockAnchors: false,
        anchors:['Parlio', 'Perspectives','Community','Parlio Is For You'],
        navigation: true,
        navigationPosition: 'left',
        verticalCentered: true,
        scrollBar:true,
        navigationTooltips: ['Parlio', 'Perspectives','Community','Parlio Is For You'],
    });
});
