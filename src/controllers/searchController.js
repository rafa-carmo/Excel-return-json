module.exports ={
    async index(request, response){
        console.log('start')
        response.json({message: "Hello World!"})
    }
}