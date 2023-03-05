/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black');
    $('#FORM_CC2_AsBuiltActions').parent().hide(); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC2_AsBuiltActions').parent().show();
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC2_AsBuiltActions').parent().show();
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC2_AsBuiltActions').parent().show();
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC2_AsBuiltActions').parent().hide();
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC2.AsbuiltCtrlRating').val('Good')) { 
        $('#FORM_CC2_AsBuiltActions').parent().hide();
    } 
    else if ($('#FORM_CC1.AsbuiltCtrlRating').val('Moderate')) { 
        $('#FORM_CC2_AsBuiltActions').parent().show(); 
    } 
    else if ($('#FORM_CC2.AsbuiltCtrlRating').val('Weak')) { 
        $('#FORM_CC2_AsBuiltActions').parent().show(); 
    } 
    else if ($('#FORM_CC2.AsbuiltCtrlRating').val('Deficient')) { 
        $('#FORM_CC2_AsBuiltActions').parent().show();  
    } 
    else if ($('#FORM_CC2.AsbuiltCtrlRating').val('[NULL]')){
        $('#FORM_CC2_AsBuiltActions').parent().hide(); 
    };
    
}, 1500);