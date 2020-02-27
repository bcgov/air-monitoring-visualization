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

<!-- <xsl:variable name="aqhiStations" select=
"document('../aqo/aqhi-stations.xml')/aqhi_stations/station"/> -->

<xsl:variable name="readings" select=
"document('../aqo/xml/Current_Hour.xml')/AQO_TYPE/STATIONS"/>

<!-- <xsl:variable name="readings" select=
"document('Current_Hour-NAworking.xml')/AQO_TYPE/STATIONS"/> -->

<xsl:template match="/">


<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="-1" />s
    <meta http-equiv="refresh" CONTENT="0;URL=http://www.env.gov.bc.ca/epd/bcairquality/data/aqhi-table.html" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Real-time air quality readings for British Columbia through an interactive map, including the Air Quality Health Index (AQHI) and AQHI forecasts."/>
    <meta name="author" content="Ministry of Environment"/>
    <link rel="apple-touch-icon" sizes="57x57" href="../../templates-env/icons/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="../../templates-env/icons/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="../../templates-env/icons/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="../../templates-env/icons/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="../../templates-env/icons/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="../../templates-env/icons/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="../../templates-env/icons/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="../../templates-env/icons/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="../../templates-env/icons/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="../../templates-env/icons/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="../../templates-env/icons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="../../templates-env/icons/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="../../templates-env/icons/favicon-16x16.png"/>
    <link rel="manifest" href="../../templates-env/icons/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="../../templates-env/icons/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>

    <title>Air Quality Health Index - BC Air Quality - Province of British Columbia</title>

    <!-- Bootstrap core CSS v3.3.6 -->
    <link rel="stylesheet" href="../../templates-env/css/bootstrap.min.css"/>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link rel="stylesheet" href="../../templates-env/css/ie10-viewport-bug-workaround.css"/>

    <!-- Standard CSS -->
    <link type="text/css" href="../../templates-env/css/main.css?refresh=160106102" rel="stylesheet"/>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />   
   
    <!-- Custom ENV CSS -->
    <link href="../../templates-env/css/env-main.css" rel="stylesheet"/>
   <link href="custom/css/aqhi-table.css" rel="stylesheet"/>   

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]--> 




<!-- B.C. Government template -->





<!-- Snowplow starts plowing - Standalone vA.2.10.2 -->
<script type="text/javascript">

<xsl:comment> 
 <![CDATA[
 
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
 p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
 };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
 n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://sp-js.apps.gov.bc.ca/MDWay3UqFnIiGVLIo7aoMi4xMC4y.js","snowplow"));
var collector = 'spt.apps.gov.bc.ca';
 window.snowplow('newTracker','rt',collector, {
  appId: "Snowplow_standalone",
  platform: 'web',
  post: true,
  forceSecureTracker: true,
  contexts: {
   webPage: true,
   performanceTiming: true
  }
 });
 window.snowplow('enableActivityTracking', 30, 30); // Ping every 30 seconds after 30 seconds
 window.snowplow('enableLinkClickTracking');
 window.snowplow('trackPageView');

  
]]>  
</xsl:comment>
 </script>
<!-- Snowplow stop plowing -->




</head>

