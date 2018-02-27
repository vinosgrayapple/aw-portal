// Web scrapping in Node
const rp = require('request-promise');
const cheerio = require('cheerio');
let users = [];
const fs = require('fs');

const options = {
	url: 'https://aw.krimsekt.ua/apps/test1/email/index.htm',
	json: true
};
rp(options)
	.then(data => {
		// console.log(data);
		const $ = cheerio.load(data);
		let unit, department, fio, email;
		$('tr').each(function() {
			const arrTd = $(this).find('td').length;
			if (arrTd === 1) {
				unit = $(this).find('td').text().replace(/\n/g, '').replace(/\s{2}/g, ' ').trim();
				department = '';
				return;
			} else if (arrTd == 2) {
				department = $(this).find('td').text().replace(/\n/g, '').replace(/\s{2}/g, ' ').trim();
				// unit = '';
				return;
			} else if (arrTd == 4) {
				department = $(this).find('td').eq(1).text().trim();
				fio = $(this).find('td').eq(2).text().trim();
				email = $(this).find('td').eq(3).text().trim();
			} else if (arrTd == 3) {
				if ($(this).find('td').eq(2).text() == '') {
					department = $(this).find('td').text().replace(/\n/g, '').replace(/\s{2}/g, ' ').trim();
					return;
				}
				fio = $(this).find('td').eq(1).text().trim();
				email = $(this).find('td').eq(2).text().trim();
			}
			users.push({
				// fio: fio,
				first__name: fio.split(' ')[1] || '',
				last__name: fio.split(' ')[0] || '',
				email: [email] || '',
				department: department || '',
				unit: unit || '',
				position: '',
				phone: {
					inner: [],
					city: [],
					mobile: []
				}
			});
		});
		return users;
	})
	.then(users => {
		fs.writeFile('users.json', JSON.stringify(users), function(error) {
			if (error) throw error; // если возникла ошибка
		});
		return users;
	});
