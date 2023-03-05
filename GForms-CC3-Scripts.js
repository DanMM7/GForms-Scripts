/////////////////////////////////////// Ratings Color Change ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black');
    $('#FORM_CC3_SGWaterActions').parent().hide(); 
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC3_SGWaterActions').parent().show();
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC3_SGWaterActions').parent().show();
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC3_SGWaterActions').parent().show();
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC3_SGWaterActions').parent().hide();
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC3.SGWaterCtrlRating').val('Good')) { 
        $('#FORM_CC3_SGWaterActions').parent().hide();
    } 
    else if ($('#FORM_CC3.SGWaterCtrlRating').val('Moderate')) { 
        $('#FORM_CC3_SGWaterActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.SGWaterCtrlRating').val('Weak')) { 
        $('#FORM_CC2_SGWaterActions').parent().show();
    } 
    else if ($('#FORM_CC3.SGWaterCtrlRating').val('Deficient')) { 
        $('#FORM_CC3_SGWaterActions').parent().show(); 
    } 
    else if ($('#FORM_CC3.SGWaterCtrlRating').val('[NULL]')){
        $('#FORM_CC3_SGWaterActions').parent().hide(); 
    };
    
}, 1500);