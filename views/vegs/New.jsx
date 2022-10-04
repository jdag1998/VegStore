const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new Veggie Product" vegGroup="vegs">
                <h1>New Page</h1>
                <form action="/vegs" method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" />

                    <label htmlFor="costEfficient">Is this product cost efficient:</label>
                    <input type="checkbox" id="costEfficient" name="costEfficient" />

                    <input type="submit" value="Create a Veggie Product"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New