<body>

      
        <!-- HEADER -->
    <div id="header" role="banner">
        <div id="header-main" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div id="header-main-row1" class="row">
                    <!-- GOV & ENV TITLE -->
                    <div class="col-sm-3 col-md-2 col-lg-2 header-main-left">
                         <div id="logo">
                            <a href="http://gov.bc.ca"><img src="../../templates-env/images/gov3_bc_logo.png" alt="Government of B.C." title="Government of B.C. logo" /></a>
                        </div>
                        <div id="access">
                            <ul>
                                <li aria-label="Keyboard Tab Skip">
                                    <a accesskey="0" href="#main-content-anchor" aria-label="Skip to main content">Skip to main content</a>
                                </li>
                                <li aria-label="Keyboard Tab Skip">
                                    <a accesskey="0" href="#navigation-anchor" aria-label="Skip to navigation">Skip to navigation</a>
                                </li>
                                <li aria-label="Keyboard Tab Skip">
                                    <a accesskey="0" href="http://gov.bc.ca/webaccessibility/" aria-label="Accessibility Statement">Accessibility Statement</a>
                                </li>
                            </ul>
                        </div>
                      <button type="button" class="navbar-toggle env-button-custom collapsed" data-toggle="collapse" data-target="#navbar">
                            <img src="../../templates-env/images/menu-open-mobile.png" />
                        </button>
                    </div>
                    <div class="col-sm-8 col-md-8 col-lg-6 hidden-xs">
                        <div class="bcgov-title">
                            <h1>BC Air Quality</h1>
                        </div>
                    </div>
                    <!-- /GOV & ENV TITLE -->
                    

                    <!-- COLLAPSING NAVBAR -->
                    <div id="navbar" class="collapse navbar-collapse" role="navigation">
                        <a id="main-content-anchor"></a>
                        <ul class="nav navbar-nav">
                            <li><a href="http://www2.gov.bc.ca/gov/content?id=956DEE07D8F744D2B8A7620FD241C161">Air Quality Health Index</a></li>
                            <li><a href="http://www2.gov.bc.ca/gov/content?id=292EC5BD62A149A192B7DD2CE155E33E">Current Air Quality Data</a></li>
                            <li><a href="http://www2.gov.bc.ca/gov/content?id=AAC0F931795D44E794702332A37D81F5">BC Air Data Archive</a></li>
                        </ul>
                    </div><!-- /COLLAPSING NAVBAR -->
                </div>
            </div>
            <div class="navigationRibbon">
                <div class="level2Navigation">
                    <div class="container">
                        <a href="#">Air Quality Health Index</a>
                        <a href="http://www2.gov.bc.ca/gov/content?id=292EC5BD62A149A192B7DD2CE155E33E">Current Air Quality Data</a>
                        <a href="http://www2.gov.bc.ca/gov/content?id=AAC0F931795D44E794702332A37D81F5">BC Air Data Archive</a>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Header -->
    <!-- BODY CONTENT -->
    <div id="main-content" class="template container env-container">
     <div id="breadcrumbContainer">
            <ol class="breadcrumb">
              <li>
                    <a href="http://www.gov.bc.ca">Home</a>
                </li>
                <li>
                    <a href="http://www2.gov.bc.ca/gov/content?id=8C53E2851B294D8AA18340E4C6A54D7D">Environmental Protection &amp; Sustainability</a>
                </li>
                <li>
                    <a href="http://www2.gov.bc.ca/gov/content?id=A107794D5085039872470FDB7C7FE62D">Air, Land, &amp; Water</a>
                </li>
                <li>
                    <a href="http://www2.gov.bc.ca/gov/content?id=F3D83262D06F42D3BDCBABF120A40DD7">Air</a>
                </li>
                <li>
                    <a href="http://www2.gov.bc.ca/gov/content?id=3F498C928BB74B23A2D8E90FE6804DE5">Air Quality Data</a>
                </li>
                
            
            </ol>
        </div>

        
        <div class="row" style="display:none;">
            <!--   <div id="main-content" class="contentPageMainColumn col-xs-12"> -->
            
            <h1>Air Quality Health Index - What's the Air Like Today?</h1>
            <div id="pageIntro">
               <!--  <div class="alert alert-danger" role="alert">

<h3>NOTICE: System Outage</h3>
    <p>Our Air Quality Monitoring System will be <strong>OFFLINE from 9PM Friday, October 27th to 9AM Sunday, October 29th</strong> for database maintenance and patch application. </p>
        </div> -->
                <p>Find the current and forecast Air Quality Health Index (<abbr title="Air Quality Health Index">AQHI</abbr>) values to help you understand what the air quality around you means to your health. </p>

                <p><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>  <strong>AQHI Scale</strong> - <a href="#" data-toggle="modal" data-target="#myModal">
                    Learn more about AQHI Categories and Explanations
                </a></p>

            </div>
           <div class="row">
                <div class="contentPageMainColumn col-md-8 col-lg-7">
  <div id="aqhiContent">
