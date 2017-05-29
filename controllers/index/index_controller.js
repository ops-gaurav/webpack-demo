import path from 'path';
import response  from '../../utility/json_response';

var exports = module.exports = { };

/**
 * @desc a simple controller for index route
 */
exports.getIndex = ( req, res, next ) => {
	res.sendFile (path.resolve (__dirname, './../../dist/index.html'));
}

exports.getAccount = ( req, res, next ) => {
	res.sendFile ('account.html');
} 