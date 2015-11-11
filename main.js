$(function() {

	$('.candidate div.votes a').on('click', function(e) {
		e.preventDefault();

		var $counter = $(this).siblings('span'),
			$parent = $(this).parent(),
			candidate = $parent.parent().data('candidate');

		$counter.text(parseInt($counter.text()) + 1);

		$.post('index.php', {'vote':candidate});
	});

	$('.candidate div.votes a').on('mouseenter', function(e) {
		if (!$(this).parent().hasClass('active-vote')) return;

		$(this).text('Remove vote');
	}).on('mouseleave', function(e) {
		if (!$(this).parent().hasClass('active-vote')) return;

		$(this).text('Voted');
	})

});
