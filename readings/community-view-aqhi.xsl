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
<xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"/>

<xsl:variable name="readings" select=
"document('../aqo/xml/Current_Hour.xml')/AQO_TYPE/STATIONS"/> 

<!--  <xsl:variable name="readings" select=
"document('Current_Hour-NAworking.xml')/AQO_TYPE/STATIONS"/>  -->


<xsl:variable name="communityName">
<xsl:value-of select="test/community/name" />
</xsl:variable>

<xsl:variable name="communityLat">
<xsl:value-of select="test/community/lat" />
</xsl:variable>

<xsl:variable name="communityLong">
<xsl:value-of select="test/community/long" />
</xsl:variable>

<xsl:variable name="communityZoom">
<xsl:value-of select="test/community/zoom" />
</xsl:variable>

<xsl:variable name="communityX">
<xsl:value-of select="test/community/sizeX" />
</xsl:variable>

<xsl:variable name="communityY">
<xsl:value-of select="test/community/sizeY" />
</xsl:variable>

<xsl:variable name="communityDesc">
<xsl:value-of select="test/community/description" />    
</xsl:variable>

<xsl:variable name="emsID">
<xsl:value-of select="test/community/emsID" />    
</xsl:variable>

<xsl:variable name="currentMonthURL2">../aqo/xml/<xsl:value-of select="test/community/station[1]/id"/>_Current_Month.xml</xsl:variable>
<xsl:variable name="currentMonth2" select="document($currentMonthURL2)/AQO_TYPE/STATIONS/STRD/READS"/>
    
    
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta http-equiv="Cache-control" content="no-cache" />
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Current and Forecasted Air Quality Health Index (AQHI)"/>
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
    <link rel="icon" type="image/png" href="../../templates-env/images/favicon.ico"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="../../templates-env/icons/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
<title><xsl:value-of select="test/community/name" /> Air Quality Health Index - Province of British Columbia</title>


 
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
   

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]--> 
    
<!-- Custom ENV CSS -->

 <link href="custom/css/bcairquality-custom-styles.css" rel="stylesheet" type="text/css" media="all" />
<!-- JavaScripts -->

<!-- end: B.C. Government template -->



<xsl:comment>  
<![CDATA[[if lte IE 8]><script language="javascript" type="text/javascript" src="../flot/excanvas.min.js"></script><![endif]]]>
</xsl:comment>
    <!-- Flot Charts JavaScript -->   
    <script language="javascript" type="text/javascript" src="custom/js/flot/jquery.js"></script> 
    <script language="javascript" type="text/javascript" src="custom/js/flot-tooltip/jquery.flot.tooltip.min.js"></script>
    <script language="javascript" type="text/javascript" src="custom/js/flot-tooltip/jquery.flot.tooltip.js"></script> 
   
    

<script type="text/javascript">
$(function () {
     <xsl:variable name="setRD" select="$currentMonth2/RD" />
	<xsl:variable name="countRD" select="count($setRD)" />
  

    // a null signifies separate line segments
    var d1 = [

	<xsl:for-each select="$currentMonth2/RD[position() &lt; $countRD]"><xsl:sort select="position()" data-type="number" order="descending" />
	[Date.UTC(<xsl:value-of select="substring(@DT,0,5)" />,<xsl:value-of select="substring(@DT,6,2) - 1" />,<xsl:value-of select="substring(@DT,9,2)" />,<xsl:value-of select="substring(@DT,12,2)" />),
	<xsl:choose>
    	<xsl:when test="count(@AHI)=0">null</xsl:when>
        <xsl:otherwise>
        	<xsl:value-of select="round(@AHI*10) div 10" />
        </xsl:otherwise>
	</xsl:choose>
	]
	<xsl:choose><xsl:when test="position() &lt; $countRD">,</xsl:when>
	<xsl:otherwise></xsl:otherwise>
	</xsl:choose>
 
	</xsl:for-each>
	];
	
	<xsl:variable name="graphStartDate">
		<xsl:value-of select="substring($currentMonth2/RD[$countRD]/@DT,0,5)" />,<xsl:value-of select="substring($currentMonth2/RD[$countRD]/@DT,6,2)-1" />,<xsl:value-of select="substring($currentMonth2/RD[$countRD]/@DT,9,2)" />,<xsl:value-of select="substring($currentMonth2/RD[$countRD]/@DT,12,2)" />
	</xsl:variable>
	var d2 = [[Date.UTC(<xsl:value-of select="$graphStartDate" />), 3.5, 0]];
	var d3 = [[Date.UTC(<xsl:value-of select="$graphStartDate" />), 6.5, 3.5]];
	var d4 = [[Date.UTC(<xsl:value-of select="$graphStartDate" />), 10.5, 6.5]];
	var d5 = [[Date.UTC(<xsl:value-of select="$graphStartDate" />), 11, 10.5]];
    
    
    
    $.plot($("#placeholder"), [
        {
            data: d2, label: 'LOW', hoverable:false, clickable: true,
            bars: { show: true, horizontal: false, barWidth: 120*60*60*5800   }
        },
        {
            data: d3, label: 'MODERATE', hoverable:false, clickable:false,
            bars: { show: true, horizontal: false, barWidth: 120*60*60*5800  }
        },
        {
            data: d4, label: 'HIGH', hoverable:false, clickable: false,
            bars: { show: true, horizontal: false, barWidth: 120*60*60*5800  }
        },
        {
            data: d5, label: 'VERY HIGH', hoverable:false, clickable: false,
            bars: { show: true, horizontal: false, barWidth: 120*60*60*5800  }
        },					
        {
            data: d1,
			lines: { show: true, fill: false },
			points: { show: true, fill: true, radius: 3 }
            
        }],
		{ 
		yaxis: {min: 0, max: 11, ticks: 10},
		xaxis: {mode:"time"},
		grid: { hoverable: true, clickable: true },			
		colors: ["#D6E1E6","#C8CCCA","#C1BFB7","#D6A1A9"]
					
		}

		
    );

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '3px solid #ffffff',
            padding: '2px',
            'background-color': '#ffffff',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }
    
    
    

dayNameArray = new Array ("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
monthNameArray = new Array ("Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");


    var previousPoint = null;
    $("#placeholder").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));


            if (item) {
                if (previousPoint !== item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
					var x = new Date();
                    x = new Date(item.datapoint[0]);
					var tt = String(dayNameArray[x.getUTCDay()] + ', ' + monthNameArray[x.getUTCMonth()] + ' ' + x.getUTCDate() + ', ' + x.getUTCFullYear() + ', ' + (x.getUTCHours()+0) + ':00 PST');  
                    var y = item.datapoint[1].toFixed(2);
                    
                    showTooltip(item.pageX, item.pageY,
                                tt + ": AQHI = " + (Math.round(y*10)/10));
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        
    });


	
});
</script> 

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
                            <li><a href="../data/aqhi-table.html">Air Quality Health Index</a></li>
                            <li><a href="http://www2.gov.bc.ca/gov/content?id=292EC5BD62A149A192B7DD2CE155E33E">Current Air Quality Data</a></li>
                            <li><a href="http://www2.gov.bc.ca/gov/content?id=AAC0F931795D44E794702332A37D81F5">BC Air Data Archive</a></li>
                        </ul>
                    </div><!-- /COLLAPSING NAVBAR -->
                </div>
            </div>
            <div class="navigationRibbon">
                <div class="level2Navigation">
                    <div class="container">
                        <a href="../data/aqhi-table.html">Air Quality Health Index</a>
                        <a href="http://www2.gov.bc.ca/gov/content?id=292EC5BD62A149A192B7DD2CE155E33E">Current Air Quality Data</a>
                        <a href="http://www2.gov.bc.ca/gov/content?id=AAC0F931795D44E794702332A37D81F5">BC Air Data Archive</a>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /HEADER -->

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
                <li>
                    <a href="aqhi-table.xml">Air Quality Health Index</a>
                </li>
            
            </ol>
        </div>

        
        <div class="row">

<xsl:for-each select="test/community">
  
<xsl:for-each select="station">
<xsl:if test="aqhi = 'Y'">

	<xsl:variable name="stationID" select="id"/>
    <xsl:variable name="stationName" select="name"/>

        <xsl:for-each select="$readings/STRD">        
        	<xsl:if test="$stationID = @ID">
                <h2>Current Air Quality Health Index (AQHI) for <xsl:value-of select="$communityName" /></h2>
                <!-- Left-hand text and date for Current AQHI -->
  <xsl:if test="$stationID = '0500886'">
                                                <div class="alert alert-warning" role="alert">
                                                    <h3>Monitoring Status</h3>
                                                    <p>The Kelowna College monitoring station in Kelowna, BC has been shut down and is in the process of being relocated to a new site in the city. A temporary monitoring station (Kelowna Raymer Ave WWTP) has been deployed to report on fine particulate (PM2.5) while the relocation proceeds. The AQHI for Central Okanagan will be based on data from the Kelowna WWTP station supplemented by data from the Vernon Science Centre monitoring station. </p>
                                                </div>

                                            </xsl:if>
			

<div id="currentTimeFloat">
   <div id="currentTime">Calculated as of: 
    
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
                <xsl:when test="substring($myDate,12,2) = 12">12:00pm</xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="substring($myDate,12,2)-12"/>:<xsl:value-of select="substring($myDate,15,2)"/>pm
                </xsl:otherwise>
              </xsl:choose>
            </xsl:when>
            <xsl:when test="substring($myDate,12,2) = 11">11:00am</xsl:when>
            <xsl:when test="substring($myDate,12,2) &lt; 11">
              <xsl:value-of select="substring($myDate,12,2)"/>:<xsl:value-of select="substring($myDate,15,2)"/>am 
            </xsl:when>
          </xsl:choose>
				<xsl:value-of select="substring($myDate,18,3)"/>
    
    
    </div>
</div>
<!-- end: Left-hand text and date for Current AQHI -->
            <div class="contentPageMainColumn col-md-8 col-lg-7">
<!-- aqhi content -->           
<div id="aqhi">

<!-- Current AQHI -->
<div id="currentAQHI">
    		
<!-- Left-hand current AQHI value -->                    
                    <xsl:choose>
                        	<xsl:when test="round(@AHI_NOW) &lt; .5">
                            <div class="aqhiCurrent aqhi1"><div class="aqhiBig">1</div><div class="currentRisk"> - Low Health Risk</div></div>
                            </xsl:when>
                            <xsl:when test="round(@AHI_NOW)='1'">
                            <div class="aqhiCurrent aqhi1"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Low Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='2'"> 
                            <div class="aqhiCurrent aqhi2"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Low Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='3'"> 
                            <div class="aqhiCurrent aqhi3"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Low Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='4'"> 
                            <div class="aqhiCurrent aqhi4"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Moderate Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='5'"> 
                            <div class="aqhiCurrent aqhi5"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Moderate Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='6'"> 
                            <div class="aqhiCurrent aqhi6"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - Moderate Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='7'"> 
                            <div class="aqhiCurrent aqhi7"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - High Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='8'"> 
                            <div class="aqhiCurrent aqhi8"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - High Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='9'"> 
                            <div class="aqhiCurrent aqhi9"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - High Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW)='10'"> 
                            <div class="aqhiCurrent aqhi10"><div class="aqhiBig"><xsl:value-of select="round(@AHI_NOW)"/></div><div class="currentRisk"> - High Health Risk</div></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_NOW) > 10"> 
                            <div class="aqhiCurrent aqhi11"><div class="aqhiBig">10+</div><div class="currentRisk"> Very High Health Risk</div></div>
                            </xsl:when>    
                            <xsl:otherwise><div class="aqhiNA aqhiCurrentNA"><div class="currentRisk">Currently Unavailable</div></div></xsl:otherwise>                       
                            </xsl:choose>      
<!-- end: Left-hand current AQHI value in big colour box -->    

                             
                          
</div>


<!-- end: Current AQHI -->
<!-- Health messaging for current AQHI -->
<div id="healthMessaging">
                            <xsl:choose>
								<xsl:when test="@AHI_NOW &lt; '3.5'">
                                	<p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='1'"><div class="aqhi1 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='2'"><div class="aqhi2 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='3'"><div class="aqhi3 aqhiSquare"></div></xsl:when> 
                                    </xsl:choose>
                                    &nbsp; <strong>At risk population</strong>: Enjoy your usual outdoor activities.</p>
                                    <p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='1'"><div class="aqhi1 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='2'"><div class="aqhi2 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='3'"><div class="aqhi3 aqhiSquare"></div></xsl:when> 
                                    </xsl:choose>
                                    &nbsp; <strong>General population</strong>: Ideal air quality for outdoor activities.</p>
                                </xsl:when>
                                    
								<xsl:when test="(@AHI_NOW &gt;= '3.5') and (@AHI_NOW &lt; '6.5')">
                                	<p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='4'"><div class="aqhi4 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='5'"><div class="aqhi5 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='6'"><div class="aqhi6 aqhiSquare"></div></xsl:when> 
                                    </xsl:choose>
                                    &nbsp; <strong>At risk population</strong>: Consider reducing or rescheduling strenuous activities outdoors if you are experiencing symptoms.</p>
                                    <p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='4'"><div class="aqhi4 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='5'"><div class="aqhi5 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='6'"><div class="aqhi6 aqhiSquare"></div></xsl:when> 
                                    </xsl:choose>
                                    &nbsp; <strong>General population</strong>: No need to modify your usual outdoor activities unless you experience symptoms such as coughing and throat irritation.</p>
                                </xsl:when>                           
                                                                
                                <xsl:when test="(@AHI_NOW &gt;= '6.5') and (@AHI_NOW &lt; '10.5')"> 
                                    <p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='7'"><div class="aqhi7 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='8'"><div class="aqhi8 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='9'"><div class="aqhi9 aqhiSquare"></div></xsl:when> 
                                    	<xsl:when test="round(@AHI_NOW)='10'"><div class="aqhi10 aqhiSquare"></div></xsl:when>                                         
                                    </xsl:choose>
                                    &nbsp; <strong>At risk population</strong>: Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.</p>
                                    <p>
                                    <xsl:choose>
	                                	<xsl:when test="round(@AHI_NOW)='7'"><div class="aqhi7 aqhiSquare"></div></xsl:when> 
    		                    		<xsl:when test="round(@AHI_NOW)='8'"><div class="aqhi8 aqhiSquare"></div></xsl:when>
                                    	<xsl:when test="round(@AHI_NOW)='9'"><div class="aqhi9 aqhiSquare"></div></xsl:when> 
                                    	<xsl:when test="round(@AHI_NOW)='10'"><div class="aqhi10 aqhiSquare"></div></xsl:when>                                         
                                    </xsl:choose>
                                    &nbsp; <strong>General population</strong>: Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation.</p>



                    <p><strong>* If the AQHI index has increased to 7 (high health risk), it is usually because of high concentrations of smoke particles (PM2.5) in this community.</strong></p>   
                                </xsl:when>
                                <xsl:when test="@AHI_NOW &gt;= '10.5'">
                                    <p>
									<div class="aqhi11 aqhiSquare"></div>
                                    &nbsp; <strong>At risk population</strong>: Avoid strenuous activities outdoors. Children and the elderly should also avoid outdoor physical exertion.</p>
                                    <p>
									<div class="aqhi11 aqhiSquare"></div>
                                    &nbsp; <strong>General population</strong>: Reduce or reschedule strenuous activities outdoors, especially if you experience symptoms such as coughing and throat irritation.</p>     



                    <p><strong>* If the AQHI index has increased to 7 (high health risk), it is usually because of high concentrations of smoke particles (PM2.5) in this community.</strong></p>                                  
                               </xsl:when>



                               <xsl:otherwise><p></p><p></p> </xsl:otherwise> 
                           </xsl:choose>
                     </div>



<!-- end: Health messaging for current AQHI -->


<!-- AQHI scale --> 
<div class="table-responsive tableLg">
<p><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> <strong>AQHI Value Scale</strong> - <a href="#" data-toggle="modal" data-target="#myModal">
                    Learn more about AQHI Categories and Explanations
                </a></p>
                <p><strong>NOTE:</strong> This graph has been optimized for <strong>Internet Explorer 11 or Google Chrome</strong>.</p>
 <!-- <table class="table aqhiScale table-bordered"> 
 <tbody>
 <tr>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='1'"><p class="withBorder">1</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><xsl:choose><xsl:when test="round(@AHI_NOW)&lt; .5"><p class="withBorder">1</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='2'"><p class="withBorder">2</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='3'"><p class="withBorder">3</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='4'"><p class="withBorder">4</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='5'"><p class="withBorder">5</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='6'"><p class="withBorder">6</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='7'"><p class="withBorder">7</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='8'"><p class="withBorder">8</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='9'"><p class="withBorder">9</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th><xsl:choose><xsl:when test="round(@AHI_NOW)='10'"><p class="withBorder">10</p><div class="arrow-down"></div></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose></th>
<th colspan="2"></th>
</tr>
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
<td colspan="3" class="aqhiRisk">LOW<span style="display:block;">Health Risk</span></td>
    <td colspan="3" class="aqhiRisk">MODERATE<span style="display:block;">Health Risk</span></td>
    <td colspan="4" class="aqhiRisk">HIGH<span style="display:block;">Health Risk</span></td>
    <td colspan="2" class="aqhiRisk">VERY<span style="display:block;">HIGH</span></td>
</tr>
</tbody>
</table> -->
</div>

<!-- <div class="table-responsive tableMd">
<p><strong>AQHI Scale</strong></p>
 <table class="table aqhiScale table-bordered table-striped table-hover">
  <tr>
<td class="aqhi1">1</td>
<td class="aqhi2">2</td>
<td class="aqhi3">3</td>
<td class="aqhiRisk" colspan="2">LOW Health Risk</td>
</tr>
  <tr>
<td class="aqhi4">4</td>
<td class="aqhi5">5</td>
<td class="aqhi6">6</td>
<td class="aqhiRisk" colspan="2">MODERATE Health Risk</td>
  </tr>
  <tr>
<td class="aqhi7">7</td>
<td class="aqhi8">8</td>
<td class="aqhi9">9</td>
<td class="aqhi10">10</td>
<td class="aqhiRisk">HIGH Health Risk</td>
</tr>
  <tr>
<td class="aqhi11" colspan="2">+</td>
<td colspan="3" class="aqhiRisk">VERY HIGH</td>
</tr>
</table>
</div> -->

<!-- end: AQHI scale -->






<div class="clearAll">&nbsp;</div>
               </div> <!-- end aqhi content -->
                </div>      <!-- end contentPageMainColumn -->                     
                <div class="contentPageRightColumn col-md-4 col-lg-5">                
<!-- AQHI forecast values and health messaging -->
                   
<div class="forecastContainBig">

	<h3>Maximum AQHI Forecast</h3>
		<div class="forecastContain">
        	<div class="forecastDay">Today</div>
					<xsl:choose>
                
                            <xsl:when test="round(@AHI_MRNG) &lt; .5">
                            <div class="forecast aqhi1"><span style="display:block;">1 - Low Health Risk</span></div>
                            </xsl:when>
                           <xsl:when test="round(@AHI_MRNG)='1'">
                            <div class="forecast aqhi1"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='2'"> 
                                <div class="forecast aqhi2"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='3'"> 
                            <div class="forecast aqhi3"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='4'"> 
                            <div class="forecast aqhi4"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='5'"> 
                            <div class="forecast aqhi5"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='6'"> 
                            <div class="forecast aqhi6"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='7'"> 
                            <div class="forecast aqhi7"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='8'"> 
                            <div class="forecast aqhi8"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='9'"> 
                            <div class="forecast aqhi9"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG)='10'"> 
                            <div class="forecast aqhi10"><span style="display:block;"><xsl:value-of select="round(@AHI_MRNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_MRNG) > 10"> 
                            <div class="forecast aqhi11"><span style="display:block;">10+ - Very High Health Risk</span></div>
                            </xsl:when>    
                  			<xsl:otherwise><div class="forecast aqhiNA">Not Available</div></xsl:otherwise>    
                            </xsl:choose>
	</div>         
	<div class="forecastContain">
    	<div class="forecastDay">Tonight</div>                  
                     	<xsl:choose>
                            <xsl:when test="round(@AHI_EVNG) &lt; .5">
                            <div class="forecast aqhi1"><span style="display:block;">1 - Low Health Risk</span></div>
                            </xsl:when>
                            <xsl:when test="round(@AHI_EVNG)='1'">
                                <div class="forecast aqhi1"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='2'"> 
                            <div class="forecast aqhi2"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='3'"> 
                            <div class="forecast aqhi3"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='4'"> 
                            <div class="forecast aqhi4"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='5'"> 
                            <div class="forecast aqhi5"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='6'"> 
                            <div class="forecast aqhi6"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='7'"> 
                            <div class="forecast aqhi7"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='8'"> 
                            <div class="forecast aqhi8"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='9'"> 
                            <div class="forecast aqhi9"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG)='10'"> 
                            <div class="forecast aqhi10"><span style="display:block;"><xsl:value-of select="round(@AHI_EVNG)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_EVNG) > 10"> 
                            <div class="forecast aqhi11"><span style="display:block;">10+ - Very High Health Risk</span></div>
                            </xsl:when>  
                            <xsl:otherwise><div class="forecast aqhiNA">Not Available</div></xsl:otherwise>    
                            </xsl:choose>
	</div>                       
	<div class="forecastContain">
    	<div class="forecastDay">Tomorrow</div>                            
                     	<xsl:choose>
                        	<xsl:when test="round(@AHI_TMRW) &lt; .5">
                            <div class="forecast aqhi1"><span style="display:block;">1 - Low Health Risk</span></div>
                            </xsl:when>
                            <xsl:when test="round(@AHI_TMRW)='1'">
                            <div class="forecast aqhi1"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='2'"> 
                            <div class="forecast aqhi2"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='3'"> 
                            <div class="forecast aqhi3"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Low Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='4'"> 
                            <div class="forecast aqhi4"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='5'"> 
                            <div class="forecast aqhi5"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='6'"> 
                            <div class="forecast aqhi6"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - Moderate Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='7'"> 
                            <div class="forecast aqhi7">High Health Risk<span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/></span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='8'"> 
                            <div class="forecast aqhi8"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='9'"> 
                            <div class="forecast aqhi9"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW)='10'"> 
                            <div class="forecast aqhi10"><span style="display:block;"><xsl:value-of select="round(@AHI_TMRW)"/> - High Health Risk</span></div>
                            </xsl:when>
                        	<xsl:when test="round(@AHI_TMRW) > 10"> 
                            <div class="forecast aqhi11"><span style="display:block;">10+ - Very High Health Risk</span></div>
                            </xsl:when>                          
                            <xsl:otherwise><div class="forecast aqhiNA">Not Available</div></xsl:otherwise>
                            </xsl:choose>     
	</div>
	         
	<!-- <h3>Community Information</h3>
	 <p><xsl:value-of select="$communityDesc" /></p>
    <p>View more air monitoring station readings</p> -->
</div>
                  
                    
<!-- end: AQHI forecast values and health messaging --> 
                </div>
</xsl:if>
</xsl:for-each>
</xsl:if>
</xsl:for-each>
   

    
<!-- end: AQHI container -->

             
<div class="clearAll">&nbsp;</div>                    
               
</xsl:for-each>
    
       
 </div><!-- end row -->
<div class="row">
    

<div class="flot-chart-contain">
<h3>Recent AQHI Values</h3>
<div class="flot-chart">
    <!--Div that will hold the AQHI chart-->


    <div id="placeholder" class="flot-chart-content" style="width:100%;height:300px;"></div>
   
    <div class="flot-chart-content" id="flot-line-chart"></div>
                            
    
</div>
</div>
   
    <hr />
    
    <div class="row">
        <div class="col-lg-6"> <h3>Instructions</h3>
         <p>Move your mouse over points on the graph to view specific values (times are Pacific Standard). <strong>NOTE:</strong> This feature only works when using <strong>Internet Explorer or Google Chrome</strong>.</p>
    

<h3>Data</h3>

<p><a href="http://www2.gov.bc.ca/gov/content?id=3F498C928BB74B23A2D8E90FE6804DE5#data">View our data license agreement and disclaimer.</a></p></div>
        <div class="col-lg-5 col-lg-offset-1"><h3>More Information</h3>  
        <p>If you have a comment or concern about the air quality content on this website <a href="http://www2.gov.bc.ca/gov/content?id=8D53E57633F94760A3BC8D5426FB1D4B">please contact us.</a></p> 
  <p><strong>Previous Month's AQHI Values</strong></p>
   <p><a href="https://catalogue.data.gov.bc.ca/dataset/01867404-ba2a-470e-94b7-0604607cfa30" target="_blank">Access the last 30 days of AQHI data from the DataBC Catalogue</a>. Under the "Data and Resources" section, look for "Unvalidated Raw Hourly Air Quality Data" and click on the ftp URL link.</p>
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
                                                    
    <script language="javascript" type="text/javascript" src="custom/js/flot/excanvas.min.js"></script>
    <script language="javascript" type="text/javascript" src="custom/js/flot/jquery.flot.js"></script>
    <!--    <script language="javascript" type="text/javascript" src="../flot/jquery.flot.js"></script> -->
    <script language="javascript" type="text/javascript" src="custom/js/flot/jquery.flot.pie.js"></script>
    <script language="javascript" type="text/javascript" src="custom/js/flot/jquery.flot.resize.js"></script>
    <script language="javascript" type="text/javascript" src="custom/js/flot/jquery.flot.time.js"></script>
    
                   
</body>
</html>

</xsl:template>
</xsl:stylesheet>