require(["esri/map",
"esri/symbols/TextSymbol",
"esri/layers/GraphicsLayer",
"esri/Color",
"esri/graphic",
"esri/symbols/Font",
"esri/geometry/Point",
"dojo/domReady!"],

function(Map, TextSymbol, GraphicsLayer, Color, Graphic, Font, Point) {
        

var scale2 = 1500000;

var labelfont = new Font ("12", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Calibri");
var aqhifont = new Font ("16", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Calibri");

var abb= new GraphicsLayer();
		var ptabb=  new Point([-122.3266, 49.0215]);		
		var abbotsford =  new TextSymbol("Abbotsford A Columbia Street").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-8);
        var graabb = new Graphic(ptabb,abbotsford);
		abb.setMinScale(scale2);		
		abb.add(graabb);
		map.addLayer(abb);
var abbc= new GraphicsLayer();
		var ptabbc=  new Point([-122.3097, 49.0428]);		
		var abbotsfordc =  new TextSymbol("Abbotsford Central").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(18,8);
        var graabbc = new Graphic(ptabbc,abbotsfordc);
		abbc.setMinScale(scale2);		
		abbc.add(graabbc);
		map.addLayer(abbc);
var aga= new GraphicsLayer();
		var ptaga=  new Point([-121.762334, 49.238032]);		
		var agassiz =  new TextSymbol("Agassiz Municipal Hall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,-8);
        var graaga = new Graphic(ptaga,agassiz);
		aga.setMinScale(scale2);		
		aga.add(graaga);
		map.addLayer(aga);

var burb= new GraphicsLayer();
		var ptburb=  new Point([-122.9356, 49.2667]);		
		var burnabyb =  new TextSymbol("Burnaby Burmount").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-8,-8);
        var graburb = new Graphic(ptburb,burnabyb);
		burb.setMinScale(scale2);		
		burb.add(graburb);
		map.addLayer(burb);
var burbk= new GraphicsLayer();
		var ptburbk=  new Point([-122.9711, 49.2794]);		
		var burnabyk =  new TextSymbol("Burnaby Kensington Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(16,2).setAngle(-45);
        var graburbk = new Graphic(ptburbk,burnabyk);
		burbk.setMinScale(scale2);		
		burbk.add(graburbk);
		map.addLayer(burbk);
var burbm= new GraphicsLayer();
		var ptburbm=  new Point([-122.9222, 49.2797]);		
		var burnabym =  new TextSymbol("Burnaby Mountain").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(8,4).setAngle(-45);
        var graburbm = new Graphic(ptburbm,burnabym);
		burbm.setMinScale(scale2);		
		burbm.add(graburbm);
		map.addLayer(burbm);
var burbe= new GraphicsLayer();
		var ptburbe=  new Point([-123.0078, 49.2875]);		
		var burnabye =  new TextSymbol("Burnaby North Eton").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(-4,4).setAngle(-45);
        var graburbe = new Graphic(ptburbe,burnabye);
		burbe.setMinScale(scale2);		
		burbe.add(graburbe);
		map.addLayer(burbe);
var burbs= new GraphicsLayer();
		var ptburbs=  new Point([-122.9856, 49.2153]);		
		var burnabys =  new TextSymbol("Burnaby South").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graburbs = new Graphic(ptburbs,burnabys);
		burbs.setMinScale(scale2);		
		burbs.add(graburbs);
		map.addLayer(burbs);
var newwes= new GraphicsLayer();
		var ptnewwes=  new Point([-122.8945, 49.2271]);		
		var newwestmin =  new TextSymbol("New Westminster Sapperton Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var granewwes = new Graphic(ptnewwes,newwestmin);
		newwes.setMinScale(scale2);		
		newwes.add(granewwes);
		map.addLayer(newwes);
var chill= new GraphicsLayer();
		var ptchill=  new Point([-121.9406, 49.1561]);		
		var chilliwack =  new TextSymbol("Chilliwack Airport").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-8).setAngle(0);
        var grachill = new Graphic(ptchill,chilliwack);
		chill.setMinScale(scale2);		
		chill.add(grachill);
		map.addLayer(chill);
var coq= new GraphicsLayer();
		var ptcoq=  new Point([-122.7914, 49.2881]);		
		var coquitlam =  new TextSymbol("Coquitlam Douglas College").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gracoq = new Graphic(ptcoq,coquitlam);
		coq.setMinScale(scale2);		
		coq.add(gracoq);
		map.addLayer(coq);
var gmh= new GraphicsLayer();
		var ptgmh=  new Point([-123.509130, 49.400540]);		
	    var gibsons =  new TextSymbol("Gibsons Municipal Hall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,8).setAngle(0);
        var gragmh = new Graphic(ptgmh,gibsons);
		gmh.setMinScale(scale2);		
		gmh.add(gragmh);
	    map.addLayer(gmh);
var hop= new GraphicsLayer();
		var pthop=  new Point([-121.4994, 49.3697]);		
		var hope =  new TextSymbol("Hope Airport").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,8).setAngle(0);
        var grahop = new Graphic(pthop,hope);
		hop.setMinScale(scale2);		
		hop.add(grahop);
		map.addLayer(hop); 
var horse= new GraphicsLayer();
		var pthorse=  new Point([-123.2766, 49.3686]);		
		var horseshoe =  new TextSymbol("Horseshoe Bay").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grahorse = new Graphic(pthorse,horseshoe);
		horse.setMinScale(scale2);		
		horse.add(grahorse);
		map.addLayer(horse);
var lang= new GraphicsLayer();
		var ptlang=  new Point([-122.5669, 49.0956]);		
		var langley =  new TextSymbol("Langley Central").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(18,8).setAngle(0);
        var gralang = new Graphic(ptlang,langley);
		lang.setMinScale(scale2);		
		lang.add(gralang);
		map.addLayer(lang);
var maple= new GraphicsLayer();
		var ptmaple=  new Point([-122.5819, 49.215]);		
		var mapleridge =  new TextSymbol("Maple Ridge Golden Ears School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gramaple = new Graphic(ptmaple,mapleridge);
		maple.setMinScale(scale2);		
		maple.add(gramaple);
		map.addLayer(maple);
var miss= new GraphicsLayer();
		var ptmiss=  new Point([-122.311078, 49.14149]);		
		var mission =  new TextSymbol("Mission School Works Yard").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,-10).setAngle(0);
        var gramiss = new Graphic(ptmiss,mission);
		miss.setMinScale(scale2);		
		miss.add(gramiss);
		map.addLayer(miss);
var cap= new GraphicsLayer();
		var ptcap=  new Point([-122.9856, 49.2878]);		
		var capitol =  new TextSymbol("North Burnaby Capitol Hill").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,2).setAngle(-45);
        var gracap = new Graphic(ptcap,capitol);
		cap.setMinScale(scale2);		
		cap.add(gracap);
		map.addLayer(cap);
var del= new GraphicsLayer();
		var ptdel=  new Point([-122.9017, 49.1583]);		
		var delta =  new TextSymbol("North Delta").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gradel = new Graphic(ptdel,delta);
		del.setMinScale(scale2);		
		del.add(gradel);
		map.addLayer(del);
var rob= new GraphicsLayer();
		var ptrob=  new Point([-123.1219, 49.2822]);		
		var robson =  new TextSymbol("Vancouver Robson Square").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,4).setAngle(0);
        var grarob = new Graphic(ptrob,robson);
		rob.setMinScale(scale2);		
		rob.add(grarob);
		map.addLayer(rob);
var mah= new GraphicsLayer();
		var ptmah=  new Point([-123.0836, 49.3239]);		
		var mahon =  new TextSymbol("North Vancouver Mahon Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-11,-6).setAngle(0);
        var gramah = new Graphic(ptmah,mahon);
		mah.setMinScale(scale2);		
		mah.add(gramah);
		map.addLayer(mah);
var nar= new GraphicsLayer();
		var ptnar=  new Point([-123.0203, 49.3017]);		
		var narrows =  new TextSymbol("North Vancouver Second Narrows").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(-8,4).setAngle(-45);
        var granar = new Graphic(ptnar,narrows);
		nar.setMinScale(scale2);		
		nar.add(granar);
		map.addLayer(nar);
var mood= new GraphicsLayer();
		var ptmood=  new Point([-122.8492, 49.2808]);		
		var moody =  new TextSymbol("Port Moody Rocky Point Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,-10).setAngle(0);
        var gramood = new Graphic(ptmood,moody);
		mood.setMinScale(scale2);		
		mood.add(gramood);
		map.addLayer(mood);
var pitt= new GraphicsLayer();
		var ptpitt=  new Point([-122.7089, 49.2453]);		
		var pittmeadows =  new TextSymbol("Pitt Meadow Meadowlands School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(20,0).setAngle(0);
        var grapitt = new Graphic(ptpitt,pittmeadows);
		pitt.setMinScale(scale2);		
		pitt.add(grapitt);
		map.addLayer(pitt);	
var rich= new GraphicsLayer();
		var ptrich=  new Point([-123.1083, 49.1414]);		
		var richmond =  new TextSymbol("Richmond South").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-6).setAngle(0);
        var grarich = new Graphic(ptrich,richmond);
		rich.setMinScale(scale2);		
		rich.add(grarich);
		map.addLayer(rich);
var surr= new GraphicsLayer();
		var ptsurr=  new Point([-122.6942, 49.1328]);		
		var surrey =  new TextSymbol("Surrey East").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grasurr = new Graphic(ptsurr,surrey);
		surr.setMinScale(scale2);		
		surr.add(grasurr);
		map.addLayer(surr);
var tsaw= new GraphicsLayer();
		var pttsaw=  new Point([-123.082, 49.0099]);		
		var tsawassen =  new TextSymbol("Tsawwassen").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(16,6).setAngle(0);
        var gratsaw = new Graphic(pttsaw,tsawassen);
		tsaw.setMinScale(scale2);		
		tsaw.add(gratsaw);
		map.addLayer(tsaw);
var yvr= new GraphicsLayer();
		var ptyvr=  new Point([-123.1522, 49.1864]);		
		var vanairport =  new TextSymbol("Vancouver International Airport #2").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grayvr = new Graphic(ptyvr,vanairport);
		yvr.setMinScale(scale2);		
		yvr.add(grayvr);
		map.addLayer(yvr);
var vict= new GraphicsLayer();
		var ptvict=  new Point([-123.363165, 48.4419424]);		
		var victopaz =  new TextSymbol("Victoria Topaz").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(16,6).setAngle(0);
        var gravict = new Graphic(ptvict,victopaz);
		vict.setMinScale(scale2);		
		vict.add(gravict);
		map.addLayer(vict);
var reef= new GraphicsLayer();
		var ptreef=  new Point([-123.384311, 48.421589]);		
		var thereef =  new TextSymbol("Victoria James Bay").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-12).setAngle(0);
        var grareef = new Graphic(ptreef,thereef);
		reef.setMinScale(scale2);		
		reef.add(grareef);
		map.addLayer(reef);	
var col= new GraphicsLayer();
		var ptcol=  new Point([-123.49278, 48.42389]);		
		var colwood =  new TextSymbol("Colwood City Hall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-20,-8).setAngle(0);
        var gracol = new Graphic(ptcol,colwood);
		col.setMinScale(scale2);		
		col.add(gracol);
		map.addLayer(col);
var duncc= new GraphicsLayer();
		var ptduncc=  new Point([-123.717307, 48.7846114]);		
		var cairnsmore =  new TextSymbol("Duncan College St").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-4).setAngle(0);
        var graduncc = new Graphic(ptduncc,cairnsmore);
		duncc.setMinScale(scale2);		
		duncc.add(graduncc);
		map.addLayer(duncc);
var duncd= new GraphicsLayer();
		var ptduncd=  new Point([-123.646402, 48.80255]);		
		var deykin =  new TextSymbol("Duncan Deykin Avenue").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,4).setAngle(0);
        var graduncd = new Graphic(ptduncd,deykin);
		duncd.setMinScale(scale2);		
		duncd.add(graduncd);
		map.addLayer(duncd);
//var croftg= new GraphicsLayer();
//		var ptcroftg=  new Point([-123.637041, 48.849635]);		
//		var croftongh =  new TextSymbol("Crofton Georgia Hts").setColor(
//		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(20,0).setAngle(0);
//      var gracroftg = new Graphic(ptcroftg,croftongh);
//		croftg.setMinScale(scale2);		
//		croftg.add(gracroftg);
//		map.addLayer(croftg);
var crofts= new GraphicsLayer();
		var ptcrofts=  new Point([-123.653929, 48.874529]);		
		var croftonsub =  new TextSymbol("Crofton Substation").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-4).setAngle(0);
        var gracrofts = new Graphic(ptcrofts,croftonsub);
		crofts.setMinScale(scale2);		
		crofts.add(gracrofts);
		map.addLayer(crofts);
var harm= new GraphicsLayer();
		var ptharm=  new Point([-123.850165, 49.114165]);		
		var harmac =  new TextSymbol("Harmac Cedar Woobank").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-4).setAngle(0);
        var graharm = new Graphic(ptharm,harmac);
		harm.setMinScale(scale2);		
		harm.add(graharm);
		map.addLayer(harm);	
