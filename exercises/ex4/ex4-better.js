var Widget = {
    init: function Widget(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    render: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
}

var Button = Object.create(Widget);

Button.setup =function (width, height, label) {
	this.init(width, height);
    this.label = label;
	this.$elem = $("<button>").text(this.label);
}

Button.show = function($where) {
	this.render($where);
    this.$elem.click(this.onClick.bind(this));
}

Button.onClick = function(evt) {
    console.log("Button " + this.label + " clicked!");
}

$(document).ready(function(){
	var $body = $(document.body);
	var btn1 = Object.create(Button);
    btn1.setup(100,50,'Hey 1');
	var btn2 = Object.create(Button);
    btn2.setup(50,100, 'Whazzup 2');

	btn1.show($body);
	btn2.show($body);
});