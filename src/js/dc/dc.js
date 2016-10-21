import tmpl from '../../tmpl/dc/dc.handlebars';

const str = tmpl({'test' : 'success!!'});
$('#test').append(str);

console.log('1234567890');