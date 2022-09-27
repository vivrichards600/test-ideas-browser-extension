{
	const ideaMetaData = [
		{condition: e => e.maxLength !== undefined && e.maxLength !== -1, idea: ["Field has a max length attribute set, investigate if removing this is useful"]},
		{condition: e => e.required !== undefined && e.type !== 'hidden', idea: ["Field has a required attribute set, investigate if removing this is useful"]},
		{condition: e => e.tagName === "INPUT" && e.type === "text", idea: ["Field is of type text and so will accept anything, explore the input range."]},
		{condition: e => e.tagName === "INPUT" && e.type !== "text", idea: [`Field expects a particular input type, investigate if changing this is useful.`]},
		{condition: e => e.type === "hidden", idea: ["Does this hidden field have a value that looks useful to amend?"]}
	]

	const elements = document.querySelectorAll('a[href], button, input, textarea, select');

	function scanPage(ideas) {
		elements.forEach(input => {
			let haveAddedElement = false;
			ideas.forEach(metaIdea => {
				if (metaIdea.condition(input)) {
					if (haveAddedElement === false) {
						console.log(input);
						haveAddedElement = true;
					}
					console.log(metaIdea.idea[0]);
				}
			})
		});
	}

	scanPage(ideaMetaData);
}



