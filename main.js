document.addEventListener('DOMContentLoaded', function () {
	const chat = document.getElementById('chatWindow');
	const openBtn = document.getElementById('openBtn');
	const closeBtn = document.getElementById('closeBtn');

	if (!chat || !openBtn || !closeBtn) return;

	// Use a body class to toggle visibility. This avoids inline-style conflicts
	// and works reliably with the stylesheet and preview tools.
	const body = document.body;

	// Ensure initial state (chat open)
	body.classList.remove('chat-closed');

	closeBtn.addEventListener('click', function () {
		body.classList.add('chat-closed');
		// move focus to the open button for keyboard users
		openBtn.focus();
	});

	openBtn.addEventListener('click', function () {
		body.classList.remove('chat-closed');
		// move focus into the chat input if present
		const input = chat.querySelector('input[type="text"]');
		if (input) input.focus();
	});
});
