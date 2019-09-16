require(["esri/map",
"esri/symbols/TextSymbol",
"esri/layers/GraphicsLayer",
"esri/Color",
"esri/graphic",
"esri/symbols/Font",
"esri/geometry/Point",
"dojo/domReady!"],

function(Map, TextSymbol, GraphicsLayer, Color, Graphic, Font, Point) {
        

var scale1 = 300000;	

var aqhifont = new Font ("12", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Calibri");	
		
		
		
		var vic= new GraphicsLayer();
		var ptv=  new Point([-123.363165,48.441942]);		
		var Victoria =  new TextSymbol("Victoria").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(16,-8);
        var grav = new Graphic(ptv,Victoria);
		vic.setMaxScale(scale1);		
		vic.add(grav);	
        map.addLayer(vic);

		var vicwc= new GraphicsLayer();
		var ptvwc=  new Point([-123.49278, 48.42389]);		
		var VictoriaWC =  new TextSymbol("West Shore").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-8);
        var gravwc = new Graphic(ptvwc,VictoriaWC);
		vicwc.setMaxScale(scale1);		
		vicwc.add(gravwc);	
        map.addLayer(vicwc);

		var dun= new GraphicsLayer();
		var ptdun=  new Point([-123.715846, 48.784854]);		
		var duncan =  new TextSymbol("Duncan").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-8);
        var gradun = new Graphic(ptdun,duncan);
		dun.setMaxScale(scale1);		
		dun.add(gradun);	
        map.addLayer(dun);
		
		var nan= new GraphicsLayer();
		var ptnan=  new Point([-123.99389, 49.20083]);		
		var nanaimo =  new TextSymbol("Nanaimo").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-15,-9);
        var granan = new Graphic(ptnan,nanaimo);
		nan.setMaxScale(scale1);		
		nan.add(granan);	
        map.addLayer(nan);
		
		var comv= new GraphicsLayer();
		var ptcomv=  new Point([-124.996222, 49.682603]);		
		var comoxvalley =  new TextSymbol("Comox Valley").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-14,-8);
        var gracomv = new Graphic(ptcomv,comoxvalley);
		comv.setMaxScale(scale1);		
		comv.add(gracomv);	
        map.addLayer(comv);
		
		var comv= new GraphicsLayer();
		var ptcomv=  new Point([-115.7537, 49.5071]);		
		var cranbrook =  new TextSymbol("Cranbrook").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(64,8);
        var gracomv = new Graphic(ptcomv,cranbrook);
		comv.setMaxScale(scale1);		
		comv.add(gracomv);	
        map.addLayer(comv);
				
		var whist= new GraphicsLayer();
		var ptwhist=  new Point([-122.960402, 50.144285]);		
		var whistler =  new TextSymbol("Whistler").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-12,8);
        var grawhist = new Graphic(ptwhist,whistler);
		whist.setMaxScale(scale1);		
		whist.add(grawhist);	
        map.addLayer(whist);
		
		var squam= new GraphicsLayer();
		var ptsquam=  new Point([-123.15133, 49.70516]);		
		var squamish =  new TextSymbol("Squamish").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(12,8);
        var grasquam = new Graphic(ptsquam,squamish);
		squam.setMaxScale(scale1);		
		squam.add(grasquam);	
        map.addLayer(squam);
		
		var sok= new GraphicsLayer();
		var ptsok=  new Point([-119.60, 49.5]);		
		var southokanagan =  new TextSymbol("South Okanagan").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(16,-10);
        var grasok = new Graphic(ptsok,southokanagan);
		sok.setMaxScale(scale1);		
		sok.add(grasok);	
        map.addLayer(sok);
		
		var cast= new GraphicsLayer();
		var ptcast=  new Point([-117.661527, 49.317698]);		
		var castlegar =  new TextSymbol("Castlegar").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(12,6);
        var gracast = new Graphic(ptcast,castlegar);
		cast.setMaxScale(scale1);		
		cast.add(gracast);	
        map.addLayer(cast);
		
		var cokan= new GraphicsLayer();
		var ptcokan=  new Point([-119.477367, 49.862336]);		
		var centralokanagan =  new TextSymbol("Central Okanagan").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(16,-2);
        var gracokan = new Graphic(ptcokan,centralokanagan);
		cokan.setMaxScale(scale1);		
		cokan.add(gracokan);	
        map.addLayer(cokan);
		
		var nokan= new GraphicsLayer();
		var ptnokan=  new Point([-119.270723, 50.260617]);		
		var northokanagan =  new TextSymbol("North Okanagan").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(12,6);
        var granokan = new Graphic(ptnokan,northokanagan);
		nokan.setMaxScale(scale1);		
		nokan.add(granokan);	
        map.addLayer(nokan);
		
		var kam= new GraphicsLayer();
		var ptkam=  new Point([-120.334016, 50.67477]);		
		var kamloops =  new TextSymbol("Kamloops").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-8);
        var grakam = new Graphic(ptkam,kamloops);
		kam.setMaxScale(scale1);		
		kam.add(grakam);	
        map.addLayer(kam);
		
		var wlk= new GraphicsLayer();
		var ptwlk=  new Point([-122.150391, 52.14428]);		
		var williamslake =  new TextSymbol("Williams Lake").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(12,6);
        var grawlk = new Graphic(ptwlk,williamslake);
		wlk.setMaxScale(scale1);		
		wlk.add(grawlk);	
        map.addLayer(wlk);
		
		var ques= new GraphicsLayer();
		var ptques=  new Point([-122.493227, 52.981686]);		
		var quesnel =  new TextSymbol("Quesnel").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(12,6);
        var graques = new Graphic(ptques,quesnel);
		ques.setMaxScale(scale1);		
		ques.add(graques);	
        map.addLayer(ques);
		
		var pgeo= new GraphicsLayer();
		var ptpgeo=  new Point([-122.74194, 53.91472]);		
		var princegeorge =  new TextSymbol("Prince George").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(13,8);
        var grapgeo = new Graphic(ptpgeo,princegeorge);
		pgeo.setMaxScale(scale1);		
		pgeo.add(grapgeo);	
        map.addLayer(pgeo);
		
		var fsj= new GraphicsLayer();
		var ptfsj=  new Point([-120.856111, 56.244722]);		
		var fortstjohn =  new TextSymbol("Fort St John").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-8);
        var grafsj = new Graphic(ptfsj,fortstjohn);
		fsj.setMaxScale(scale1);		
		fsj.add(grafsj);	
        map.addLayer(fsj);
		
		var smith= new GraphicsLayer();
		var ptsmith=  new Point([-127.16854, 54.77849]);		
		var smithers =  new TextSymbol("Smithers").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(5,10);
        var grasmith = new Graphic(ptsmith,smithers);
		smith.setMaxScale(scale1);		
		smith.add(grasmith);	
        map.addLayer(smith);
		
		var terr= new GraphicsLayer();
		var ptterr=  new Point([-128.6075, 54.52167]);		
		var terrace =  new TextSymbol("Terrace").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(16,-10);
        var graterr = new Graphic(ptterr,terrace);
		terr.setMaxScale(scale1);		
		terr.add(graterr);	
        map.addLayer(terr);	
		var bur= new GraphicsLayer();
		var ptbur=  new Point([-122.9711, 49.2794]);		
		var burrard =  new TextSymbol("Metro Vancouver NW").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-10,8);
        var grabur = new Graphic(ptbur,burrard);
		bur.setMaxScale(scale1);		
		bur.add(grabur);	
        map.addLayer(bur);
		
		var cfv= new GraphicsLayer();
		var ptcfv=  new Point([-122.3097, 49.0428]);		
		var centralfraser =  new TextSymbol("Central Fraser Valley").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(16,-10);
        var gracfv = new Graphic(ptcfv,centralfraser);
		cfv.setMaxScale(scale1);		
		cfv.add(gracfv);	
        map.addLayer(cfv);
		
		var efv= new GraphicsLayer();
		var ptefv=  new Point([-121.9406, 49.1561]);		
		var eastfraser =  new TextSymbol("Eastern Fraser Valley").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(10,8);
        var graefv = new Graphic(ptefv,eastfraser);
		efv.setMaxScale(scale1);		
		efv.add(graefv);	
        map.addLayer(efv);
		
		var frd= new GraphicsLayer();
		var ptfrd=  new Point([-123.082, 49.0099]);		
		var fraserriver =  new TextSymbol("Metro Vancouver SW").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_END).setOffset(-16,-6);
        var grafrd = new Graphic(ptfrd,fraserriver);
		frd.setMaxScale(scale1);		
		frd.add(grafrd);	
        map.addLayer(frd);
		
		var nes= new GraphicsLayer();
		var ptnes=  new Point([-122.7089, 49.2453]);		
		var northeast =  new TextSymbol("Metro Vancouver NE").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(4,16);
        var granes = new Graphic(ptnes,northeast);
		nes.setMaxScale(scale1);		
		nes.add(granes);	
        map.addLayer(nes);
		
		var las= new GraphicsLayer();
		var ptlas=  new Point([-122.5669, 49.0956]);		
		var langley =  new TextSymbol("Metro Vancouver SE").setColor(
		new Color([0,0,0])).setFont(aqhifont).setAlign(TextSymbol.ALIGN_START).setOffset(-5,-30);
        var gralas = new Graphic(ptlas,langley);
		las.setMaxScale(scale1);		
		las.add(gralas);	
        map.addLayer(las);
		
    
    
});			