<div class="table-responsive tableLg">
 <table class="table aqhiScale table-striped table-bordered table-hover">
  <tr>
<td class="aqhi1">1</td>
<td class="aqhi2">2</td>
<td class="aqhi3">3</td>
<td class="aqhi4">4</td>
<td class="aqhi5">5</td>
<td class="aqhi6">6</td>
<td class="aqhi7">7</td>
<td class="aqhi8">8</td>
<td class="aqhi9">9</td>
<td class="aqhi10">10</td>
<td class="aqhi11" colspan="2">+</td>
</tr>
<tr>
    <td colspan="3" class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">LOW<span style="display:block">Health Risk</span></a></td>
    <td colspan="3" class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">MODERATE<span style="display:block">Health Risk</span></a></td>
    <td colspan="4" class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">HIGH<span style="display:block">Health Risk</span></a></td>
    <td colspan="2" class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">VERY<span style="display:block">HIGH</span></a></td>
</tr>
</table>
</div>

<div class="table-responsive tableMd">
 <table class="table aqhiScale table-bordered table-striped table-hover">
  <tr>
<td class="aqhi1">1</td>
<td class="aqhi2">2</td>
<td class="aqhi3">3</td>
      <td class="aqhiRisk" colspan="2"><a href="#" data-toggle="modal" data-target="#myModal">LOW Health Risk</a></td>
</tr>
  <tr>
<td class="aqhi4">4</td>
<td class="aqhi5">5</td>
<td class="aqhi6">6</td>
      <td class="aqhiRisk" colspan="2"><a href="#" data-toggle="modal" data-target="#myModal">MODERATE Health Risk</a></td>
  </tr>
  <tr>
<td class="aqhi7">7</td>
<td class="aqhi8">8</td>
<td class="aqhi9">9</td>
<td class="aqhi10">10</td>
      <td class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">HIGH Health Risk</a></td>
</tr>
  <tr>
<td class="aqhi11" colspan="2">+</td>
      <td colspan="3" class="aqhiRisk"><a href="#" data-toggle="modal" data-target="#myModal">VERY HIGH</a></td>
</tr>
</table>
</div>


<hr/>


<div id="aqhiStationHeader" style="display:none;">
	<!--<div id="aqhiHeaderRow1">
    	<div class="headerStnName">&nbsp;</div>
        <div class="headerOther">&nbsp;</div>
    	<div class="headerForecast">Forecast AQHI</div>
    </div>-->
	<div id="aqhiHeaderRow2">
        <div class="headerStnName">Station</div>
		<div class="headerOther">Tomorrow</div>
        <div class="headerOther">Tonight</div>
        <div class="headerOther">Today</div>
        <div class="headerOther">Current</div> 
	</div>
</div>

<div class="aqhiRowLabel">
<div style="text-align: right; margin-right:2.5em;font-weight:bold;font-size:large">Maximum AQHI Forecast<sup>*</sup></div>
 <div class="headerStnNameLabel">Station</div>

        <div class="aqhiReadingLabel">Tomorrow</div>
      <div class="aqhiReadingLabel">Tonight</div>
      <div class="aqhiReadingLabel">Today</div>
       <div class="aqhiReadingLabel"><strong>Current</strong></div>

      </div>
<div class="clearAll"></div>

