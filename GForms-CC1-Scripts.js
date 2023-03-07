/////////////////////////////////////// CC1-Data Ratings ///////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_DataActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_DataActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC1_DataActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC1_DataActions').parent().show(); 
}
else { 
    $('{this}').css('background-color', 'white').css('color', 'Black'); 
    $('#FORM_CC1_DataActions').parent().hide()
};



//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.DataCtrlRating').val('Good')) { 
        $('#FORM_CC1_DataActions').parent().hide();
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_DataActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Weak')) { 
        $('#FORM_CC1_DataActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_DataActions').parent().show();  
    } 
    else if ($('#FORM_CC1.DataCtrlRating').val('[NULL]')){
        $('#FORM_CC1_DataActions').parent().hide(); 
    };
    
}, 1500);





////////////////////////////////////////// CC1-Verification Ratings /////////////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_VerificationActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_VerificationActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white'); 
    $('#FORM_CC1_VerificationActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white');
    $('#FORM_CC1_VerificationActions').parent().show();  
} 
else if ('{controlvalue}'.includes('[NULL]')){
    $('{this}').css('background-color', 'white').css('color','black');
    $('#FORM_CC1_VerificationActions').parent().hide(); 
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.VerificationCtrlRating').val('Good')) { 
        $('#FORM_CC1_VerificationActions').parent().hide();
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_VerificationActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Weak')) { 
        $('#FORM_CC1_VerificationActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_VerificationActions').parent().show();  
    } 
    else if ($('#FORM_CC1.VerificationCtrlRating').val('[NULL]')){
        $('#FORM_CC1_VerificationActions').parent().hide(); 
    };
    
}, 1500);




 ////////////////////////////////////////// CC1-Design Ratings /////////////////////////////////////////////////////////
if ('{controlvalue}'.includes('Good')) { 
    $('{this}').css('background-color', 'green').css('color', 'black'); 
    $('#FORM_CC1_DesignActions').parent().hide();
} 
else if ('{controlvalue}'.includes('Moderate')) { 
    $('{this}').css('background-color', 'yellow').css('color', 'black'); 
    $('#FORM_CC1_DesignActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('Weak')) { 
    $('{this}').css('background-color', 'orange').css('color', 'white');
    $('#FORM_CC1_DesignActions').parent().show();  
} 
else if ('{controlvalue}'.includes('Deficient')) { 
    $('{this}').css('background-color', 'red').css('color', 'white'); 
    $('#FORM_CC1_DesignActions').parent().show(); 
} 
else if ('{controlvalue}'.includes('[NULL]')){
    $('{this}').css('background-color', 'white').css('color','black');
    $('#FORM_CC1_DesignActions').parent().hide(); 
};


//////////////////////// FOR AFTER BROWSER LOAD /////////////////////////
setTimeout(function () {
    if ($('#FORM_CC1.DesignCtrlRating').val('Good')) { 
        $('#FORM_CC1_DesignActions').parent().hide();
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Moderate')) { 
        $('#FORM_CC1_DesignActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Weak')) { 
        $('#FORM_CC1_DesignActions').parent().show(); 
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('Deficient')) { 
        $('#FORM_CC1_DesignActions').parent().show();  
    } 
    else if ($('#FORM_CC1.DesignCtrlRating').val('[NULL]')){
        $('#FORM_CC1_DesignActions').parent().hide(); 
    };
    
}, 1500);




//////////////////////////////////// Ratings Value Filter & Change ////////////////////////////////////////////
setTimeout(function () {
    // The main group
    let groups = document.querySelector('#FORM_CC1_DesignDesignAdequacy', '#FORM_CC1_DesignOperatingEffect')

    // Add a change event
    groups.addEventListener('change', (e) => {
    
        // Get the currently selected Group
        let current = e.target.options[e.target.selectedIndex]
        
        // Get the data-group number
        let group = current.getAttribute('data-group')
        
        // Get all the items from the second dropdown
        let opts = Array.from(document.querySelectorAll('select[id=FORM_CC1_DesignCtrlRating]>option'))
        
        // Hide items that are not appart of the group
        //opts.forEach(itm => itm.style.display = itm.getAttribute('data-group') == group || !itm.getAttribute('data-group') ? 
        //'initial' : 'none')
        
        for (let i = 0; i < opts.length; i++) {
            const itm = opts[i];
        
            if (itm.getAttribute('data-group') == group || !itm.getAttribute('data-group')) {
                itm.style.display = 'initial';
            } 
            else {
                itm.style.display = 'none';
            }
        }
        
        // Reset the the selection
        document.querySelector('select[id=FORM_CC1_DesignCtrlRating]').selectedIndex = 0
    });

}, 1200);





/////////////////////////////////// Sticky Button //////////////////////////////////////////////
$('#ProcessContent').html('');
$('#dialog').dialog();
$('#ProcessContent').append($('').attr('src', 'https://ghprodsrv03.giscoe.com/Logos/AngloMatrix.png').attr('width', '560').attr('length', '560'));
$('#dialog').dialog('option', 'height', 580);
$('#dialog').dialog('option', 'width', 600);