var nanl= new GraphicsLayer();
		var ptnanl=  new Point([-123.99389, 49.20083]);		
		var nanaimol =  new TextSymbol("Nanaimo Labieux Road").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(16,6).setAngle(0);
        var grananl = new Graphic(ptnanl,nanaimol);
		nanl.setMinScale(scale2);		
		nanl.add(grananl);
		map.addLayer(nanl);
var alb= new GraphicsLayer();
		var ptalb=  new Point([-124.806628, 49.261014]);		
		var alberni =  new TextSymbol("Port Alberni Elementary").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,-6).setAngle(0);
        var graalb = new Graphic(ptalb,alberni);
		alb.setMinScale(scale2);		
		alb.add(graalb);
		map.addLayer(alb);
var albp= new GraphicsLayer();
		var ptalba=  new Point([-124.813, 49.2278]);		
		var albernip =  new TextSymbol("Port Alberni Port Authority").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,-6).setAngle(0);
        var graalbp = new Graphic(ptalba,albernip);
		albp.setMinScale(scale2);		
		albp.add(graalbp);
		map.addLayer(albp);    
var courte= new GraphicsLayer();
		var ptcourte=  new Point([-124.996222, 49.682603]);		
		var courtenayel =  new TextSymbol("Courtenay Elementary School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-20,-8).setAngle(0);
        var gracourte = new Graphic(ptcourte,courtenayel);
		courte.setMinScale(scale2);		
		courte.add(gracourte);
		map.addLayer(courte);
var elk= new GraphicsLayer();
		var ptelk=  new Point([-125.2844, 50.018425]);		
		var elkfalls =  new TextSymbol("Elk Falls Dogwood").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-9,-8).setAngle(0);
        var graelk = new Graphic(ptelk,elkfalls);
		elk.setMinScale(scale2);		
		elk.add(graelk);
		map.addLayer(elk);
