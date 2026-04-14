import express from 'express';
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req,res) => {
	res.send('the home page')
});

app.get('/dashboard', (req,res) => {
	res.send('admin page')
});
	
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

