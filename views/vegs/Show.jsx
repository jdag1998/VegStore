const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { veg } = this.props

        return (
            <DefaultLayout title={`${veg.name} details`} foodGroup="fruits">
                <h1>Show Page</h1>
                <p>
                    The {veg.name} is {veg.brand}.
                </p>
                <p>
                    {veg.costEfficient ? "It is cost efficient" : "It is NOT cost efficient"}
                </p>

                <button>
                    <a href={`/fruits/${veg._id}/edit`}>Edit</a>
                </button>

                <form action={`/fruits/${veg._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/fruits">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;