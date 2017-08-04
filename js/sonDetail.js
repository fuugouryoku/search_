function openTab(type,titles){
    var header = $summer.byId('header');
    var headerPos = $summer.offset(header);    
    var footer = $summer.byId('footer');
    var footerPos = $summer.offset(footer); 
	
    var width = $summer.winWidth();//==320
    var height = $summer.winHeight()-footerPos.h-headerPos.h;//gct:计算frame的高  
    $('#h-title').html(titles);    
	summer.openFrame({
		name: type,
		url: 'html/'+ type +'.html',
		rect: {
			x: 0,
			y: headerPos.h,
			w: width,
			h: height
		},
	});       
}
summerready=function(){
	openTab('message','消息');
}

 