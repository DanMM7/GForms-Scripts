/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black');
    $('#FORM_CC4_StabilityActions').parent().hide(); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC4_StabilityActions').parent().show();
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC4_StabilityActions').parent().show();
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC4_StabilityActions').parent().show();
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC4_StabilityActions').parent().hide();
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC4.StabilityCtrlRating').val('Good')) { 
        $('#FORM_CC4_StabilityActions').parent().hide();
    } 
    else if ($('#FORM_CC4.StabilityCtrlRating').val('Moderate')) { 
        $('#FORM_CC4_StabilityActions').parent().show(); 
    } 
    else if ($('#FORM_CC4.StabilityCtrlRating').val('Weak')) { 
        $('#FORM_CC4_StabilityActions').parent().show(); 
    } 
    else if ($('#FORM_CC4.StabilityCtrlRating').val('Deficient')) { 
        $('#FORM_CC4_StabilityActions').parent().show();  
    } 
    else if ($('#FORM_CC4.StabilityCtrlRating').val('[NULL]')){
        $('#FORM_CC4_StabilityActions').parent().hide(); 
    };
    
}, 1500);