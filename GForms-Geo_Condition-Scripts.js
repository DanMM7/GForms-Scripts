////////////////////////////////////////// WD_Observation Button ////////////////////////////////////////////////
var click = 'click'; 

if($('#FORM_WD_Observation_PlatformCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_CFTCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_WaterCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_OperationCondAlertLevel').val().includes('Green') && 
    $('#FORM_WD_Observation_DeformRateAlertLevel').val().includes('Green')) 

    $('#FORM_WD_Observation_Instructions').val('All Clear'); 

    $('#FORM_WD_Observation_PlatformCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val(
        $('#FORM_WD_Observation_Instructions').val() + 'Platform Conditions Alert Level - ' + 
        $('[field_dest=FORM_WD_Observation_Platform_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_PlatformCondAlertLevel').val() + ''); 

    $('#FORM_WD_Observation_CFTCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Crest, Face, Toe Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_CrestCondition_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_CFTCondAlertLevel').val() + ''); 

    $('#FORM_WD_Observation_WaterCondAlertLevel').val().includes('Green') ? 0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Water Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_WaterCondition_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_WaterCondAlertLevel').val() +'');
            
    $('#FORM_WD_Observation_OperationCondAlertLevel').val().includes('Green') ? 0 :  
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Operational Conditions Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_OperationalCond_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_OperationCondAlertLevel').val() +''); 
            
    $('#FORM_WD_Observation_DeformRateAlertLevel').val().includes('Green') ?  0 : 
    $('#FORM_WD_Observation_Instructions').val( 
        $('#FORM_WD_Observation_Instructions').val() + ' Deformation Rate Alert Level - '+ 
        $('[field_dest=FORM_WD_Observation_DeformationRate_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_WD_Observation_DeformRateAlertLevel').val());


        
$('#FORM_WD_Observation_Instructions').val() == '' ? 
$('#FORM_WD_Observation_Instructions').val('All Clear') : 0; 

$('#FORM_WD_Observation_SubmitForm').trigger(click); 

setTimeout(function() { 
    const containerSelector = '[container=childResults]'; 
    const fieldSelector = 'td:first'; 
    const tarpLevelSelector = '#FORM_WD_Inspection_TarpLevel'; 
    const redText = '(Red)'; 
    const orangeText = '(Orange)'; 
    const yellowText = '(Yellow)'; 
    const greenText = '(Green)'; 
    let color = 4; 
    const startingFieldId = 13; 
    
    for (let i = 0; i < 5; i++) { 
        const fieldId = startingFieldId + i; 
        const fieldValue = $(`[fieldid=${fieldId}] ${fieldSelector}`).text(); 
        
        if (fieldValue.includes(redText)) { color = 1; } 
        else if (fieldValue.includes(orangeText) && color > 1) { color = 2; } 
        else if (fieldValue.includes(yellowText) && color > 2) { color = 3; } 
        else if (fieldValue.includes(greenText) && color > 3) { color = 4; } 
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
            
    $('#FORM_WD_Inspection_TarpLevel').change() 
}, 1250);
