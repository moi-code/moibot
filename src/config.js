import Eris from 'eris';
const config = new Eris.CommandClient(
	process.env.BOT_TOKEN,
	{},
	{
		description: 'A Bot For the People',
		owner: '@Moikune || moisite.herokuapp.com',
		prefix: '~'
	}
);
export default config;