var powt= new GraphicsLayer();
		var ptpowt=  new Point([-124.5541, 49.8747]);		
		var powelltown =  new TextSymbol("Powell River Townsite Helipad").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-21,-8).setAngle(0);
        var grapowt = new Graphic(ptpowt,powelltown);
		powt.setMinScale(scale2);		
		powt.add(grapowt);
		map.addLayer(powt);
var powej= new GraphicsLayer();
		var ptpowej=  new Point([-124.5624, 49.889299]);		
		var powelljames =  new TextSymbol("Powell River James Thomson School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-8,4).setAngle(0);
        var grapowej = new Graphic(ptpowej,powelljames);
		powej.setMinScale(scale2);		
		powej.add(grapowej);
		map.addLayer(powej);
var whistm= new GraphicsLayer();
		var ptwhistm=  new Point([-122.960402, 50.144285]);		
		var whistlermeadow =  new TextSymbol("Whistler Meadow Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,4).setAngle(0);
        var grawhistm = new Graphic(ptwhistm,whistlermeadow);
		whistm.setMinScale(scale2);		
		whistm.add(grawhistm);
		map.addLayer(whistm);
var squame= new GraphicsLayer();
		var ptsquame=  new Point([-123.15133, 49.70516]);		
		var squamishe =  new TextSymbol("Squamish Elementary").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(16,6).setAngle(0);
        var grasquame = new Graphic(ptsquame,squamishe);
		squame.setMinScale(scale2);		
		squame.add(grasquame);
		map.addLayer(squame);
var langd= new GraphicsLayer();
		var ptlangd=  new Point([-123.479185, 49.438848]);		
		var langdale =  new TextSymbol("Langdale Elementary").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gralangd = new Graphic(ptlangd,langdale);
		langd.setMinScale(scale2);		
		langd.add(gralangd);
		map.addLayer(langd);
var grand= new GraphicsLayer();
		var ptgrand=  new Point([-118.439088, 49.031168]);		
		var grandforks =  new TextSymbol("Grand Forks City Hall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-8).setAngle(0);
        var gragrand = new Graphic(ptgrand,grandforks);
		grand.setMinScale(scale2);		
		grand.add(gragrand);
		map.addLayer(grand);
var trailc= new GraphicsLayer();
		var pttrailc=  new Point([-117.60711, 49.046405]);		
		var trailcolumb =  new TextSymbol("Trail Columbia Gardens Airport").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(10,-8).setAngle(0);
        var gratrailc = new Graphic(pttrailc,trailcolumb);
		trailc.setMinScale(scale2);		
		trailc.add(gratrailc);
		map.addLayer(trailc);
var trailb= new GraphicsLayer();
		var pttrailb=  new Point([-117.697828, 49.096218]);		
		var trailbutler =  new TextSymbol("Trail Butler Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-8).setAngle(0);
        var gratrailb = new Graphic(pttrailb,trailbutler);
		trailb.setMinScale(scale2);		
		trailb.add(gratrailb);
		map.addLayer(trailb);
var war= new GraphicsLayer();
		var ptwar=  new Point([-117.7469, 49.0952]);		
		var warfield =  new TextSymbol("Warfield Elementary").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,4).setAngle(0);
        var grawar = new Graphic(ptwar,warfield);
		war.setMinScale(scale2);		
		war.add(grawar);
		map.addLayer(war);
var birch= new GraphicsLayer();
		var ptbirch=  new Point([-117.73312, 49.157855]);		
		var birchbank =  new TextSymbol("Birchbank Golf Course").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,4).setAngle(0);
        var grabirch = new Graphic(ptbirch,birchbank);
		birch.setMinScale(scale2);		
		birch.add(grabirch);
		map.addLayer(birch);

var casth= new GraphicsLayer();
		var ptcasth=  new Point([-117.6605, 49.3144]);		
		var castlegarh =  new TextSymbol("Castlegar Hospital").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(11,3).setAngle(0);
        var gracasth = new Graphic(ptcasth,castlegarh);
		casth.setMinScale(scale2);		
		casth.add(gracasth);
		map.addLayer(casth);
var castz= new GraphicsLayer();
		var ptcastz=  new Point([-117.661527, 49.317698]);		
		var castlegarz =  new TextSymbol("Castlegar Zinio Park").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-18,-10).setAngle(0);
        var gracastz = new Graphic(ptcastz,castlegarz);
		castz.setMinScale(scale2);		
		castz.add(gracastz);
		map.addLayer(castz);
var robs= new GraphicsLayer();
		var ptrobs=  new Point([-117.698275, 49.337031]);		
		var robsona =  new TextSymbol("Robson").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grarobs = new Graphic(ptrobs,robsona);
		robs.setMinScale(scale2);		
		robs.add(grarobs);
		map.addLayer(robs);
var scot= new GraphicsLayer();
		var ptscot=  new Point([-117.8297, 49.3427]);		
		var scotty =  new TextSymbol("Scottie's Marina").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,8).setAngle(0);
        var grascot = new Graphic(ptscot,scotty);
		scot.setMinScale(scale2);		
		scot.add(grascot);
		map.addLayer(scot);
