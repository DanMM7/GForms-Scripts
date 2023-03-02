////////////////////////////////////////// WD_Observation Button ////////////////////////////////////////////////
var click = 'click'; 

if($('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val().includes('Green') && 
    $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val().includes('Green')) 

    $('#FORM_GTI_GeotechnicalConditions_Results').val('All Clear'); 

    $('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_GeotechnicalConditions_Results').val(
      $('#FORM_GTI_GeotechnicalConditions_Results').val() + 'Are observed structural defects accounted for in the slope design? - ' + 
      $('#FORM_GTI_GeotechnicalConditions_StructuralDefects').val() + '' + 
      $('[field_dest=StructuralDefects_Evidence][multiple=multiple]').val() + '' + 
      $('#FORM_GTI_GeotechnicalConditions_StructuralDefects_Criticality').val() + '');
  
    $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_GeotechnicalConditions_Results').val(
      $('#FORM_GTI_GeotechnicalConditions_Results').val() + 'Is slope monitoring for this area adequate and effective as per Slope Monitoring Strategy? - ' + 
      $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring').val() + '' + 
      $('[field_dest=SlopeMonitoring_Evidence][multiple=multiple]').val() + '' + 
      $('#FORM_GTI_GeotechnicalConditions_SlopeMonitoring_Criticality').val());

$('#FORM_GTI_GeotechnicalConditions_Results').val() == '' ? 
$('#FORM_GTI_GeotechnicalConditions_Results').val('All Clear') : 0; 

$('#FORM_GTI_GeotechnicalConditions_SubmitForm').trigger(click); 

setTimeout(function() { 
    const containerSelector = '[container=childResults]'; 
    const fieldSelector = 'td:first'; 
    const tarpLevelSelector = '#FORM_Geotechnical_Inspection_TarpLevel'; 
    const redText = '(Red)'; 
    const orangeText = '(Orange)'; 
    const yellowText = '(Yellow)'; 
    const greenText = '(Green)'; 
    let color = 4; 
    const startingFieldId = 13; 
    
    for (let i = 0; i < 4; i++) { 
        const fieldId = startingFieldId + i; 
        const fieldValue = $(`[fieldid=${fieldId}] ${fieldSelector}`).text(); 
        
        if (fieldValue.includes(redText)) 
            { color = 1; } 
        else if (fieldValue.includes(orangeText) && color > 1) 
            { color = 2; } 
        else if (fieldValue.includes(yellowText) && color > 2) 
            { color = 3; } 
        else if (fieldValue.includes(greenText) && color > 3) 
            { color = 4; } 
    } 
    
    switch (color) { 
        case 1: 
            $(tarpLevelSelector).val(`High - Stop and Fix ${redText}`); 
            break; 
        case 2: 
            $(tarpLevelSelector).val(`Medium - Fix within 24 Hours ${orangeText}`); 
            break; 
        case 3: 
            $(tarpLevelSelector).val(`Low - Fix Within Schedule ${yellowText}`); 
            break; 
        case 4: 
            $(tarpLevelSelector).val(`Normal Operating Conditions ${greenText}`); 
            break; 
        default: 
            console.error('Invalid color value'); 
    } 
            
    $('#FORM_Geotechnical_Inspection_TarpLevel').change() 
}, 1250);






