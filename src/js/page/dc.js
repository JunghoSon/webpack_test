
/* legacy ie 미지원
import $ from 'jquery';
import tmpl from '../../tmpl/dc/dc.handlebars';
*/

//import css
require('../../css/common.css');
require('../../css/dc.css');

var $ = require('jquery'),
	tmpl = require('../../tmpl/dc/dc.handlebars');

var str = tmpl({
	'page' : 'DC',
	'state' : 'successfully!!'
});

$('.area_tmpl').append(str);

/*try{
	console.log(typeof $, ' : jquery');
}catch(e){
	alert(typeof $ + ' : jquery');
}*/