var kelc= new GraphicsLayer();
		var ptkelc=  new Point([-119.477367, 49.862336]);		
		var kelownac =  new TextSymbol("Kelowna Raymer Ave WWTP").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-10).setAngle(0);
        var grakelc = new Graphic(ptkelc,kelownac);
		kelc.setMinScale(scale2);		
		kelc.add(grakelc);
		map.addLayer(kelc);
var verns= new GraphicsLayer();
		var ptverns=  new Point([-119.270723, 50.260617]);		
		var vernonscience =  new TextSymbol("Vernon Science Centre").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(8,8).setAngle(0);
        var graverns = new Graphic(ptverns,vernonscience);
		verns.setMinScale(scale2);		
		verns.add(graverns);
		map.addLayer(verns);
var kamf= new GraphicsLayer();
		var ptkamf=  new Point([-120.334016, 50.67477]);		
		var kamloopsf =  new TextSymbol("Kamloops Federal Building").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,8).setAngle(0);
        var grakamf = new Graphic(ptkamf,kamloopsf);
		kamf.setMinScale(scale2);		
		kamf.add(grakamf);
		map.addLayer(kamf);
var gold= new GraphicsLayer();
		var ptgold=  new Point([-116.966, 51.2975]);		
		var golden =  new TextSymbol("Golden Helipad").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,8).setAngle(0);
        var gragold = new Graphic(ptgold,golden);
		gold.setMinScale(scale2);		
		gold.add(gragold);
		map.addLayer(gold);
var willc= new GraphicsLayer();
		var ptwillc=  new Point([-122.150391, 52.14428]);		
		var willcol =  new TextSymbol("Williams Lake Columneetza School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,8).setAngle(0);
        var grawillc = new Graphic(ptwillc,willcol);
		willc.setMinScale(scale2);		
		willc.add(grawillc);
		map.addLayer(willc);
// var qss= new GraphicsLayer();
	//	var ptqss=  new Point([-122.493227, 52.981686]);		
	//	var quesnelss =  new TextSymbol("Quesnel Senior Secondary").setColor(
	//	new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-10).setAngle(0);
    //  var graqss = new Graphic(ptqss,quesnelss);
	//	qss.setMinScale(scale2);		
	//	qss.add(graqss);
	//	map.addLayer(qss);

var qms= new GraphicsLayer();
	var ptqms=  new Point([-122.49364, 52.97951]);		
	var quesnelms =  new TextSymbol("Quesnel Kinchant St").setColor(
	new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-10).setAngle(0);
    var graqms = new Graphic(ptqms,quesnelms);
	qms.setMinScale(scale2);		
	qms.add(graqms);
	map.addLayer(qms);    

var harmm= new GraphicsLayer();
		var ptharmm=  new Point([-123.8475, 49.1352]);		
		var harmmet =  new TextSymbol("Harmac Pacific").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graharmm = new Graphic(ptharmm,harmmet);
		harmm.setMinScale(scale2);		
		harmm.add(graharmm);
		map.addLayer(harmm);
var harmn= new GraphicsLayer();
		var ptharmn=  new Point([-123.87873, 49.14522]);		
		var harmnan =  new TextSymbol("Harmac Nanaimo Duke Point").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-8).setAngle(0);
        var graharmn = new Graphic(ptharmn,harmnan);
		harmn.setMinScale(scale2);		
		harmn.add(graharmn);
		map.addLayer(harmn);
var prw= new GraphicsLayer();
		var ptprw=  new Point([-124.558104, 49.886894]);		
		var powellwild =  new TextSymbol("Powell River Wildwood").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graprw = new Graphic(ptprw,powellwild);
		prw.setMinScale(scale2);		
		prw.add(graprw);
		map.addLayer(prw);
var prp= new GraphicsLayer();
		var ptprp=  new Point([-124.5556, 49.8742]);		
		var powellpacifica =  new TextSymbol("Powell River Pacifica").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(19,2).setAngle(0);
        var graprp = new Graphic(ptprp,powellpacifica);
		prp.setMinScale(scale2);		
		prp.add(graprp);
		map.addLayer(prp);