<xsl:for-each select="aqhi_stations/station">

	<xsl:variable name="stationID" select="id"/>
    <xsl:variable name="stationName" select="name"/>
    <xsl:variable name="stationLink" select="link"/>
	  
    <div class="aqhiRow">

        
       	<div class="headerStnName"><a target="_parent"><xsl:attribute name="href" ><xsl:value-of select="$stationLink" /></xsl:attribute><xsl:value-of select="$stationName" /></a></div>
        	
		<xsl:choose>

            <xsl:when test="count($readings/STRD[@ID = $stationID]) = 0"><div id="aqhiReadingContainer" class="unavailable"><p><mark>Readings for this station are currently unavailable &nbsp;</mark></p></div></xsl:when>
        
			<xsl:otherwise>
                    
        	<xsl:for-each select="$readings/STRD">
            
        	<xsl:if test="$stationID = @ID">
                                                           
              
            		<div id="aqhiReadingContainer">	

	                    <!-- current AQHI -->
                    	<xsl:choose>
                        	<xsl:when test="round(@AHI_NOW) &lt; .5">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;">1</span></div>
                            </xsl:when>                        
                            <xsl:when test="round(@AHI_NOW)='1'">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='2'"> 
                                <div class="aqhiReading aqhi2">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='4'"> 
                            <div class="aqhiReading aqhi4"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='5'"> 
                            <div class="aqhiReading aqhi5"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='6'"> 
                            <div class="aqhiReading aqhi6"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_NOW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<span style="display:block;">10+</span></div>
                            </xsl:when>    
                            <xsl:otherwise><div class="aqhiReading unavailable">N/A</div></xsl:otherwise>                   
                            </xsl:choose>
                        <!-- end: current AQHI -->
 
 						<!-- forecast for today -->
                     	<xsl:choose>
                        	<xsl:when test="round(@AHI_MRNG) &lt; .5">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;">1</span></div>
                            </xsl:when>                       
                        	<xsl:when test="round(@AHI_MRNG)='1'">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='4'"> 
                            <div class="aqhiReading aqhi4"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='5'"> 
                            <div class="aqhiReading aqhi5"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='6'"> 
                            <div class="aqhiReading aqhi6"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<span style="display:block;">10+</span></div>
                            </xsl:when>    
                  			 <xsl:otherwise><div class="aqhiReading unavailable">N/A</div></xsl:otherwise>
                            </xsl:choose>
                        <!-- end: forecast for today -->
                 
                  		<!-- forecast for tonight -->
                     	<xsl:choose>
                            <xsl:when test="round(@AHI_EVNG) &lt; .5">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;">1</span></div>
                            </xsl:when>                              
                        	<xsl:when test="round(@AHI_EVNG)='1'">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='4'"> 
                                <div class="aqhiReading aqhi4"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='5'"> 
                            <div class="aqhiReading aqhi5"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='6'"> 
                            <div class="aqhiReading aqhi6"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG) > 10"> 
                            <div class="aqhiReading aqhi11">VERY HIGH<span style="display:block;">10+</span></div>
                            </xsl:when>  
                            <xsl:otherwise><div class="aqhiReading unavailable">N/A</div></xsl:otherwise>                        
                            </xsl:choose>
                         <!-- end: forecast for tonight -->
                            
                         <!-- forecast for tomorrow -->   
                     	<xsl:choose>
                            <xsl:when test="round(@AHI_TMRW) &lt; .5">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;">1</span></div>
                            </xsl:when> 
                        	<xsl:when test="round(@AHI_TMRW)='1'">
                            <div class="aqhiReading aqhi1">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='2'"> 
                            <div class="aqhiReading aqhi2">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='3'"> 
                            <div class="aqhiReading aqhi3">LOW<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='4'"> 
                            <div class="aqhiReading aqhi4"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='5'"> 
                            <div class="aqhiReading aqhi5"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='6'"> 
                            <div class="aqhiReading aqhi6"><span class="tableLg">MODERATE</span><span class="tableMd">MOD</span><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='7'"> 
                            <div class="aqhiReading aqhi7">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='8'"> 
                            <div class="aqhiReading aqhi8">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='9'"> 
                            <div class="aqhiReading aqhi9">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='10'"> 
                            <div class="aqhiReading aqhi10">HIGH<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW) > 10"> 
                                <div class="aqhiReading aqhi11">VERY HIGH<span style="display:block;">10+</span></div>
                            </xsl:when>                          
                         <xsl:otherwise><div class="aqhiReading unavailable">N/A</div></xsl:otherwise> 
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
    					<xsl:when test="((substring(READS/RD[1]/@DT,0,5)='2019') and (
                (substring(READS/RD[1]/@DT,6,2) &gt; '03') or 
                ((substring(READS/RD[1]/@DT,6,2) = '03') and (substring(READS/RD[1]/@DT,9,2) &gt; '10')) or
                ((substring(READS/RD[1]/@DT,6,2) = '03') and (substring(READS/RD[1]/@DT,9,2) = '10') and (substring(READS/RD[1]/@DT,12,2) &gt; '01'))

                ))">
                    <!-- If the date is after March 10, 2019 time change, add an hour and pad a zero to ensure parsing when less than 9 AM and adding an hour -->
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
           <!-- There is no need to pad a zero when there is no arithmetic of adding an hour -->
                </xsl:when>
                <xsl:otherwise>
                	<xsl:value-of select="concat((substring(READS/RD[1]/@DT,0,5)),',',(substring(READS/RD[1]/@DT,6,2)),',',(substring(READS/RD[1]/@DT,9,2)),',',(substring(READS/RD[1]/@DT,12,2)),',00,PST')" />
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

 </div>
             <div class="contentPageRightColumn col-md-12 col-lg-5">

    <h2>View Current Air Monitoring Station Data</h2>
                    <p><a href="http://www2.gov.bc.ca/gov/content?id=292EC5BD62A149A192B7DD2CE155E33E">View a list of air monitoring stations</a> or use our <a href="find-stations-map.html">interactive map</a> below to view current air quality data in your area.
					</p>
  
  
    <div class="row">
        <a href="find-stations-map.html" target="_blank"><img src="images/interactive-map-thumb.png" width="100%"/></a>  
		<p> <strong>Please note that air quality data may be missing for many reasons that are beyond our control including local power or communications outages, instrument calibration cycles or failure.</strong></p>

       
            
            
    </div>
    <hr/>
     <div class="row">
         
          <h2>Additional Resources</h2>
                        <p>If you have a comment or concern about the air quality content on this website <a href="http://www2.gov.bc.ca/gov/content?id=8D53E57633F94760A3BC8D5426FB1D4B">please contact us.</a></p>
                         <div class="alert alert-warning" role="alert">
                          <h3>Smoke Forecast</h3>
                          <p>Visit the BlueSky Canada smoke forecast page for up to date forecast information.</p>
                              <ul><li><a href="http://firesmoke.ca/forecasts/viewer/run/ops/BSC-CA-01/current/" target="_blank">Western Canada smoke forecasts</a></li></ul>
                             </div>
                          
                          <p><strong>Previous Month's AQHI Values</strong></p>
                          <p><a href="https://catalogue.data.gov.bc.ca/dataset/01867404-ba2a-470e-94b7-0604607cfa30" target="_blank">Access the last 30 days of AQHI data from the DataBC Catalogue</a>. Under the "Data and Resources" section, look for "Unvalidated Raw Hourly Air Quality Data" and click on the ftp URL link.</p>
 
                         
                          
                          
                           <p><a href="http://open.alberta.ca/interact/aqhi-canada" target="_blank"><img src="images/AQ-Canada-App-logo.jpg" alt="AQHI Canada App"/></a></p>
    <p>New <a href="http://open.alberta.ca/interact/aqhi-canada" target="_blank">National app</a> from the Government of Alberta for mobile platform.</p>
      
       
   
         
     </div> 
        
    

                   
                </div> 
            </div> 
            <hr />
          <div class="row">
   <div class="alert alert-warning" role="alert">

<h3>Notice: Upper Aberdeen Air Quality Monitoring Station Shut-Down – January, 2018</h3>
    <p>The Upper Aberdeen air quality monitoring station will be shut down in January, 2018. This station was installed in late 2015 to collect two years of baseline air quality measurements at the upper range of residential development in Kamloops. The data were used in the review of the KGHM-Ajax mine Environmental Assessment Certificate application and would have been used for the development of dust mitigation and monitoring plans for the proposed mine. The station was also to be used as the down-wind station in the air quality monitoring network associated with the operation of the mine. With the December, 2017 government decision not to grant an Environmental Assessment Certificate for the project, the Ministry plans to re-deploy the monitoring equipment to another project. The Upper Aberdeen site will be used in the future for periodic surveillance air quality monitoring to determine if the air quality in Upper Aberdeen is changing. All of the air quality data collected at the Upper Aberdeen station are available to the public at: <a href="https://envistaweb.env.gov.bc.ca/" targer="_blank">https://envistaweb.env.gov.bc.ca/</a> . If you have any questions about the station, please contact Ralph Adams, Air Quality Meteorologist at (250) 371-6279.</p>
        </div>       
            
             <div class="alert alert-warning" role="alert"><h3><sup><strong>*</strong></sup>Monitoring Station Closure – Smithers St Josephs</h3>
                  <p>The Smithers St Josephs monitoring station in Smithers, BC has been shutdown and will be relocated to a new location. A mobile monitoring site is currently being deployed to report AQHI while the new station is being activated. </p>  </div>
     <div class="alert alert-info" role="alert">

