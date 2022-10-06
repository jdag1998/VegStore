const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { veg } = this.props

        return (
            <DefaultLayout title={`${veg.name} details`} foodGroup="fruits">
                <div class = "show-content">
                <h1>{veg.name}</h1>
                <p>
                    The {veg.name} is a product manufactured by {veg.brand}.
                </p>
                <p>
                <img src={veg.image} width="250" height="200"/> 
                </p>
                <p class = "descript">
                    
                About this product {veg.descript}
                {console.log(veg)}
                </p>
                <p>
                    {veg.costEfficient ? "It is cost efficient" : "It is NOT cost efficient"}
                </p>
                </div>
                <button>
                    <a href={`/vegs/${veg._id}/edit`}>Edit</a>
                </button>

                <form action={`/vegs/${veg._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/vegs">Back</a>
                </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Show;