var prc= new GraphicsLayer();
		var ptprc=  new Point([-124.521819, 49.866905]);		
		var powellcranberry =  new TextSymbol("Powell River Cranberry Lake").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(10,-4).setAngle(0);
        var graprc = new Graphic(ptprc,powellcranberry);
		prc.setMinScale(scale2);		
		prc.add(graprc);
		map.addLayer(prc);
var prtmel= new GraphicsLayer();
		var ptprtmel=  new Point([-123.4822, 49.5228]);		
		var portmellon =  new TextSymbol("Port Mellon").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,-4).setAngle(0);
        var graprtmel = new Graphic(ptprtmel,portmellon);
		prtmel.setMinScale(scale2);		
		prtmel.add(graprtmel);
		map.addLayer(prtmel);	
var hopo= new GraphicsLayer();
		var pthopo=  new Point([-121.3653, 49.3828]);		
		var hopeothello =  new TextSymbol("Hope Othello Compressor Station").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grahopo = new Graphic(pthopo,hopeothello);
		hopo.setMinScale(scale2);		
		hopo.add(grahopo);
		map.addLayer(hopo);
var granda= new GraphicsLayer();
		var ptgranda=  new Point([-118.4269, 49.0147]);		
		var grandairport =  new TextSymbol("Grand Forks Airport").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-9,-8).setAngle(0);
        var gragranda = new Graphic(ptgranda,grandairport);
		granda.setMinScale(scale2);		
		granda.add(gragranda);
		map.addLayer(granda);
var celp= new GraphicsLayer();
		var ptcelp=  new Point([-117.7188, 49.3333]);		
		var celgarpulp =  new TextSymbol("Celgar Pulp").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-11,-8).setAngle(0);
        var gracelp = new Graphic(ptcelp,celgarpulp);
		celp.setMinScale(scale2);		
		celp.add(gracelp);
		map.addLayer(celp);
var merr= new GraphicsLayer();
		var ptmerr=  new Point([-120.7921, 50.105]);		
		var merrittmet =  new TextSymbol("Merritt Parcel Street").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-8).setAngle(0);
        var gramerr = new Graphic(ptmerr,merrittmet);
		merr.setMinScale(scale2);		
		merr.add(gramerr);
		map.addLayer(merr);
var ains= new GraphicsLayer();
		var ptains=  new Point([-121.366121, 51.653438]);		
		var ainsworth =  new TextSymbol("Ainsworth 100 Mile").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graains = new Graphic(ptains,ainsworth);
		ains.setMinScale(scale2);		
		ains.add(graains);
		map.addLayer(ains);	
var goldl= new GraphicsLayer();
		var ptgoldl=  new Point([-116.9717, 51.2956]);		
		var goldenlady =  new TextSymbol("Golden Lady Grey School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,-4).setAngle(0);
        var gragoldl = new Graphic(ptgoldl,goldenlady);
		goldl.setMinScale(scale2);		
		goldl.add(gragoldl);
		map.addLayer(goldl);
var quescp= new GraphicsLayer();
		var ptquescp=  new Point([-122.4883, 52.9919]);		
		var quesnelcp =  new TextSymbol("Quesnel CP").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(11,4).setAngle(0);
        var graquescp = new Graphic(ptquescp,quesnelcp);
		quescp.setMinScale(scale2);		
		quescp.add(graquescp);
		map.addLayer(quescp);
var valef= new GraphicsLayer();
		var ptvalef=  new Point([-119.269821, 52.832459]);		
		var valemontfire =  new TextSymbol("Valemount").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-1).setAngle(0);
        var gravalef = new Graphic(ptvalef,valemontfire);
		valef.setMinScale(scale2);		
		valef.add(gravalef);
		map.addLayer(valef);
var pgmm= new GraphicsLayer();
		var ptpgmm=  new Point([-122.6672, 53.845]);		
		var pgmarmet =  new TextSymbol("PG Marsulex").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grapgmm = new Graphic(ptpgmm,pgmarmet);
		pgmm.setMinScale(scale2);		
		pgmm.add(grapgmm);
		map.addLayer(pgmm);	
var pgma= new GraphicsLayer();
		var ptpgma=  new Point([-122.7344, 53.8416]);		
		var pgmarac =  new TextSymbol("Prince George Marsulex Acid Plant").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-4).setAngle(0);
        var grapgma = new Graphic(ptpgma,pgmarac);
		pgma.setMinScale(scale2);		
		pgma.add(grapgma);
		map.addLayer(pgma);
var pgcbc= new GraphicsLayer();
		var ptpgcbc=  new Point([-122.703963, 53.90339]);		
		var pgcbctrans =  new TextSymbol("Prince George CBC Transmitter").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(6,-8).setAngle(0);
        var grapgcbc = new Graphic(ptpgcbc,pgcbctrans);
		pgcbc.setMinScale(scale2);		
		pgcbc.add(grapgcbc);
		map.addLayer(pgcbc);
var pgj= new GraphicsLayer();
		var ptpgj=  new Point([-122.713337, 53.908018]);		
		var pgjail =  new TextSymbol("Prince George Jail").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(9,2).setAngle(0);
        var grapgj = new Graphic(ptpgj,pgjail);
		pgj.setMinScale(scale2);		
		pgj.add(grapgj);
		map.addLayer(pgj);
var pgpm= new GraphicsLayer();
		var ptpgpm=  new Point([-122.6861, 53.9244]);		
		var pgpulpmet =  new TextSymbol("Prince George Pulp").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(9,4).setAngle(0);
        var grapgpm = new Graphic(ptpgpm,pgpulpmet);
		pgpm.setMinScale(scale2);		
		pgpm.add(grapgpm);
		map.addLayer(pgpm);
var pgep= new GraphicsLayer();
		var ptpgep=  new Point([-122.734049, 53.905139]);		
		var pgexploration =  new TextSymbol("Prince George Exploration Place").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-12,-12).setAngle(0);
        var grapgep = new Graphic(ptpgep,pgexploration);
		pgep.setMinScale(scale2);		
		pgep.add(grapgep);
		map.addLayer(pgep);
