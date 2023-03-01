 
 SELECT * FROM [KumbaGFormApp].[dbo].[TABLE_Anglo_Report]
  
 
 
 
 
 -- SELECT 'IMSVariable' as 'ParaName',
  --(
  
  
  SELECT * INTO TABLE_Anglo_Report
  FROM (
		SELECT '# Mobile Active & Register' as Label, (SELECT COUNT(*) 
														FROM (
																SELECT MAX(mu.FIELD_UserName) AS lable, COUNT(*) AS count
																FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog] log_
																INNER JOIN TABLE_MobileUsers mu ON mu.ID= log_.[MobileUserID]
																GROUP BY [MobileUserID]
															 ) 
														AS count
													  ) 
		AS Total_Count

		UNION
		
		SELECT 'Total Geological Surveys' AS lable, COUNT(*) AS count
		FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog]
		WHERE TableName='FORM_GeologicalSurvey'
		GROUP BY  TableName

		UNION

		SELECT 'Total Waste Dump Inspections' AS lable, COUNT(*) AS count
		FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog]
		WHERE TableName='FORM_WD_Inspection'
		GROUP BY  TableName

		UNION

		SELECT 'Total Waste Dump Inspections in the last 30 days' AS lable, COUNT(*) AS count
		FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog]
		WHERE TableName='FORM_WD_Inspection' AND CaptureEndDate>DateAdd(DAY,-30, GetDate())
		GROUP BY  TableName
		
		UNION

		SELECT 'Photos in ' + TableName AS lable, COUNT(*) AS count
		FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog]
		WHERE TableName LIKE  '%photo%'
		GROUP BY TableName
  
		UNION

		SELECT 'Total Photos', COUNT(*)
		FROM [KumbaGFormApp].[dbo].[MOBILE_TransactionLog]
		WHERE TableName LIKE  '%photo%'

	) 
 t


for json auto


) as 'JSONData'


 SELECT 'output', '<table class="table  table-hover general-table"><thead><tr><th>Report Label</th><th>Total Counts</th><th>Action</th></tr></thead><tbody>' + (
 SELECT 
  (select Label   as 'td' for xml path(''), type),
  (select Total_Count  as 'td' for xml path(''), type)
 FROM [KumbaGFormApp].[dbo].[TABLE_Anglo_Report]

  FOR xml path('tr')
  ) + '</tbody></table>'


SELECT
    * 
FROM
    sys.tables 
WHERE
    name
LIKE
    '%TABLE_Anglo_Report%'