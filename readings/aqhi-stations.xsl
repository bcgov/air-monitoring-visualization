<?xml version="1.0" encoding="utf-8"?><!DOCTYPE xsl:stylesheet  [
	<!ENTITY nbsp   "&#160;">
	<!ENTITY copy   "&#169;">
	<!ENTITY reg    "&#174;">
	<!ENTITY trade  "&#8482;">
	<!ENTITY mdash  "&#8212;">
	<!ENTITY ldquo  "&#8220;">
	<!ENTITY rdquo  "&#8221;"> 
	<!ENTITY pound  "&#163;">
	<!ENTITY yen    "&#165;">
	<!ENTITY euro   "&#8364;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>

<xsl:variable name="aqhiStations" select=
"document('../aqo/aqhi-stations.xml')/aqhi_stations/station"/>

<xsl:variable name="readings" select=
"document('../aqo/xml/Current_Hour.xml')/AQO_TYPE/STATIONS"/>

<xsl:template match="/">


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style>


#aqhiContent {left:200px;}

table {padding:0px; margin:0; border:1px solid #666666; }
table.aqhiScale {padding:0px; margin:0; border-spacing:0; font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF; border:none}
td {text-align:center; padding-left: 5px; font-style:normal; padding-top:6px; padding-bottom:4px; }
td.left {text-align:left;}
.aqhi1 {background-color:#9CCEFC;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi2 {background-color:#64CAFC;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi3 {background-color:#04CEFC;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi4 {background-color:#9CCECC;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi5 {background-color:#9C9A9C;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi6 {background-color:#9C9A64;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi7 {background-color:#9C6604;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi8 {background-color:#9C6634;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi9 {background-color:#9C3604;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi10 {background-color:#640204;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhi11 {background-color:#FC0204;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.aqhiNA {background-color:#0xEBEBEB;font: 12pt Arial, Helvetica, sans-serif; font-weight:bold; color:#FFFFFF;}
.unavailable {color: #666666;}
td.aqhiRisk {font: 11pt Arial, Helvetica, sans-serif; color:#000000; font-weight:bold;}
p.subtitle {font: 11pt Arial, Helvetica, sans-serif; font-style:normal;}
td.stationName {font: 11pt Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; border:none;}
td.aqhiDate {text-align:left; border:none}
table.aqhiTable {position: absolute; float:right; top:0px; right: 0px; border:none;}
#aqhiContent {width:600px;}
#aqhiStation {min-height:54px; position:relative; padding-left:5px; padding-top:2px; border-bottom: 1px solid #EBEBEB;}
#aqhiStationHeader {position:relative; padding-left:5px; padding-top:2px;}
th {text-align: center;}
.headerStnName {float:left; width: 205px; font-weight:bold;}
.headerForecast {float: right; width: 292px; text-align:center; border-bottom: 1px solid #EBEBEB;}
.headerOther {float: left; width: 95px; text-align: center; }
.aqhiReadingContainer {float:right;position:relative;}
.aqhiReading {float: left; width: 95px;; text-align: center; border:1px solid #EBEBEB; height:52px;}
.clearAll {
	clear:both;
	}

.aqhiRow {border-bottom: 1px solid #EBEBEB; position:relative; min-height: 54px;}
.aqhiRowDate {position:absolute; left: 0px; bottom: 5px;}
</style>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Current and Forecast Air Quality Health Index (AQHI)</title>

<!-- B.C. Government template -->

<!-- Start WebTrends code -->
<script language="javascript" type="text/javascript">
<xsl:comment>  
<![CDATA[
	
	var path = '' + unescape(location.href);
	var test = 'wwwt.bcairquality.com';
	var prod = 'www.bcairquality.ca';
	var parts  = '';
	var gDCSId = new String();
	
	parts = path.split('/'); 

	//Determine which server is calling the script
	if(parts[2] == test) {
		gDcsId="dcs8axv0g10000gscta8nxdek_8n2e";
	} else if(parts[2] == prod) {
		gDcsId="dcsoyu2ln10000sth7i6szdek_4c2j";
	} else {
		gDcsId="dcsoyu2ln10000sth7i6szdek_4c2j";
	}

]]>
</xsl:comment>
</script>

<!-- End WebTrends Code -->
<!-- CSS -->
<link href="../2008_templates/css/main.css" rel="stylesheet" type="text/css" media="all" id="mainCSS" />
<link href="../2008_templates/css/layout.css" rel="stylesheet" type="text/css" media="all" />
<link rel="alternate stylesheet" type="text/css" href="../2008_templates/css/layout_1024.css" title="1024 x 768" />
<link href="../2008_templates/css/bcairquality-custom-styles.css" rel="stylesheet" type="text/css" media="all" />
<!-- JavaScripts -->
<script type="text/javascript" src="../2008_templates/scripts/global.js"></script>
<script type="text/javascript" src="../2008_templates/scripts/textSizer.js"></script>
<script type="text/javascript" src="../2008_templates/scripts/format_printPage.js"></script>
<script type="text/javascript" src="../2008_templates/scripts/menu.js"></script>
<script type="text/javascript" src="../2008_templates/scripts/resolution.js"></script>
<script type="text/javascript" src="http://www.gov.bc.ca/shared/scripts/dcs_tag.js"></script>
<script type="text/javascript" src="http://www.gov.bc.ca/shared/scripts/event_listeners.js"></script>
<!-- end: B.C. Government template -->

<style type='text/css' media='screen'>
#primaryMenu ul ul, #primaryMenu ul ul ul, #primaryMenu ul ul ul ul { display: none; }
</style>



</head>

<body id="twoColumn">
<div id="wrapper"> <a name="top"></a>
  <p id="navigationAid"><a href="#mainContent">Skip to main content</a> | <a href="#navigation">Skip to navigation</a> | <a href="http://www.gov.bc.ca/com/accessibility.html">Accessibility Statement</a></p>
  <div id="header">
    <!-- logo [BC gov't mark] -->
    <a href="http://www.gov.bc.ca/"><img src="../2008_templates/images/logos/bcgov.gif" alt="Government of British Columbia Home Page" name="logo" width="163" height="58" id="logo" /></a>
    <div id="secondaryNavBar">
      <!-- Text Sizer script -->
      <script type="text/javascript" src="../2008_templates/scripts/display_textSizer.js"></script>
      <div id="secondaryNavOptions"> 
				
					<a href="http://datafind.gov.bc.ca/advanced.htm">Advanced Search</a>
				 | 
				
					<a href="http://www.gov.bc.ca/com/help.html">Help</a>
				 | 
				
					<a href="http://www.gov.bc.ca/contacts/">Contact Us</a>
				
			</div>
      <hr />
      <div id="search">
        <form name="searchForm" action="http://datafind.gov.bc.ca/query.html" method="get">
          <fieldset>
          <legend>Search Form</legend>
          <div class="scope" id="search-scope">
            <input type="radio" name="qp" value="" id="s-all" alt="All B.C. Government" />
            <label for="s-all" class="allBC">All B.C. Government</label>
            
            <input type="radio" name="qp" value="url:www.bcairquality.ca" id="s-section" alt="B.C. Air Quality" checked="checked" />
            <label for="s-section">B.C. Air Quality</label>
            
            <input type="hidden" name="mi" value="" />
          </div>
          <div>
            <label for="qt" id="searchText">Search</label>
            <input type="text" name="qt" id="qt" size="20" value="" maxlength="1991" class="query" />
            <input type="image" name="Submit" src="../2008_templates/images/buttons/searchGo.gif" alt="Go" class="img" />
          </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div id="horizontalNavMenu"> <a name="navigation"></a>
      <h3 class="textHide">Quick Links</h3>
      <p><a href="http://www.news.gov.bc.ca/">News</a> | <a href="http://www.gov.bc.ca/premier/">The Premier Online</a> | <a href="http://www.gov.bc.ca/ministries/">Ministries &amp; Organizations</a> | <a href="http://www.employment.gov.bc.ca/">Job Opportunities</a> | <a href="http://www.gov.bc.ca/main_index/">Main Index</a></p>
      <hr />
    </div>
  </div>
  <!-- left-side column -->
  <div id="leftColumn">
    <div id="primaryMenu" onClick="onMenuClick(event)">
      <h3 class="textHide">Contents</h3>
      <ul>
        <li><a href="http://www.gov.bc.ca/" id="BCHomeLink">B.C. Home</a></li>
        
				<li><a href="../" id="MinistryLink">B.C. Air Quality</a></li>
		</ul>
        <ul>
        <li><a href="../101/">Air Quality 101</a>
        	<ul>
            	<li><a href="../101/what-is-air.html">What is Air?</a></li>
                <li><a href="../101/what-is-air-quality.html">What is Air Quality?</a></li>                
                <li><a href="../101/air-quality-degraded.html">How Air Quality is Degraded</a></li> 
                <li><a href="../101/measure-air-quality.html">How We Measure Air Quality</a></li>
                <li><a href="../101/improve-air-quality.html">What We Can Do to Improve Air Quality</a></li> 
            	<li><a href="../101/clean-air-day.html">Clean Air Day</a></li>                
			</ul>
        </li>                                                                              
        <li><a href="index.html">B.C.'s Air Quality Readings</a> 
        	<ul>  
            	<li><a href="what-are-readings.html">What are Air Quality Readings?</a></li>
            	<li><a href="indexes-advisories.html">What are Indexes and Advisories?</a></li>
			</ul>
        </li>
        <li><a href="../plans/">B.C.'s Plans for Improving Air Quality</a>
			<ul>
            	<li><a href="../plans/airshed-planning-bc.html">Airshed Planning in B.C.</a></li>
            	<li><a href="../plans/clean-transportation.html">Clean Transportation</a></li>
            	<li><a href="../plans/clean-industry.html">Clean Industry</a></li>
            	<li><a href="../plans/clean-communities.html">Clean Communities</a></li>                                
            	<li><a href="../plans/measuring-our-success.html">Measuring Our Success</a></li>
            	<li><a href="../plans/air-research-funding.html">Research Funding</a></li>                                                  
			</ul>                       
        </li>
        <li><a href="../airsheds/">Air and Airsheds</a>
        	<ul>
                <li><a href="../airsheds/bc-airsheds.html">B.C.'s Airsheds</a></li>
			</ul>
        </li>
        <li><a href="../health/">Air Quality and Your Health</a>
        	<ul>
                <li><a href="../health/air-quality-and-health.html">How Air Quality Affects Health</a></li>
                <li><a href="../health/air-health-readings.html">Today's Health–Related Air Quality Readings</a></li>
			</ul>
        </li>
        <li><a href="../topics/">Key Topics</a>
        	<ul>
                <li><a href="../topics/smoke-burning.html">Smoke and Burning</a></li>
                <li><a href="../topics/transportation-emissions.html">Transportation Emissions</a></li>
                <li><a href="../topics/industrial-emissions.html">Industrial Emissions</a></li>
                <li><a href="../topics/visibility.html">Visibility</a></li>
                <li><a href="../topics/odour.html">Odour</a></li>
            </ul>
        </li>
            
        <li><a href="../climate-change/">Air Quality and Climate Change</a>
        	<ul>
                <li><a href="../climate-change/what-is-climate-change.html">What is Climate Change?</a></li>
                <li><a href="../climate-change/climate-change-impacts.html">How Climate Change Affects Us</a></li>
                <li><a href="../climate-change/air-quality-climate-options.html">Air Quality and Climate Change: Weighing the Options</a></li>
            </ul>
        </li>
        <li><a href="../assessment/">Assessing Air Quality</a>
			<ul>
                <li><a href="../assessment/air-quality-monitoring.html">Air Quality Monitoring</a></li>
                <li><a href="../assessment/meteorological-monitoring.html">Meteorological Monitoring</a></li>
                <li><a href="../assessment/emissions-inventories.html">Emissions Inventories</a></li>
                <li><a href="../assessment/air-modelling.html">Modelling</a></li>
            </ul>
		</li>
        <li><a href="../regulatory/">Regulatory Framework</a>                      
			<ul>
                <li><a href="../regulatory/legislative-framework.html">Legislative Framework</a></li>
                <li><a href="../regulatory/air-legislation-summary.html">Summary of Air Quality Legislation</a></li>
                <li><a href="../regulatory/air-regulations.html">Air Quality Regulations</a></li>
                <li><a href="../regulatory/permits-approvals-codes.html">Permits, Approvals and Codes of Practice</a></li>
                <li><a href="../regulatory/guidelines-criteria-procedures.html">Guidelines, Criteria and Procedures</a></li>
                <li><a href="../regulatory/air-objectives-standards.html">Objectives and Standards</a></li>                                
                <li><a href="../regulatory/levels-of-government.html">Levels of Government Involved</a></li>
            </ul>
		</li>
        <li><a href="../reports/">Reports</a></li>
        <li><a href="../glossary/">Glossary</a>                      
		</li>
        <li><a href="../public-resources/">Resources for the General Public</a>                      
		</li>
        <li><a href="../education-resources/">Resources for Teachers &amp; Youth</a>                      
		</li>
        <li><a href="../researcher-resources/">Resources for Researchers &amp; Scientists</a>                      
		</li>
        <li><a href="../industry-resources/">Resources for Industry</a>                      
			<ul>
                <li><a href="../industry-resources/applying-for-permits.html">Applying for Permits</a></li>
                <li><a href="../industry-resources/audit-air-monitoring.html">How We Audit Air Quality Monitoring</a></li>
            </ul>
		</li>
        <li><a href="../feedback/">Questions, Comments &amp; Complaints</a>                      
		</li>                               
       </ul>
			
    </div>
    <div class="grayMenu grayMenuTab">
			
      <h3>Related Resources</h3>
      <ul>
        <li><a href="http://www.gov.bc.ca/env/">Ministry of Environment</a></li>
        <li><a href="http://www.gov.bc.ca/health/">Ministry of Health Services</a></li> 
      </ul>
			
    </div>
  </div>
  <!-- END left-side column -->
  <hr />
  <div id="breadcrumbs">
    <!-- Print This Page script -->
    <script type="text/javascript" src="../2008_templates/scripts/display_printPage.js"></script>
    <div id="crumbs">
			<a href="http://www.gov.bc.ca/">B.C. Home</a>
            
			&#187; <a href="../">B.C. Air Quality</a>
            
            </div>
  </div>
  <a name="mainContent"></a>
  <hr />
  <div id="content">
		
    <h1 id="titleBanner"><span class="textHide">B.C. Air Quality</span></h1>
		
    <div id="mainColumn">


<div id="aqhiContent">

   
<h2 class="underline">Current and Forecasted Air Quality Health Index (AQHI)</h2>

<table class="aqhiScale" width="600px">
<tr>
<td class="aqhi1" width="8.3%">1</td>
<td class="aqhi2" width="8.3%">2</td>
<td class="aqhi3" width="8.3%">3</td>
<td class="aqhi4" width="8.3%">4</td>
<td class="aqhi5" width="8.3%">5</td>
<td class="aqhi6" width="8.3%">6</td>
<td class="aqhi7" width="8.3%">7</td>
<td class="aqhi8" width="8.3%">8</td>
<td class="aqhi9" width="8.3%">9</td>
<td class="aqhi10" width="8.3%">10</td>
<td class="aqhi11" width="16.6%" colspan="2">+</td>
</tr>
<tr>
<td colspan="3" class="aqhiRisk">LOW<br/>Health Risk</td>
<td colspan="3" class="aqhiRisk">MEDIUM<br/>Health Risk</td>
<td colspan="4" class="aqhiRisk">HIGH<br/>Health Risk</td>
<td colspan="2" class="aqhiRisk">VERY<br/>HIGH</td>
</tr>
</table><br/>


<div id="aqhiStationHeader">
	<div id="aqhiHeaderRow1">
    	<div class="headerStnName">&nbsp;</div>
        <div class="headerOther">&nbsp;</div>
    	<div class="headerForecast">Forecast AQHI</div>
    </div>
	<div id="aqhiHeaderRow2">
        <div class="headerStnName">Station name</div>
		<div class="headerOther">Current<br/>AQHI</div>
        <div class="headerOther">Today</div>
        <div class="headerOther">Tonight</div>
        <div class="headerOther">Tomorrow</div>
	</div>
</div>
<div class="clearAll"></div>
<xsl:for-each select="aqhi_stations/station">

	<xsl:variable name="stationID" select="id"/>
    <xsl:variable name="stationName" select="name"/>
    <xsl:variable name="stationLink" select="link"/>
        
    <div class="aqhiRow">

        
       	<div class="headerStnName"><a><xsl:attribute name="href"><xsl:value-of select="$stationLink" /></xsl:attribute><xsl:value-of select="$stationName" /></a></div>
        	
		<xsl:choose>

            <xsl:when test="count($readings/STRD[@ID = $stationID]) = 0"><div class="aqhiReadingContainer unavailable">readings for this station are currently unavailable &nbsp; </div></xsl:when>
        
			<xsl:otherwise>
                    
        	<xsl:for-each select="$readings/STRD">
            
        	<xsl:if test="$stationID = @ID">
                              
            		<div class="aqhiReadingContainer">	

	                    <!-- current AQHI -->
                    	<xsl:choose>
                        	<xsl:when test="round(@AHI_NOW)='1'">
                            <div class="aqhiReading aqhi1">LOW<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='4'"> 
                            <div class="aqhiReading aqhi4">MODERATE<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='5'"> 
                            <div class="aqhiReading aqhi5">MODERATE<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='6'"> 
                            <div class="aqhiReading aqhi6">MODERATE<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<br/><xsl:value-of select="round(@AHI_NOW)"/></div>
                            </xsl:when>    
                            <xsl:otherwise><div class="aqhiReading unavailable">currently unavailable</div></xsl:otherwise>                       
                            </xsl:choose>
                        <!-- end: current AQHI -->
 
 						<!-- forecast for today -->
                     	<xsl:choose>
                        	<xsl:when test="round(@AHI_MRNG)='1'">
                            <div class="aqhiReading aqhi1">LOW<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='4'"> 
                            <div class="aqhiReading aqhi4">MODERATE<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='5'"> 
                            <div class="aqhiReading aqhi5">MODERATE<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='6'"> 
                            <div class="aqhiReading aqhi6">MODERATE<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<br/><xsl:value-of select="round(@AHI_MRNG)"/></div>
                            </xsl:when>    
                  			<xsl:otherwise><div class="aqhiReading unavailable">currently unavailable</div></xsl:otherwise>    
                            </xsl:choose>
                        <!-- end: forecast for today -->
                 
                  		<!-- forecast for tonight -->
                     	<xsl:choose>
                        	<xsl:when test="round(@AHI_EVNG)='1'">
                            <div class="aqhiReading aqhi1">LOW<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='4'"> 
                            <div class="aqhiReading aqhi4">MODERATE<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='5'"> 
                            <div class="aqhiReading aqhi5">MODERATE<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='6'"> 
                            <div class="aqhiReading aqhi6">MODERATE<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<br/><xsl:value-of select="round(@AHI_EVNG)"/></div>
                            </xsl:when>  
                            <xsl:otherwise><div class="aqhiReading unavailable">currently unavailable</div></xsl:otherwise>                        
                            </xsl:choose>
                         <!-- end: forecast for tonight -->
                            
                         <!-- forecast for tomorrow -->   
                     	<xsl:choose>
                        	<xsl:when test="round(@AHI_TMRW)='1'">
                            <div class="aqhiReading aqhi1">LOW<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='4'"> 
                            <div class="aqhiReading aqhi4">MODERATE<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='5'"> 
                            <div class="aqhiReading aqhi5">MODERATE<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='6'"> 
                            <div class="aqhiReading aqhi6">MODERATE<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<br/><xsl:value-of select="round(@AHI_TMRW)"/></div>
                            </xsl:when>                          
                            <xsl:otherwise><div class="aqhiReading unavailable">currently unavailable</div></xsl:otherwise>
                            </xsl:choose>                        
                         <!-- end: forecast for tomorrow -->

                    </div>
                          		
            <div class="aqhiRowDate">
            <xsl:variable name="currentAQHI" select="@AHI_NOW" />
            <xsl:variable name="aqhiToday" select="@AHI_MRNG" />
            <xsl:variable name="aqhiTonight" select="@AHI_EVNG" />
            <xsl:variable name="aqhiTomorrow" select="@AHI_TMRW" />  
          

<!-- Daylight savings -->

     <xsl:variable name="myDate">
    <xsl:choose>
    			<xsl:when test="((substring(READS/RD[1]/@DT,0,5)='2018') and (
                (substring(READS/RD[1]/@DT,6,2) &gt; '03') or 
                ((substring(READS/RD[1]/@DT,6,2) = '03') and (substring(READS/RD[1]/@DT,9,2) &gt; '11')) or
                ((substring(READS/RD[1]/@DT,6,2) = '03') and (substring(READS/RD[1]/@DT,9,2) = '11') and (substring(READS/RD[1]/@DT,12,2) &gt; '01'))
                ))">

					<xsl:choose>
        	        	<xsl:when test="( (substring(READS/RD[1]/@DT,12,2) = '23') and (substring(READS/RD[1]/@DT,9,2) &gt; '08') )">
   		    	            <xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',',number((substring(READS/RD[1]/@DT,9,2))+1),',00,00,PDT')" /> 
                	    </xsl:when>
                        <xsl:when test="( (substring(READS/RD[1]/@DT,12,2) = '23') and (substring(READS/RD[1]/@DT,9,2) &lt; '09') )">
   		    	            <xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',0',number((substring(READS/RD[1]/@DT,9,2))+1),',00,00,PDT')" /> 
                	    </xsl:when> 
						<xsl:otherwise>
                        	<xsl:choose>
                            	<xsl:when test="(substring(READS/RD[1]/@DT,12,2) &lt; '09')">
		   		                	<xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',',(substring(READS/RD[1]/@DT,9,2)),',0',number(substring(READS/RD[1]/@DT,12,2))+1,',00,PDT')" />
                                </xsl:when>
                                <xsl:otherwise>
	                                <xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',',(substring(READS/RD[1]/@DT,9,2)),',',number(substring(READS/RD[1]/@DT,12,2))+1,',00,PDT')" />
                                </xsl:otherwise>
                             </xsl:choose> 
                    	</xsl:otherwise>
                	</xsl:choose> 
           
                </xsl:when>
                <xsl:otherwise>
                	<xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',',(substring(READS/RD[1]/@DT,9,2)),',',substring(READS/RD[1]/@DT,12,2)),',00,PST')" />
                </xsl:otherwise>
     </xsl:choose> 
     </xsl:variable>
                    
                	<xsl:choose>
                    	<xsl:when test="substring($myDate,6,2)='01'">
						Jan.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='02'">
						Feb.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='03'">
						March
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='04'">
						April
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='05'">
						May
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='06'">
						June
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='07'">
						July
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='08'">
						Aug.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='09'">
						Sept.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='10'">
						Oct.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='11'">
						Nov.
						</xsl:when>
                    	<xsl:when test="substring($myDate,6,2)='12'">
						Dec.
						</xsl:when>
			    	</xsl:choose>
                    <xsl:value-of select="substring($myDate,9,2)"/>, 
					<xsl:value-of select="substring($myDate,0,5)" />, 
                    
          <xsl:choose>
            <xsl:when test="substring($myDate,12,2) &gt; 11">
              <xsl:choose>
                <xsl:when test="substring($myDate,12,2) = 12">12:00pm </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="substring($myDate,12,2)-12"/>:<xsl:value-of select="substring($myDate,15,2)"/>pm 
                </xsl:otherwise>
              </xsl:choose>
            </xsl:when>
            <xsl:when test="substring($myDate,12,2) = 11">11:00am </xsl:when>
            <xsl:when test="substring($myDate,12,2) &lt; 11">
              <xsl:value-of select="substring($myDate,12,2)"/>:<xsl:value-of select="substring($myDate,15,2)"/>am 
            </xsl:when>
          </xsl:choose>
          <xsl:value-of select="substring($myDate,18,3)"/>
            </div>     
                           
                           
            </xsl:if>
    </xsl:for-each>    
          </xsl:otherwise></xsl:choose>      	
</div>                
    <div class="clearAll"></div>      
    </xsl:for-each>
 
   


</div>


<div class="dottedLine"></div>

        <div id="divCheckbox"> <p><strong>* If the AQHI index has increased to 7 (high health risk), it is usually because of high concentrations of smoke particles (PM2.5) in this community.</strong></p>
        </div>
    <p>The above data and information has been collected on a near "real time" basis by automated monitors.  It is preliminary in nature and has not yet been tested or verified.  Therefore, it may be subject to change, without notice, pending subsequent review and verification.  At this time, it is provided as a "public service" on an "as is" basis without warranty, whether express or implied, as to its quality, accuracy, suitability, reliability, usability, completeness, timeliness or applicability for particular purposes.  The application of quality assurance and verification procedures to the data and information may result in differences between what is currently displayed and what will become the official record.</p>
    
    </div>
  </div>
  <!-- END content-->
  <hr />
  <!-- footer -->
  <hr />
  <div id="footer">
    <div class="backToTop"> <a href="#top"><img src="../2008_templates/images/icons/arrowTop.gif" width="15" height="15" alt="Back to top" />Top</a> </div>
		<div id="footerBG">
			<div class="footerMessage">
            				B.C. Air Quality
			</div>
			<p class="footerLinks"><a href="http://www.gov.bc.ca/com/copyright.html">Copyright</a> | <a href="http://www.gov.bc.ca/com/disclaimer.html">Disclaimer</a> | <a href="http://www.gov.bc.ca/com/privacy.html">Privacy</a> | <a href="http://www.gov.bc.ca/com/accessibility.html">Accessibility</a> </p>
		</div>
  </div>




  <!-- END footer-->
</div>
<!-- END wrapper-->  

</body>
</html>

</xsl:template>
</xsl:stylesheet>