var pgpl= new GraphicsLayer();
		var ptpgpl=  new Point([-122.74194, 53.91472]);		
		var pgplaza =  new TextSymbol("Prince George Plaza").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-15).setAngle(0);
        var grapgpl = new Graphic(ptpgpl,pgplaza);
		pgpl.setMinScale(scale2);		
		pgpl.add(grapgpl);
		map.addLayer(pgpl);
//var pgde= new GraphicsLayer();
//		var ptpgde=  new Point([-122.74270, 53.91684]);		
//		var pgdistrict =  new TextSymbol("Prince George District Energy Bldg").setColor(
//		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,10).setAngle(0);
//      var grapgde = new Graphic(ptpgde,pgdistrict);
//		pgde.setMinScale(scale2);		
//		pgde.add(grapgde);
//		map.addLayer(pgde);
var pgla= new GraphicsLayer();
		var ptpgla=  new Point([-122.7958, 53.9156]);		
		var pglakewood =  new TextSymbol("Prince George Lakewood").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,4).setAngle(0);
        var grapgla = new Graphic(ptpgla,pglakewood);
		pgla.setMinScale(scale2);		
		pgla.add(grapgla);
		map.addLayer(pgla);
var pggs= new GraphicsLayer();
		var ptpggs=  new Point([-122.776, 53.996]);		
		var pgglenview =  new TextSymbol("Prince George Glenview School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grapggs = new Graphic(ptpggs,pgglenview);
		pggs.setMinScale(scale2);		
		pggs.add(grapggs);
		map.addLayer(pggs);	
var vandc= new GraphicsLayer();
		var ptvandc=  new Point([-124.005724, 54.016476]);		
		var vancourthouse =  new TextSymbol("Vanderhoof Courthouse").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gravandc = new Graphic(ptvandc,vancourthouse);
		vandc.setMinScale(scale2);		
		vandc.add(gravandc);
		map.addLayer(vandc);
var vandb= new GraphicsLayer();
		var ptvandb=  new Point([-124.0061, 54.0163]);		
		var vanbam =  new TextSymbol("Vanderhoof").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,-10).setAngle(0);
        var gravandb = new Graphic(ptvandb,vanbam);
		vandb.setMinScale(scale2);		
		vandb.add(gravandb);
		map.addLayer(vandb);
var flem= new GraphicsLayer();
		var ptflem=  new Point([-125.095833, 54.034444]);		
		var fraserlake =  new TextSymbol("Fraser Lake Endako Mines").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,-10).setAngle(0);
        var graflem = new Graphic(ptflem,fraserlake);
		flem.setMinScale(scale2);		
		flem.add(graflem);
		map.addLayer(flem);
var blse= new GraphicsLayer();
		var ptblse=  new Point([-125.4495, 54.1527]);		
		var burnslakesher =  new TextSymbol("Burns Lake Sheraton East").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,-10).setAngle(0);
        var grablse = new Graphic(ptblse,burnslakesher);
		blse.setMinScale(scale2);		
		blse.add(grablse);
		map.addLayer(blse);
var blfc= new GraphicsLayer();
		var ptblfc=  new Point([-125.764354, 54.230731]);		
		var burnslakefire =  new TextSymbol("Burns Lake Fire Centre").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,-10).setAngle(0);
        var grablfc = new Graphic(ptblfc,burnslakefire);
		blfc.setMinScale(scale2);		
		blfc.add(grablfc);
		map.addLayer(blfc);	
var hous= new GraphicsLayer();
		var pthous=  new Point([-126.641604, 54.398289]);		
		var houstonfire =  new TextSymbol("Houston Firehall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(14,-6).setAngle(0);
        var grahous = new Graphic(pthous,houstonfire);
		hous.setMinScale(scale2);		
		hous.add(grahous);
		map.addLayer(hous);
var telk= new GraphicsLayer();
		var pttelk=  new Point([-127.05434, 54.691479]);		
		var telkwa =  new TextSymbol("Telkwa").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,6).setAngle(0);
        var gratelk = new Graphic(pttelk,telkwa);
		telk.setMinScale(scale2);		
		telk.add(gratelk);
		map.addLayer(telk);
var smsj= new GraphicsLayer();
		var ptsmsj=  new Point([-127.16854, 54.77849]);		
		var smithers =  new TextSymbol("Smithers Muheim Memorial").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(5,0).setAngle(0);
        var grasmsj = new Graphic(ptsmsj,smithers);
		smsj.setMinScale(scale2);		
		smsj.add(grasmsj);
		map.addLayer(smsj);
var stew= new GraphicsLayer();
		var ptstew=  new Point([-129.985, 55.9381]);		
		var stewart =  new TextSymbol("Stewart Youth Centre").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grastew = new Graphic(ptstew,stewart);
		stew.setMinScale(scale2);		
		stew.add(grastew);
		map.addLayer(stew);	
var terrs= new GraphicsLayer();
		var ptterrs=  new Point([-128.6075, 54.52167]);		
		var terracesk =  new TextSymbol("Terrace Skeena Middle School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-18,-12).setAngle(0);
        var graterrs = new Graphic(ptterrs,terracesk);
		terrs.setMinScale(scale2);		
		terrs.add(graterrs);
		map.addLayer(terrs);
var kitws= new GraphicsLayer();
		var ptkitws=  new Point([-128.639131, 54.066909]);		
		var kitwhitesail =  new TextSymbol("Kitimat Whitesail").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grakitws = new Graphic(ptkitws,kitwhitesail);
		kitws.setMinScale(scale2);		
		kitws.add(grakitws);
		map.addLayer(kitws);
var kitrl= new GraphicsLayer();
		var ptkitrl=  new Point([-128.671436, 54.05389]);		
		var kitriverlodge =  new TextSymbol("Kitimat Riverlodge").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-15,-6).setAngle(0);
        var grakitrl = new Graphic(ptkitrl,kitriverlodge);
		kitrl.setMinScale(scale2);		
		kitrl.add(grakitrl);
		map.addLayer(kitrl);
