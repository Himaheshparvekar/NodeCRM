const routes= (app) => {
    app.route('/contact').get((req,res)=>  
        res.send("get method successful!")
    )
    .post((req,res)=>
        res.send("post method successful!")
    )

    app.route('/contact/:contactID')
    .put((req,res)=>
        res.send("post method successful!"))

        .delete((req,res)=>
        res.send("delete method successful!"))
}
export default routes;