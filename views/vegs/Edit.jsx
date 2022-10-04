const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { veg } = this.props

        return (
            <DefaultLayout title="Edit a Veggie Product" vegGroup="vegs">
                <h1>Edit Page</h1>
                <form action={`/vegs/${veg_id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={veg.name} />

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" defaultValue={veg.brand} />

                    <label htmlFor="costEfficient">Is this product Cost Efficient:</label>
                    <input type="checkbox" id="costEfficient" name="costEfficient" defaultChecked={veg.costEfficient} />

                    <input type="submit" value="Edit Veggie Product"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit