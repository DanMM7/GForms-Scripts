--SELECT 'Asset Name', ( SELECT TOP 1 AssetName FROM [FORM_AS_SearchAsset]
--INNER JOIN FORM_AS_Assets on  FORM_AS_Assets.PK_ID = [FORM_AS_SearchAsset].Asset
--WHERE [FORM_AS_SearchAsset].PK_ID = @@GetParameter("[TABLE].[FORM_AS_SearchAsset]"))

/* ------------------ Linking Form Table with Search Form Table ----------------- */ 
--SELECT 'Employee Name', (SELECT TOP 1 Customer FROM [FORM_CS_SearchCustomer]
--INNER JOIN FORM_Employee on FORM_Employee.PK_ID = [FORM_CS_SearchCustomer].Customer
--WHERE [FORM_CS_SearchCustomer].PK_ID = @@GetParameter("[TABLE].[FORM_CS_SearchCustomer]"))



/* --------- WHERE Clause for search name field -------- */ 
--AssetName like '%@@GetParameter("Asset Name")%'


-- *************************************************** --
--Adding Table
ALTER TABLE dbo.FORM_Incident
ADD [Latitude] VARCHAR (28) NULL,
	[Longitude] VARCHAR (28) NULL;


--ALTER VIEW sde.vw_Incident_GIS AS 
--SELECT 




-- *************************************************** --
-- Adding Modifying
ALTER TABLE dbo.FORM_Incident ALTER COLUMN [Latitude] VARCHAR(28) NULL;
ALTER TABLE dbo.FORM_Inciden ALTER COLUMN [Longitude] VARCHAR(28) NULL;



-- *************************************************** --
-- Adding Updating 





-- *************************************************** --
-- Adding Deleting
ALTER TABLE [dbo].[FORM_Incident]
DROP COLUMN [Latitude], [Longitude];




-- *************************************************** --
-- Adding Constaints
ALTER TABLE [dbo].[FORM_Incident]
ADD PRIMARY KEY ([ID])



ALTER TABLE dbo.FORM_IncidentPhoto 
ADD CONSTRAINT FK_Incident_Photo FOREIGN KEY ([Parent_ID])
REFERENCES [dbo].[FORM_Incident] ([ID])
ON DELETE CASCADE
ON UPDATE CASCADE


-- *************************************************** --
-- Adding Constaints
SELECT CONVERT(VARCHAR(28), '1234.45')


-- *************************************************** --
-- Rename Column
EXEC sp_rename 'dbo.TABLE_CustomerCare.DateCreated', 'Date Created', 'COLUMN';
EXEC sp_rename 'dbo.TABLE_CustomerCare.DateModified', 'Date Modified', 'COLUMN';


--  ******************************************************** --
-- Count items per date
SELECT
	FORMAT(CAST (DateRetrieved AS DATE), 'yyyy/MM/dd') AS 'Date',
	Office.DESCRIPTION  AS 'Province',
    COUNT(Document.DocumentNumber) AS '# of Documents'
FROM FORM_SGDocuments Document
INNER JOIN LK_SGOfficeCodes Office ON Document.SGOffice = Office.PK_ID
GROUP BY  DESCRIPTION, CONVERT(DATE, DateRetrieved)


--  ******************************************************** --
-- Count items per date
SELECT 
	FORMAT(CAST (DateRetrieved AS DATE), 'yyyy/MM/dd') AS 'Date',
	COUNT (DocumentNumber) AS '# of Documents'
FROM FORM_SGDocuments
GROUP BY CONVERT(DATE, DateRetrieved)







-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE Bowtie_Verification 
	-- Add the parameters for the stored procedure here
    @lat1 float,
    @long1 float

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @SHAPE geometry;

    SET @SHAPE = geometry::Point(Longitude, Latitude, 4326);
   
	--WHERE Longitude is not null;

    -- Insert statements for procedure here
	TRUNCATE TABLE SDE_TABLE;

	INSERT INTO SDE_TABLE (values1, values2, values3)

	SELECT
		 values1, values2, values3
	
	FROM DBO_TABLE;

END










USE [GTech_Mobile]
GO
/****** Object:  StoredProcedure [dbo].[Update_GIS_WDInspection_OLD]    Script Date: 2023-03-01 08:00:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[Update_GIS_WDInspection_OLD]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SET NOCOUNT ON;

    update dbo.FORM_WD_Observation

	set SHAPE = geometry::Point(Longitude, Latitude, 4326)

	where Longitude is not null;


	TRUNCATE TABLE AA_MRDMS_Dev.sde.Inspections_WasteDeposits;

	INSERT INTO AA_MRDMS_Dev.sde.Inspections_WasteDeposits (UniqueID, CW_INSPID, ObservationNumber, PK_ID, MineName, DumpStockpileName, GeotechnicalStructure, InspectionType, DroneFootageURL, AreaOrLevel, InspectedBy, InspectionDate, 
		PlatformCondAlertLevel, Pltfrm_Condition_CCV, CFTCondAlertLevel, CrestCondition_CCV, WaterCondAlertLevel, WaterCondition_CCV, ExcessRainfallRecorded, DumpedMaterialType, LiftHeightAccordStandard,
		LiftHeight_CCV, AdvanceRateInLimit, AdvanceRate_CCV, ConstructMethodFollowed, ConstructMethod_CCV, SafetyBermsAccordStandard, SafetyBerms_CCV, OperationCondAlertLevel, OperationalCond_CCV,
		DeformRateAlertLevel, DeformationRate_CCV, 
		AttachPhoto, TARPLevel, Instructions, Longitude, Latitude, Elevation, Confirmation, SHAPE)

	SELECT
		 UniqueID, CW_INSPID, ObservationNumber, PK_ID, MineName, DumpStockpileName, GeotechnicalStructure, InspectionType, DroneFootageURL, AreaOrLevel, InspectedBy, InspectionDate, 
		PlatformCondAlertLevel, Pltfrm_Condition_CCV, CFTCondAlertLevel, CrestCondition_CCV, WaterCondAlertLevel, WaterCondition_CCV, ExcessRainfallRecorded, DumpedMaterialType, LiftHeightAccordStandard,
		LiftHeight_CCV, AdvanceRateInLimit, AdvanceRate_CCV, ConstructMethodFollowed, ConstructMethod_CCV, SafetyBermsAccordStandard, SafetyBerms_CCV, OperationCondAlertLevel, OperationalCond_CCV,
		DeformRateAlertLevel, DeformationRate_CCV, 
		AttachPhoto, TARPLevel, Instructions, Longitude, Latitude, Elevation, Confirmation, SHAPE
	
	FROM vw_WasteDumpInspection;


	TRUNCATE TABLE AA_MRDMS_Dev.sde.ScheduledInspections_WD;

	INSERT INTO AA_MRDMS_Dev.sde.SCHEDULEDINSPECTIONS_WD (MineName, DumpName, AssignTo, InspectionID, Priority, CyclicInspection, StartDate, InitiateDate, Repeat, Interval, IntervalNumber, Long, Lat, Shape)

	SELECT        MineName, DumpName, AssignTo, InspectionID, Priority, CyclicInspection, StartDate, InitiateDate, Repeat, Interval, IntervalNumber, Long, Lat, Shape

	FROM            KumbaGFormApp.dbo.FORM_ScheduleInspection;


		update AA_MRDMS_Dev.sde.ScheduledInspections_WD
	
			set Status = b.STATUS

				from AA_MRDMS_Dev.sde.ScheduledInspections_WD a, CW_AngloAmerican.azteca.INSPECTION b

					where a.InspectionID = b.INSPECTIONID;

END





/*-------------------------------------------------------------------------------------------------------------------*/

SELECT [PK_ID], Quarters, Questions, Rating  
FROM   
   (SELECT [PK_ID], CONCAT([AssessmentQuarter],' / ' ,[AssessmentYear]) AS Quarters, [Mine], [DesignCtrlRating], [DataCtrlRating], [VerificationCtrlRating]
   FROM [GTech_Mobile].[dbo].[vw_CCV_Assessment]) p 
UNPIVOT  
   (Rating FOR Questions IN   
      ([DesignCtrlRating], [DataCtrlRating], [VerificationCtrlRating])  
)AS unpvt;  




/************************************************ GForms Queries *************************************************/
--Query for SubForm where child not linked 
SELECT FType.FIELD_FieldTypeID, FType.FIELD_FieldType, ftype.FIELD_Description,fields.FIELD_Label,forms.FIELD_FormName,fields.FIELD_fkSubformLink
FROM TABLE_FieldTypes FType
INNER JOIN TABLE_Fields fields 
ON FType.FIELD_FieldTypeID = fields.FIELD_FieldType
LEFT JOIN TABLE_Sections sections 
ON Fields.FIELD_fkSection = sections.FIELD_SectionID
LEFT JOIN TABLE_Forms forms 
ON forms.FIELD_FormID = sections.FIELD_fkForm
WHERE fields.FIELD_fkSubformLink IS NULL;

-- Query to list Drop Down which has not been fully setup. 
SELECT FType.FIELD_FieldTypeID, FType.FIELD_FieldType, ftype.FIELD_Description,fields.FIELD_Label,forms.FIELD_FormName,fields.FIELD_DS_DataTable
FROM TABLE_FieldTypes FType
INNER JOIN TABLE_Fields fields 
ON FType.FIELD_FieldTypeID = fields.FIELD_FieldType
LEFT JOIN TABLE_Sections sections 
ON Fields.FIELD_fkSection = sections.FIELD_SectionID 
LEFT JOIN TABLE_Forms forms 
ON forms.FIELD_FormID = sections.FIELD_fkForm
WHERE FType.FIELD_FieldType = 'DDL' AND fields.FIELD_DS_DataTable IS NULL AND fields.FIELD_DS_DataFieldDisplay IS NULL;

--Query to dislay where geolocation has not been set
SELECT  * 
FROM TABLE_FieldTypes FType
LEFT JOIN TABLE_Fields fields 
ON FType.FIELD_FieldTypeID = fields.FIELD_FieldType
LEFT JOIN TABLE_Sections sections 
ON Fields.FIELD_fkSection = sections.FIELD_SectionID
LEFT JOIN TABLE_Forms forms 
ON forms.FIELD_FormID = sections.FIELD_fkForm
INNER JOIN TABLE_FieldTypeSettings fts 
ON fts.FIELD_fkFieldTypeID = FType.FIELD_FieldTypeID
LEFT JOIN TABLE_FieldSettingsAdditional fsa
ON fsa.FIELD_fkFieldID = fields.FIELD_FieldID
WHERE fsa.FIELD_SettingValue = '' AND FType.FIELD_FieldType = 'geolocation';

-- Query to display permission to specific users.
Select useright.ID,useright.FIELD_pkID,useright.FIELD_fkFormID,forms.FIELD_FormName,forms.FIELD_FormStatus,userViews.FIELD_ViewID,userViews.FIELD_userID
FROM TABLE_UserRights useright
INNER join TABLE_Forms forms
ON useright.FIELD_fkFormID = forms.FIELD_FormID
INNER JOIN TABLE_UserRights_Views userViews
ON useright.FIELD_fkUserID=userViews.FIELD_userID