var kithr= new GraphicsLayer();
		var ptkithr=  new Point([-128.70269, 54.029194]);		
		var kithaulroad =  new TextSymbol("Kitimat Haul Road").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(11,-4).setAngle(0);
        var grakithr = new Graphic(ptkithr,kithaulroad);
		kithr.setMinScale(scale2);		
		kithr.add(grakithr);
		map.addLayer(kithr);
var kityc= new GraphicsLayer();
		var ptkityc=  new Point([-128.691956, 53.999750]);		
		var kityachtclub =  new TextSymbol("Kitimat Yacht Club").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,-6).setAngle(0);
        var grakityc = new Graphic(ptkityc,kityachtclub);
		kityc.setMinScale(scale2);		
		kityc.add(grakityc);
		map.addLayer(kityc);
var kithv= new GraphicsLayer();
		var ptkithv=  new Point([-128.650768, 53.973228]);		
		var kithaisla =  new TextSymbol("Kitimat Haisla Village").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grakithv = new Graphic(ptkithv,kithaisla);
		kithv.setMinScale(scale2);		
		kithv.add(grakithv);
		map.addLayer(kithv);
var kitia= new GraphicsLayer();
		var ptkitia=  new Point([-128.688, 54.061]);		
		var kitindus =  new TextSymbol("Kitimat Industrial Ave").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grakitia = new Graphic(ptkitia,kitindus);
		kitia.setMinScale(scale2);		
		kitia.add(grakitia);
		map.addLayer(kitia);    
var prrp= new GraphicsLayer();
		var ptprrp=  new Point([-130.3269, 54.3064]);		
		var princerupertrp =  new TextSymbol("Prince Rupert Roosevelt Park School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,-6).setAngle(0);
        var graprrp = new Graphic(ptprrp,princerupertrp);
		prrp.setMinScale(scale2);		
		prrp.add(graprrp);
		map.addLayer(prrp);
var prfv= new GraphicsLayer();
		var ptprfv=  new Point([-130.352188, 54.292615]);		
		var princerupertfv =  new TextSymbol("Prince Rupert Fairview").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,-6).setAngle(0);
        var graprfv = new Graphic(ptprfv,princerupertfv);
		prfv.setMinScale(scale2);		
		prfv.add(graprfv);
		map.addLayer(prfv);    
var kwoen= new GraphicsLayer();
		var ptkwoen=  new Point([-121.7047, 55.3778]);		
		var kwoengp =  new TextSymbol("Kwoen Gas Plant").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grakwoen = new Graphic(ptkwoen,kwoengp);
		kwoen.setMinScale(scale2);		
		kwoen.add(grakwoen);
		map.addLayer(kwoen);
var prgp= new GraphicsLayer();
		var ptprgp=  new Point([-121.928814, 55.570022]);		
		var pinerivergp =  new TextSymbol("Pine River Gas Plant").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graprgp = new Graphic(ptprgp,pinerivergp);
		prgp.setMinScale(scale2);		
		prgp.add(graprgp);
		map.addLayer(prgp);	
var prh= new GraphicsLayer();
		var ptprh=  new Point([-121.99348, 55.601678]);		
		var pineriverhas =  new TextSymbol("Pine River Hasler").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graprh = new Graphic(ptprh,pineriverhas);
		prh.setMinScale(scale2);		
		prh.add(graprh);
		map.addLayer(prh);
var bess= new GraphicsLayer();
		var ptbess=  new Point([-120.483611, 55.791944]);		
		var bessborough =  new TextSymbol("Bessborough 237 Road").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var grabess = new Graphic(ptbess,bessborough);
		bess.setMinScale(scale2);		
		bess.add(grabess);
		map.addLayer(bess);	
var farming= new GraphicsLayer();
		var ptfarming=  new Point([-120.53157, 55.913233]);		
		var farmington =  new TextSymbol("Farmington Municipal Hall").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var grafarming = new Graphic(ptfarming,farmington);
		farming.setMinScale(scale2);		
		farming.add(grafarming);
		map.addLayer(farming);
var tsh= new GraphicsLayer();
		var pttsh=  new Point([-120.662779, 56.105871]);		
		var taylorsouth =  new TextSymbol("Taylor South Hill").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var gratsh = new Graphic(pttsh,taylorsouth);
		tsh.setMinScale(scale2);		
		tsh.add(gratsh);
		map.addLayer(tsh);
var tts= new GraphicsLayer();
		var pttts=  new Point([-120.686985, 56.150186]);		
		var taylortown =  new TextSymbol("Taylor Townsite").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var gratts = new Graphic(pttts,taylortown);
		tts.setMinScale(scale2);		
		tts.add(gratts);
		map.addLayer(tts);
var fsjof= new GraphicsLayer();
		var ptfsjof=  new Point([-120.825713, 56.200587]);		
		var fsjoldfort =  new TextSymbol("Fort St John Old Fort").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(13,1).setAngle(0);
        var grafsjof = new Graphic(ptfsjof,fsjoldfort);
		fsjof.setMinScale(scale2);		
		fsjof.add(grafsjof);
		map.addLayer(fsjof);
var fsjnc= new GraphicsLayer();
		var ptfsjnc=  new Point([-120.9026, 56.200998]);		
		var fsjnorthcamp =  new TextSymbol("Fort St John North Camp").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-11,-6).setAngle(0);
        var grafsjnc = new Graphic(ptfsjnc,fsjnorthcamp);
		fsjnc.setMinScale(scale2);		
		fsjnc.add(grafsjnc);
		map.addLayer(fsjnc);
var fsj85= new GraphicsLayer();
		var ptfsj85=  new Point([-120.853895, 56.231792]);		
		var fsj85ave =  new TextSymbol("Fort St John 85th Avenue").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(12,-3).setAngle(0);
        var grafsj85 = new Graphic(ptfsj85,fsj85ave);
		fsj85.setMinScale(scale2);		
		fsj85.add(grafsj85);
		map.addLayer(fsj85);
