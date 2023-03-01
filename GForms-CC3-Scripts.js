/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
};
