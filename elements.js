'use strict';

var getElementInfo = function detectElement() {
    var selectedElement = $0;
    var data = Object.create(null); // sets __proto__ to undefined
		if (selectedElement != null){
			
			if (selectedElement.maxLength != undefined) {
				data['maxLength'] = ({
					currentValue:selectedElement.maxLength,
					description:"The maxlength attribute specifies the maximum number of characters allowed in the <input> element.",
					helpUrl: "https://www.w3schools.com/tags/att_input_maxlength.asp",
					idea:"Remove or change the maxLength."
				});
			}
			if (selectedElement.required != undefined) {
				data['required'] = ({
					currentValue:selectedElement.required,
					description:"Required attributed when present, specifies that an input field must be filled out before submitting the form.", 
					helpUrl: "https://www.w3schools.com/tags/att_input_required.asp",
					idea:"Remove the required attribute."
				});
			}

			if (selectedElement.tagName === 'INPUT' && selectedElement.type != 'text') {
				data['input type="' + selectedElement.type + '"'] = ({
					currentValue:selectedElement.type,
					description:"The <input> element can be displayed in several ways, depending on the type attribute.", 
					helpUrl: "https://www.w3schools.com/tags/tag_input.asp",
					idea:"Change the type attribute value i.e. type='text'."
				});
			}

		}
		return data;
};

chrome.devtools.panels.elements.createSidebarPane('Test Ideas', function (sidebar) {
    var onSelectionChanged = function () {
		sidebar.setExpression('(' + getElementInfo.toString() + ')()');
    };
    onSelectionChanged();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(onSelectionChanged);
});