var fsjklc= new GraphicsLayer();
		var ptfsjklc=  new Point([-120.856111, 56.244722]);		
		var fsjkeylearning =  new TextSymbol("Fort St John Key Learning Centre").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-11,-12).setAngle(0);
        var grafsjklc = new Graphic(ptfsjklc,fsjkeylearning);
		fsjklc.setMinScale(scale2);		
		fsjklc.add(grafsjklc);
		map.addLayer(fsjklc);	
var cran= new GraphicsLayer();
		var ptcran=  new Point([-115.7537, 49.5071]);		
		var cranbrook =  new TextSymbol("Cranbrook Muriel Baxter").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-8,-5).setAngle(0);
        var grapcran = new Graphic(ptcran,cranbrook);
		cran.setMinScale(scale2);		
		cran.add(grapcran);
		map.addLayer(cran);	
var pvaf= new GraphicsLayer();
		var ptpvaf=  new Point([-121.41944, 56.231213]);		
		var peacevalley =  new TextSymbol("Peace Valley Attachie Flat Upper Terrace").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-8,-10).setAngle(0);
        var grapvaf = new Graphic(ptpvaf,peacevalley);
		pvaf.setMinScale(scale2);		
		pvaf.add(grapvaf);
		map.addLayer(pvaf);	
var blue= new GraphicsLayer();
		var ptblue=  new Point([-121.10429, 56.701655]);		
		var blueberry =  new TextSymbol("Blueberry River First Nation School").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grablue = new Graphic(ptblue,blueberry);
		blue.setMinScale(scale2);		
		blue.add(grablue);
		map.addLayer(blue);	
    
var vancd= new GraphicsLayer();
		var ptvancd=  new Point([-123.077811, 49.260290]);		
		var vanclarkdr =  new TextSymbol("Vancouver Clark Drive").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gravancd = new Graphic(ptvancd,vanclarkdr);
		vancd.setMinScale(scale2);		
		vancd.add(gravancd);
		map.addLayer(vancd);	    
    
//var nels= new GraphicsLayer();
//		var ptnels=  new Point([-117.290909, 49.489039]);		
//		var nelson =  new TextSymbol("Nelson Kutenai Place").setColor(
//		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(4,-10).setAngle(0);
//      var granels = new Graphic(ptnels,nelson);
//		nels.setMinScale(scale2);		
//		nels.add(granels);
//		map.addLayer(nels);
    
//var pgmam= new GraphicsLayer();
//		var ptpgmam=  new Point([-122.79525, 53.906819]);		
//		var prgmam =  new TextSymbol("Prince George 18th Avenue MAML").setColor(
//		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_END).setOffset(-4,4).setAngle(0);
//        var grapgmam = new Graphic(ptpgmam,prgmam);
//		pgmam.setMinScale(scale2);		
//		pgmam.add(grapgmam);
//		map.addLayer(pgmam);	     


//AQHI Zones
		var nw= new GraphicsLayer();
		var ptnw=  new Point([-123.400, 49.340]);		
		var mvnw =  new TextSymbol("Metro Vancouver NW").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var granw = new Graphic(ptnw,mvnw);
		nw.setMinScale(scale2);		
		nw.add(granw);	
        map.addLayer(nw);
		
		var mvcfv= new GraphicsLayer();
		var ptmvcfv=  new Point([-122.441, 49.081]);		
		var mvcentralfraser =  new TextSymbol("Central Fraser Valley").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var gramvcfv = new Graphic(ptmvcfv,mvcentralfraser);
		mvcfv.setMinScale(scale2);		
		mvcfv.add(gramvcfv);	
        map.addLayer(mvcfv);
		
		var efv= new GraphicsLayer();
		var ptefv=  new Point([-121.978, 49.309]);		
		var eastfraser =  new TextSymbol("Eastern Fraser Valley").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var graefv = new Graphic(ptefv,eastfraser);
		efv.setMinScale(scale2);		
		efv.add(graefv);	
        map.addLayer(efv);
		
		var mvsw= new GraphicsLayer();
		var ptmvsw=  new Point([-123.267, 49.082]);		
		var mvsouthwest =  new TextSymbol("Metro Vancouver SW").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var gramvsw = new Graphic(ptmvsw,mvsouthwest);
		mvsw.setMinScale(scale2);		
		mvsw.add(gramvsw);	
        map.addLayer(mvsw);
		
		var mvnes= new GraphicsLayer();
		var ptmvnes=  new Point([-122.791, 49.313]);		
		var mvnortheast =  new TextSymbol("Metro Vancouver NE").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var gramvnes = new Graphic(ptmvnes,mvnortheast);
		mvnes.setMinScale(scale2);		
		mvnes.add(gramvnes);	
        map.addLayer(mvnes);
		
		var mvse= new GraphicsLayer();
		var ptmvse=  new Point([-122.873, 49.057]);		
		var mvsoutheast =  new TextSymbol("Metro Vancouver SE").setColor(
		new Color([89,89,89])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(0,0);
        var gramvse = new Graphic(ptmvse,mvsoutheast);
		mvse.setMinScale(scale2);		
		mvse.add(gramvse);	
        map.addLayer(mvse);
var crofte= new GraphicsLayer();
		var ptcrofte=  new Point([-123.64388889, 48.860000]);		
		var croftone =  new TextSymbol("Crofton Elementary").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(20,0).setAngle(0);
        var gracrofte = new Graphic(ptcrofte,croftone);
		crofte.setMinScale(scale2);		
		crofte.add(gracrofte);
		map.addLayer(crofte);	
		
var kelk= new GraphicsLayer();
		var ptkelk=  new Point([-119.467461, 49.862119]);		
		var kelownak =  new TextSymbol("Kelowna KLO Road").setColor(
		new Color([0,0,0])).setFont(labelfont).setAlign(TextSymbol.ALIGN_START).setOffset(12,0).setAngle(0);
        var grakelk = new Graphic(ptkelk,kelownak);
		kelk.setMinScale(scale2);		
		kelk.add(grakelk);
		map.addLayer(kelk);
});		
		

