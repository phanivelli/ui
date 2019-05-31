var max_fields      = 10;
var wrapper         = $(".form-sec-child"); 
var add_button      = $(".add_field_button");
var remove_button   = $(".remove_field_button");

$(add_button).click(function(e){
	e.preventDefault();
	var total_fields = wrapper[0].childNodes.length;
	if(total_fields < max_fields){
		$(wrapper).append('<input type="text" name="childName" id="chilName" placeholder="Child Name"><button type="button" class="add_field_button">Add Field</button> <button type="button" class="remove_field_button">Remove Field</button>');
	}
});
$(remove_button).click(function(e){
	e.preventDefault();
	var total_fields = wrapper[0].childNodes.length;
	if(total_fields>1){
		wrapper[0].childNodes[total_fields-1].remove();
	}
});