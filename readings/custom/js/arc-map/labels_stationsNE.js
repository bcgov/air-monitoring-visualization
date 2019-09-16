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




var kwoen= new GraphicsLayer();
		var ptkwoen=  new Point([-121.7047, 55.3778]);		
		var kwoengp =  new TextSymbol("Kwoen Gas Plant_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grakwoen = new Graphic(ptkwoen,kwoengp);
		kwoen.setMinScale(scale2);		
		kwoen.add(grakwoen);
		map.addLayer(kwoen);
var prgp= new GraphicsLayer();
		var ptprgp=  new Point([-121.928814, 55.570022]);		
		var pinerivergp =  new TextSymbol("Pine River Gas Plant_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graprgp = new Graphic(ptprgp,pinerivergp);
		prgp.setMinScale(scale2);		
		prgp.add(graprgp);
		map.addLayer(prgp);	
var prh= new GraphicsLayer();
		var ptprh=  new Point([-121.99348, 55.601678]);		
		var pineriverhas =  new TextSymbol("Pine River Hasler_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var graprh = new Graphic(ptprh,pineriverhas);
		prh.setMinScale(scale2);		
		prh.add(graprh);
		map.addLayer(prh);
var pouce= new GraphicsLayer();
		var ptpouce=  new Point([-120.132649, 55.634323]);		
		var poucecoup =  new TextSymbol("Pouce Coupe 200 Road BCOGC CAMEL").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var grapouce = new Graphic(ptpouce,poucecoup);
		pouce.setMinScale(scale2);		
		pouce.add(grapouce);
		map.addLayer(pouce);
var bess= new GraphicsLayer();
		var ptbess=  new Point([-120.483611, 55.791944]);		
		var bessborough =  new TextSymbol("Bessborough 237 Road").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var grabess = new Graphic(ptbess,bessborough);
		bess.setMinScale(scale2);		
		bess.add(grabess);
		map.addLayer(bess);	
var rolla= new GraphicsLayer();
		var ptrolla=  new Point([-120.16901, 55.90761]);		
		var rollaroad =  new TextSymbol("Rolla 213 Road").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var grarolla = new Graphic(ptrolla,rollaroad);
		rolla.setMinScale(scale2);		
		rolla.add(grarolla);
		map.addLayer(rolla);
var tsh= new GraphicsLayer();
		var pttsh=  new Point([-120.662779, 56.105871]);		
		var taylorsouth =  new TextSymbol("Taylor South Hill_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var gratsh = new Graphic(pttsh,taylorsouth);
		tsh.setMinScale(scale2);		
		tsh.add(gratsh);
		map.addLayer(tsh);
var tts= new GraphicsLayer();
		var pttts=  new Point([-120.686985, 56.150186]);		
		var taylortown =  new TextSymbol("Taylor Townsite_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,6).setAngle(0);
        var gratts = new Graphic(pttts,taylortown);
		tts.setMinScale(scale2);		
		tts.add(gratts);
		map.addLayer(tts);
var tlw= new GraphicsLayer();
		var pttlw=  new Point([-120.67594, 56.16013]);		
		var taylorlone =  new TextSymbol("Taylor Lone Wolf Golf Course").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var gratlw = new Graphic(pttlw,taylorlone);
		tlw.setMinScale(scale2);		
		tlw.add(gratlw);
		map.addLayer(tlw);
var fsjof= new GraphicsLayer();
		var ptfsjof=  new Point([-120.825713, 56.200587]);		
		var fsjoldfort =  new TextSymbol("Fort St John Old Fort_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grafsjof = new Graphic(ptfsjof,fsjoldfort);
		fsjof.setMinScale(scale2);		
		fsjof.add(grafsjof);
		map.addLayer(fsjof);
var fsjnc= new GraphicsLayer();
		var ptfsjnc=  new Point([-120.9026, 56.200998]);		
		var fsjnorthcamp =  new TextSymbol("Fort St John North Camp").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-6,-6).setAngle(0);
        var grafsjnc = new Graphic(ptfsjnc,fsjnorthcamp);
		fsjnc.setMinScale(scale2);		
		fsjnc.add(grafsjnc);
		map.addLayer(fsjnc);
var fsj85= new GraphicsLayer();
		var ptfsj85=  new Point([-120.853895, 56.231792]);		
		var fsj85ave =  new TextSymbol("Fort St John 85th Avenue_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,-6).setAngle(0);
        var grafsj85 = new Graphic(ptfsj85,fsj85ave);
		fsj85.setMinScale(scale2);		
		fsj85.add(grafsj85);
		map.addLayer(fsj85);
var fsjklc= new GraphicsLayer();
		var ptfsjklc=  new Point([-120.856111, 56.244722]);		
		var fsjkeylearning =  new TextSymbol("Fort St John Key Learning Centre").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-8,-12).setAngle(0);
        var grafsjklc = new Graphic(ptfsjklc,fsjkeylearning);
		fsjklc.setMinScale(scale2);		
		fsjklc.add(grafsjklc);
		map.addLayer(fsjklc);	
var pvaf= new GraphicsLayer();
		var ptpvaf=  new Point([-121.41944, 56.231213]);		
		var peacevalley =  new TextSymbol("Peace Valley Attachie Flat Upper Terrace_60").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_END).setOffset(-8,-10).setAngle(0);
        var grapvaf = new Graphic(ptpvaf,peacevalley);
		pvaf.setMinScale(scale2);		
		pvaf.add(grapvaf);
		map.addLayer(pvaf);	
var blue= new GraphicsLayer();
		var ptblue=  new Point([-121.10429, 56.701655]);		
		var blueberry =  new TextSymbol("Blueberry River First Nation School").setColor(
		new Color([0,0,0])).setFont(
		new Font("8pt").setWeight(Font.WEIGHT_BOLD)).setAlign(TextSymbol.ALIGN_START).setOffset(4,4).setAngle(0);
        var grablue = new Graphic(ptblue,blueberry);
		blue.setMinScale(scale2);		
		blue.add(grablue);
		map.addLayer(blue);			
		

});		
		