<h3>Methods</h3>
    <p>The data and information displayed on this site has been collected on a near "real time" basis by automated monitors.  It is preliminary in nature and has not yet been tested or verified.  Therefore, it may be subject to change, without notice, pending subsequent review and verification.  At this time, it is provided as a "public service" on an "as is" basis without warranty, whether express or implied, as to its quality, accuracy, suitability, reliability, usability, completeness, timeliness or applicability for particular purposes.  The application of quality assurance and verification procedures to the data and information may result in differences between what is currently displayed and what will become the official record.</p>
        </div>
<div class="alert alert-success" role="alert">
        <h3>Data</h3>
        <p>By accessing these datasets, you agree to the license associated with each file, as indicated in parentheses below.</p>
    
    <ul><li><a href="https://catalogue.data.gov.bc.ca/dataset/air-quality-monitoring-unverified-hourly-air-quality-and-meteorological-data/resource/7fd21841-b133-4f39-b9b2-6bfa34a7cf6c" target="_blank">Air Monitoring Stations</a> (Licence: <a href="http://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61" target="_blank">OGL-BC</a>)</li>
    <li><a href="https://catalogue.data.gov.bc.ca/dataset/01867404-ba2a-470e-94b7-0604607cfa30" target="_blank">Air Quality Monitoring: Unverified Hourly Air Quality and Meteorological Data</a> (Licence: <a href="http://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61" target="_blank">OGL-BC</a>)</li>
    </ul>
                           
        </div>
    
        
</div> 

        </div>
    </div>
    <!-- /BODY CONTENT -->
    <!-- FOOTER -->
    <div id="footer" role="contentInfo">
       <img class="back-to-top" src="../../templates-env/images/back-to-top.png" alt="Back to top" title="Back to top" style="display: inline;"/>
        <div id="footerWrapper">
            <div id="footerAdminSection">
                <div id="footerAdminLinksContainer" class="container">
                    <div id="footerAdminLinks" class="row">
                        <ul class="inline">
                           <li>
                                <a href="http://www.gov.bc.ca/" target="_self">
