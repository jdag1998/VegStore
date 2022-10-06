const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <div class = "content">
            <DefaultLayout title="Create a New Veggie Product" vegGroup="vegs">
                
                <h1>Create New Product</h1>
                <form action="/vegs" method="POST">
                     
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" />

                    <label htmlFor="descript">Description:</label>
                    <input type="text" id="descript" name="descript" />
                   
                    <input type="submit" value="Create a Veggie Product"/>

                    

                </form>
            </DefaultLayout>
            </div>
        )
    }
}

module.exports = New