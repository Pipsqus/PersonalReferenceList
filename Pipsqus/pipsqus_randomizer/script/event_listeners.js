document.querySelectorAll('.game_list').forEach(element => {
  element.addEventListener('click', function() {
    // Find the img tag anywhere within this element
    const img = this.querySelector('img');
    
	// Extract filename from src
	const filename = img.src.split('/').pop();
	const gameName = filename.split('.').shift();
	const functionName = gameName + '_getData';

	if (typeof window[functionName] === 'function') {
	window[functionName]();
	} else {
	console.error(`Function ${functionName} not found`);
	}
    
  });
});
