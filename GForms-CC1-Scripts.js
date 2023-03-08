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
        let groups = document.querySelector('#FORM_CC1_DesignDesignAdequacy')

      // Add a change event
      groups.addEventListener('change', (e) => {

        // Get the currently selected option from the adequacy dropdown
        let adequacySelect = document.querySelector('#FORM_CC1_DesignDesignAdequacy');
        let adequacyValue = adequacySelect.options[adequacySelect.selectedIndex].value;
        let effectiveSelect = document.querySelector('#FORM_CC1_DesignOperatingEffect');
        let effectiveValue = effectiveSelect.options[effectiveSelect.selectedIndex].value;
  
        // Get all the options from the rating dropdown
        let ratingOptions = document.querySelectorAll('#FORM_CC1_DesignCtrlRating option');
  
        // Filter the options based on the adequacy value and hide/show them
        for (let i = 0; i < ratingOptions.length; i++) {
            let ratingOption = ratingOptions[i];

            // replace 'someValue' with your desired value
            if (adequacyValue === 'Adequate' && effectiveValue === 'Effective') { 
            // replace 'someOtherValue' with your desired value
            if (ratingOption.value === 'Good') { 
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            }
            // Moderate/WeaK
            else if (adequacyValue === 'Partially adequate' && effectiveValue === 'Effective') {
            if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            }
            // Moderate/WeaK
            else if (adequacyValue === 'Partially adequate' && effectiveValue === 'Partially effective') {
            if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            } 
            // Moderate/WeaK
            else if (adequacyValue === 'Partially adequate' && effectiveValue === 'Partially effective') {
            if (ratingOption.value === 'Moderate' || ratingOption.value === 'Weak') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            } 
            // WeaK/Deficient
            else if (adequacyValue === 'Partially adequate' && effectiveValue === 'Ineffective') {
            if (ratingOption.value === 'Weak' || ratingOption.value === 'Deficient') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            } 
            // WeaK/Deficient
            else if (adequacyValue === 'Adequate' && effectiveValue === 'Ineffective') {
            if (ratingOption.value === 'Weak' || ratingOption.value === 'Deficient') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            } 
            // Deficient
            else if (adequacyValue === 'Inadequate') {
            if (ratingOption.value === 'Deficient') {
                ratingOption.style.display = 'initial';
            } 
            else {
                ratingOption.style.display = 'none';
            }
            } 
            else {
            ratingOption.style.display = 'initial';
            }

        }
          // Reset the the selection
          //document.querySelector('select[id=FORM_CC1_DesignCtrlRating]').selectedIndex = 0
        });

}, 200);



















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










/////////////////////////////////// Sticky Button //////////////////////////////////////////////
$('#ProcessContent').html('');
$('#dialog').dialog();
$('#ProcessContent').append($('').attr('src', 'https://ghprodsrv03.giscoe.com/Logos/AngloMatrix.png').attr('width', '560').attr('length', '560'));
$('#dialog').dialog('option', 'height', 580);
$('#dialog').dialog('option', 'width', 600);