//////////////////////////////////////////  HangingWall_Condition Button ////////////////////////////////////////////////
var click = 'click'; 

if($('#FORM_GTI_HangingWallConditions_LooseRockCrest_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val().includes('Green') && 
    $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val().includes('Green')) 

    $('#FORM_GTI_HangingWallConditions_Results').val('All Clear'); 

    $('#FORM_GTI_HangingWallConditions_LooseRockCrest_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Loose rocks on crest? - ' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockCrest').val() + '' + 
        $('[field_dest=LooseRockCrest_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockCrest_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Loose rocks in the hanging wall? - ' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockHWall').val() + '' + 
        $('[field_dest=LooseRockHWall_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockHWall_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any ravelling observed or dust trails observed? - ' + 
        $('#FORM_GTI_HangingWallConditions_Ravelling').val() + '' + 
        $('[field_dest=Ravelling_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_Ravelling_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Loose rocks at the toe? - ' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockToe').val() + '' + 
        $('[field_dest=LooseRockToe_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_LooseRockToe_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Rockfall retention adequate according to KPI? - ' + 
        $('#FORM_GTI_HangingWallConditions_RockfallRetention').val() + '' + 
        $('[field_dest=RockfallRetention_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_RockfallRetention_Criticallity').val() + '');

    $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any overhang or undercut present? - ' + 
        $('#FORM_GTI_HangingWallConditions_OverhangUndercut').val() + '' + 
        $('[field_dest=OverhangUndercut_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_OverhangUndercut_Criticality').val() + '');

    $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val().includes('Green') ? 0 : 
    $('#FORM_GTI_HangingWallConditions_Results').val(
        $('#FORM_GTI_HangingWallConditions_Results').val() + 'Any cracks observed in the hanging wall? - ' + 
        $('#FORM_GTI_HangingWallConditions_CracksHangWall').val() + '' + 
        $('[field_dest=CracksHangWall_Evidence][multiple=multiple]').val() + '' + 
        $('#FORM_GTI_HangingWallConditions_CracksHangWall_Criticality').val() + '');

        
    $('#FORM_GTI_HangingWallConditions_Results').val() == '' ? 
    $('#FORM_GTI_HangingWallConditions_Results').val('All Clear'); 

    $('#FORM_GTI_HangingWallConditions_SubmitForm').trigger(click); 

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
            
    $('#FORM_Geotechnical_Inspection_TarpLevel').change()
}, 1250);