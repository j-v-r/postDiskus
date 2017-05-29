'use strict';

var commentSubmitBtn = $('.submitComment');
var postSubmitBtn = $('#submitPost');

function createCommentHtml(string, date) {
	var commentHtml = '<div class="comment">';
	commentHtml += '<div class="arrow"></div>';
	commentHtml += '<p>' + string + '</p>';
	commentHtml += date;
	commentHtml += '</div>';
	return commentHtml;
}

function createPostHtml(title, post, date) {
	var postHtml = '<div class="container">';
	postHtml += '<div class="heading">';
	postHtml += '<h2>' + title + '</h2>';
	postHtml += date;
	postHtml += '</div>';
	postHtml += '<div class="content">';
	postHtml += '<p>' + post + '</p>';
	postHtml += '</div>';
	postHtml += '<div class="addComment">';
	postHtml += '<label for="commentTest">Comment:</label>';
	postHtml += '<textarea class="commentText" rows="4"></textarea>';
	postHtml += '<label for="submitPost">Add Your Comment:</label>';
	postHtml += '<button type="button" class="submitComment">Submit Comment</button>';
	postHtml += '</div>';
	postHtml += '</div>';
	return postHtml;
}

function addDate() {
	var d = new Date();
	var n = d.toLocaleDateString();
	// var dateHtml = '<p>' + n + '</p>';
	return n;
}

postSubmitBtn.click((e) => {
	var postings = $('#posting');
	var postTitle = document.getElementById('postTitle');
	var postTitleText = postTitle.value;
	var postContent = document.getElementById('postContent');
	var postContentText = postContent.value;

	var postHtml = createPostHtml(postTitleText, postContentText, addDate());

	$(postTitle).removeClass('error');
	$(postContent).removeClass('error');

	if(postTitleText == '' && postContentText == '') {
		$(postTitle).addClass('error');
		$(postContent).addClass('error');
	}
	else if(postContentText == '') {
		$(postContent).addClass('error');
	}
	else if(postTitleText == '') {
		$(postTitle).addClass('error');
	}
	else {
		$(postTitle).removeClass('error');
		$(postContent).removeClass('error');
		postings.append(postHtml);
		postTitle.value = '';
		postContent.value = '';
	}

});

$('#posting').on('click', 'button', (e) => {
	var thisAddCommentDiv = e.target.parentElement;
	var sumbitLabel = e.target.previousElementSibling;
	var commentText = sumbitLabel.previousElementSibling.value;
	var commentHtml = createCommentHtml(commentText, addDate());
	if(commentText == '') {
		$(sumbitLabel.previousElementSibling).addClass('error');
	}
	else {
		$(sumbitLabel.previousElementSibling).removeClass('error');
		$(commentHtml).insertBefore(thisAddCommentDiv);
	}
	sumbitLabel.previousElementSibling.value = '';
});











