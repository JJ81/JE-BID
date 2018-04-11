(function ($, win) {
	// cached element and class name.
	var btnTabNotice = $('.new-jebid-multi-notice-tab-wrp'),
		btnTabLink = $('.new-jebid-multi-notice-tab-link'),
		noticeBoard = $('.new-jebid-notice-board'),
		linkActiveClassName = 'new-jebid-multi-notice-tab__active',
		blindClassName = 'new-jebid-blind';
	
	
	// delegate event from its parent to target link and show&hide its own board.
	btnTabNotice.delegate('a', 'click', function () {
		var target = $(this), idx = target.parent().index();
		
		btnTabLink.removeClass(linkActiveClassName);
		target.addClass(linkActiveClassName);
		
		noticeBoard.addClass(blindClassName);
		$('.new-jebid-notice-tab-0'+parseInt(idx+1,10)).removeClass(blindClassName);
	});
	
	// follow up page scroll
	var
		subpageContents = $('.new-jebid-subpage-contents'),
		subLeftArea = $('.new-jebid-sub-left-area');
	
	$(win).bind('scroll', function () {
		var scrollTop = getCurrentScrollTop();
		console.log(scrollTop);
		
		if(scrollTop >= 128){
			subpageContents.addClass('new-jebid-left-area-active');
			subLeftArea.addClass('new-jebid-fixed-left');
		}else{
			subpageContents.removeClass('new-jebid-left-area-active');
			subLeftArea.removeClass('new-jebid-fixed-left');
		}
		
	});
	
	
	function getCurrentScrollTop(){
		return $(win).scrollTop();
	}

}(jQuery, window));