Home</a>
                            </li>
                            <li>
                                <a href="http://www2.gov.bc.ca/gov/content?id=3F498C928BB74B23A2D8E90FE6804DE5" target="_self">About this site</a>
                            </li>
                            <li>
                                <a href="http://gov.bc.ca/disclaimer/" target="_self">Disclaimer</a>
                            </li>
                            <li>
                                <a href="http://gov.bc.ca/privacy/" target="_self">Privacy</a>
                            </li>
                            <li>
                                <a href="http://gov.bc.ca/webaccessibility/" target="_self">Accessibility</a>
                            </li>
                            <li>
                                <a href="http://gov.bc.ca/copyright" target="_self">Copyright</a>
                            </li>
                            <li>
                                <a href="http://www2.gov.bc.ca/gov/content?id=8D53E57633F94760A3BC8D5426FB1D4B" target="_self">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /FOOTER -->
    
    <!-- MODALS -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
                    <h4 class="modal-title" id="myModalLabel">Learn more about AQHI Categories and Explanations</h4>
                </div>
                <div class="modal-body">
                    <h4>Air Quality Health Index Categories and Health Messages</h4>
                    <div>

                            
                            <h3>The <abbr title="Air Quality Health Index">AQHI</abbr> uses a scale to show the health risk associated with the air pollution we breathe.</h3>
                            <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover" id="table1">
                                <caption>The following table provides the health messages for &#8216;at risk&#8217; individuals and the general public for each of the <abbr title="Air Quality Health Index">AQHI</abbr> Health Risk Categories.</caption>
                                <thead>
                                    <tr>
                                        <th rowspan="2">Health<br/>Risk&#160;</th>
                                        <th rowspan="2">AQHI<br/>Index&#160;</th>
                                        <th colspan="2" style="text-align:center;">Health Messages</th>
                                    </tr>
                                    <tr>
                                        <th>At Risk Population<sup>1</sup></th>
                                        <th>General Population</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="aqhi2">Low</td>
                                        <td class="alignCenter">1 - 3</td>
                                        <td><strong>Enjoy</strong> your usual outdoor activities.</td>
                                        <td><strong>Ideal</strong> air quality for outdoor activities.</td>
                                    </tr>
                                    <tr>
                                        <td class="aqhi5">Moderate (<abbr title="Moderate">MOD</abbr>)</td>
                                        <td class="alignCenter">4 - 6</td>
                                        <td><strong>Consider reducing</strong> or rescheduling strenuous activities outdoors if you are experiencing symptoms.</td>
                                        <td><strong>No need to modify</strong> your usual outdoor activities unless you experience symptoms such as coughing and throat irritation.</td>
                                    </tr>
                                    <tr>
                                        <td class="aqhi8">High</td>
                                        <td class="alignCenter">7 - 10</td>
                                        <td><strong>Reduce</strong> or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.</td>
                                        <td><strong>Consider reducing</strong> or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation.</td>
                                    </tr>
                                    <tr>
                                        <td class="aqhi11">Very High</td>
                                        <td class="alignCenter">Above
                                            <br />10</td>
                                        <td><strong>Avoid</strong> strenuous activities outdoors. Children and the elderly should also avoid outdoor physical exertion.</td>
                                        <td><strong>Reduce</strong> or reschedule strenuous activities outdoors, especially if you experience symptoms such as coughing and throat irritation.</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <p><sup>1</sup> People with heart or breathing problems are at greater risk. Follow your doctor's usual advice about exercising and managing your condition.</p>
                            <p style="text-align:right;">Source: Environment Canada</p>
<p>* If the AQHI index has increased to 7 (high health risk), it is usually because of high concentrations of smoke particles (PM2.5) in this community.</p>



                        </div>

                </div>
                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- /MODALS -->
    
   <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../../templates-env/js/bootstrap.min.js"></script>
    <script src="../../templates-env/js/misc.js"></script>
    <script src="../../templates-env/js/navMenu.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../templates-env/js/ie10-viewport-bug-workaround.js"></script>



</body>
</html>

</xsl:template>
</xsl:stylesheet>