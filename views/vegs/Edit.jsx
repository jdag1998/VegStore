const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { veg } = this.props

        return (
            <DefaultLayout title="Edit a Veggie Product" >
                <h1>Edit Page</h1>
                <form action={`/vegs/${veg._id}?_method=PUT`} method="POST">

                    <div class = "Edit-content">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={veg.name} />
                    <br></br>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" defaultValue={veg.brand} />
                    <br></br>
                    <label htmlFor="descript"> Product Description:</label>
                    <input type="text" id="descript" name="descript" defaultValue={veg.descript} />
                    <br></br>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={veg.price} />
                    <br></br>
                    <label htmlFor="image">image:</label>
                    <input type="url" id="image" name="image" defaultValue={veg.image} />
                    <br></br>
                    <label htmlFor="stock">Is this product in Stock:</label>
                    <input type="checkbox" id="stock" name="stock" defaultChecked={veg.stock} />
                    <br></br>
                    <input type="submit" value="Edit Veggie Product"/>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit