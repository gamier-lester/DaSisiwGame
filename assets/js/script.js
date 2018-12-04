// $(".col-lg-1").on("mouseenter", function() {
// 	$(this).css("background-color", "white");
// });

// $(".col-lg-1").on("mouseleave", function() {
// 	$(this).css("background-color", "black");
// });

let leng = $(".col-lg-1");

let win1 = Math.floor((Math.random() * parseInt(leng.length) + 1));
let win2 = Math.floor((Math.random() * parseInt(leng.length) - 5));
let win3 = Math.floor((Math.random() * parseInt(leng.length) - 9));
let win4 = Math.floor((Math.random() * parseInt(leng.length) - 7));
let win5 = Math.floor((Math.random() * parseInt(leng.length) - 5));
let win6 = Math.floor((Math.random() * parseInt(leng.length) - 10));
let win7 = Math.floor((Math.random() * parseInt(leng.length) - 1));
let win8 = Math.floor((Math.random() * parseInt(leng.length) - 8));
let win9 = Math.floor((Math.random() * parseInt(leng.length) - 6));
let win10 = Math.floor((Math.random() * parseInt(leng.length) - 4));
let chosenone = 0;

$(".col-lg-1").on("click", function() {
	$(this).addClass("active");
	$(this).css("background-color", "black");
	let x = $(this).text();
	// alert(x);
	chosenone = parseInt(x);

	switch(chosenone) {
		case win1:
		alert('Nanalo ka ng sisiw');
		break;

		case win2:
		alert('Nanalo ka ng gameboy');
		break;

		case win3:
		alert('Nanalo ka ng wala');
		break;

		case win4:
		alert('Nanalo ka ng kiss');
		break;

		case win5:
		alert('Nanalo ka ng lapis');
		break;

		case win6:
		alert('Nanalo ka ng isa pang pagkakataon para pumindot');
		break;

		case win7:
		alert('Nanalo ka ng 20bucks');
		break;

		case win8:
		alert('Nanalo ka ng trip to hongkong street');
		break;

		case win9:
		alert('Nanalo ka ng sardinas');
		break;

		case win10:
		alert('Nanalo ka ng palakpak');
		break;

		default:
		break;
	}
});
